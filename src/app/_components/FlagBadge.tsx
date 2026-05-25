type FlagBadgeProps = {
  colors: string[];
  size?: number;
};

export function FlagBadge({ colors, size = 56 }: FlagBadgeProps) {
  return (
    <div
      aria-hidden="true"
      style={{
        width: size,
        height: size,
        borderRadius: "50%",
        overflow: "hidden",
        display: "flex",
        boxShadow: "0 6px 18px rgba(0,0,0,0.18)",
        border: "3px solid rgba(255,255,255,0.85)",
      }}
    >
      {colors.map((c, i) => (
        <span
          key={i}
          style={{
            flex: 1,
            background: c,
          }}
        />
      ))}
    </div>
  );
}
