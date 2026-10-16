import { box, accentBox, label, subLabel, arrow, arrowFill, arrowLabel } from "./shared";

// One docker-compose.yml describes several services; "docker compose up"
// starts them all together, already wired onto a shared network.
export function DockerComposeDiagram() {
  return (
    <svg
      viewBox="0 0 640 200"
      role="img"
      aria-label="One docker-compose.yml file describes several services. Running docker compose up starts them all together, already connected on a shared network."
      className="w-full h-auto"
    >
      <defs>
        <marker id="arrowhead-compose" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto">
          <path d="M0,0 L8,4 L0,8 Z" className={arrowFill} />
        </marker>
      </defs>

      {/* Compose file */}
      <rect x="10" y="45" width="180" height="110" rx="10" className={box} strokeWidth="1.5" />
      <text x="100" y="68" textAnchor="middle" className={label}>
        docker-compose.yml
      </text>
      <text x="100" y="90" textAnchor="middle" className={subLabel}>
        services: web
      </text>
      <text x="100" y="108" textAnchor="middle" className={subLabel}>
        services: db
      </text>
      <text x="100" y="126" textAnchor="middle" className={subLabel}>
        services: cache
      </text>

      {/* Arrow */}
      <line x1="195" y1="100" x2="263" y2="100" className={arrow} strokeWidth="1.5" markerEnd="url(#arrowhead-compose)" />
      <text x="229" y="80" textAnchor="middle" className={arrowLabel}>
        docker compose up
      </text>

      {/* Running services, wired together */}
      <rect x="270" y="20" width="360" height="160" rx="12" className={accentBox} strokeWidth="1.5" strokeDasharray="5,4" />
      <text x="450" y="40" textAnchor="middle" className={subLabel}>
        all started together, on one shared network
      </text>

      <rect x="295" y="60" width="90" height="55" rx="8" className={box} strokeWidth="1.5" />
      <text x="340" y="92" textAnchor="middle" className={label}>
        web
      </text>

      <rect x="405" y="60" width="90" height="55" rx="8" className={box} strokeWidth="1.5" />
      <text x="450" y="92" textAnchor="middle" className={label}>
        db
      </text>

      <rect x="515" y="60" width="90" height="55" rx="8" className={box} strokeWidth="1.5" />
      <text x="560" y="92" textAnchor="middle" className={label}>
        cache
      </text>

      <text x="450" y="150" textAnchor="middle" className={subLabel}>
        web can reach &ldquo;db&rdquo; and &ldquo;cache&rdquo; by name, no manual network setup
      </text>
    </svg>
  );
}
