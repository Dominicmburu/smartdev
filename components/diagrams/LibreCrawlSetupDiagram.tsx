import { box, accentBox, label, subLabel, arrow, arrowFill, arrowLabel } from "./shared";

// You -> browser at localhost:5000 -> LibreCrawl running locally -> the target website (read-only)
export function LibreCrawlSetupDiagram() {
  return (
    <svg
      viewBox="0 0 700 170"
      role="img"
      aria-label="You open a browser to localhost:5000, which talks to LibreCrawl running on your own machine, which reads pages from the target website without changing anything on it."
      className="w-full h-auto"
    >
      <defs>
        <marker id="arrowhead-4" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto">
          <path d="M0,0 L8,4 L0,8 Z" className={arrowFill} />
        </marker>
      </defs>

      {/* You */}
      <circle cx="50" cy="80" r="24" className={box} strokeWidth="1.5" />
      <text x="50" y="86" textAnchor="middle" className={label}>
        🧑
      </text>
      <text x="50" y="128" textAnchor="middle" className={subLabel}>
        you
      </text>

      <line x1="76" y1="80" x2="134" y2="80" className={arrow} strokeWidth="1.5" markerEnd="url(#arrowhead-4)" />
      <text x="105" y="60" textAnchor="middle" className={arrowLabel}>
        open browser
      </text>

      {/* Browser / localhost:5000 */}
      <rect x="140" y="45" width="150" height="70" rx="10" className={box} strokeWidth="1.5" />
      <text x="215" y="72" textAnchor="middle" className={label}>
        localhost:5000
      </text>
      <text x="215" y="90" textAnchor="middle" className={subLabel}>
        LibreCrawl&apos;s UI
      </text>

      <line x1="295" y1="80" x2="353" y2="80" className={arrow} strokeWidth="1.5" markerEnd="url(#arrowhead-4)" />
      <text x="324" y="60" textAnchor="middle" className={arrowLabel}>
        enter URL, start
      </text>

      {/* LibreCrawl engine */}
      <rect x="360" y="45" width="150" height="70" rx="10" className={accentBox} strokeWidth="1.5" />
      <text x="435" y="72" textAnchor="middle" className={label}>
        LibreCrawl
      </text>
      <text x="435" y="90" textAnchor="middle" className={subLabel}>
        running on your machine
      </text>

      <line x1="515" y1="80" x2="573" y2="80" className={arrow} strokeWidth="1.5" markerEnd="url(#arrowhead-4)" />
      <text x="544" y="60" textAnchor="middle" className={arrowLabel}>
        reads pages
      </text>

      {/* Target website */}
      <rect
        x="580"
        y="45"
        width="110"
        height="70"
        rx="10"
        className={box}
        strokeWidth="1.5"
        strokeDasharray="4 3"
      />
      <text x="635" y="72" textAnchor="middle" className={label}>
        Target site
      </text>
      <text x="635" y="90" textAnchor="middle" className={subLabel}>
        only ever read
      </text>
    </svg>
  );
}
