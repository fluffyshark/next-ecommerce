"use client"

import React, { useState } from "react";

function LogoNB({ style }) {
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
      width="91.746"
      height="50.004"
      version="1.1"
      viewBox="0 0 24.274 13.23"
    >
      <g transform="translate(-92.78 -128.082)">
        <path
          strokeWidth="0.02"
          d="M92.78 141.3c.034-.01.6-.026 1.259-.048.658-.022 1.553-.055 1.989-.071l1.175-.043.383-.014-.053.089-.053.089-2.38.01c-1.309 0-2.353 0-2.32-.01zm7.736-.083a1.315 1.315 0 01-.013-.15v-.073l.259-.013c.142-.01.793-.031 1.446-.055.653-.022 1.2-.046 1.216-.052.086-.029-.066-.05-.597-.079-1.86-.102-2.31-.13-2.325-.146-.017-.018-.03-.631-.014-.648.005-.01.506-.027 1.113-.049l1.644-.06a38 38 0 01.655-.022c.085 0 .115-.01.115-.029 0-.034-.072-.04-.64-.072-.389-.02-1.434-.078-2.381-.13a5.716 5.716 0 01-.528-.043 2.028 2.028 0 01-.02-.304l-.006-.29.21-.012c.115-.01.35-.016.524-.022l3.01-.104c.351-.012.4-.017.395-.046-.005-.023-.034-.034-.107-.04-.056-.01-.986-.055-2.068-.116-1.082-.06-1.974-.117-1.983-.126a1.402 1.402 0 01-.02-.28l-.005-.264.627-.023 1.277-.046c2.911-.101 2.872-.1 2.872-.135 0-.02-.025-.029-.08-.029-.066 0-3.268-.174-4.4-.239a1.977 1.977 0 01-.304-.032 1.277 1.277 0 01-.022-.254l-.006-.239.432-.014c.477-.015 1.784-.062 2.656-.094.307-.012.95-.035 1.43-.05.479-.017.875-.035.88-.04.004-.01.002-.017-.006-.028-.013-.022-.084-.028-1.118-.084l-1.279-.07-1.106-.063c-2.607-.143-3.53-.194-3.836-.212a448.49 448.49 0 00-2.085-.116c-.36-.02-.654-.04-.654-.049 0-.01.175-.02.39-.027l2.928-.104 3.42-.122 1.694-.06c.447-.016 1.123-.04 1.502-.052.38-.013.699-.031.71-.041.043-.04-.039-.053-.466-.075-.486-.025-1.38-.074-2.79-.154l-1.472-.083-1.289-.072-2.375-.132a146.06 146.06 0 01-1.684-.099c-.084-.019.156-.032 1.086-.062.558-.017 2.142-.073 3.521-.123l3.38-.122 1.37-.05c.273-.012.677-.027.898-.034.347-.012.45-.027.417-.058-.006-.01-.766-.05-2.574-.15-5.284-.292-7.51-.42-7.51-.433 0-.01.058-.015.127-.015.07 0 .492-.013.939-.03l1.969-.072 2.283-.082 2.293-.082 1.969-.07c.44-.018.863-.03.939-.03.105 0 .137-.01.137-.03 0-.039-.049-.042-.985-.093-1.087-.058-2.173-.118-3.5-.193-.694-.04-1.45-.082-2.375-.132l-1.482-.083-1.233-.067a5.278 5.278 0 01-.506-.04c-.007-.01.014-.013.046-.013.033 0 .301-.01.597-.02l1.766-.061 2.425-.082 2.446-.082c.686-.022 1.485-.051 1.776-.061.29-.011.747-.025 1.014-.031.51-.013.597-.02.567-.051-.01-.01-.8-.061-1.754-.113-.954-.052-1.738-.098-1.743-.102-.005-.01.074-.146.173-.316l.18-.311.305-.014c.307-.015 1.547-.06 2.74-.1.356-.012.662-.025.677-.03.092-.03-.086-.051-.749-.09-2.272-.129-2.72-.156-2.731-.166-.012-.011.28-.547.33-.606.022-.027.1-.034.448-.046 2.379-.074 3.293-.113 3.293-.138 0-.01-.003-.018-.005-.019-.004 0-.789-.046-1.747-.099a73.43 73.43 0 01-1.753-.11c-.008-.01.29-.55.33-.598.006-.01.487-.025 2.008-.074 1.752-.057 1.715-.055 1.715-.084 0-.019-.027-.028-.087-.028-.047 0-.31-.014-.583-.03l-1.198-.072-1.152-.068a4.147 4.147 0 01-.463-.04c-.021-.02.324-.606.367-.623.023-.01.671-.036 1.441-.06 1.887-.06 2.242-.074 2.256-.088.006-.01-.02-.016-.057-.022a244.68 244.68 0 00-3.203-.172c-.151-.01-.253-.02-.25-.033a1.93 1.93 0 01.097-.188l.095-.168 3.778.01 3.779.01.264.045c.72.123 1.215.345 1.592.715.284.279.464.594.572 1.004.044.168.048.221.048.67-.001.535-.025.705-.154 1.096-.273.827-.964 1.659-1.886 2.273-.435.29-.883.513-1.264.63l-.178.055.241.096c.756.299 1.226.734 1.428 1.32.147.426.125 1.055-.063 1.774-.13.498-.272.79-.6 1.227-.654.871-1.871 1.687-3.034 2.032-.271.08-.51.134-.842.189l-.264.043-4.955.01-4.954.01zm9.001-2.99c.93-.106 1.744-.862 1.863-1.73.074-.538-.205-.936-.76-1.083-.13-.035-.238-.038-1.368-.038h-1.226l-.769 1.36c-.422.748-.786 1.394-.808 1.436l-.04.075h1.466c.834 0 1.543-.01 1.642-.02zm2.18-5c.35-.1.744-.362 1.002-.665.252-.296.345-.495.346-.74.003-.534-.4-.868-1.134-.942a10.299 10.299 0 00-.772-.015l-.558.01-.675 1.187a64.22 64.22 0 00-.675 1.204c0 .01.527.013 1.172.01 1.031-.01 1.186-.013 1.293-.043zm-14.238 7.303l-2.69-.151c-1.13-.062-1.46-.084-1.467-.09-.016-.016.395-.033 2.422-.102a208.79 208.79 0 002.278-.084c.105-.01.147-.01.147.012 0 .021-.243.451-.25.444-.003-.01-.2-.015-.44-.029zm.589-1.026c-.322-.022-3.063-.174-3.69-.205a3.795 3.795 0 01-.471-.04c0-.01.04-.015.088-.015.048 0 .584-.018 1.192-.04 2.938-.106 3.51-.126 3.538-.12.021.01-.003.064-.094.226l-.122.218h-.094c-.052-.01-.208-.011-.347-.02zm.273-1.044l-1.035-.058-1.116-.063a106.218 106.218 0 00-1.668-.09c-.031 0-.047-.01-.036-.019.011-.01.622-.038 1.36-.06a848.74 848.74 0 002.404-.085 32.932 32.932 0 011.072-.03c.005.01-.045.104-.11.222l-.116.215-.154-.01c-.085 0-.355-.014-.6-.03zm.7-1.015c-.24-.015-.778-.046-1.197-.068-.418-.022-1.085-.06-1.481-.083a140.94 140.94 0 00-1.01-.054c-.16-.01-.284-.02-.275-.028.01-.01.44-.029.96-.048 1.993-.069 3.21-.112 3.54-.126.202-.01.338-.01.332.01l-.127.227-.116.208-.095-.01c-.052 0-.29-.015-.53-.03zm2.528-5.124c-1.34-.075-2.7-.153-3.023-.17-.323-.017-.59-.036-.595-.04-.014-.014.23-.03.644-.042.218-.01.894-.03 1.502-.051l2.273-.08c.642-.022 1.302-.047 1.467-.054l.299-.013v.142c0 .078.006.211.013.297l.013.155-.079-.01c-.043 0-1.175-.065-2.515-.14zm1.755-.965c-.461-.03-1.28-.076-2.75-.16l-1.402-.083c-.28-.017-.538-.03-.574-.03-.036 0-.061-.01-.056-.018.006-.01.224-.023.484-.03.489-.014 2.689-.09 4.194-.145.473-.017.862-.03.865-.025.004.01.012.122.02.264l.015.26-.18-.01c-.099 0-.376-.016-.616-.03zm-1.705-1.145a258.496 258.496 0 01-2.476-.146c-.094-.016.29-.036 1.33-.067.569-.017 1.604-.05 2.3-.073a52.95 52.95 0 011.273-.034c.018.017.034.462.017.46-.01 0-1.11-.065-2.444-.14zm.68-1.006c-.792-.049-1.678-.101-1.969-.12-.29-.016-.552-.03-.583-.03-.03 0-.056-.01-.056-.016 0-.01.354-.028.787-.04 1.798-.056 3.251-.104 3.387-.113.117-.01.148-.01.158.02a1.3 1.3 0 01.011.212v.181l-.147-.01c-.08 0-.795-.04-1.588-.09zm.518-.973a496.73 496.73 0 00-1.675-.09 36.41 36.41 0 01-.883-.05c-.016-.01.817-.01 1.852-.01h1.883v.203h-.178c-.097-.01-.547-.023-1-.05z"
        ></path>
      </g>
    </svg>
  );
}

export default LogoNB;
