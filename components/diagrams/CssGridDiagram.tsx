import { box, accentBox, label, subLabel } from "./shared";

// A grid container with 3 columns and 2 rows, one item spanning two columns.
export function CssGridDiagram() {
  return (
    <svg
      viewBox="0 0 560 230"
      role="img"
      aria-label="A grid container divided into three columns and two rows, with one item spanning two columns using grid-column: span 2."
      className="w-full h-auto"
    >
      <rect x="20" y="20" width="520" height="190" rx="10" className={box} strokeWidth="1.5" />
      <text x="40" y="40" className={subLabel}>
        display: grid, grid-template-columns: 1fr 1fr 1fr
      </text>

      {/* row 1: one item spanning two columns, one normal item */}
      <rect x="45" y="55" width="300" height="65" rx="6" className={accentBox} strokeWidth="1.5" />
      <text x="195" y="92" textAnchor="middle" className={label}>
        header (span 2)
      </text>

      <rect x="365" y="55" width="140" height="65" rx="6" className={box} strokeWidth="1.5" />
      <text x="435" y="92" textAnchor="middle" className={label}>
        sidebar
      </text>

      {/* row 2: three equal columns */}
      <rect x="45" y="135" width="140" height="65" rx="6" className={box} strokeWidth="1.5" />
      <text x="115" y="172" textAnchor="middle" className={label}>
        card
      </text>

      <rect x="205" y="135" width="140" height="65" rx="6" className={box} strokeWidth="1.5" />
      <text x="275" y="172" textAnchor="middle" className={label}>
        card
      </text>

      <rect x="365" y="135" width="140" height="65" rx="6" className={box} strokeWidth="1.5" />
      <text x="435" y="172" textAnchor="middle" className={label}>
        card
      </text>
    </svg>
  );
}
