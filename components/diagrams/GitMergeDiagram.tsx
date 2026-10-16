import { box, accentBox, label, subLabel, arrow } from "./shared";

// main and feature diverge, then come back together at a merge commit that
// has two parents.
export function GitMergeDiagram() {
  return (
    <svg
      viewBox="0 0 640 190"
      role="img"
      aria-label="The main branch and a feature branch diverge, then come back together at a merge commit, which has both branch tips as its parents."
      className="w-full h-auto"
    >
      {/* main line */}
      <line x1="40" y1="60" x2="580" y2="60" className={arrow} strokeWidth="1.5" />
      <circle cx="60" cy="60" r="10" className={box} strokeWidth="1.5" />
      <circle cx="200" cy="60" r="10" className={box} strokeWidth="1.5" />

      <text x="60" y="40" textAnchor="middle" className={subLabel}>
        c1
      </text>
      <text x="200" y="40" textAnchor="middle" className={subLabel}>
        c2
      </text>

      {/* feature branch */}
      <path d="M200,60 C 280,60 280,140 360,140" fill="none" className={arrow} strokeWidth="1.5" />
      <circle cx="360" cy="140" r="10" className={accentBox} strokeWidth="1.5" />
      <text x="360" y="165" textAnchor="middle" className={subLabel}>
        f1
      </text>
      <text x="360" y="120" textAnchor="middle" className={label}>
        feature
      </text>

      {/* merge back into main */}
      <path d="M200,60 C 300,60 320,60 420,60" fill="none" className={arrow} strokeWidth="1.5" />
      <path d="M360,140 C 420,140 420,60 420,60" fill="none" className={arrow} strokeWidth="1.5" />
      <circle cx="420" cy="60" r="12" className={box} strokeWidth="2" />
      <text x="420" y="40" textAnchor="middle" className={subLabel}>
        merge
      </text>
      <text x="420" y="92" textAnchor="middle" className={subLabel}>
        two parents: c2 and f1
      </text>

      <line x1="432" y1="60" x2="580" y2="60" className={arrow} strokeWidth="1.5" />
      <circle cx="540" cy="60" r="10" className={box} strokeWidth="1.5" />
      <text x="540" y="40" textAnchor="middle" className={subLabel}>
        c3
      </text>
      <text x="540" y="92" textAnchor="middle" className={label}>
        main
      </text>
    </svg>
  );
}
