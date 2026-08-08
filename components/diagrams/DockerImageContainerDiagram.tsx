import { box, accentBox, label, subLabel, arrow, arrowFill, arrowLabel } from "./shared";

// Dockerfile -> (docker build) -> Image -> (docker run) -> Container
export function DockerImageContainerDiagram() {
  return (
    <svg viewBox="0 0 640 170" role="img" aria-label="A Dockerfile is built into an image, then run as a container." className="w-full h-auto">
      <defs>
        <marker id="arrowhead-1" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto">
          <path d="M0,0 L8,4 L0,8 Z" className={arrowFill} />
        </marker>
      </defs>

      {/* Dockerfile */}
      <rect x="10" y="55" width="150" height="70" rx="10" className={box} strokeWidth="1.5" />
      <text x="85" y="82" textAnchor="middle" className={label}>
        Dockerfile
      </text>
      <text x="85" y="100" textAnchor="middle" className={subLabel}>
        the recipe
      </text>

      {/* Arrow 1 */}
      <line x1="165" y1="90" x2="228" y2="90" className={arrow} strokeWidth="1.5" markerEnd="url(#arrowhead-1)" />
      <text x="196" y="70" textAnchor="middle" className={arrowLabel}>
        docker build
      </text>

      {/* Image */}
      <rect x="235" y="55" width="150" height="70" rx="10" className={accentBox} strokeWidth="1.5" />
      <text x="310" y="82" textAnchor="middle" className={label}>
        Image
      </text>
      <text x="310" y="100" textAnchor="middle" className={subLabel}>
        the sealed blueprint
      </text>

      {/* Arrow 2 */}
      <line x1="390" y1="90" x2="453" y2="90" className={arrow} strokeWidth="1.5" markerEnd="url(#arrowhead-1)" />
      <text x="421" y="70" textAnchor="middle" className={arrowLabel}>
        docker run
      </text>

      {/* Container */}
      <rect x="460" y="55" width="170" height="70" rx="10" className={box} strokeWidth="1.5" />
      <text x="545" y="82" textAnchor="middle" className={label}>
        Container
      </text>
      <text x="545" y="100" textAnchor="middle" className={subLabel}>
        the running app
      </text>

      <text x="85" y="150" textAnchor="middle" className={subLabel}>
        written once
      </text>
      <text x="310" y="150" textAnchor="middle" className={subLabel}>
        built once
      </text>
      <text x="545" y="150" textAnchor="middle" className={subLabel}>
        started, stopped, deleted — as many times as you want
      </text>
    </svg>
  );
}
