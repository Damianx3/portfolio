import { ImageResponse } from "next/og";

export const socialImageAlt = "Damian Ramirez — Software & Data";
export const socialImageSize = { width: 1200, height: 630 };
export const socialImageContentType = "image/png";

export function createSocialImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          position: "relative",
          overflow: "hidden",
          color: "#d7d7ea",
          background: "#1e1e2e",
          fontFamily: "monospace",
        }}
      >
        <div style={{ position: "absolute", width: 620, height: 620, borderRadius: 620, right: -160, top: -250, background: "rgba(183,189,248,.10)" }} />
        <div style={{ position: "absolute", width: 430, height: 430, borderRadius: 430, left: -160, bottom: -290, background: "rgba(245,169,127,.10)" }} />
        <div style={{ width: "100%", padding: "68px 78px", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
          <div style={{ display: "flex", alignItems: "center", fontSize: 25, fontWeight: 700, color: "#b7bdf8" }}>
            <span style={{ color: "#f5a97f" }}>~/</span>damian-ramirez/<span style={{ width: 11, height: 27, marginLeft: 8, background: "#f5a97f" }} />
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ color: "#f5a97f", fontSize: 21, letterSpacing: 5, textTransform: "uppercase", marginBottom: 22 }}>Software · Data · Systems</div>
            <div style={{ display: "flex", color: "#f1f1fa", fontSize: 76, fontWeight: 700, letterSpacing: -4, lineHeight: 1 }}>Damian Ramirez<span style={{ color: "#f5a97f" }}>.</span></div>
            <div style={{ color: "#a6a6bf", fontSize: 27, marginTop: 25 }}>Computer Science student building practical software.</div>
          </div>
          <div style={{ display: "flex", justifyContent: "space-between", color: "#707088", fontSize: 18 }}>
            <span>Portfolio · Experience · Projects</span>
            <span style={{ color: "#a6da95" }}>● Open to opportunities</span>
          </div>
        </div>
      </div>
    ),
    socialImageSize,
  );
}
