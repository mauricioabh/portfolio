# Runs Upstash rate-limit integration tests (local QA). Requires .env.local with Upstash keys per repo.
$ErrorActionPreference = "Stop"

function Test-RateLimitSuite {
  param(
    [string]$Name,
    [string]$WorkingDirectory
  )

  Write-Host "`n=== $Name ===" -ForegroundColor Cyan
  Push-Location $WorkingDirectory
  try {
    & npm run test:rate-limit | Out-Null
    if ($LASTEXITCODE -ne 0) {
      throw "$Name rate-limit tests failed (exit $LASTEXITCODE)"
    }
    Write-Host "PASS $Name" -ForegroundColor Green
    return $true
  } finally {
    Pop-Location
  }
}

$results = @(
  (Test-RateLimitSuite -Name "watchily-ho" -WorkingDirectory "C:\Projects\watchily-ho"),
  (Test-RateLimitSuite -Name "arbpulse" -WorkingDirectory "C:\Projects\arbpulse")
)

$failed = @($results | Where-Object { $_ -ne $true })
if ($failed.Count -gt 0) { exit 1 }
Write-Host "`nAll Upstash rate-limit tests passed." -ForegroundColor Green
