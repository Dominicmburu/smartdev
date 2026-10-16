import { box, accentBox, warnBox, label, subLabel } from "./shared";

// Synchronous code blocks the next line until it finishes. An async call
// (like fetch) starts, control moves on immediately, and the result arrives
// later without freezing everything else in between.
export function AsyncTimelineDiagram() {
  return (
    <svg
      viewBox="0 0 640 210"
      role="img"
      aria-label="Synchronous code runs one line after another, each waiting for the last. An async call like fetch starts, hands control back immediately, and its result arrives later while other code keeps running in between."
      className="w-full h-auto"
    >
      <text x="20" y="25" className={subLabel}>
        Synchronous
      </text>
      <rect x="20" y="35" width="100" height="36" rx="6" className={box} strokeWidth="1.5" />
      <text x="70" y="57" textAnchor="middle" className={subLabel}>
        line 1
      </text>
      <rect x="130" y="35" width="100" height="36" rx="6" className={box} strokeWidth="1.5" />
      <text x="180" y="57" textAnchor="middle" className={subLabel}>
        line 2 waits
      </text>
      <rect x="240" y="35" width="100" height="36" rx="6" className={box} strokeWidth="1.5" />
      <text x="290" y="57" textAnchor="middle" className={subLabel}>
        line 3 waits
      </text>

      <text x="20" y="110" className={subLabel}>
        Asynchronous (fetch)
      </text>
      <rect x="20" y="120" width="100" height="36" rx="6" className={box} strokeWidth="1.5" />
      <text x="70" y="142" textAnchor="middle" className={subLabel}>
        fetch(url)
      </text>
      <rect x="130" y="120" width="100" height="36" rx="6" className={accentBox} strokeWidth="1.5" />
      <text x="180" y="142" textAnchor="middle" className={label}>
        next line runs
      </text>
      <rect x="240" y="120" width="100" height="36" rx="6" className={accentBox} strokeWidth="1.5" />
      <text x="290" y="142" textAnchor="middle" className={label}>
        ...and more
      </text>
      <rect x="430" y="120" width="170" height="36" rx="6" className={warnBox} strokeWidth="1.5" />
      <text x="515" y="142" textAnchor="middle" className={subLabel}>
        .then() runs once data arrives
      </text>

      <text x="320" y="190" textAnchor="middle" className={subLabel}>
        the gap is the network request — other code isn&apos;t frozen during it
      </text>
    </svg>
  );
}
