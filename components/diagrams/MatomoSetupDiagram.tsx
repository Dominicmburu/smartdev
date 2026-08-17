import { box, accentBox, label, subLabel, arrow, arrowFill } from "./shared";

// Your site (tracking code) -> your own Matomo server -> your dashboard.
// Nothing routes through a third party at any step.
export function MatomoSetupDiagram() {
  return (
    <svg
      viewBox="0 0 700 170"
      role="img"
      aria-label="Your website with the tracking code installed sends visit data to your own Matomo server, which you view through your dashboard — nothing passes through a third party."
      className="w-full h-auto"
    >
      <defs>
        <marker id="arrowhead-8" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto">
          <path d="M0,0 L8,4 L0,8 Z" className={arrowFill} />
        </marker>
      </defs>

      {/* Your site */}
      <rect x="20" y="45" width="150" height="70" rx="10" className={box} strokeWidth="1.5" />
      <text x="95" y="72" textAnchor="middle" className={label}>
        Your website
      </text>
      <text x="95" y="90" textAnchor="middle" className={subLabel}>
        tracking code installed
      </text>

      <line x1="175" y1="80" x2="233" y2="80" className={arrow} strokeWidth="1.5" markerEnd="url(#arrowhead-8)" />
      <text x="204" y="60" textAnchor="middle" className={subLabel}>
        sends visits
      </text>

      {/* Your Matomo server */}
      <rect x="240" y="45" width="220" height="70" rx="10" className={accentBox} strokeWidth="1.5" />
      <text x="350" y="72" textAnchor="middle" className={label}>
        Your Matomo server
      </text>
      <text x="350" y="90" textAnchor="middle" className={subLabel}>
        self-hosted, or Matomo Cloud
      </text>

      <line x1="465" y1="80" x2="523" y2="80" className={arrow} strokeWidth="1.5" markerEnd="url(#arrowhead-8)" />
      <text x="494" y="60" textAnchor="middle" className={subLabel}>
        builds reports
      </text>

      {/* Dashboard */}
      <rect x="530" y="45" width="150" height="70" rx="10" className={box} strokeWidth="1.5" />
      <rect x="548" y="90" width="8" height="15" className={accentBox} />
      <rect x="561" y="80" width="8" height="25" className={accentBox} />
      <rect x="574" y="70" width="8" height="35" className={accentBox} />
      <text x="605" y="90" textAnchor="middle" className={subLabel}>
        your dashboard
      </text>

      <text x="350" y="145" textAnchor="middle" className={subLabel}>
        No step here involves Google, Meta, or any other third party.
      </text>
    </svg>
  );
}
