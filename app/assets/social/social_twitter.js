"use client"

import React, { useState } from "react";

function SocialTwitter({ style }) {
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
      <g transform="translate(-82.445 -89.145)">
        <circle
          cx="87.017"
          cy="93.717"
          r="4.572"
          fill={isHovered ? style.circleHoverColor : style.circleColor}
          fillOpacity="1"
          strokeWidth="0.11"
        ></circle>
        <path
          strokeWidth="0.012"
          d="M85.734 96.073a3.25 3.25 0 01-1.14-.366c-.168-.094-.185-.104-.185-.113 0 0 .015-.011.033 0 .162.026.465.01.673-.032.27-.055.56-.177.797-.335l.12-.081-.084-.011a.996.996 0 01-.362-.106 1.073 1.073 0 01-.387-.306 1.213 1.213 0 01-.18-.325c-.009-.033-.008-.033.032-.025.094.02.408 0 .408-.02 0-.011-.017-.012-.039-.017a1.151 1.151 0 01-.308-.146 1.313 1.313 0 01-.328-.342 1.116 1.116 0 01-.158-.52v-.073l.082.036c.1.044.223.08.32.091l.075.011-.073-.06a1.113 1.113 0 01-.252-1.403c.002 0 .082.075.176.173a3.132 3.132 0 002.025.967c.071.01.077.01.068-.015a1.68 1.68 0 01-.007-.409c.061-.38.33-.71.692-.85.362-.14.808-.07 1.1.178.046.038.09.075.099.081.039.028.435-.104.619-.206.042-.024.079-.041.082-.037.01.01-.043.135-.1.23a1.55 1.55 0 01-.3.332l-.036.026h.03c.051 0 .315-.068.435-.114a.481.481 0 01.118-.037c.006.011-.035.065-.12.17-.08.1-.284.298-.362.354l-.056.039-.007.237c-.032 1.155-.712 2.234-1.717 2.725a3.03 3.03 0 01-1.09.307 3.997 3.997 0 01-.693-.01z"
        ></path>
      </g>
    </svg>
  );
}

export default SocialTwitter;
