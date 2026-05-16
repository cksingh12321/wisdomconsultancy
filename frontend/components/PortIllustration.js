// Decorative port / shipping SVG used on About + Home.
export default function PortIllustration() {
  return (
    <svg viewBox="0 0 400 500" preserveAspectRatio="xMidYMid slice">
      <defs>
        <linearGradient id="sea" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#1e3a5f" stopOpacity="0.6" />
          <stop offset="100%" stopColor="#0b2545" stopOpacity="0.9" />
        </linearGradient>
      </defs>
      <g opacity="0.15" stroke="#c9a961" strokeWidth="1" fill="none">
        <path d="M 0 80 Q 200 70 400 80" />
        <path d="M 0 110 Q 200 100 400 110" />
        <path d="M 0 140 Q 200 130 400 140" />
      </g>
      <circle cx="320" cy="120" r="40" fill="#c9a961" opacity="0.35" />
      <circle cx="320" cy="120" r="22" fill="#e0c177" opacity="0.55" />
      <path d="M 60 320 L 340 320 L 320 360 L 80 360 Z" fill="#0a1f3d" stroke="#c9a961" strokeWidth="1.5" />
      <g>
        <rect x="90" y="270" width="40" height="50" fill="#c9a961" opacity="0.85" />
        <rect x="135" y="270" width="40" height="50" fill="#13315c" stroke="#c9a961" strokeWidth="1" />
        <rect x="180" y="270" width="40" height="50" fill="#c9a961" opacity="0.7" />
        <rect x="225" y="270" width="40" height="50" fill="#13315c" stroke="#c9a961" strokeWidth="1" />
        <rect x="270" y="270" width="40" height="50" fill="#c9a961" opacity="0.85" />
        <rect x="115" y="220" width="40" height="50" fill="#13315c" stroke="#c9a961" strokeWidth="1" />
        <rect x="200" y="220" width="40" height="50" fill="#c9a961" opacity="0.7" />
        <rect x="245" y="220" width="40" height="50" fill="#13315c" stroke="#c9a961" strokeWidth="1" />
      </g>
      <g stroke="#c9a961" strokeWidth="2" fill="none">
        <line x1="370" y1="180" x2="370" y2="320" />
        <line x1="370" y1="180" x2="280" y2="180" />
        <line x1="280" y1="180" x2="280" y2="220" />
      </g>
      <rect x="0" y="360" width="400" height="140" fill="url(#sea)" />
      <g opacity="0.5" stroke="#c9a961" strokeWidth="1" fill="none">
        <path d="M 0 380 Q 100 372 200 380 T 400 380" />
        <path d="M 0 410 Q 100 402 200 410 T 400 410" />
        <path d="M 0 440 Q 100 432 200 440 T 400 440" />
      </g>
    </svg>
  );
}
