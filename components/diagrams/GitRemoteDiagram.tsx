import { box, accentBox, label, subLabel, arrow, arrowFill, arrowLabel } from "./shared";

// Your local repository and a remote (e.g. GitHub) exchange commits: push
// sends yours up, pull/fetch brings theirs down.
export function GitRemoteDiagram() {
  return (
    <svg
      viewBox="0 0 640 170"
      role="img"
      aria-label="Your local repository and a remote repository on GitHub exchange commits: git push sends yours up, git pull brings theirs down."
      className="w-full h-auto"
    >
      <defs>
        <marker id="arrowhead-remote" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto">
          <path d="M0,0 L8,4 L0,8 Z" className={arrowFill} />
        </marker>
      </defs>

      <rect x="20" y="20" width="220" height="130" rx="10" className={box} strokeWidth="1.5" />
      <text x="130" y="45" textAnchor="middle" className={label}>
        Your computer
      </text>
      <text x="130" y="65" textAnchor="middle" className={subLabel}>
        local repository
      </text>
      <text x="130" y="100" textAnchor="middle" className={subLabel}>
        origin/main tracks
      </text>
      <text x="130" y="118" textAnchor="middle" className={subLabel}>
        the remote&apos;s main
      </text>

      <rect x="400" y="20" width="220" height="130" rx="10" className={accentBox} strokeWidth="1.5" />
      <text x="510" y="45" textAnchor="middle" className={label}>
        GitHub
      </text>
      <text x="510" y="65" textAnchor="middle" className={subLabel}>
        remote repository (&ldquo;origin&rdquo;)
      </text>

      <line x1="245" y1="70" x2="395" y2="70" className={arrow} strokeWidth="1.5" markerEnd="url(#arrowhead-remote)" />
      <text x="320" y="55" textAnchor="middle" className={arrowLabel}>
        git push
      </text>

      <line x1="395" y1="105" x2="245" y2="105" className={arrow} strokeWidth="1.5" markerEnd="url(#arrowhead-remote)" />
      <text x="320" y="125" textAnchor="middle" className={arrowLabel}>
        git pull
      </text>
    </svg>
  );
}
