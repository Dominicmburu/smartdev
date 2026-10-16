import { box, accentBox, label, subLabel, arrow, arrowFill, arrowLabel } from "./shared";

// Two ways to get data into a container: a named volume (Docker's own
// storage) and a bind mount (a real folder on your computer) — both end up
// mounted at some path inside the container's filesystem.
export function DockerVolumeDiagram() {
  return (
    <svg
      viewBox="0 0 640 220"
      role="img"
      aria-label="A named volume (Docker-managed storage) or a bind mount (a folder on your computer) can both be mounted into the container's filesystem."
      className="w-full h-auto"
    >
      <defs>
        <marker id="arrowhead-vol" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto">
          <path d="M0,0 L8,4 L0,8 Z" className={arrowFill} />
        </marker>
      </defs>

      {/* Host box */}
      <rect x="10" y="15" width="260" height="190" rx="10" className={box} strokeWidth="1.5" />
      <text x="140" y="38" textAnchor="middle" className={label}>
        Your computer
      </text>

      <rect x="35" y="55" width="210" height="55" rx="8" className={accentBox} strokeWidth="1.5" />
      <text x="140" y="78" textAnchor="middle" className={subLabel}>
        Named volume
      </text>
      <text x="140" y="94" textAnchor="middle" className={subLabel}>
        docker-managed storage
      </text>

      <rect x="35" y="135" width="210" height="55" rx="8" className={box} strokeWidth="1.5" />
      <text x="140" y="158" textAnchor="middle" className={subLabel}>
        Bind mount
      </text>
      <text x="140" y="174" textAnchor="middle" className={subLabel}>
        a real folder, e.g. ./src
      </text>

      {/* Container box */}
      <rect x="400" y="15" width="230" height="190" rx="10" className={box} strokeWidth="1.5" />
      <text x="515" y="38" textAnchor="middle" className={label}>
        Container
      </text>

      <rect x="430" y="55" width="170" height="55" rx="8" className={accentBox} strokeWidth="1.5" />
      <text x="515" y="86" textAnchor="middle" className={subLabel}>
        mounted at /data
      </text>

      <rect x="430" y="135" width="170" height="55" rx="8" className={box} strokeWidth="1.5" />
      <text x="515" y="166" textAnchor="middle" className={subLabel}>
        mounted at /app
      </text>

      {/* Arrows */}
      <path d="M245,82 C 320,82 320,82 428,82" fill="none" className={arrow} strokeWidth="1.5" markerEnd="url(#arrowhead-vol)" />
      <path d="M245,162 C 320,162 320,162 428,162" fill="none" className={arrow} strokeWidth="1.5" markerEnd="url(#arrowhead-vol)" />

      <text x="330" y="60" textAnchor="middle" className={arrowLabel}>
        survives container deletion
      </text>
    </svg>
  );
}
