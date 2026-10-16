import { box, accentBox, label, subLabel, arrow, arrowFill } from "./shared";

// Each Dockerfile instruction becomes one stacked layer; together they make
// up the final image.
export function DockerLayersDiagram() {
  return (
    <svg
      viewBox="0 0 640 220"
      role="img"
      aria-label="Each line of a Dockerfile — FROM, COPY, RUN, CMD — becomes one stacked layer, and together the stack is the final image."
      className="w-full h-auto"
    >
      <defs>
        <marker id="arrowhead-layers" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto">
          <path d="M0,0 L8,4 L0,8 Z" className={arrowFill} />
        </marker>
      </defs>

      {/* Dockerfile */}
      <rect x="10" y="20" width="220" height="180" rx="10" className={box} strokeWidth="1.5" />
      <text x="120" y="42" textAnchor="middle" className={label}>
        Dockerfile
      </text>
      <text x="40" y="70" className={subLabel}>
        FROM node:18
      </text>
      <text x="40" y="98" className={subLabel}>
        COPY package.json .
      </text>
      <text x="40" y="126" className={subLabel}>
        RUN npm install
      </text>
      <text x="40" y="154" className={subLabel}>
        COPY . .
      </text>
      <text x="40" y="182" className={subLabel}>
        CMD [&quot;npm&quot;, &quot;start&quot;]
      </text>

      <line x1="235" y1="110" x2="293" y2="110" className={arrow} strokeWidth="1.5" markerEnd="url(#arrowhead-layers)" />

      {/* Stacked layers */}
      <rect x="300" y="170" width="330" height="30" rx="4" className={box} strokeWidth="1.5" />
      <text x="465" y="190" textAnchor="middle" className={subLabel}>
        layer: FROM node:18 (base)
      </text>

      <rect x="300" y="138" width="330" height="30" rx="4" className={box} strokeWidth="1.5" />
      <text x="465" y="158" textAnchor="middle" className={subLabel}>
        layer: COPY package.json .
      </text>

      <rect x="300" y="106" width="330" height="30" rx="4" className={box} strokeWidth="1.5" />
      <text x="465" y="126" textAnchor="middle" className={subLabel}>
        layer: RUN npm install
      </text>

      <rect x="300" y="74" width="330" height="30" rx="4" className={box} strokeWidth="1.5" />
      <text x="465" y="94" textAnchor="middle" className={subLabel}>
        layer: COPY . .
      </text>

      <rect x="300" y="35" width="330" height="30" rx="4" className={accentBox} strokeWidth="1.5" />
      <text x="465" y="55" textAnchor="middle" className={label}>
        final image
      </text>
    </svg>
  );
}
