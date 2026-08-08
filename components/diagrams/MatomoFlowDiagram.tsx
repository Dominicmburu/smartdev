import { box, accentBox, label, subLabel, arrow, arrowFill, arrowLabel } from "./shared";

// Visitor -> website page (tracking code fires) -> Matomo server -> dashboard
export function MatomoFlowDiagram() {
  return (
    <svg
      viewBox="0 0 680 170"
      role="img"
      aria-label="A visitor loads a page, the tracking code sends a note to the Matomo server, and Matomo turns notes into a dashboard."
      className="w-full h-auto"
    >
      <defs>
        <marker id="arrowhead-3" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto">
          <path d="M0,0 L8,4 L0,8 Z" className={arrowFill} />
        </marker>
      </defs>

      {/* Visitor */}
      <circle cx="55" cy="80" r="26" className={box} strokeWidth="1.5" />
      <text x="55" y="86" textAnchor="middle" className={label}>
        🧑
      </text>
      <text x="55" y="130" textAnchor="middle" className={subLabel}>
        visitor
      </text>

      <line x1="85" y1="80" x2="148" y2="80" className={arrow} strokeWidth="1.5" markerEnd="url(#arrowhead-3)" />

      {/* Website page */}
      <rect x="155" y="45" width="150" height="70" rx="10" className={box} strokeWidth="1.5" />
      <text x="230" y="72" textAnchor="middle" className={label}>
        Website page
      </text>
      <text x="230" y="90" textAnchor="middle" className={subLabel}>
        tracking code runs
      </text>

      <line x1="310" y1="80" x2="373" y2="80" className={arrow} strokeWidth="1.5" markerEnd="url(#arrowhead-3)" />
      <text x="341" y="60" textAnchor="middle" className={arrowLabel}>
        sends a note
      </text>

      {/* Matomo server */}
      <rect x="380" y="45" width="150" height="70" rx="10" className={accentBox} strokeWidth="1.5" />
      <text x="455" y="72" textAnchor="middle" className={label}>
        Matomo server
      </text>
      <text x="455" y="90" textAnchor="middle" className={subLabel}>
        collects the notes
      </text>

      <line x1="535" y1="80" x2="598" y2="80" className={arrow} strokeWidth="1.5" markerEnd="url(#arrowhead-3)" />
      <text x="566" y="60" textAnchor="middle" className={arrowLabel}>
        builds a report
      </text>

      {/* Dashboard */}
      <rect x="605" y="45" width="65" height="70" rx="10" className={box} strokeWidth="1.5" />
      <rect x="617" y="90" width="8" height="15" className={accentBox} />
      <rect x="630" y="80" width="8" height="25" className={accentBox} />
      <rect x="643" y="70" width="8" height="35" className={accentBox} />
      <text x="637" y="130" textAnchor="middle" className={subLabel}>
        dashboard
      </text>
    </svg>
  );
}
