import React from "react";

interface GlobeProps {
  size?: number;
  className?: string;
}

export const WikipediaGlobeLogo: React.FC<GlobeProps> = ({ size = 160, className = "" }) => {
  return (
    <div
      style={{ width: size, height: size }}
      className={`relative select-none inline-flex items-center justify-center ${className}`}
    >
      <svg
        viewBox="0 0 200 200"
        width={size}
        height={size}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="filter drop-shadow-sm"
      >
        <defs>
          <radialGradient id="sphereShade" cx="38%" cy="32%" r="65%">
            <stop offset="0%" stopColor="#ffffff" />
            <stop offset="45%" stopColor="#f4f5f7" />
            <stop offset="75%" stopColor="#d5dbe2" />
            <stop offset="95%" stopColor="#a7b0bc" />
            <stop offset="100%" stopColor="#8792a0" />
          </radialGradient>
          <radialGradient id="tabShade" cx="30%" cy="30%" r="70%">
            <stop offset="0%" stopColor="#ffffff" />
            <stop offset="60%" stopColor="#e3e7ed" />
            <stop offset="100%" stopColor="#b4becc" />
          </radialGradient>
          <filter id="shadow" x="-10%" y="-10%" width="130%" height="130%">
            <feDropShadow dx="0" dy="2" stdDeviation="2" floodColor="#000000" floodOpacity="0.15" />
          </filter>
        </defs>

        {/* Outer sphere base */}
        <circle cx="100" cy="100" r="88" fill="url(#sphereShade)" stroke="#8e99a8" strokeWidth="1.5" />

        {/* Puzzle latitudinal and longitudinal seams */}
        <path
          d="M 28,100 C 28,60 172,60 172,100 C 172,140 28,140 28,100 Z"
          stroke="#737e8d"
          strokeWidth="1.2"
          strokeDasharray="2,1"
          opacity="0.5"
        />
        <path
          d="M 100,12 C 145,12 145,188 100,188 C 55,188 55,12 100,12 Z"
          stroke="#737e8d"
          strokeWidth="1.2"
          opacity="0.4"
        />

        {/* Individual puzzle piece outlines & interlocking jigsaw knobs */}
        {/* Top left piece */}
        <path
          d="M 52,42 C 60,35 75,32 90,32 C 95,37 96,44 91,48 C 86,52 87,58 92,60 C 80,62 68,66 58,72 C 55,65 48,64 45,69 C 42,74 48,82 45,86 C 36,70 42,54 52,42 Z"
          fill="url(#tabShade)"
          stroke="#697585"
          strokeWidth="1.2"
        />
        {/* Top right piece with missing crown gap (authentic Wikipedia design) */}
        <path
          d="M 108,32 C 122,33 138,38 148,46 C 145,54 150,60 156,62 C 148,74 140,82 138,94 C 130,90 124,93 124,100 C 114,98 106,94 100,88 C 104,82 103,75 98,72 C 102,60 105,45 108,32 Z"
          fill="url(#tabShade)"
          stroke="#697585"
          strokeWidth="1.2"
        />

        {/* Center left piece with Greek Omega 'Ω' */}
        <path
          d="M 32,92 C 45,88 50,86 64,88 C 68,96 74,96 76,88 C 90,90 98,96 102,106 C 96,112 96,118 102,122 C 90,126 80,132 72,142 C 66,136 60,138 60,146 C 45,138 35,124 30,108 C 36,104 36,96 32,92 Z"
          fill="url(#tabShade)"
          stroke="#697585"
          strokeWidth="1.2"
        />

        {/* Center right piece with Latin 'W' */}
        <path
          d="M 104,106 C 118,102 130,98 146,102 C 148,110 154,112 158,106 C 166,116 168,130 166,144 C 158,142 154,146 156,152 C 142,158 128,162 114,162 C 112,154 106,152 102,158 C 98,144 100,130 102,122 C 108,118 108,112 104,106 Z"
          fill="url(#tabShade)"
          stroke="#697585"
          strokeWidth="1.2"
        />

        {/* Puzzle notch accents */}
        <circle cx="70" cy="90" r="4" fill="#a4afbe" stroke="#697585" strokeWidth="0.8" />
        <circle cx="134" cy="100" r="4.5" fill="#a4afbe" stroke="#697585" strokeWidth="0.8" />
        <circle cx="102" cy="116" r="4" fill="#a4afbe" stroke="#697585" strokeWidth="0.8" />

        {/* Wikipedia glyphs on puzzle pieces */}
        {/* Latin W */}
        <text
          x="132"
          y="136"
          fontFamily="Georgia, serif"
          fontSize="22"
          fontWeight="bold"
          fill="#333d4b"
          textAnchor="middle"
        >
          W
        </text>

        {/* Greek Omega Ω */}
        <text
          x="62"
          y="118"
          fontFamily="Georgia, serif"
          fontSize="20"
          fontWeight="bold"
          fill="#333d4b"
          textAnchor="middle"
        >
          Ω
        </text>

        {/* Cyrillic И */}
        <text
          x="70"
          y="62"
          fontFamily="Georgia, serif"
          fontSize="17"
          fontWeight="bold"
          fill="#3e4958"
          textAnchor="middle"
        >
          И
        </text>

        {/* Japanese あ */}
        <text
          x="126"
          y="68"
          fontFamily="sans-serif"
          fontSize="16"
          fontWeight="bold"
          fill="#3e4958"
          textAnchor="middle"
        >
          あ
        </text>

        {/* Arabic ض */}
        <text
          x="88"
          y="158"
          fontFamily="serif"
          fontSize="16"
          fontWeight="bold"
          fill="#4b5768"
          textAnchor="middle"
        >
          ض
        </text>

        {/* Chinese 祖 */}
        <text
          x="142"
          y="152"
          fontFamily="sans-serif"
          fontSize="14"
          fontWeight="bold"
          fill="#4b5768"
          textAnchor="middle"
        >
          祖
        </text>

        {/* Devanagari वि */}
        <text
          x="100"
          y="62"
          fontFamily="sans-serif"
          fontSize="14"
          fontWeight="bold"
          fill="#4b5768"
          textAnchor="middle"
        >
          वि
        </text>

        {/* Subtle top sphere highlight crescent */}
        <path
          d="M 36,70 A 84,84 0 0,1 150,38 A 82,82 0 0,0 48,78 Z"
          fill="#ffffff"
          opacity="0.35"
        />
      </svg>
    </div>
  );
};
