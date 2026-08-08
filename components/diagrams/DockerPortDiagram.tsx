import { box, accentBox, label, subLabel, arrow, arrowFill, arrowLabel } from "./shared";

// Shows two ways to reach the same container port from the host:
// -p 3000:3000 and -p 8080:3000 — same app inside, different "front door"
// number outside.
export function DockerPortDiagram() {
  return (
    <svg
      viewBox="0 0 640 210"
      role="img"
      aria-label="Your computer's port 3000 or port 8080 can both be mapped to the container's port 3000."
      className="w-full h-auto"
    >
      <defs>
        <marker id="arrowhead-2" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto">
          <path d="M0,0 L8,4 L0,8 Z" className={arrowFill} />
        </marker>
      </defs>

      {/* Host box */}
      <rect x="10" y="15" width="230" height="180" rx="10" className={box} strokeWidth="1.5" />
      <text x="125" y="38" textAnchor="middle" className={label}>
        Your computer (host)
      </text>

      <rect x="40" y="55" width="170" height="40" rx="8" className={accentBox} strokeWidth="1.5" />
      <text x="125" y="80" textAnchor="middle" className={subLabel}>
        door 3000
      </text>

      <rect x="40" y="130" width="170" height="40" rx="8" className={accentBox} strokeWidth="1.5" />
      <text x="125" y="155" textAnchor="middle" className={subLabel}>
        door 8080
      </text>

      {/* Container box */}
      <rect x="400" y="65" width="230" height="80" rx="10" className={box} strokeWidth="1.5" />
      <text x="515" y="88" textAnchor="middle" className={label}>
        Container
      </text>
      <rect x="430" y="100" width="170" height="30" rx="8" className={accentBox} strokeWidth="1.5" />
      <text x="515" y="120" textAnchor="middle" className={subLabel}>
        app is listening on 3000
      </text>

      {/* Arrows */}
      <path d="M210,75 C 320,75 320,105 428,105" fill="none" className={arrow} strokeWidth="1.5" markerEnd="url(#arrowhead-2)" />
      <text x="320" y="60" textAnchor="middle" className={arrowLabel}>
        -p 3000:3000
      </text>

      <path d="M210,150 C 320,150 320,120 428,112" fill="none" className={arrow} strokeWidth="1.5" markerEnd="url(#arrowhead-2)" />
      <text x="320" y="180" textAnchor="middle" className={arrowLabel}>
        -p 8080:3000
      </text>
    </svg>
  );
}
