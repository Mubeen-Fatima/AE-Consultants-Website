type LandmarkProps = {
  code: string;
  className?: string;
};

const COMMON_PROPS = {
  fill: "currentColor",
  xmlns: "http://www.w3.org/2000/svg",
  "aria-hidden": true,
} as const;

export function Landmark({ code, className }: LandmarkProps) {
  switch (code) {
    case "AU":
      // Sydney Opera House — stacked shells silhouette
      return (
        <svg viewBox="0 0 200 120" preserveAspectRatio="xMidYMax meet" className={className} {...COMMON_PROPS}>
          <path d="M0 110 L0 95 Q60 60 95 95 L100 110 Z" />
          <path d="M50 110 L50 95 Q90 50 130 95 L130 110 Z" opacity="0.85" />
          <path d="M95 110 L95 90 Q135 45 180 95 L185 110 Z" opacity="0.7" />
          <path d="M140 110 L140 88 Q170 50 200 90 L200 110 Z" opacity="0.55" />
          <rect x="0" y="108" width="200" height="12" />
        </svg>
      );
    case "NZ":
      // Auckland skyline with Sky Tower
      return (
        <svg viewBox="0 0 200 120" preserveAspectRatio="xMidYMax meet" className={className} {...COMMON_PROPS}>
          <rect x="6" y="70" width="18" height="40" />
          <rect x="28" y="80" width="14" height="30" />
          <rect x="46" y="60" width="16" height="50" />
          <rect x="66" y="75" width="12" height="35" />
          <rect x="82" y="85" width="14" height="25" />
          {/* Sky Tower */}
          <rect x="106" y="20" width="6" height="90" />
          <polygon points="103,20 115,20 109,8" />
          <ellipse cx="109" cy="36" rx="11" ry="6" opacity="0.9" />
          <rect x="126" y="68" width="16" height="42" />
          <rect x="146" y="76" width="14" height="34" />
          <rect x="164" y="60" width="18" height="50" />
          <rect x="186" y="80" width="14" height="30" />
          <rect x="0" y="108" width="200" height="12" />
        </svg>
      );
    case "UK":
      // Big Ben + bridge
      return (
        <svg viewBox="0 0 200 120" preserveAspectRatio="xMidYMax meet" className={className} {...COMMON_PROPS}>
          {/* Big Ben */}
          <rect x="58" y="35" width="18" height="75" />
          <polygon points="55,35 79,35 67,20" />
          <rect x="64" y="14" width="6" height="6" />
          <circle cx="67" cy="48" r="5" opacity="0.6" />
          {/* Parliament */}
          <rect x="0" y="70" width="55" height="40" />
          <rect x="6" y="62" width="6" height="8" />
          <rect x="20" y="62" width="6" height="8" />
          <rect x="34" y="62" width="6" height="8" />
          <rect x="48" y="62" width="6" height="8" />
          <rect x="82" y="70" width="48" height="40" />
          {/* Bridge towers */}
          <rect x="138" y="50" width="14" height="60" />
          <rect x="170" y="50" width="14" height="60" />
          <polygon points="135,50 155,50 145,40" />
          <polygon points="167,50 187,50 177,40" />
          {/* Bridge cables */}
          <path d="M145 60 Q160 78 177 60" stroke="currentColor" strokeWidth="1.4" fill="none" opacity="0.7" />
          <rect x="0" y="108" width="200" height="12" />
        </svg>
      );
    case "CA":
      // CN Tower + maple leaf hint
      return (
        <svg viewBox="0 0 200 120" preserveAspectRatio="xMidYMax meet" className={className} {...COMMON_PROPS}>
          <rect x="20" y="80" width="20" height="30" />
          <rect x="44" y="68" width="18" height="42" />
          <rect x="66" y="76" width="14" height="34" />
          {/* CN Tower */}
          <rect x="96" y="12" width="4" height="98" />
          <polygon points="92,12 104,12 98,2" />
          <ellipse cx="98" cy="36" rx="14" ry="7" opacity="0.9" />
          <rect x="120" y="70" width="20" height="40" />
          <rect x="144" y="60" width="22" height="50" />
          <rect x="170" y="76" width="14" height="34" />
          {/* Maple leaf */}
          <path d="M188 22 l3 4 l5 -2 l-2 5 l4 3 l-5 1 l-1 5 l-4 -3 l-4 3 l-1 -5 l-5 -1 l4 -3 l-2 -5 l5 2 z" opacity="0.6" />
          <rect x="0" y="108" width="200" height="12" />
        </svg>
      );
    case "US":
      // Statue of Liberty + skyline
      return (
        <svg viewBox="0 0 200 120" preserveAspectRatio="xMidYMax meet" className={className} {...COMMON_PROPS}>
          {/* Skyline */}
          <rect x="0" y="78" width="22" height="32" />
          <rect x="26" y="68" width="18" height="42" />
          <rect x="48" y="58" width="22" height="52" />
          <polygon points="48,58 70,58 59,46" />
          <rect x="76" y="74" width="18" height="36" />
          {/* Statue of Liberty */}
          <rect x="108" y="92" width="18" height="18" />
          <rect x="111" y="86" width="12" height="6" />
          <rect x="115" y="46" width="4" height="40" />
          {/* Torch */}
          <rect x="113" y="32" width="2" height="14" />
          <circle cx="114" cy="28" r="5" opacity="0.85" />
          <polygon points="110,28 118,28 114,18" opacity="0.85" />
          {/* Head + crown */}
          <circle cx="117" cy="42" r="4" />
          <polygon points="113,38 121,38 117,30" opacity="0.85" />
          <rect x="134" y="64" width="20" height="46" />
          <rect x="158" y="56" width="20" height="54" />
          <rect x="182" y="72" width="18" height="38" />
          <rect x="0" y="108" width="200" height="12" />
        </svg>
      );
    case "EU":
      // Eiffel Tower + Roman arch
      return (
        <svg viewBox="0 0 200 120" preserveAspectRatio="xMidYMax meet" className={className} {...COMMON_PROPS}>
          {/* Roman arch / Colosseum */}
          <path d="M0 110 L0 76 Q22 60 44 76 L44 110 Z" />
          <path d="M10 110 L10 88 Q22 78 34 88 L34 110 Z" fill="#fff" opacity="0.18" />
          {/* Arc de Triomphe */}
          <rect x="56" y="70" width="32" height="40" />
          <path d="M62 110 L62 86 Q72 76 82 86 L82 110 Z" fill="#fff" opacity="0.2" />
          {/* Eiffel Tower */}
          <path d="M110 110 L116 50 L124 50 L130 110 Z" />
          <rect x="118" y="22" width="4" height="28" />
          <polygon points="116,22 124,22 120,10" />
          <path d="M116 70 L124 70 L122 82 L118 82 Z" fill="#fff" opacity="0.2" />
          {/* Brandenburg */}
          <rect x="146" y="72" width="40" height="38" />
          <rect x="152" y="64" width="6" height="8" />
          <rect x="162" y="64" width="6" height="8" />
          <rect x="172" y="64" width="6" height="8" />
          <rect x="158" y="56" width="4" height="14" />
          <rect x="168" y="56" width="4" height="14" />
          <rect x="0" y="108" width="200" height="12" />
        </svg>
      );
    default:
      return null;
  }
}
