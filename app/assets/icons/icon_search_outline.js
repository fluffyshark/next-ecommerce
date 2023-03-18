"use client"

import React, { useState } from "react";

function IconSearchOutline({ style }) {
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
      fill={isHovered ? style.hoverColor : style.color}
      cursor={"pointer"}
      xmlns="http://www.w3.org/2000/svg"
      width="40"
      height="65%"
      version="1.1"
      viewBox="0 0 22.552 22.552"
    >
      <g transform="translate(-92.813 -88.261)">
        <path
          strokeWidth="0.044"
          d="M109.848 106.112l-4.702-4.702-.281.22c-1.993 1.56-4.673 2.032-7.048 1.242-2.506-.834-4.313-2.871-4.906-5.53-.087-.39-.099-.564-.098-1.5 0-.928.013-1.112.098-1.494.69-3.09 2.901-5.297 6.005-5.992.364-.081.561-.094 1.478-.095 1.182 0 1.466.04 2.395.35 2.81.937 4.779 3.494 4.987 6.482.13 1.876-.45 3.774-1.595 5.218l-.222.28 4.703 4.704 4.703 4.704v.236c0 .215-.015.25-.17.407-.157.156-.193.171-.408.171h-.237zm-8.387-4.157c1.307-.288 2.306-.835 3.258-1.788 1.202-1.203 1.83-2.615 1.901-4.28.133-3.083-1.926-5.72-4.983-6.381-.598-.13-1.79-.14-2.388-.02-1.37.274-2.558.916-3.487 1.886-.913.955-1.462 2.014-1.724 3.325-.12.599-.11 1.79.02 2.388.565 2.61 2.546 4.505 5.156 4.931.545.09 1.707.057 2.247-.061z"
        ></path>
      </g>
    </svg>
  );
}

export default IconSearchOutline;
