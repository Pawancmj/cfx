import { ImageResponse } from "next/og";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 50%, #16213e 100%)",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background:
              "radial-gradient(circle at 70% 30%, rgba(0, 200, 255, 0.15) 0%, transparent 50%)",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background:
              "radial-gradient(circle at 30% 70%, rgba(120, 0, 255, 0.1) 0%, transparent 50%)",
          }}
        />
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "20px",
            marginBottom: "24px",
            zIndex: 1,
          }}
        >
          <div
            style={{
              width: "72px",
              height: "72px",
              borderRadius: "16px",
              background: "linear-gradient(135deg, #00c8ff, #7800ff)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "36px",
              fontWeight: "bold",
              color: "white",
              fontFamily: "sans-serif",
            }}
          >
            X
          </div>
        </div>
        <div
          style={{
            fontSize: "64px",
            fontWeight: "bold",
            color: "white",
            textAlign: "center",
            lineHeight: 1.1,
            zIndex: 1,
            fontFamily: "sans-serif",
            letterSpacing: "-2px",
          }}
        >
          CyberForenX
        </div>
        <div
          style={{
            fontSize: "24px",
            color: "#00c8ff",
            textAlign: "center",
            marginTop: "8px",
            fontWeight: 500,
            zIndex: 1,
            fontFamily: "sans-serif",
          }}
        >
          & Associates
        </div>
        <div
          style={{
            display: "flex",
            gap: "32px",
            marginTop: "32px",
            zIndex: 1,
          }}
        >
          {["Digital Forensics", "Web Development", "IT Security"].map(
            (item) => (
              <div
                key={item}
                style={{
                  fontSize: "18px",
                  color: "rgba(255,255,255,0.8)",
                  fontFamily: "sans-serif",
                  padding: "8px 20px",
                  border: "1px solid rgba(255,255,255,0.2)",
                  borderRadius: "8px",
                }}
              >
                {item}
              </div>
            )
          )}
        </div>
        <div
          style={{
            position: "absolute",
            bottom: "40px",
            fontSize: "16px",
            color: "rgba(255,255,255,0.5)",
            fontFamily: "sans-serif",
            zIndex: 1,
          }}
        >
          www.cyberforenx.in
        </div>
      </div>
    ),
    { ...size }
  );
}
