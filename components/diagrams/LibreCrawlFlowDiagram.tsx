import { box, accentBox, warnBox, label, subLabel, arrow, arrowFill } from "./shared";

// A starting page branches out to the pages it links to, the way a crawler
// discovers a site — with one broken link and one slow page flagged along
// the way, feeding into a report.
export function LibreCrawlFlowDiagram() {
  return (
    <svg
      viewBox="0 0 640 230"
      role="img"
      aria-label="LibreCrawl starts at the homepage, follows every link it finds, and flags problems like broken links and slow pages into a report."
      className="w-full h-auto"
    >
      <defs>
        <marker id="arrowhead-4" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto">
          <path d="M0,0 L8,4 L0,8 Z" className={arrowFill} />
        </marker>
      </defs>

      {/* Start page */}
      <rect x="20" y="80" width="120" height="55" rx="10" className={accentBox} strokeWidth="1.5" />
      <text x="80" y="112" textAnchor="middle" className={label}>
        Home page
      </text>

      {/* Branch lines */}
      <line x1="140" y1="107" x2="230" y2="35" className={arrow} strokeWidth="1.5" markerEnd="url(#arrowhead-4)" />
      <line x1="140" y1="107" x2="230" y2="107" className={arrow} strokeWidth="1.5" markerEnd="url(#arrowhead-4)" />
      <line x1="140" y1="107" x2="230" y2="180" className={arrow} strokeWidth="1.5" markerEnd="url(#arrowhead-4)" />

      {/* Page A - fine */}
      <rect x="235" y="10" width="120" height="50" rx="10" className={box} strokeWidth="1.5" />
      <text x="295" y="40" textAnchor="middle" className={label}>
        Page A
      </text>

      {/* Page B - broken link */}
      <rect x="235" y="82" width="120" height="50" rx="10" className={warnBox} strokeWidth="1.5" />
      <text x="295" y="105" textAnchor="middle" className={label}>
        Page B
      </text>
      <text x="295" y="122" textAnchor="middle" className={subLabel}>
        broken link found
      </text>

      {/* Page C - slow */}
      <rect x="235" y="155" width="120" height="50" rx="10" className={box} strokeWidth="1.5" />
      <text x="295" y="178" textAnchor="middle" className={label}>
        Page C
      </text>
      <text x="295" y="195" textAnchor="middle" className={subLabel}>
        loads slowly
      </text>

      {/* Arrows into report */}
      <line x1="355" y1="35" x2="440" y2="90" className={arrow} strokeWidth="1.5" markerEnd="url(#arrowhead-4)" />
      <line x1="355" y1="107" x2="440" y2="107" className={arrow} strokeWidth="1.5" markerEnd="url(#arrowhead-4)" />
      <line x1="355" y1="180" x2="440" y2="122" className={arrow} strokeWidth="1.5" markerEnd="url(#arrowhead-4)" />

      {/* Report */}
      <rect x="445" y="65" width="175" height="85" rx="10" className={accentBox} strokeWidth="1.5" />
      <text x="532" y="92" textAnchor="middle" className={label}>
        Crawl report
      </text>
      <text x="532" y="112" textAnchor="middle" className={subLabel}>
        1 broken link
      </text>
      <text x="532" y="128" textAnchor="middle" className={subLabel}>
        1 slow page
      </text>
    </svg>
  );
}
