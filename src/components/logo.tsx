import React from "react";

interface LogoProps {
  className?: string;
  size?: number;
  animate?: boolean;
}

const GeometricLogo: React.FC<LogoProps> = ({
  className = "",
  size = 100,
  animate = false,
}) => {
  return (
    <div
      className={`relative flex items-center justify-center ${className}`}
      style={{ width: size, height: size }}
    >
      <svg
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`w-full h-full text-current ${
          animate ? "animate-spin-slow" : ""
        }`}
        style={{ animationDuration: "20s" }}
      >
        {/* Outer containment circle */}
        <circle
          cx="50"
          cy="50"
          r="48"
          stroke="currentColor"
          strokeWidth="0.5"
          className="opacity-20"
        />

        {/* The Geometric Construct */}
        <g className="transform origin-center">
          {/* Rotated Square */}
          <rect
            x="25"
            y="25"
            width="50"
            height="50"
            stroke="currentColor"
            strokeWidth="1"
            className="transform origin-center rotate-45"
          />

          {/* Inner Circle */}
          <circle
            cx="50"
            cy="50"
            r="15"
            stroke="currentColor"
            strokeWidth="1.5"
          />

          {/* Solid Core */}
          <circle cx="50" cy="50" r="6" fill="currentColor" />

          {/* Connecting Lines (Radar style) */}
          <line
            x1="50"
            y1="2"
            x2="50"
            y2="35"
            stroke="currentColor"
            strokeWidth="0.5"
          />
          <line
            x1="50"
            y1="65"
            x2="50"
            y2="98"
            stroke="currentColor"
            strokeWidth="0.5"
          />
          <line
            x1="2"
            y1="50"
            x2="35"
            y2="50"
            stroke="currentColor"
            strokeWidth="0.5"
          />
          <line
            x1="65"
            y1="50"
            x2="98"
            y2="50"
            stroke="currentColor"
            strokeWidth="0.5"
          />

          {/* Diagonals */}
          <line
            x1="18"
            y1="18"
            x2="38"
            y2="38"
            stroke="currentColor"
            strokeWidth="0.5"
            className="opacity-50"
          />
          <line
            x1="82"
            y1="82"
            x2="62"
            y2="62"
            stroke="currentColor"
            strokeWidth="0.5"
            className="opacity-50"
          />
        </g>
      </svg>
    </div>
  );
};

export default GeometricLogo;
