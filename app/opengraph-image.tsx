import { ImageResponse } from "next/og";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#07090f",
          color: "#f8fafc",
          padding: 72,
          fontFamily: "Arial, sans-serif",
        }}
      >
        <div style={{ color: "#3ee7d6", fontSize: 28, fontWeight: 700 }}>
          Strategic domain asset for autonomous intelligence
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <div style={{ fontSize: 104, fontWeight: 800, lineHeight: 0.94 }}>
            MelosClaw.com
          </div>
          <div style={{ color: "#d7deea", fontSize: 38, lineHeight: 1.25 }}>
            Identity layer for Web3 AI agents, skill networks, and agentic work.
          </div>
        </div>
        <div style={{ display: "flex", gap: 14, fontSize: 24, fontWeight: 700 }}>
          <span style={{ color: "#ffcf70" }}>.com identity</span>
          <span style={{ color: "#3ee7d6" }}>AI agents</span>
          <span style={{ color: "#ff6b8b" }}>Web3 work networks</span>
        </div>
      </div>
    ),
    size,
  );
}
