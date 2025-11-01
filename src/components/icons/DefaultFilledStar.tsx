import React from "react";

interface DefaultFilledStarProps {
  className?: string;
}

const DefaultFilledStar: React.FC<DefaultFilledStarProps> = ({ className }) => {
  return (
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`flex-grow-0 flex-shrink-0 relative ${className || ""}`}
      preserveAspectRatio="xMidYMid meet"
    >
      <g opacity="0.56" filter="url(#filter0_i_2001_898)">
        <path
          d="M21.5821 6.30303C21.8051 5.85135 22.15 5.47107 22.5779 5.20516C23.0057 4.93926 23.4994 4.79834 24.0031 4.79834C24.5069 4.79834 25.0005 4.93926 25.4284 5.20516C25.8562 5.47107 26.2011 5.85135 26.4241 6.30303L30.9871 15.549L41.1901 17.034C41.6889 17.106 42.1576 17.3161 42.5432 17.6406C42.9288 17.9651 43.2158 18.391 43.3719 18.8701C43.528 19.3493 43.5469 19.8626 43.4264 20.3519C43.3059 20.8413 43.0508 21.2871 42.6901 21.639L35.3041 28.836L37.0471 38.997C37.1325 39.4937 37.0772 40.0043 36.8874 40.4712C36.6976 40.9381 36.381 41.3425 35.9733 41.6387C35.5656 41.935 35.0832 42.1112 34.5805 42.1475C34.0779 42.1838 33.5751 42.0787 33.1291 41.844L24.0031 37.044L14.8771 41.844C14.4311 42.0787 13.9283 42.1838 13.4257 42.1475C12.9231 42.1112 12.4406 41.935 12.0329 41.6387C11.6252 41.3425 11.3086 40.9381 11.1188 40.4712C10.9291 40.0043 10.8737 39.4937 10.9591 38.997L12.6991 28.836L5.31912 21.636C4.95933 21.2842 4.70502 20.8388 4.58489 20.3501C4.46477 19.8615 4.4836 19.3489 4.63927 18.8704C4.79493 18.3919 5.08124 17.9663 5.46588 17.6419C5.85052 17.3174 6.31819 17.1069 6.81612 17.034L17.0161 15.549L21.5821 6.30303Z"
          fill="#A68C66"
        />
      </g>
      <defs>
        <filter
          id="filter0_i_2001_898"
          x="4.50684"
          y="4.79834"
          width="38.9978"
          height="40.3561"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy={3} />
          <feGaussianBlur stdDeviation="1.5" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2={-1} k3={1} />
          <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.56 0" />
          <feBlend mode="normal" in2="shape" result="effect1_innerShadow_2001_898" />
        </filter>
      </defs>
    </svg>
  );
};

export default DefaultFilledStar;
