/**
 * Schéma réseau simplifié (SVG) affiché dans l'accueil.
 * Les pointillés animés représentent le trafic entre les équipements.
 */
const noeuds = [
  { x: 170, y: 16, w: 140, label: "INTERNET" },
  { x: 170, y: 104, w: 140, label: "PARE-FEU" },
  { x: 170, y: 192, w: 140, label: "SWITCH L3" },
  { x: 12, y: 302, w: 136, label: "SRV AD / DNS" },
  { x: 172, y: 302, w: 136, label: "SRV WEB" },
  { x: 332, y: 302, w: 136, label: "POSTES" },
];

export default function NetworkDiagram() {
  return (
    <svg
      className="diagram"
      viewBox="0 0 480 372"
      role="img"
      aria-label="Schéma réseau simplifié : internet, pare-feu, commutateur, puis serveurs et postes"
    >
      <g className="diagram__links" fill="none">
        <path d="M240 56V104" />
        <path d="M240 144V192" />
        <path d="M240 232V268H80V302" />
        <path d="M240 232V302" />
        <path d="M240 268H400V302" />
      </g>
      {noeuds.map((n) => (
        <g key={n.label}>
          <rect x={n.x} y={n.y} width={n.w} height="40" className="diagram__node" />
          <text x={n.x + n.w / 2} y={n.y + 25} textAnchor="middle" className="diagram__text">
            {n.label}
          </text>
        </g>
      ))}
      <text x="252" y="84" className="diagram__note">WAN</text>
      <text x="252" y="172" className="diagram__note">DMZ / LAN</text>
      <text x="252" y="258" className="diagram__note">VLAN 10 · 20 · 30</text>
    </svg>
  );
}
