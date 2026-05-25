type LogoProps = {
  variant?: "light" | "dark";
  size?: number;
};

export function Logo({ variant = "dark", size = 38 }: LogoProps) {
  const primary = variant === "light" ? "#ffffff" : "#0b3d91";
  const accent = "#f59e0b";
  const sub = variant === "light" ? "rgba(255,255,255,0.78)" : "#64748b";
  return (
    <div style={{ display: "flex", alignItems: "center", gap: "0.7rem" }}>
      <div
        style={{
          width: size,
          height: size,
          borderRadius: 12,
          background: `linear-gradient(135deg, ${primary}, ${variant === "light" ? "rgba(255,255,255,0.15)" : "#2563eb"})`,
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          boxShadow:
            variant === "light"
              ? "0 4px 10px rgba(0,0,0,0.15)"
              : "0 6px 18px rgba(11,61,145,0.25)",
          color: "#fff",
          fontWeight: 800,
          fontSize: size * 0.42,
          letterSpacing: "-0.04em",
          position: "relative",
          overflow: "hidden",
        }}
        aria-hidden="true"
      >
        <span style={{ position: "relative", zIndex: 1 }}>AE</span>
        <span
          style={{
            position: "absolute",
            right: -6,
            bottom: -6,
            width: size * 0.55,
            height: size * 0.55,
            borderRadius: "50%",
            background: accent,
            opacity: 0.85,
          }}
        />
      </div>
      <div style={{ lineHeight: 1.1 }}>
        <div
          style={{
            fontWeight: 800,
            fontSize: "0.96rem",
            color: variant === "light" ? "#ffffff" : "#0f172a",
            letterSpacing: "-0.02em",
          }}
        >
          AE-Consultants
        </div>
        <div
          style={{
            fontWeight: 500,
            fontSize: "0.72rem",
            color: sub,
            letterSpacing: "0.02em",
          }}
        >
          Australian Education Consultants
        </div>
      </div>
    </div>
  );
}
