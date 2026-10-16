import { box, accentBox, label, subLabel } from "./shared";

// The same layout at a wide viewport (three columns side by side) and a
// narrow one (the same items stacked), switched by a media query.
export function CssResponsiveDiagram() {
  return (
    <svg
      viewBox="0 0 600 230"
      role="img"
      aria-label="At a wide viewport, three cards sit side by side. Below a media query breakpoint, the same three cards stack vertically instead."
      className="w-full h-auto"
    >
      <rect x="20" y="15" width="300" height="200" rx="10" className={box} strokeWidth="1.5" />
      <text x="170" y="35" textAnchor="middle" className={subLabel}>
        wide viewport
      </text>
      <rect x="35" y="50" width="80" height="150" rx="6" className={accentBox} strokeWidth="1.5" />
      <rect x="125" y="50" width="80" height="150" rx="6" className={accentBox} strokeWidth="1.5" />
      <rect x="215" y="50" width="80" height="150" rx="6" className={accentBox} strokeWidth="1.5" />
      <text x="170" y="213" textAnchor="middle" className={subLabel}>
        three columns
      </text>

      <rect x="360" y="15" width="220" height="200" rx="10" className={box} strokeWidth="1.5" />
      <text x="470" y="35" textAnchor="middle" className={subLabel}>
        narrow viewport
      </text>
      <rect x="380" y="48" width="180" height="42" rx="6" className={accentBox} strokeWidth="1.5" />
      <rect x="380" y="98" width="180" height="42" rx="6" className={accentBox} strokeWidth="1.5" />
      <rect x="380" y="148" width="180" height="42" rx="6" className={accentBox} strokeWidth="1.5" />
      <text x="470" y="200" textAnchor="middle" className={subLabel}>
        stacked, below the breakpoint
      </text>

      <text x="340" y="115" textAnchor="middle" className={label}>
        @media
      </text>
    </svg>
  );
}
