"use client"

import React, { useState } from "react";

function LogoAdidas({ style }) {
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
      width={style.width}
      height={style.height}
      version="1.1"
      viewBox="0 0 26.957 18.236"
    >
      <g transform="translate(-86.747 -117.66)">
        <path
          strokeWidth="0.07"
          d="M88.469 135.83a2.598 2.598 0 01-1.536-1.334c-.156-.331-.186-.495-.186-.994 0-.5.03-.663.186-.994a2.491 2.491 0 011.174-1.174c.34-.16.488-.186 1.03-.184.507 0 .694.035.944.158.377.188.356.187.356.015 0-.13.047-.14.597-.14h.598v4.568h-.633c-.49 0-.632-.022-.632-.097 0-.073-.068-.063-.293.05-.319.157-1.28.233-1.605.126zm1.342-1.235c.508-.336.698-1.107.415-1.69-.257-.531-.884-.833-1.407-.676-.323.097-.732.43-.88.718-.12.231-.134.744-.028 1.025.106.28.405.58.734.736.355.17.806.126 1.166-.113zm3.924 1.205c-1.085-.307-1.765-1.205-1.765-2.333 0-.666.207-1.201.634-1.638.475-.487.896-.669 1.632-.704.522-.025.662-.01 1.038.147l.434.175V129.638l-2.687-.018-2.686-.017-.378-.69c-.207-.38-.366-.7-.353-.71.014-.013.91-.531 1.99-1.154 1.188-.684 1.992-1.107 2.031-1.068.036.035.513.833 1.06 1.773l.996 1.709.611.02.611.02V135.752h-.597c-.474 0-.598-.02-.598-.1 0-.083-.064-.074-.334.045-.408.181-1.19.23-1.639.104zm1.253-1.156c.85-.439.88-1.753.053-2.233-.464-.27-.752-.289-1.178-.078-.47.232-.699.56-.74 1.064-.089 1.06.922 1.735 1.865 1.248zm5.663 1.146a2.408 2.408 0 01-1.67-2.253c-.001-.676.172-1.142.603-1.614.463-.506.964-.743 1.673-.792.462-.031.596-.012.973.14l.437.176v-1.811h-4.071l-.02.545-.021.545-.615.02-.615.02v-1.202l-1.465-2.582c-.806-1.42-1.502-2.65-1.545-2.732-.075-.143.022-.208 1.93-1.282 1.105-.623 2.033-1.117 2.061-1.1.03.018 1.03 1.741 2.224 3.83l2.172 3.796h1.16v6.255h-.592c-.332 0-.602-.03-.615-.07-.014-.042-.175-.014-.393.07-.43.163-1.158.181-1.61.04zm1.467-1.2c.78-.515.703-1.844-.13-2.253-1.166-.572-2.35.774-1.65 1.877.178.28.346.405.782.578.202.08.736-.028.998-.201zm3.871 1.198c-.705-.198-1.223-.647-1.542-1.337-.161-.348-.195-.52-.197-.986-.002-.497.025-.619.23-1.033.279-.567.717-.976 1.269-1.183.526-.197 1.445-.175 1.887.045l.295.148.021-.148c.02-.134.073-.15.601-.168l.58-.02v4.645h-.598c-.487 0-.597-.02-.597-.107 0-.088-.052-.08-.299.046-.381.195-1.14.24-1.65.097zm1.274-1.148c.596-.35.84-1.1.545-1.68-.49-.96-1.699-1.03-2.227-.127-.664 1.131.57 2.458 1.682 1.807zm3.522 1.153c-.654-.206-1.091-.59-1.226-1.077-.125-.448-.133-.44.55-.44h.623l.042.21c.09.445.877.649 1.364.352.275-.167.296-.375.054-.533-.096-.063-.52-.188-.94-.277-.87-.184-1.112-.29-1.37-.597-.478-.567-.382-1.397.216-1.893.708-.586 2.228-.557 2.926.057.163.143.364.535.428.835l.05.229h-.603c-.595 0-.603-.01-.603-.175 0-.195-.21-.363-.536-.428-.3-.06-.781.085-.878.267-.124.23.09.355.93.538 1.016.22 1.164.274 1.45.524.59.519.589 1.39-.002 2-.425.439-1.709.651-2.476.409zm-13.46-2.361v-2.32H98.59v4.64H97.325zm4.324-8.55c-1.5-2.614-2.737-4.805-2.751-4.867-.02-.084.489-.414 1.946-1.265 1.085-.633 1.998-1.123 2.027-1.089.052.058 6.638 11.477 6.816 11.817l.083.158h-5.395z"
        ></path>
      </g>
    </svg>
  );
}

export default LogoAdidas;
