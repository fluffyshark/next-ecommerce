"use client"

import React, { useState } from "react";

function LogoConverse({ style }) {
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
      width="94.976"
      height="63.881"
      version="1.1"
      viewBox="0 0 25.129 16.902"
    >
      <g transform="translate(-96.973 -132.833)">
        <path
          strokeWidth="0.031"
          d="M101.282 149.683a1.53 1.53 0 01-1.138-1.246c-.167-.988.757-1.89 1.765-1.724.835.138 1.414.912 1.288 1.72a1.548 1.548 0 01-1.915 1.25zm.627-.773a.832.832 0 00.438-.385c.131-.288.049-.673-.185-.865a.745.745 0 00-.727-.143.685.685 0 00-.411.341.581.581 0 00-.093.349c-.001.512.475.854.978.703zm15.541.73c-.397-.102-.815-.317-.813-.42 0-.02.105-.15.233-.289.183-.197.242-.244.28-.22l.215.146c.234.16.456.228.681.207.402-.037.531-.241.246-.389a2.414 2.414 0 00-.623-.167c-.135 0-.522-.215-.688-.382-.26-.26-.305-.586-.129-.931.204-.4.844-.677 1.33-.576.241.05.524.176.776.347l.193.13-.242.266c-.133.146-.254.265-.27.265a.717.717 0 01-.167-.096c-.278-.19-.572-.239-.76-.124-.056.035-.104.08-.106.102-.019.204.15.315.554.365.599.074 1 .441 1.002.915 0 .112-.018.26-.042.327-.063.183-.256.374-.481.476-.175.079-.238.09-.574.098-.291.01-.43-.01-.615-.051zm-19.42-.018c-.673-.185-1.057-.686-1.057-1.382 0-.17.021-.33.062-.462.251-.814 1.148-1.31 1.893-1.048.312.11.967.569.92.644-.02.035-.74.454-.75.438l-.06-.094c-.079-.126-.293-.216-.513-.215-.221.01-.395.073-.538.223-.429.452-.121 1.202.493 1.202.192 0 .365-.074.548-.235.067-.058.126-.087.15-.074.039.022.59.417.622.445.031.028-.308.31-.492.408a2.045 2.045 0 01-.374.149c-.223.058-.693.059-.903 0zm15.748-1.429v-1.413h1.68l.189.09c.331.159.516.43.517.757a.934.934 0 01-.4.727l-.07.05.282.585c.156.322.283.593.283.602 0 .01-.194.016-.432.016h-.432l-.285-.542-.285-.541-.178-.01-.178-.01v1.102h-.691zm1.525-.391c.09-.09.095-.134.028-.23-.047-.066-.07-.07-.471-.07h-.423v.377h.394c.377 0 .398-.01.472-.077zm-11.546.36v-1.414h.781l.576.788.575.788.008-.788.008-.788h.784v2.827h-.769l-.581-.728-.581-.729-.008.73-.008.728h-.784zm3.801.028a1927.1 1927.1 0 00-.497-1.413c-.006-.016.167-.03.409-.03h.42l.363 1.097.364 1.095.358-1.095.358-1.096h.42c.322 0 .416.01.406.04l-.498 1.413-.484 1.374-.566-.01h-.566zm3.11-.028v-1.414h2.293v.691h-1.508v.409h1.351v.628h-1.351v.44h1.508v.66h-2.293zm9.14 0v-1.414h2.294v.691h-1.508V147.846l.683.01.683.01v.597l-.683.01-.683.01v.439h1.508v.66h-2.293zm-13.098-3.2c0-.014 1.152-1.381 2.561-3.037 1.408-1.656 2.554-3.028 2.547-3.048a268.2 268.2 0 00-2.425-2.876c-1.326-1.56-2.474-2.912-2.55-3.003l-.14-.165h4.368l2.752 3.035 2.752 3.035-.119.13c-.065.072-1.303 1.44-2.75 3.043l-2.631 2.913h-2.183c-1.2 0-2.182-.012-2.182-.027zm-1.1-3.68c-.423-.552-.783-1.004-.8-1.004-.018 0-.562.176-1.208.392-.646.215-1.18.388-1.184.383-.005-.01.301-.487.68-1.072.379-.585.68-1.08.668-1.098-.011-.018-.33-.499-.708-1.066a29.56 29.56 0 01-.677-1.04c.006-.01.553.158 1.216.363.664.204 1.218.364 1.232.356.013-.01.354-.464.757-1.012l.731-.995.02.376c.01.207.021.659.023 1.004.003.346.014.746.025.889l.02.26 1.22.398c.671.22 1.21.408 1.197.42-.013.012-.49.194-1.06.405l-1.206.447-.17.063.02 1.268c.01.698.008 1.268-.004 1.268s-.368-.452-.791-1.005z"
        ></path>
      </g>
    </svg>
  );
}

export default LogoConverse;