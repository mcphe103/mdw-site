import { readFile } from "node:fs/promises";
import path from "node:path";

import { ImageResponse } from "next/og";

export const socialImageSize = {
  width: 1200,
  height: 630,
} as const;

export async function createSocialImage() {
  const logo = await readFile(
    path.join(process.cwd(), "public", "brand", "mdw-lockup.png"),
  );
  const logoSource = `data:image/png;base64,${logo.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          position: "relative",
          display: "flex",
          width: "100%",
          height: "100%",
          overflow: "hidden",
          background:
            "linear-gradient(135deg, #070b10 0%, #0b1118 56%, #0c1820 100%)",
          color: "#f6f7f8",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            opacity: 0.22,
            background:
              "linear-gradient(90deg, transparent 0%, rgba(68, 210, 224, 0.12) 50%, transparent 100%)",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: 0,
            right: 0,
            display: "flex",
            width: 420,
            height: 420,
            transform: "translate(130px, -170px) rotate(45deg)",
            border: "1px solid rgba(82, 218, 230, 0.22)",
            boxShadow: "0 0 90px rgba(47, 195, 216, 0.11)",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: -220,
            left: 330,
            display: "flex",
            width: 520,
            height: 520,
            borderRadius: "50%",
            border: "1px solid rgba(82, 218, 230, 0.14)",
          }}
        />

        <div
          style={{
            position: "relative",
            display: "flex",
            width: "100%",
            height: "100%",
            alignItems: "center",
            padding: "72px 78px",
          }}
        >
          <div
            style={{
              display: "flex",
              width: 420,
              minWidth: 420,
              height: 360,
              alignItems: "center",
              justifyContent: "center",
              padding: 36,
              border: "1px solid rgba(255, 255, 255, 0.1)",
              background: "rgba(3, 7, 11, 0.48)",
              boxShadow: "0 24px 90px rgba(0, 0, 0, 0.32)",
            }}
          >
            {/* ImageResponse renders standard image elements rather than next/image. */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={logoSource}
              alt=""
              width="350"
              height="255"
              style={{ objectFit: "contain" }}
            />
          </div>

          <div
            style={{
              display: "flex",
              flex: 1,
              flexDirection: "column",
              justifyContent: "center",
              marginLeft: 68,
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                color: "#66d7e2",
                fontSize: 19,
                fontWeight: 700,
                letterSpacing: "0.18em",
                textTransform: "uppercase",
              }}
            >
              <span
                style={{
                  display: "flex",
                  width: 42,
                  height: 2,
                  marginRight: 16,
                  background: "#66d7e2",
                }}
              />
              Modesto &amp; Central Valley
            </div>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                marginTop: 26,
                color: "#f4f7f8",
                fontSize: 54,
                fontWeight: 700,
                lineHeight: 1.06,
                letterSpacing: "-0.045em",
              }}
            >
              <span>Dependable websites</span>
              <span style={{ color: "#b8c3c9" }}>for small businesses.</span>
            </div>

            <div
              style={{
                display: "flex",
                marginTop: 30,
                color: "#a7b2b9",
                fontSize: 23,
                lineHeight: 1.45,
              }}
            >
              Design · Development · Hosting &amp; Care
            </div>

            <div
              style={{
                display: "flex",
                marginTop: 42,
                paddingTop: 22,
                borderTop: "1px solid rgba(255, 255, 255, 0.12)",
                color: "#d7dee2",
                fontSize: 20,
                letterSpacing: "0.025em",
              }}
            >
              mcphersondigitalworks.com
            </div>
          </div>
        </div>

        <div
          style={{
            position: "absolute",
            right: 0,
            bottom: 0,
            left: 0,
            display: "flex",
            height: 5,
            background:
              "linear-gradient(90deg, transparent 0%, #46cad8 34%, #72e0e8 66%, transparent 100%)",
          }}
        />
      </div>
    ),
    socialImageSize,
  );
}
