import { box, accentBox, label, subLabel, arrow, arrowFill, arrowLabel } from "./shared";

// A user click fires an event, the attached listener function runs, and
// that function updates the DOM — a one-way loop back to what's on screen.
export function EventFlowDiagram() {
  return (
    <svg
      viewBox="0 0 640 170"
      role="img"
      aria-label="A user clicks a button, which fires a click event. The listener function attached to that event runs, and updates the page."
      className="w-full h-auto"
    >
      <defs>
        <marker id="arrowhead-event" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto">
          <path d="M0,0 L8,4 L0,8 Z" className={arrowFill} />
        </marker>
      </defs>

      <rect x="10" y="55" width="150" height="70" rx="10" className={box} strokeWidth="1.5" />
      <text x="85" y="82" textAnchor="middle" className={label}>
        User clicks
      </text>
      <text x="85" y="100" textAnchor="middle" className={subLabel}>
        a button on the page
      </text>

      <line x1="165" y1="90" x2="223" y2="90" className={arrow} strokeWidth="1.5" markerEnd="url(#arrowhead-event)" />
      <text x="194" y="70" textAnchor="middle" className={arrowLabel}>
        fires
      </text>

      <rect x="230" y="55" width="180" height="70" rx="10" className={accentBox} strokeWidth="1.5" />
      <text x="320" y="82" textAnchor="middle" className={label}>
        click event
      </text>
      <text x="320" y="100" textAnchor="middle" className={subLabel}>
        the listener function runs
      </text>

      <line x1="415" y1="90" x2="473" y2="90" className={arrow} strokeWidth="1.5" markerEnd="url(#arrowhead-event)" />
      <text x="444" y="70" textAnchor="middle" className={arrowLabel}>
        updates
      </text>

      <rect x="480" y="55" width="150" height="70" rx="10" className={box} strokeWidth="1.5" />
      <text x="555" y="82" textAnchor="middle" className={label}>
        The page
      </text>
      <text x="555" y="100" textAnchor="middle" className={subLabel}>
        DOM changes, visibly
      </text>
    </svg>
  );
}
