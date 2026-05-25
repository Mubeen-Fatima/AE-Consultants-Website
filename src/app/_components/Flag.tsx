type FlagProps = {
  code: "AU" | "NZ" | "UK" | "CA" | "US" | "EU";
  size?: number;
};

/**
 * Country flag rendered as an SVG, cropped to a circle.
 * Simplified but recognisable representations of each flag.
 */
export function Flag({ code, size = 48 }: FlagProps) {
  return (
    <div
      aria-hidden="true"
      style={{
        width: size,
        height: size,
        borderRadius: "50%",
        overflow: "hidden",
        boxShadow: "0 6px 18px rgba(0,0,0,0.2)",
        border: "3px solid #fff",
        flexShrink: 0,
        background: "#fff",
      }}
    >
      <svg
        viewBox="0 0 90 60"
        width="100%"
        height="100%"
        preserveAspectRatio="xMidYMid slice"
        xmlns="http://www.w3.org/2000/svg"
      >
        {code === "AU" && <AustraliaFlag />}
        {code === "NZ" && <NewZealandFlag />}
        {code === "UK" && <UnionJack x={0} y={0} w={90} h={60} />}
        {code === "CA" && <CanadaFlag />}
        {code === "US" && <USAFlag />}
        {code === "EU" && <EUFlag />}
      </svg>
    </div>
  );
}

/* ---------- Union Jack (used by AU, NZ, UK) ---------- */
function UnionJack({
  x,
  y,
  w,
  h,
}: {
  x: number;
  y: number;
  w: number;
  h: number;
}) {
  const id = `clip-${x}-${y}-${w}`;
  return (
    <g>
      <defs>
        <clipPath id={id}>
          <rect x={x} y={y} width={w} height={h} />
        </clipPath>
      </defs>
      <g clipPath={`url(#${id})`}>
        {/* Blue background */}
        <rect x={x} y={y} width={w} height={h} fill="#012169" />
        {/* White diagonals */}
        <line x1={x} y1={y} x2={x + w} y2={y + h} stroke="#FFFFFF" strokeWidth={h * 0.2} />
        <line x1={x + w} y1={y} x2={x} y2={y + h} stroke="#FFFFFF" strokeWidth={h * 0.2} />
        {/* Red diagonals (offset for St Patrick's) */}
        <line x1={x} y1={y} x2={x + w} y2={y + h} stroke="#C8102E" strokeWidth={h * 0.08} />
        <line x1={x + w} y1={y} x2={x} y2={y + h} stroke="#C8102E" strokeWidth={h * 0.08} />
        {/* White cross */}
        <rect x={x + w / 2 - h * 0.18} y={y} width={h * 0.36} height={h} fill="#FFFFFF" />
        <rect x={x} y={y + h / 2 - h * 0.18} width={w} height={h * 0.36} fill="#FFFFFF" />
        {/* Red cross */}
        <rect x={x + w / 2 - h * 0.1} y={y} width={h * 0.2} height={h} fill="#C8102E" />
        <rect x={x} y={y + h / 2 - h * 0.1} width={w} height={h * 0.2} fill="#C8102E" />
      </g>
    </g>
  );
}

function star(cx: number, cy: number, r: number, fill = "#FFFFFF") {
  const points: string[] = [];
  const step = Math.PI / 5;
  for (let i = 0; i < 10; i++) {
    const radius = i % 2 === 0 ? r : r * 0.4;
    const a = i * step - Math.PI / 2;
    points.push(`${cx + radius * Math.cos(a)},${cy + radius * Math.sin(a)}`);
  }
  return <polygon points={points.join(" ")} fill={fill} />;
}

/* ---------- Australia ---------- */
/* Layout: navy field, Union Jack in canton (top-left quadrant),
   large Commonwealth Star centred under the canton, and a five-star
   Southern Cross arranged as a kite in the fly (right half). */
