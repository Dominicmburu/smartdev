import { box, accentBox, label, subLabel, arrow, arrowFill, arrowLabel } from "./shared";

// Working directory -> (git add) -> staging area -> (git commit) -> repository history.
export function GitCommitFlowDiagram() {
  return (
    <svg
      viewBox="0 0 640 170"
      role="img"
      aria-label="A changed file moves from the working directory, to the staging area via git add, to the repository's history via git commit."
      className="w-full h-auto"
    >
      <defs>
        <marker id="arrowhead-gitflow" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto">
          <path d="M0,0 L8,4 L0,8 Z" className={arrowFill} />
        </marker>
      </defs>

      <rect x="10" y="55" width="170" height="70" rx="10" className={box} strokeWidth="1.5" />
      <text x="95" y="82" textAnchor="middle" className={label}>
        Working directory
      </text>
      <text x="95" y="100" textAnchor="middle" className={subLabel}>
        your edited files
      </text>

      <line x1="185" y1="90" x2="243" y2="90" className={arrow} strokeWidth="1.5" markerEnd="url(#arrowhead-gitflow)" />
      <text x="214" y="70" textAnchor="middle" className={arrowLabel}>
        git add
      </text>

      <rect x="250" y="55" width="160" height="70" rx="10" className={accentBox} strokeWidth="1.5" />
      <text x="330" y="82" textAnchor="middle" className={label}>
        Staging area
      </text>
      <text x="330" y="100" textAnchor="middle" className={subLabel}>
        what the next commit includes
      </text>

      <line x1="415" y1="90" x2="473" y2="90" className={arrow} strokeWidth="1.5" markerEnd="url(#arrowhead-gitflow)" />
      <text x="444" y="70" textAnchor="middle" className={arrowLabel}>
        git commit
      </text>

      <rect x="480" y="55" width="150" height="70" rx="10" className={box} strokeWidth="1.5" />
      <text x="555" y="82" textAnchor="middle" className={label}>
        History
      </text>
      <text x="555" y="100" textAnchor="middle" className={subLabel}>
        a new, permanent snapshot
      </text>
    </svg>
  );
}
