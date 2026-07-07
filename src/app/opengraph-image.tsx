import { ImageResponse } from "next/og";
import { join } from "node:path";
import { readFile } from "node:fs/promises";

export const runtime = "nodejs";
export const alt =
  "Hub Tech — Soluções de inteligência artificial sob medida";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  const logoData = await readFile(
    join(process.cwd(), "public", "logo-white.png"),
    "base64"
  );
  const logoSrc = `data:image/png;base64,${logoData}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "#0A0A0A",
          padding: 80,
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={logoSrc} width={360} height={110} alt="Hub Tech" />
        <div
          style={{
            marginTop: 48,
            fontSize: 44,
            fontWeight: 700,
            color: "#FFFFFF",
            textAlign: "center",
            maxWidth: 900,
            lineHeight: 1.3,
          }}
        >
          Sua equipe automatizada, seu atendimento escalado
        </div>
        <div
          style={{
            marginTop: 24,
            fontSize: 26,
            color: "#888888",
            textAlign: "center",
          }}
        >
          Soluções de inteligência artificial sob medida
        </div>
      </div>
    ),
    { ...size }
  );
}