function AustraliaFlag() {
  return (
    <g>
      <rect width={90} height={60} fill="#012169" />
      <UnionJack x={0} y={0} w={45} h={30} />
      {/* Commonwealth Star — largest, sits below the canton */}
      {star(22.5, 47, 7)}
      {/* Southern Cross (kite arrangement) — all white */}
      {star(72, 14, 3.6)} {/* Beta — top */}
      {star(82, 27, 3.2)} {/* Delta — right */}
      {star(72, 41, 3.8)} {/* Alpha — bottom (brightest) */}
      {star(60, 32, 3.2)} {/* Gamma — left */}
      {star(68, 50, 1.6)} {/* Epsilon — smallest */}
    </g>
  );
}

/* ---------- New Zealand ---------- */
/* Layout: navy field, Union Jack in canton, four-star Southern Cross
   in the fly. Stars are red with a thin white border. */
function NewZealandFlag() {
  const RED = "#CC142B";
  const cross: Array<{ x: number; y: number; r: number }> = [
    { x: 73, y: 14, r: 3.4 }, // Beta — top
    { x: 82, y: 30, r: 3.1 }, // Delta — right
    { x: 62, y: 32, r: 3.1 }, // Gamma — left
    { x: 72, y: 48, r: 3.8 }, // Alpha — bottom
  ];
  return (
    <g>
      <rect width={90} height={60} fill="#012169" />
      <UnionJack x={0} y={0} w={45} h={30} />
      {cross.map((s, i) => (
        <g key={`cross-${i}`}>
          {star(s.x, s.y, s.r, "#FFFFFF")}
          {star(s.x, s.y, s.r * 0.7, RED)}
        </g>
      ))}
    </g>
  );
}

/* ---------- Canada ---------- */
function CanadaFlag() {
  return (
    <g>
      <rect width={22.5} height={60} fill="#FF0000" />
      <rect x={22.5} width={45} height={60} fill="#FFFFFF" />
      <rect x={67.5} width={22.5} height={60} fill="#FF0000" />
      {/* Stylised maple leaf at centre */}
      <path
        d="M45 18 L47 24 L53 22 L51 27 L57 30 L51 33 L53 38 L47 36 L45 42 L43 36 L37 38 L39 33 L33 30 L39 27 L37 22 L43 24 Z"
        fill="#FF0000"
      />
      <rect x={43.5} y={38} width={3} height={6} fill="#FF0000" />
    </g>
  );
}

/* ---------- United States ---------- */
function USAFlag() {
  // 13 horizontal stripes (alternating red/white, starting red)
  const stripes = Array.from({ length: 13 }, (_, i) => (
    <rect
      key={i}
      y={(i * 60) / 13}
      width={90}
      height={60 / 13}
      fill={i % 2 === 0 ? "#B22234" : "#FFFFFF"}
    />
  ));
  // Canton
  const canton = <rect width={36} height={(60 * 7) / 13} fill="#3C3B6E" />;
  // Stars (simplified 3x4 grid)
  const cantonStars: React.ReactNode[] = [];
  const cw = 36;
  const ch = (60 * 7) / 13;
  const cols = 5;
  const rows = 4;
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      const x = (cw / (cols + 1)) * (c + 1);
      const y = (ch / (rows + 1)) * (r + 1);
      cantonStars.push(<g key={`star-${r}-${c}`}>{star(x, y, 1.4)}</g>);
    }
  }
  return (
    <g>
      {stripes}
      {canton}
      {cantonStars}
    </g>
  );
}

/* ---------- European Union ---------- */
function EUFlag() {
  const cx = 45;
  const cy = 30;
  const r = 16;
  const stars: React.ReactNode[] = [];
  for (let i = 0; i < 12; i++) {
    const a = (i / 12) * Math.PI * 2 - Math.PI / 2;
    const x = cx + r * Math.cos(a);
    const y = cy + r * Math.sin(a);
    stars.push(<g key={i}>{star(x, y, 2.6, "#FFCC00")}</g>);
  }
  return (
    <g>
      <rect width={90} height={60} fill="#003399" />
      {stars}
    </g>
  );
}
