import { ImageResponse } from "next/og";

export const alt = "JR Barber Haus — Shelby Township, MI";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#F9F7F4",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "Georgia, serif",
        }}
      >
        <div style={{ width: 50, height: 1, background: "#2D4A3A", marginBottom: 44, display: "flex" }} />

        <div
          style={{
            fontSize: 220,
            fontWeight: 400,
            color: "#0D0C0A",
            letterSpacing: "-8px",
            lineHeight: 0.85,
            display: "flex",
          }}
        >
          JR
        </div>

        <div
          style={{
            fontSize: 20,
            letterSpacing: "16px",
            color: "#0D0C0A",
            marginTop: 16,
            display: "flex",
          }}
        >
          BARBER HAUS
        </div>

        <div style={{ width: 40, height: 1, background: "#2D4A3A", margin: "36px 0 28px", display: "flex" }} />

        <div
          style={{
            fontSize: 15,
            color: "#6B6460",
            letterSpacing: "5px",
            display: "flex",
          }}
        >
          SHELBY TOWNSHIP, MI
        </div>
      </div>
    ),
    { ...size }
  );
}
