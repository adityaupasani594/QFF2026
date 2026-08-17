// Inline SVG asset components — no external file dependencies

// Qiskit Bloch Sphere logo
export function BlochSphere({ className = '' }) {
  return (
    <svg className={className} viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="60" cy="60" r="58" fill="#e5e7eb" />
      <circle cx="60" cy="60" r="48" stroke="#1f1f1f" strokeWidth="2.2" fill="none" />
      <ellipse cx="60" cy="35" rx="28" ry="8" stroke="#1f1f1f" strokeWidth="1.8" fill="none" />
      <ellipse cx="60" cy="52" rx="38" ry="10" stroke="#1f1f1f" strokeWidth="1.8" fill="none" />
      <ellipse cx="60" cy="70" rx="42" ry="11" stroke="#1f1f1f" strokeWidth="1.8" fill="none" />
      <ellipse cx="60" cy="88" rx="30" ry="8" stroke="#1f1f1f" strokeWidth="1.8" fill="none" />
      <line x1="34" y1="28" x2="86" y2="93" stroke="#1f1f1f" strokeWidth="2" />
      <circle cx="34" cy="28" r="5" stroke="#1f1f1f" strokeWidth="2" fill="#e5e7eb" />
      <circle cx="86" cy="93" r="5" stroke="#1f1f1f" strokeWidth="2" fill="#e5e7eb" />
    </svg>
  );
}

// Fall Fest pill sticker
export function FallFestSticker({ className = '' }) {
  return (
    <svg className={className} viewBox="0 0 200 80" xmlns="http://www.w3.org/2000/svg">
      <rect x="2" y="2" width="196" height="76" rx="38" fill="#c4b5fd" />
      <text x="100" y="48" fontFamily="Georgia, serif" fontSize="28" fontWeight="500" fill="#1e1b4b" textAnchor="middle">Fall Fest</text>
    </svg>
  );
}

// 2026 sticker
export function Sticker2026({ className = '' }) {
  return (
    <svg className={className} viewBox="0 0 200 90" xmlns="http://www.w3.org/2000/svg">
      <rect x="2" y="2" width="196" height="86" rx="40" fill="#f3f4f6" />
      <text x="100" y="56" fontFamily="Georgia, serif" fontSize="42" fontWeight="300" fill="#111827" textAnchor="middle">2026</text>
      <circle cx="100" cy="45" r="3" fill="#111827" />
    </svg>
  );
}

// Qiskit hummingbirds sticker
export function QiskitBirds({ className = '' }) {
  return (
    <svg className={className} viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <circle cx="100" cy="100" r="98" fill="#dde9ff" />
      {/* Cloud 1 */}
      <ellipse cx="55" cy="60" rx="28" ry="16" fill="white" opacity="0.85" />
      {/* Cloud 2 */}
      <ellipse cx="145" cy="130" rx="28" ry="14" fill="white" opacity="0.85" />
      {/* Bird 1 - purple/lavender */}
      <ellipse cx="72" cy="108" rx="20" ry="14" fill="#c4b5fd" />
      <ellipse cx="58" cy="100" rx="12" ry="8" fill="#a78bfa" />
      <polygon points="72,108 90,95 88,115" fill="#4338ca" opacity="0.8" />
      <ellipse cx="72" cy="116" rx="8" ry="4" fill="#8b5cf6" />
      <line x1="56" y1="100" x2="46" y2="97" stroke="#1e1b4b" strokeWidth="1.5" strokeLinecap="round" />
      <circle cx="60" cy="102" r="2.5" fill="#1e1b4b" />
      {/* Bird 2 - pink */}
      <ellipse cx="125" cy="82" rx="20" ry="13" fill="#f9a8d4" />
      <ellipse cx="112" cy="76" rx="11" ry="7" fill="#ec4899" />
      <polygon points="122,76 142,62 140,80" fill="#3730a3" opacity="0.85" />
      <ellipse cx="126" cy="88" rx="7" ry="4" fill="#a855f7" />
      <line x1="110" y1="76" x2="100" y2="73" stroke="#1e1b4b" strokeWidth="1.5" strokeLinecap="round" />
      <circle cx="113" cy="77" r="2.5" fill="#1e1b4b" />
    </svg>
  );
}

// VESIT Logo text version
export function VESITLogo({ className = '' }) {
  return (
    <svg className={className} viewBox="0 0 300 70" xmlns="http://www.w3.org/2000/svg">
      <rect x="2" y="2" width="62" height="66" rx="6" fill="#f5a623" stroke="#c67c1a" strokeWidth="1.5"/>
      <text x="33" y="22" fontFamily="Arial, sans-serif" fontSize="9" fontWeight="bold" fill="#8b0000" textAnchor="middle">VESIT</text>
      <text x="33" y="54" fontFamily="Arial, sans-serif" fontSize="8" fontWeight="bold" fill="#8b0000" textAnchor="middle">V.E.S.</text>
      <text x="33" y="63" fontFamily="Arial, sans-serif" fontSize="5.5" fill="#8b0000" textAnchor="middle">Since 1962</text>
      <text x="185" y="25" fontFamily="Arial, sans-serif" fontSize="18" fontWeight="bold" fill="#8b0000" textAnchor="middle">VIVEKANAND</text>
      <text x="185" y="43" fontFamily="Arial, sans-serif" fontSize="14" fontWeight="bold" fill="#8b0000" textAnchor="middle">EDUCATION SOCIETY</text>
      <line x1="80" y1="47" x2="290" y2="47" stroke="#999" strokeWidth="0.8"/>
      <text x="185" y="58" fontFamily="Arial, sans-serif" fontSize="10" fontWeight="bold" fill="#1a1a1a" textAnchor="middle">INSTITUTE OF TECHNOLOGY</text>
      <text x="185" y="68" fontFamily="Arial, sans-serif" fontSize="9" fontWeight="bold" fill="#1a1a1a" textAnchor="middle">(AUTONOMOUS)</text>
    </svg>
  );
}
