import { box, accentBox, label, subLabel, arrow, arrowFill } from "./shared";

// A pageview loads a whole new page; an event fires from an interaction on
// the same page, without a new page load.
export function EventVsPageviewDiagram() {
  return (
    <svg
      viewBox="0 0 700 200"
      role="img"
      aria-label="A pageview is recorded when a whole new page loads, like clicking from Home to Menu. An event is recorded when something happens on the page without loading a new one, like pressing a play button on a video."
      className="w-full h-auto"
    >
      <defs>
        <marker id="arrowhead-11" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto">
          <path d="M0,0 L8,4 L0,8 Z" className={arrowFill} />
        </marker>
      </defs>

      <text x="20" y="20" className={subLabel}>
        Pageview: a new page loads
      </text>
      <rect x="20" y="35" width="130" height="50" rx="10" className={box} strokeWidth="1.5" />
      <text x="85" y="65" textAnchor="middle" className={label}>
        Home
      </text>
      <line x1="150" y1="60" x2="203" y2="60" className={arrow} strokeWidth="1.5" markerEnd="url(#arrowhead-11)" />
      <rect x="210" y="35" width="130" height="50" rx="10" className={accentBox} strokeWidth="1.5" />
      <text x="275" y="65" textAnchor="middle" className={label}>
        Menu
      </text>
      <text x="180" y="105" textAnchor="middle" className={subLabel}>
        recorded as a pageview
      </text>

      <text x="420" y="20" className={subLabel}>
        Event: something happens, same page
      </text>
      <rect x="420" y="35" width="260" height="120" rx="10" className={box} strokeWidth="1.5" />
      <text x="550" y="60" textAnchor="middle" className={label}>
        Product video page
      </text>
      <circle cx="550" cy="100" r="22" className={accentBox} strokeWidth="1.5" />
      <text x="550" y="107" textAnchor="middle" className={label}>
        ▶
      </text>
      <text x="550" y="140" textAnchor="middle" className={subLabel}>
        pressing play fires an event —
      </text>
      <text x="550" y="185" textAnchor="middle" className={subLabel}>
        no new page loads, but Matomo still records it
      </text>
    </svg>
  );
}
