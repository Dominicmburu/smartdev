import { box, accentBox, label, subLabel } from "./shared";

// Nested boxes: margin (outermost), border, padding, content (innermost).
export function CssBoxModelDiagram() {
  return (
    <svg
      viewBox="0 0 500 320"
      role="img"
      aria-label="The CSS box model, from outside in: margin, border, padding, and content."
      className="w-full h-auto"
    >
      <rect x="10" y="10" width="480" height="300" rx="10" className={box} strokeWidth="1.5" />
      <text x="250" y="30" textAnchor="middle" className={subLabel}>
        margin — space outside the border, not filled
      </text>

      <rect x="50" y="50" width="400" height="230" rx="8" className={accentBox} strokeWidth="2" />
      <text x="250" y="70" textAnchor="middle" className={subLabel}>
        border
      </text>

      <rect x="80" y="90" width="340" height="150" rx="6" className={box} strokeWidth="1.5" />
      <text x="250" y="110" textAnchor="middle" className={subLabel}>
        padding — space inside the border, still part of the box
      </text>

      <rect x="130" y="130" width="240" height="70" rx="4" className={accentBox} strokeWidth="1.5" />
      <text x="250" y="170" textAnchor="middle" className={label}>
        content
      </text>
    </svg>
  );
}
