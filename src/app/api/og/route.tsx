import { ImageResponse } from "next/og";

export const runtime = "edge";

export async function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          background:
            "linear-gradient(135deg, #1e293b 0%, #334155 50%, #475569 100%)",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "system-ui",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
          }}
        >
          <h1
            style={{
              fontSize: 72,
              fontWeight: 700,
              color: "#ffffff",
              marginBottom: 16,
              letterSpacing: "-0.02em",
              lineHeight: 1.1,
            }}
          >
            Mauricio Barragán
          </h1>
          <h2
            style={{
              fontSize: 36,
              fontWeight: 400,
              color: "#cbd5e1",
              marginBottom: 24,
              letterSpacing: "0.01em",
            }}
          >
            Full Stack Developer
          </h2>
          <p
            style={{
              fontSize: 24,
              color: "#94a3b8",
              marginBottom: 32,
            }}
          >
            Building high-quality web solutions
          </p>
          <div
            style={{
              width: 120,
              height: 4,
              background: "linear-gradient(90deg, #3b82f6, #10b981)",
              borderRadius: 2,
            }}
          />
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}
