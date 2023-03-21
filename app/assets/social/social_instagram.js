"use client"

import React, { useState } from "react";

function SocialInstagram({ style }) {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseOver = () => {
    setIsHovered(true);
  };
  const handleMouseOut = () => {
    setIsHovered(false);
  };
  
  return (
    <svg
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
      fill={isHovered ? style.logoHoverColor : style.logoColor}
      cursor={"pointer"}
      xmlns="http://www.w3.org/2000/svg"
      width="34.561"
      height="34.561"
      version="1.1"
      viewBox="0 0 9.144 9.144"
    >
      <g fillOpacity="1" transform="translate(-69.586 -95.132)">
        <circle
          cx="74.158"
          cy="99.704"
          r="4.572"
          fill={isHovered ? style.circleHoverColor : style.circleColor}
          strokeWidth="0.11"
        ></circle>
        <path
          strokeWidth="0.01"
          d="M72.622 101.904a.891.891 0 01-.514-.337.921.921 0 01-.144-.326c-.018-.09-.019-.147-.016-1.568l.003-1.475.022-.072a.88.88 0 01.676-.614c.044-.012.517-.012 1.545-.012 1.669.012 1.513 0 1.69.08.23.11.395.315.462.57l.022.082V101.177l-.022.083a1.21 1.21 0 01-.071.183.814.814 0 01-.391.385c-.176.086-.018.08-1.705.08-1.217 0-1.508 0-1.557-.013zm2.965-.42a.433.433 0 00.29-.199c.063-.107.061-.076.061-1.097v-.927h-.659l.028.082a1.21 1.21 0 01-1.98 1.245 1.198 1.198 0 01-.294-1.323s-.15-.012-.331-.012h-.331v.892c0 .504.003.923.009.964.023.18.164.333.336.366.067.014 2.8.015 2.87 0zm-1.254-1.017a.772.772 0 00.578-.944.801.801 0 00-.554-.566 1.112 1.112 0 00-.415 0 .777.777 0 00-.399 1.224.8.8 0 00.469.289.853.853 0 00.321-.013zm1.526-2.086v-.375h-.751v.751h.751z"
        ></path>
      </g>
    </svg>
  );
}

export default SocialInstagram;
