import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const socialImageAlt = "Damian Ramirez presenting at a podium";
export const socialImageSize = { width: 1200, height: 630 };
export const socialImageContentType = "image/png";

export async function createSocialImage() {
  const portrait = await readFile(
    join(process.cwd(), "public", "images", "damian-speaking-social.jpg"),
  );
  const portraitBytes = portrait.buffer.slice(
    portrait.byteOffset,
    portrait.byteOffset + portrait.byteLength,
  ) as ArrayBuffer;

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
        <div style={{ width: 700, padding: "68px 72px", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
          <div style={{ display: "flex", alignItems: "center", fontSize: 25, fontWeight: 700, color: "#b7bdf8" }}>
            <span style={{ color: "#f5a97f" }}>~/</span>damian-ramirez/<span style={{ width: 11, height: 27, marginLeft: 8, background: "#f5a97f" }} />
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ color: "#f5a97f", fontSize: 21, letterSpacing: 5, textTransform: "uppercase", marginBottom: 22 }}>Software · Data · Systems</div>
            <div style={{ display: "flex", color: "#f1f1fa", fontSize: 68, fontWeight: 700, letterSpacing: -4, lineHeight: 1 }}>Damian Ramirez<span style={{ color: "#f5a97f" }}>.</span></div>
            <div style={{ color: "#a6a6bf", fontSize: 27, marginTop: 25 }}>Computer Science student building practical software.</div>
          </div>
          <div style={{ display: "flex", color: "#a6da95", fontSize: 18 }}>● Open to opportunities</div>
        </div>
        <div style={{ position: "relative", display: "flex", width: 500, height: "100%", overflow: "hidden" }}>
          <img
            src={portraitBytes as unknown as string}
            alt=""
            width="500"
            height="630"
            style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "52% 48%" }}
          />
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(90deg, #1e1e2e 0%, rgba(30,30,46,.18) 28%, transparent 55%)" }} />
        </div>
      </div>
    ),
    socialImageSize,
  );
}
