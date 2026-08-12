import { box, accentBox, label, subLabel, arrow, arrowFill } from "./shared";

// Three near-duplicate URLs all point their canonical tag at one preferred version.
export function CanonicalDiagram() {
  const dupes = [
    { y: 15, text: "/shoes" },
    { y: 85, text: "/shoes?ref=email" },
    { y: 155, text: "/shoes/print" },
  ];

  return (
    <svg
      viewBox="0 0 700 200"
      role="img"
      aria-label="Three near-duplicate URLs — /shoes, /shoes with a ref parameter, and /shoes/print — all point their canonical tag at the same preferred page, /shoes."
      className="w-full h-auto"
    >
      <defs>
        <marker id="arrowhead-7" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto">
          <path d="M0,0 L8,4 L0,8 Z" className={arrowFill} />
        </marker>
      </defs>

      {dupes.map((d) => (
        <g key={d.text}>
          <rect x="20" y={d.y} width="230" height="50" rx="10" className={box} strokeWidth="1.5" />
          <text x="135" y={d.y + 30} textAnchor="middle" className={label}>
            {d.text}
          </text>
          <line
            x1="250"
            y1={d.y + 25}
            x2="443"
            y2="100"
            className={arrow}
            strokeWidth="1.5"
            strokeDasharray="4 3"
            markerEnd="url(#arrowhead-7)"
          />
        </g>
      ))}

      <text x="330" y="70" textAnchor="middle" className={subLabel}>
        canonical tag
      </text>

      <rect x="450" y="75" width="230" height="50" rx="10" className={accentBox} strokeWidth="1.5" />
      <text x="565" y="105" textAnchor="middle" className={label}>
        /shoes
      </text>
      <text x="565" y="145" textAnchor="middle" className={subLabel}>
        the version search engines should index
      </text>
    </svg>
  );
}
