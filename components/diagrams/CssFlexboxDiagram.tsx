import { box, accentBox, label, subLabel, arrow, arrowFill } from "./shared";

// A flex container with three items laid out along the main axis, with the
// main axis and cross axis labeled.
export function CssFlexboxDiagram() {
  return (
    <svg
      viewBox="0 0 620 190"
      role="img"
      aria-label="A flex container arranges its items in a row along the main axis by default, with the cross axis running perpendicular to it."
      className="w-full h-auto"
    >
      <defs>
        <marker id="arrowhead-flex" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto">
          <path d="M0,0 L8,4 L0,8 Z" className={arrowFill} />
        </marker>
      </defs>

      <rect x="20" y="20" width="520" height="130" rx="10" className={box} strokeWidth="1.5" />
      <text x="40" y="40" className={subLabel}>
        display: flex
      </text>

      <rect x="45" y="55" width="140" height="70" rx="6" className={accentBox} strokeWidth="1.5" />
      <text x="115" y="95" textAnchor="middle" className={label}>
        item 1
      </text>

      <rect x="205" y="55" width="140" height="70" rx="6" className={accentBox} strokeWidth="1.5" />
      <text x="275" y="95" textAnchor="middle" className={label}>
        item 2
      </text>

      <rect x="365" y="55" width="140" height="70" rx="6" className={accentBox} strokeWidth="1.5" />
      <text x="435" y="95" textAnchor="middle" className={label}>
        item 3
      </text>

      <line x1="45" y1="140" x2="505" y2="140" className={arrow} strokeWidth="1.5" markerEnd="url(#arrowhead-flex)" />
      <text x="275" y="170" textAnchor="middle" className={subLabel}>
        main axis (flex-direction: row by default)
      </text>

      <line x1="530" y1="25" x2="530" y2="145" className={arrow} strokeWidth="1.5" markerEnd="url(#arrowhead-flex)" />
      <text x="540" y="90" className={subLabel}>
        cross axis
      </text>
    </svg>
  );
}
