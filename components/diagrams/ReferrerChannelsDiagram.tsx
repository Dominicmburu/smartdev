import { box, accentBox, label, subLabel, arrow, arrowFill } from "./shared";

// Four referrer channel types all funnel into visits on the same site.
export function ReferrerChannelsDiagram() {
  const channels = [
    { y: 15, text: "Search engines", sub: "Google, Bing…" },
    { y: 75, text: "Social media", sub: "Instagram, Facebook…" },
    { y: 135, text: "Other websites", sub: "a link on another site" },
    { y: 195, text: "Direct", sub: "typed the address, or a bookmark" },
  ];

  return (
    <svg
      viewBox="0 0 700 260"
      role="img"
      aria-label="Four referrer channels — search engines, social media, other websites, and direct visits — all funnel into visits on your site, and Matomo records which channel each visit came from."
      className="w-full h-auto"
    >
      <defs>
        <marker id="arrowhead-10" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto">
          <path d="M0,0 L8,4 L0,8 Z" className={arrowFill} />
        </marker>
      </defs>

      {channels.map((c) => (
        <g key={c.text}>
          <rect x="20" y={c.y} width="230" height="50" rx="10" className={box} strokeWidth="1.5" />
          <text x="135" y={c.y + 22} textAnchor="middle" className={label}>
            {c.text}
          </text>
          <text x="135" y={c.y + 40} textAnchor="middle" className={subLabel}>
            {c.sub}
          </text>
          <line
            x1="250"
            y1={c.y + 25}
            x2="443"
            y2="130"
            className={arrow}
            strokeWidth="1.5"
            markerEnd="url(#arrowhead-10)"
          />
        </g>
      ))}

      <rect x="450" y="105" width="230" height="50" rx="10" className={accentBox} strokeWidth="1.5" />
      <text x="565" y="127" textAnchor="middle" className={label}>
        Your site
      </text>
      <text x="565" y="145" textAnchor="middle" className={subLabel}>
        each visit tagged with its channel
      </text>
    </svg>
  );
}
