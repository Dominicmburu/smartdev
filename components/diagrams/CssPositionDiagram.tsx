import { box, accentBox, warnBox, label, subLabel } from "./shared";

// A normal flow box, with a relatively-positioned box nudged from its
// original spot, and an absolutely-positioned box floating above both —
// higher z-index on top.
export function CssPositionDiagram() {
  return (
    <svg
      viewBox="0 0 560 220"
      role="img"
      aria-label="A relatively positioned box is nudged from its original spot but still takes up space there. An absolutely positioned box is removed from the flow and placed exactly, floating above the rest thanks to a higher z-index."
      className="w-full h-auto"
    >
      <rect x="20" y="20" width="520" height="180" rx="10" className={box} strokeWidth="1.5" />
      <text x="40" y="40" className={subLabel}>
        position: static (default) — normal flow
      </text>

      <rect x="45" y="55" width="150" height="60" rx="6" strokeDasharray="4,3" className={box} strokeWidth="1.5" />
      <text x="120" y="90" textAnchor="middle" className={subLabel}>
        original spot
      </text>

      <rect x="80" y="75" width="150" height="60" rx="6" className={accentBox} strokeWidth="1.5" />
      <text x="155" y="100" textAnchor="middle" className={label}>
        position: relative
      </text>
      <text x="155" y="116" textAnchor="middle" className={subLabel}>
        nudged, space still reserved
      </text>

      <rect x="330" y="130" width="180" height="60" rx="6" className={warnBox} strokeWidth="1.5" />
      <text x="420" y="155" textAnchor="middle" className={label}>
        position: absolute
      </text>
      <text x="420" y="171" textAnchor="middle" className={subLabel}>
        z-index: 10 — on top, no space reserved
      </text>
    </svg>
  );
}
