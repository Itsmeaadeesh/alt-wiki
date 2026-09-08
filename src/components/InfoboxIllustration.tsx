import React from "react";

interface Props {
  type?: "specimen" | "history" | "device" | "geography" | "event" | "portrait" | string;
  title: string;
}

export const InfoboxIllustration: React.FC<Props> = ({ type = "history", title }) => {
  return (
    <div className="w-full bg-[#f0f2f5] border border-[#c8ccd1] p-3 flex flex-col items-center justify-center min-h-[160px] text-[#4a5568] relative overflow-hidden group">
      {/* Background paper texture effect */}
      <div className="absolute inset-0 bg-[radial-gradient(#d1d5db_1px,transparent_1px)] [background-size:12px_12px] opacity-40" />

      {type === "specimen" && (
        <svg className="w-24 h-24 stroke-[#3d4852] fill-none relative z-10" viewBox="0 0 100 100">
          {/* Stylized Archosaur/Dinosaur skeletal profile */}
          <path d="M 15,65 Q 25,60 35,50 Q 50,45 65,30 Q 75,20 85,22 Q 90,25 85,32 Q 78,35 70,42 Q 60,52 65,70" strokeWidth="2" strokeLinecap="round" />
          <path d="M 65,70 L 60,88 M 65,70 L 72,88" strokeWidth="2" />
          <path d="M 38,52 L 32,75 M 38,52 L 44,75" strokeWidth="1.8" />
          <path d="M 35,50 Q 20,55 5,72" strokeWidth="2" strokeLinecap="round" />
          <circle cx="82" cy="24" r="1.5" fill="#3d4852" />
          <text x="50" y="96" fontSize="7" fill="#6b7280" textAnchor="middle" fontFamily="sans-serif">FIG 1.1 — ARCHOSAUROID MORPHOLOGY</text>
        </svg>
      )}

      {type === "device" && (
        <svg className="w-24 h-24 stroke-[#3d4852] fill-none relative z-10" viewBox="0 0 100 100">
          {/* Babbage/Analytical Steampunk Cog arrays */}
          <circle cx="45" cy="45" r="22" strokeWidth="1.8" strokeDasharray="4,2" />
          <circle cx="45" cy="45" r="12" strokeWidth="1.5" />
          <circle cx="70" cy="65" r="16" strokeWidth="1.8" strokeDasharray="3,2" />
          <circle cx="70" cy="65" r="8" strokeWidth="1.2" />
          <path d="M 20,45 L 70,45 M 45,20 L 45,70" strokeWidth="1" opacity="0.6" />
          <path d="M 15,85 L 85,85" strokeWidth="2" />
          <text x="50" y="96" fontSize="7" fill="#6b7280" textAnchor="middle" fontFamily="sans-serif">PATENT BLUEPRINT 1842-B</text>
        </svg>
      )}

      {type === "history" && (
        <svg className="w-24 h-24 stroke-[#3d4852] fill-none relative z-10" viewBox="0 0 100 100">
          {/* Roman Steam Boiler & Temple Colonnade */}
          <rect x="25" y="45" width="50" height="35" rx="3" strokeWidth="2" />
          <path d="M 35,45 L 35,25 Q 35,20 40,20 L 45,20 L 45,45" strokeWidth="1.8" />
          <path d="M 55,45 L 55,18 L 62,18 L 62,45" strokeWidth="1.8" />
          <circle cx="50" cy="62" r="8" strokeWidth="1.5" />
          <path d="M 15,85 L 85,85" strokeWidth="2.5" />
          <path d="M 10,90 L 90,90" strokeWidth="1" />
          {/* Steam plume */}
          <path d="M 40,16 Q 45,8 55,12 Q 65,6 72,14" strokeWidth="1.2" strokeDasharray="2,2" opacity="0.7" />
          <text x="50" y="98" fontSize="7" fill="#6b7280" textAnchor="middle" fontFamily="sans-serif">IMPERIAL ARCHIVAL RECONSTRUCTION</text>
        </svg>
      )}

      {type !== "specimen" && type !== "device" && type !== "history" && (
        <svg className="w-24 h-24 stroke-[#3d4852] fill-none relative z-10" viewBox="0 0 100 100">
          {/* General Encyclopedic Seal / Document engraving */}
          <circle cx="50" cy="48" r="32" strokeWidth="1.8" />
          <circle cx="50" cy="48" r="26" strokeWidth="1" strokeDasharray="3,1.5" />
          <path d="M 38,40 L 62,40 M 35,48 L 65,48 M 40,56 L 60,56" strokeWidth="1.2" />
          <polygon points="50,22 53,28 60,28 54,32 57,38 50,34 43,38 46,32 40,28 47,28" fill="#52606d" stroke="none" />
          <text x="50" y="96" fontSize="7" fill="#6b7280" textAnchor="middle" fontFamily="sans-serif">DOC. ARCHIVUM {title.slice(0, 16).toUpperCase()}</text>
        </svg>
      )}
    </div>
  );
};
