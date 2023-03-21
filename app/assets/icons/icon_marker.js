"use client"

import React, { useState } from "react";

function IconMarker({style}) {

  const [isHovered, setIsHovered] = useState(false);

  const handleMouseOver = () => {setIsHovered(true);};
  const handleMouseOut = () => {setIsHovered(false);};
 
 
  return (
    <svg
    onMouseOver={handleMouseOver}
    onMouseOut={handleMouseOut}
    fill={isHovered ? style.hoverColor : style.color}
    cursor={"pointer"}
    xmlns="http://www.w3.org/2000/svg"
      width="11"
      height="16"
      version="1.1"
      viewBox="0 0 2.509 3.586"
    >
      <g transform="translate(-72.492 -97.867)">
        <path
          strokeWidth="0.008"
          d="M73.687 101.39a8.413 8.413 0 01-.757-1.044 5.444 5.444 0 01-.287-.56c-.119-.303-.158-.492-.15-.718.008-.197.042-.335.129-.51.168-.342.486-.587.87-.673.07-.015.109-.018.255-.018.147 0 .186 0 .255.018a1.27 1.27 0 01.979.979c.027.122.027.372 0 .506-.097.479-.451 1.12-.993 1.799-.114.143-.23.281-.24.284a.494.494 0 01-.06-.063zm.174-1.837a.46.46 0 00.203-.118.446.446 0 00-.317-.763.447.447 0 00-.317.763.466.466 0 00.2.118.56.56 0 00.231 0z"
        ></path>
      </g>
    </svg>
  );
}

export default IconMarker;
