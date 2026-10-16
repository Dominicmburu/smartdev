import { box, accentBox, warnBox, label, subLabel, arrow, arrowFill, arrowLabel } from "./shared";

// Two containers on the same user-defined network can reach each other by
// container name. A container not on that network has no route to either.
export function DockerNetworkDiagram() {
  return (
    <svg
      viewBox="0 0 640 230"
      role="img"
      aria-label="Two containers on the same user-defined network can reach each other by name. A container outside that network has no route to either one."
      className="w-full h-auto"
    >
      <defs>
        <marker id="arrowhead-net" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto">
          <path d="M0,0 L8,4 L0,8 Z" className={arrowFill} />
        </marker>
      </defs>

      {/* Network boundary */}
      <rect x="20" y="20" width="400" height="130" rx="12" className={accentBox} strokeWidth="1.5" strokeDasharray="5,4" />
      <text x="220" y="40" textAnchor="middle" className={subLabel}>
        user-defined network: appnet
      </text>

      <rect x="50" y="60" width="140" height="60" rx="8" className={box} strokeWidth="1.5" />
      <text x="120" y="95" textAnchor="middle" className={label}>
        web
      </text>

      <rect x="250" y="60" width="140" height="60" rx="8" className={box} strokeWidth="1.5" />
      <text x="320" y="95" textAnchor="middle" className={label}>
        db
      </text>

      <path d="M190,90 L248,90" fill="none" className={arrow} strokeWidth="1.5" markerEnd="url(#arrowhead-net)" />
      <path d="M248,100 L190,100" fill="none" className={arrow} strokeWidth="1.5" markerEnd="url(#arrowhead-net)" />
      <text x="220" y="135" textAnchor="middle" className={arrowLabel}>
        web connects to &ldquo;db:5432&rdquo; by name
      </text>

      {/* Outsider */}
      <rect x="470" y="60" width="150" height="60" rx="8" className={warnBox} strokeWidth="1.5" />
      <text x="545" y="88" textAnchor="middle" className={label}>
        other container
      </text>
      <text x="545" y="104" textAnchor="middle" className={subLabel}>
        not on appnet
      </text>

      <path d="M424,90 L466,90" fill="none" className={arrow} strokeWidth="1.5" strokeDasharray="3,3" />
      <text x="545" y="135" textAnchor="middle" className={subLabel}>
        no route to web or db
      </text>
    </svg>
  );
}
