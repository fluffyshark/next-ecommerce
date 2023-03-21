"use client"

import React, { useState } from "react";

function LogoNike({ style }) {
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
      width="104.304"
      height="37.187"
      viewBox="0 0 27.597 9.839"
    >
      <path
        strokeWidth="0.072"
        d="M86.684 130.85c-.742-.124-1.328-.428-1.827-.95-.885-.924-.928-2.74-.104-4.369.303-.597.922-1.593 1.329-2.137.423-.565 1.954-2.308 2.035-2.316.03 0-.087.278-.261.624-.467.93-.693 1.708-.693 2.383 0 1.631.827 2.472 2.59 2.633.897.082-.14.338 16.295-4.033 3.047-.81 5.588-1.49 5.647-1.511.072-.026.084-.014.036.034-.095.094-20.009 8.691-20.918 9.03-.897.335-1.694.522-2.632.616-.837.084-.971.084-1.497 0z"
        transform="translate(-84.163 -121.08)"
      ></path>
    </svg>
  );
}

export default LogoNike;
