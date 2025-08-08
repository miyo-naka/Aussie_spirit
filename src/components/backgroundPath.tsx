"use client";
import { useState, useEffect } from "react";

export default function BackgroundPath() {
  const [svgHeight, setSvgHeight] = useState(2000);

  useEffect(() => {
    const updateHeight = () => setSvgHeight(document.body.scrollHeight);
    updateHeight();
    window.addEventListener("resize", updateHeight);
    return () => window.removeEventListener("resize", updateHeight);
  }, []);

  return (
    <svg
      className="absolute top-0 left-0 w-full -z-10"
      height={svgHeight}
      viewBox={`0 0 1440 ${svgHeight}`}
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="none"
    >
      <path
        d={`M720,0 
    C500,${svgHeight * 0.1} 940,${svgHeight * 0.2} 720,${svgHeight * 0.3}
    C540,${svgHeight * 0.4} 900,${svgHeight * 0.5} 720,${svgHeight * 0.6}
    C600,${svgHeight * 0.7} 840,${svgHeight * 0.8} 720,${svgHeight * 0.9}
    C600,${svgHeight * 1.0} 840,${svgHeight * 1.1} 720,${svgHeight * 1.2}`}
        fill="none"
        stroke="#A6C3B9"
        strokeWidth="120"
        strokeLinecap="round"
      />
    </svg>
  );
}
