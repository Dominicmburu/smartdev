import { box, accentBox, label, subLabel, arrow } from "./shared";

// HTML as a tree of nodes: document -> html -> body -> a couple of
// elements, with one highlighted as the result of a querySelector call.
export function DomTreeDiagram() {
  return (
    <svg
      viewBox="0 0 560 220"
      role="img"
      aria-label="The DOM represents HTML as a tree of nodes: document, then html, then body, then individual elements. document.querySelector walks this tree to find one."
      className="w-full h-auto"
    >
      <rect x="230" y="10" width="100" height="36" rx="6" className={box} strokeWidth="1.5" />
      <text x="280" y="33" textAnchor="middle" className={subLabel}>
        document
      </text>

      <line x1="280" y1="46" x2="280" y2="70" className={arrow} strokeWidth="1.5" />
      <rect x="230" y="70" width="100" height="36" rx="6" className={box} strokeWidth="1.5" />
      <text x="280" y="93" textAnchor="middle" className={subLabel}>
        &lt;html&gt;
      </text>

      <line x1="280" y1="106" x2="280" y2="130" className={arrow} strokeWidth="1.5" />
      <rect x="230" y="130" width="100" height="36" rx="6" className={box} strokeWidth="1.5" />
      <text x="280" y="153" textAnchor="middle" className={subLabel}>
        &lt;body&gt;
      </text>

      <line x1="260" y1="166" x2="150" y2="185" className={arrow} strokeWidth="1.5" />
      <line x1="300" y1="166" x2="410" y2="185" className={arrow} strokeWidth="1.5" />

      <rect x="90" y="185" width="120" height="30" rx="6" className={box} strokeWidth="1.5" />
      <text x="150" y="205" textAnchor="middle" className={subLabel}>
        &lt;h1&gt;
      </text>

      <rect x="350" y="185" width="120" height="30" rx="6" className={accentBox} strokeWidth="1.5" />
      <text x="410" y="205" textAnchor="middle" className={label}>
        &lt;button id=&quot;go&quot;&gt;
      </text>
    </svg>
  );
}
