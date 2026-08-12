import { box, accentBox, warnBox, label, subLabel, arrow, arrowFill } from "./shared";

// LibreCrawl requests four pages; each comes back with a different status-code family.
export function StatusCodeDiagram() {
  const rows = [
    { y: 15, code: "200", desc: "Page loaded fine", style: accentBox },
    { y: 75, code: "301", desc: "Redirected (permanent)", style: box },
    { y: 135, code: "404", desc: "Page not found", style: warnBox },
    { y: 195, code: "500", desc: "Server error", style: warnBox },
  ];

  return (
    <svg
      viewBox="0 0 700 260"
      role="img"
      aria-label="LibreCrawl requests four pages and gets back four different status codes: 200 OK, 301 redirect, 404 not found, and 500 server error."
      className="w-full h-auto"
    >
      <defs>
        <marker id="arrowhead-5" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto">
          <path d="M0,0 L8,4 L0,8 Z" className={arrowFill} />
        </marker>
      </defs>

      {/* LibreCrawl */}
      <rect x="20" y="95" width="150" height="70" rx="10" className={box} strokeWidth="1.5" />
      <text x="95" y="126" textAnchor="middle" className={label}>
        LibreCrawl
      </text>
      <text x="95" y="144" textAnchor="middle" className={subLabel}>
        requests each page
      </text>

      {rows.map((row) => (
        <g key={row.code}>
          <line
            x1="175"
            y1="130"
            x2="345"
            y2={row.y + 25}
            className={arrow}
            strokeWidth="1.5"
            markerEnd="url(#arrowhead-5)"
          />
          <rect x="350" y={row.y} width="330" height="50" rx="10" className={row.style} strokeWidth="1.5" />
          <text x="375" y={row.y + 32} textAnchor="start" className={label} style={{ fontVariantNumeric: "tabular-nums" }}>
            {row.code}
          </text>
          <text x="430" y={row.y + 32} textAnchor="start" className={subLabel}>
            {row.desc}
          </text>
        </g>
      ))}
    </svg>
  );
}
