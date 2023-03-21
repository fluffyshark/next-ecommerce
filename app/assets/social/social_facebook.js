"use client"

import React, { useState } from "react";

function SocialFacebook({ style }) {
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
      <g fillOpacity="1" transform="translate(-80.199 -88.489)">
        <circle
          cx="84.771"
          cy="93.061"
          r="4.572"
          fill={isHovered ? style.circleHoverColor : style.circleColor}
          strokeWidth="0.11"
        ></circle>
        <path
          strokeWidth="0.011"
          d="M84.221 95.829c-.009 0-.072-.011-.141-.017l-.126-.012v-2.378h-.865l.003-.494.003-.494h.858l.005-.472c.003-.39.008-.49.023-.574.088-.476.342-.792.753-.937.184-.066.243-.072.572-.071.243 0 .332.01.48.025.099.012.191.027.205.03l.025.01-.003.419-.003.417-.294.011c-.282.011-.296.011-.371.034a.448.448 0 00-.282.275c-.024.058-.025.073-.028.452l-.003.392h.464c.256 0 .467 0 .47.011.002 0-.029.222-.07.483l-.073.489c0 .01-.086.014-.395.014h-.395l-.003 1.188-.003 1.187-.085.014a8.25 8.25 0 01-.72.018z"
        ></path>
      </g>
    </svg>
  );
}

export default SocialFacebook;
