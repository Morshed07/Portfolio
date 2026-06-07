import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Morshed Nayeem — Backend Developer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "flex-start",
          width: "100%",
          height: "100%",
          backgroundColor: "#0d0d0d",
          padding: "80px",
          fontFamily: "sans-serif",
          position: "relative",
        }}
      >
        {/* Accent glow */}
        <div
          style={{
            position: "absolute",
            top: "50%",
            right: "15%",
            width: "400px",
            height: "400px",
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(255,69,0,0.15) 0%, transparent 70%)",
            transform: "translateY(-50%)",
          }}
        />

        {/* Top bar */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
            marginBottom: "32px",
          }}
        >
          <div
            style={{
              width: "40px",
              height: "3px",
              backgroundColor: "#FF4500",
            }}
          />
          <span
            style={{
              color: "#FF4500",
              fontSize: "16px",
              letterSpacing: "4px",
              textTransform: "uppercase",
            }}
          >
            Portfolio
          </span>
        </div>

        {/* Name */}
        <h1
          style={{
            fontSize: "72px",
            fontWeight: 800,
            color: "#ffffff",
            lineHeight: 1.1,
            margin: 0,
          }}
        >
          Abdullah Al Morshed
          <br />
          <span style={{ color: "#FF4500" }}>Nayeem</span>
        </h1>

        {/* Subtitle */}
        <p
          style={{
            fontSize: "28px",
            color: "rgba(255,255,255,0.6)",
            marginTop: "20px",
          }}
        >
          Backend Developer · Django · Python · DRF
        </p>

        {/* Bottom info */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "20px",
            marginTop: "40px",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
            }}
          >
            <div
              style={{
                width: "10px",
                height: "10px",
                borderRadius: "50%",
                backgroundColor: "#22c55e",
              }}
            />
            <span
              style={{
                color: "rgba(255,255,255,0.5)",
                fontSize: "18px",
              }}
            >
              Available for hire
            </span>
          </div>
          <span
            style={{
              color: "rgba(255,255,255,0.2)",
              fontSize: "18px",
            }}
          >
            |
          </span>
          <span
            style={{
              color: "rgba(255,255,255,0.5)",
              fontSize: "18px",
            }}
          >
            Dhaka, Bangladesh
          </span>
        </div>

        {/* Bottom accent line */}
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: "4px",
            background: "linear-gradient(90deg, #FF4500, #FF8C00, transparent)",
          }}
        />
      </div>
    ),
    {
      ...size,
    }
  );
}
