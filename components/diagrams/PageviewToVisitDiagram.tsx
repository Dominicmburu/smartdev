import { box, accentBox, label, subLabel, arrow, arrowFill } from "./shared";

// Three separate pageviews, close together in time, get grouped into one visit/session.
export function PageviewToVisitDiagram() {
  const pages = [
    { x: 20, text: "Home" },
    { x: 160, text: "Menu" },
    { x: 300, text: "Contact" },
  ];

  return (
    <svg
      viewBox="0 0 700 190"
      role="img"
      aria-label="Three separate pageviews — Home, Menu, Contact — loaded a few minutes apart by the same person are grouped by Matomo into a single visit, which is what shows up as one row in the visits log."
      className="w-full h-auto"
    >
      <defs>
        <marker id="arrowhead-9" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto">
          <path d="M0,0 L8,4 L0,8 Z" className={arrowFill} />
        </marker>
      </defs>

      <text x="20" y="20" className={subLabel}>
        Three pageviews, a few minutes apart, same visitor
      </text>

      {pages.map((p) => (
        <g key={p.text}>
          <rect x={p.x} y="35" width="120" height="50" rx="10" className={box} strokeWidth="1.5" />
          <text x={p.x + 60} y="65" textAnchor="middle" className={label}>
            {p.text}
          </text>
        </g>
      ))}

      <line x1="140" y1="115" x2="140" y2="140" className={arrow} strokeWidth="1.5" />
      <line x1="280" y1="115" x2="280" y2="140" className={arrow} strokeWidth="1.5" />
      <line x1="420" y1="115" x2="420" y2="140" className={arrow} strokeWidth="1.5" />
      <line x1="140" y1="140" x2="420" y2="140" className={arrow} strokeWidth="1.5" />
      <line x1="280" y1="140" x2="280" y2="150" className={arrow} strokeWidth="1.5" markerEnd="url(#arrowhead-9)" />

      <rect x="180" y="155" width="200" height="30" rx="8" className={accentBox} strokeWidth="1.5" />
      <text x="280" y="175" textAnchor="middle" className={label}>
        1 visit in the log
      </text>
    </svg>
  );
}
