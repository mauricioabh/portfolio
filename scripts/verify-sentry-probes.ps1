# Runs Sentry dev probes sequentially (local QA). Requires .env.local with SENTRY_DSN per repo.
$ErrorActionPreference = "Stop"

function Stop-Port($port) {
  Get-NetTCPConnection -LocalPort $port -ErrorAction SilentlyContinue |
    ForEach-Object { Stop-Process -Id $_.OwningProcess -Force -ErrorAction SilentlyContinue }
}

function Wait-Http($url, $timeoutSec = 120) {
  $deadline = (Get-Date).AddSeconds($timeoutSec)
  while ((Get-Date) -lt $deadline) {
    try {
      $r = Invoke-WebRequest -Uri $url -UseBasicParsing -TimeoutSec 5
      if ($r.StatusCode -ge 200 -and $r.StatusCode -lt 500) { return $true }
    } catch { Start-Sleep -Seconds 2 }
  }
  return $false
}

function Test-SentryProbe {
  param(
    [string]$Name,
    [string]$WorkingDirectory,
    [string]$DevCommand,
    [int]$Port,
    [string]$ProbePath = "/api/debug/sentry",
    [int]$HealthWaitSec = 180
  )

  Stop-Port $Port
  $probeUrl = "http://127.0.0.1:$Port$ProbePath"
  $healthUrl = if ($ProbePath -eq "/api/debug/sentry" -and $Port -eq 8080) {
    "http://127.0.0.1:$Port/api/health"
  } else {
    "http://127.0.0.1:$Port/"
  }

  Write-Host "`n=== $Name (port $Port) ===" -ForegroundColor Cyan
  if ($DevCommand -eq "npm run dev") {
    $proc = Start-Process -FilePath "npm.cmd" -ArgumentList @("run", "dev", "--", "-p", "$Port") -WorkingDirectory $WorkingDirectory -PassThru -WindowStyle Hidden
  } else {
    $env:PORT = "$Port"
    $proc = Start-Process -FilePath "npm.cmd" -ArgumentList "start" -WorkingDirectory $WorkingDirectory -PassThru -WindowStyle Hidden
  }

  try {
    if (-not (Wait-Http $healthUrl $HealthWaitSec)) {
      throw "Dev server did not become ready on $healthUrl"
    }
    $res = $null
    for ($i = 0; $i -lt 5; $i++) {
      try {
        $res = Invoke-RestMethod -Uri $probeUrl -Method Get -TimeoutSec 30
        if ($res.ok -eq $true) { break }
      } catch {
        Start-Sleep -Seconds 3
      }
    }
    if ($null -eq $res -or $res.ok -ne $true) {
      throw "Probe failed at $probeUrl"
    }
    Write-Host "PASS $probeUrl" -ForegroundColor Green
    return $true
  } finally {
    if ($proc -and -not $proc.HasExited) {
      Stop-Process -Id $proc.Id -Force -ErrorAction SilentlyContinue
    }
    Stop-Port $Port
  }
}

$results = @(
  (Test-SentryProbe -Name "watchily-ho" -WorkingDirectory "C:\Projects\watchily-ho" -DevCommand "npm run dev" -Port 3091),
  (Test-SentryProbe -Name "arbpulse" -WorkingDirectory "C:\Projects\arbpulse" -DevCommand "npm start" -Port 8080 -ProbePath "/api/debug/sentry"),
  (Test-SentryProbe -Name "crt-lineas" -WorkingDirectory "C:\Projects\crt-lineas" -DevCommand "npm run dev" -Port 3092),
  (Test-SentryProbe -Name "health-erino" -WorkingDirectory "C:\Projects\health-erino\web" -DevCommand "npm run dev" -Port 3093),
  (Test-SentryProbe -Name "fortnite" -WorkingDirectory "C:\Projects\fortnite-live-countdown\apps\web" -DevCommand "npm run dev" -Port 3094)
)

$failed = $results | Where-Object { $_ -ne $true }
if ($failed.Count -gt 0) { exit 1 }
Write-Host "`nAll Sentry probes passed." -ForegroundColor Green
