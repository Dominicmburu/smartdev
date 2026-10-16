import { box, accentBox, label, subLabel, arrow, arrowFill, arrowLabel } from "./shared";

// A multi-stage build: the builder stage has the full toolchain and is
// discarded; only the built artifact is copied into the small final image.
export function DockerMultiStageDiagram() {
  return (
    <svg
      viewBox="0 0 640 210"
      role="img"
      aria-label="A multi-stage build: the builder stage has the full toolchain and is discarded. Only the built artifact is copied into the small final image."
      className="w-full h-auto"
    >
      <defs>
        <marker id="arrowhead-stage" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto">
          <path d="M0,0 L8,4 L0,8 Z" className={arrowFill} />
        </marker>
      </defs>

      {/* Builder stage */}
      <rect x="10" y="15" width="270" height="170" rx="10" className={box} strokeWidth="1.5" />
      <text x="145" y="38" textAnchor="middle" className={label}>
        Stage 1: builder
      </text>
      <text x="145" y="56" textAnchor="middle" className={subLabel}>
        full toolchain, compilers, source — large
      </text>
      <rect x="40" y="75" width="210" height="45" rx="8" className={accentBox} strokeWidth="1.5" />
      <text x="145" y="102" textAnchor="middle" className={subLabel}>
        built artifact: /app/dist
      </text>
      <text x="145" y="160" textAnchor="middle" className={subLabel}>
        discarded after the build
      </text>

      {/* Arrow */}
      <path d="M285,97 C 320,97 320,97 358,97" fill="none" className={arrow} strokeWidth="1.5" markerEnd="url(#arrowhead-stage)" />
      <text x="320" y="78" textAnchor="middle" className={arrowLabel}>
        COPY --from=builder
      </text>

      {/* Final stage */}
      <rect x="365" y="15" width="265" height="170" rx="10" className={box} strokeWidth="1.5" />
      <text x="497" y="38" textAnchor="middle" className={label}>
        Stage 2: final image
      </text>
      <text x="497" y="56" textAnchor="middle" className={subLabel}>
        just a runtime + the built app — small
      </text>
      <rect x="400" y="75" width="190" height="45" rx="8" className={accentBox} strokeWidth="1.5" />
      <text x="497" y="102" textAnchor="middle" className={subLabel}>
        /app/dist
      </text>
      <text x="497" y="160" textAnchor="middle" className={subLabel}>
        this is what ships
      </text>
    </svg>
  );
}
