import { ImageResponse } from "next/og";

export const alt = "Admission Hub - বিশ্ববিদ্যালয় ভর্তি ক্যালেন্ডার ২০২৫-২০২৬";
export const revalidate = 3600;
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
          background: "linear-gradient(135deg, #090d16 0%, #171b2d 50%, #0c1527 100%)",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "space-between",
          padding: "60px 80px",
          fontFamily: "sans-serif",
          color: "white",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
          <div
            style={{
              width: "56px",
              height: "56px",
              borderRadius: "16px",
              background: "linear-gradient(135deg, #6366f1, #06b6d4)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "32px",
            }}
          >
            🎓
          </div>
          <div style={{ fontSize: "28px", fontWeight: "bold", color: "#e0e7ff" }}>
            Admission Hub Bangladesh
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "18px" }}>
          <div
            style={{
              fontSize: "20px",
              fontWeight: "600",
              color: "#38bdf8",
              textTransform: "uppercase",
              letterSpacing: "2px",
            }}
          >
            Academic Year 2025–2026
          </div>
          <div
            style={{
              fontSize: "52px",
              fontWeight: "900",
              lineHeight: 1.15,
              color: "#ffffff",
              maxWidth: "950px",
            }}
          >
            বিশ্ববিদ্যালয় ভর্তি ক্যালেন্ডার ও সকল তথ্যাবলী
          </div>
          <div
            style={{
              fontSize: "24px",
              color: "#94a3b8",
              maxWidth: "900px",
              lineHeight: 1.4,
            }}
          >
            বুয়েট, মেডিকেল, ঢাবি, জাবি, রাবি, চবি, ৭ কলেজ ও গুচ্ছ ভর্তি পরীক্ষার লাইভ সময়সূচী ও ১০০+ গাইডলাইন
          </div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "24px",
            fontSize: "18px",
            color: "#64748b",
            borderTop: "1px solid rgba(255, 255, 255, 0.1)",
            paddingTop: "24px",
            width: "100%",
          }}
        >
          <span>🔥 লাইভ কাউন্টডাউন</span>
          <span>•</span>
          <span>📑 ১০০+ অনুষদ সার্কুলার</span>
          <span>•</span>
          <span>🧮 জিপিএ ক্যালকুলেটর</span>
          <span>•</span>
          <span>🖼️ ফটো রিসাইজার</span>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
