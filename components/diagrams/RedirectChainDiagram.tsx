import { box, accentBox, label, subLabel, arrow, arrowFill, arrowLabel } from "./shared";

// Top row: A -> B -> C -> D, three hops. Bottom row: the same trip fixed to one hop.
export function RedirectChainDiagram() {
  return (
    <svg
      viewBox="0 0 700 210"
      role="img"
      aria-label="A redirect chain of three hops from page A to page B to page C to page D, compared with the fixed version: page A redirecting straight to page D in one hop."
      className="w-full h-auto"
    >
      <defs>
        <marker id="arrowhead-6" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto">
          <path d="M0,0 L8,4 L0,8 Z" className={arrowFill} />
        </marker>
      </defs>

      <text x="10" y="20" className={subLabel}>
        Before: 3 redirect hops
      </text>

      {["A", "B", "C"].map((letter, i) => (
        <g key={letter}>
          <rect x={20 + i * 165} y="35" width="90" height="50" rx="10" className={box} strokeWidth="1.5" />
          <text x={65 + i * 165} y="65" textAnchor="middle" className={label}>
            Page {letter}
          </text>
          <line
            x1={110 + i * 165}
            y1="60"
            x2={183 + i * 165}
            y2="60"
            className={arrow}
            strokeWidth="1.5"
            markerEnd="url(#arrowhead-6)"
          />
          <text x={147 + i * 165} y="48" textAnchor="middle" className={arrowLabel}>
            301
          </text>
        </g>
      ))}
      <rect x="515" y="35" width="90" height="50" rx="10" className={accentBox} strokeWidth="1.5" />
      <text x="560" y="65" textAnchor="middle" className={label}>
        Page D
      </text>

      <text x="10" y="130" className={subLabel}>
        After: fixed to 1 hop
      </text>
      <rect x="20" y="145" width="90" height="50" rx="10" className={box} strokeWidth="1.5" />
      <text x="65" y="175" textAnchor="middle" className={label}>
        Page A
      </text>
      <line x1="110" y1="170" x2="513" y2="170" className={arrow} strokeWidth="1.5" markerEnd="url(#arrowhead-6)" />
      <text x="311" y="158" textAnchor="middle" className={arrowLabel}>
        301, straight there
      </text>
      <rect x="515" y="145" width="90" height="50" rx="10" className={accentBox} strokeWidth="1.5" />
      <text x="560" y="175" textAnchor="middle" className={label}>
        Page D
      </text>
    </svg>
  );
}
