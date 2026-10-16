import { box, accentBox, label, subLabel, arrow, arrowFill } from "./shared";

// A line of commits, with a second branch forking off at one point, each
// branch tip labeled, HEAD pointing at the one currently checked out.
export function GitBranchDiagram() {
  return (
    <svg
      viewBox="0 0 640 200"
      role="img"
      aria-label="Commits form a line. A branch forks off at one commit and moves forward on its own; HEAD points at whichever branch is currently checked out."
      className="w-full h-auto"
    >
      <defs>
        <marker id="arrowhead-branch" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto">
          <path d="M0,0 L8,4 L0,8 Z" className={arrowFill} />
        </marker>
      </defs>

      {/* main line */}
      <line x1="40" y1="70" x2="580" y2="70" className={arrow} strokeWidth="1.5" />
      <circle cx="60" cy="70" r="10" className={box} strokeWidth="1.5" />
      <circle cx="180" cy="70" r="10" className={box} strokeWidth="1.5" />
      <circle cx="300" cy="70" r="10" className={box} strokeWidth="1.5" />

      <text x="60" y="50" textAnchor="middle" className={subLabel}>
        c1
      </text>
      <text x="180" y="50" textAnchor="middle" className={subLabel}>
        c2
      </text>
      <text x="300" y="50" textAnchor="middle" className={subLabel}>
        c3
      </text>
      <text x="300" y="100" textAnchor="middle" className={label}>
        main
      </text>

      {/* feature branch forking from c2 */}
      <path d="M180,70 C 260,70 260,150 340,150" fill="none" className={arrow} strokeWidth="1.5" />
      <circle cx="340" cy="150" r="10" className={accentBox} strokeWidth="1.5" />
      <circle cx="460" cy="150" r="10" className={accentBox} strokeWidth="1.5" />

      <text x="340" y="175" textAnchor="middle" className={subLabel}>
        f1
      </text>
      <text x="460" y="175" textAnchor="middle" className={subLabel}>
        f2
      </text>
      <text x="460" y="125" textAnchor="middle" className={label}>
        feature
      </text>

      {/* HEAD pointer */}
      <rect x="420" y="85" width="70" height="24" rx="6" className={box} strokeWidth="1.5" />
      <text x="455" y="101" textAnchor="middle" className={subLabel}>
        HEAD
      </text>
      <line x1="455" y1="109" x2="455" y2="138" className={arrow} strokeWidth="1.5" markerEnd="url(#arrowhead-branch)" />
    </svg>
  );
}
