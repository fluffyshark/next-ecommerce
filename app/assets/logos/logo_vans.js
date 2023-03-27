"use client"

import React, { useState } from "react";

function LogoVans({ style }) {
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
      viewBox="0 0 33.059 12.05"
    >
      <g transform="translate(-84.148 -128.12)">
        <path
          strokeWidth="0.02"
          d="M112.86 140.16a.045.045 0 01.05 0c.014.01.004.01-.024.01s-.04-.01-.025-.01zm-.184-.056a16.3 16.3 0 01-.62-.102 7.351 7.351 0 01-.4-.116 3.361 3.361 0 01-1.344-.78c-.377-.368-.597-.766-.746-1.348-.037-.143-.097-.733-.076-.753.006-.01.603-.01 1.328-.01l1.318-.01.012.147c.02.235.097.509.136.484.01-.01.03.01.045.024.024.031.024.032-.007.01-.055-.043-.041.01.033.106.167.236.451.37.876.414.777.081 1.315-.231 1.315-.765 0-.126-.03-.227-.06-.208-.012.01-.015-.01-.007-.02.03-.08-.37-.35-.476-.32-.032.01-.038.01-.02-.01.02-.014.002-.028-.07-.053a2.212 2.212 0 01-.158-.06 2.248 2.248 0 00-.22-.07 8.016 8.016 0 01-.328-.1 20.11 20.11 0 00-.82-.241c-.266-.075-.648-.2-.857-.278-.06-.022-.117-.035-.128-.028-.012.01-.014.01-.006-.01.008-.013.005-.023-.008-.023-.035 0-.44-.187-.49-.226-.083-.063-.27-.169-.28-.158-.007.01-.01.01-.006-.01.01-.032-.118-.133-.146-.116-.014.01-.018.01-.01-.01.007-.012-.034-.07-.094-.128a1.856 1.856 0 01-.192-.231c-.047-.069-.091-.121-.099-.116-.007.01-.015-.01-.016-.025-.001-.018-.035-.113-.075-.21-.105-.255-.133-.402-.145-.778-.027-.786.181-1.42.626-1.913.065-.071.104-.13.096-.144-.01-.015-.006-.018.009-.01.013.01.066-.024.128-.08.057-.052.178-.144.269-.205a.98.98 0 00.165-.124c0-.01.011-.014.025-.012.014 0 .097-.035.185-.08.088-.044.205-.096.26-.116.055-.018.114-.04.131-.05.052-.028.315-.097.528-.141.875-.18 2.002-.114 2.767.161.452.163.866.422 1.112.697.044.05.1.112.127.14.065.071.202.286.281.442.163.319.267.71.292 1.097l.014.222-1.256-.01-1.256-.01.006-.103c.006-.105-.038-.29-.08-.34-.02-.023-.027-.024-.042 0-.012.017-.014.012-.006-.016.024-.085-.244-.29-.475-.366a1.812 1.812 0 00-.831-.042c-.133.024-.414.16-.406.197.003.015-.003.02-.013.015-.037-.023-.127.124-.15.245-.013.072.021.243.05.243.01 0 .018.012.018.026 0 .042.076.12.102.104.014-.01.018-.01.01.01-.025.04.2.182.427.27.06.024.119.044.13.046.011.01.045.013.076.026.03.013.08.028.11.035.03.01.088.024.13.04a.436.436 0 00.089.026c.008-.01.028 0 .045.01.016.01.25.067.52.134.608.15 1.092.287 1.249.353a.718.718 0 00.193.053c.043 0 .064.01.05.016-.015.01-.006.02.027.03.095.025.55.27.704.379.183.13.444.38.527.506.032.05.069.102.082.116.035.037.179.341.207.438.014.047.03.081.037.077.006-.01.013.017.013.046 0 .03.017.152.037.273.078.493.015 1.101-.161 1.55a2.53 2.53 0 01-.385.65.515.515 0 00-.086.136c.003.01-.002.012-.012.01-.009-.01-.066.039-.125.101-.06.062-.093.106-.073.1.022-.01.031-.01.023.01-.007.011-.029.015-.048.01-.02-.01-.049 0-.064.014-.053.052-.249.188-.367.255a1.132 1.132 0 00-.13.08.319.319 0 01-.09.045l-.274.113c-.33.136-.787.25-1.255.313-.327.043-1.192.055-1.449.02zm-23.192-.166l-1.563-.01-.014-.064a.465.465 0 00-.03-.095 3.699 3.699 0 01-.14-.45c0-.016-.006-.03-.016-.03-.009 0-.017-.011-.017-.025-.001-.035-.23-.76-.625-1.984l-.162-.505c-.046-.145-.092-.26-.101-.253-.01.01-.012-.01-.006-.02a1.545 1.545 0 00-.082-.316 70.347 70.347 0 01-.165-.516l-.147-.46a67.957 67.957 0 01-.178-.56c-.057-.18-.133-.419-.17-.529l-.16-.5a35.237 35.237 0 00-.14-.44 38.472 38.472 0 01-.15-.47c-.057-.18-.133-.419-.17-.529a34.62 34.62 0 01-.149-.47 23.818 23.818 0 00-.13-.41 41.154 41.154 0 01-.334-1.054c-.019-.072-.033-.093-.056-.084-.023.01-.025.01-.008-.011.017-.016.006-.071-.038-.207-.033-.1-.095-.295-.137-.433a5.277 5.277 0 00-.095-.29 4.05 4.05 0 01-.082-.26c-.109-.368-.243-.759-.265-.772-.052-.032.24-.038 1.542-.032l1.386.01.069.23a554.236 554.236 0 01.536 1.818c.1.335.236.792.342 1.16l.144.49c.167.55.353 1.185.456 1.549.038.137.083.286.098.33.023.068.101.332.289.98l.15.509.163.55c.17.588.204.696.215.67.07-.173.552-1.615.552-1.652 0-.014.01-.027.021-.032.012-.01.023-.04.025-.08.003-.04.01-.07.016-.065.006.01.027-.044.047-.107.02-.062.047-.14.062-.174.014-.033.044-.118.066-.19a5.03 5.03 0 01.092-.27.53.53 0 00.044-.175c-.005-.019-.003-.03.006-.026.008.01.033-.047.057-.114l.194-.564c.083-.242.166-.485.183-.54a11.844 11.844 0 00.186-.54c.066-.198.164-.486.217-.64.286-.825.306-.89.294-.934-.01-.035-.008-.039.008-.015.012.017.021.025.021.018 0-.012.366-1.085.388-1.138.027-.068.152-.47.152-.493 0-.013.006-.026.016-.03.008-.01.041-.092.073-.196.033-.105.067-.201.078-.215.014-.02 2.506-.026 12.34-.026 7.36 0 12.321.01 12.321.018 0 .01-.036.12-.08.245l-.12.336c-.02.061-.101.286-.18.5-.095.264-.138.406-.13.44.007.034.006.04-.006.022-.013-.02-.028.01-.053.08a.73.73 0 01-.05.127.7.7 0 00-.047.12 2.867 2.867 0 01-.114.32.272.272 0 00-.024.085c-.002.025-.013.045-.024.045H94.498l-.032.085-.089.245-.142.39c-.047.126-.106.288-.13.36l-.15.41a3.849 3.849 0 00-.106.304c0 .014-.009.026-.018.026-.01 0-.016.012-.014.026a.187.187 0 01-.016.075c-.012.028-.08.212-.153.41-.072.198-.15.41-.174.47a3.062 3.062 0 00-.062.18.4.4 0 01-.036.09 1.452 1.452 0 00-.066.18 3.268 3.268 0 01-.086.24.918.918 0 00-.04.1c-.004.016-.075.215-.268.74l-.08.22-.15.41c-.172.462-.173.463-.161.493.006.016.004.024-.006.017-.015-.01-.158.362-.346.898-.042.12-.086.237-.097.26-.01.021-.133.354-.271.74l-.34.939-.019.05c-.002.01-.014.037-.027.068-.013.03-.017.066-.01.078.007.013.004.016-.01.01-.013-.01-.023 0-.023.01 0 .015-.041.139-.092.277l-.144.395a.468.468 0 01-.073.15c-.012.01-.724.01-1.584 0zm16.765-.01a1.096 1.096 0 01-.078-.136c-.04-.078-.072-.12-.086-.112-.013.01-.017.01-.008-.01.015-.024-.011-.083-.123-.277-.05-.088-.08-.12-.103-.113-.025.01-.026.01-.005-.01.023-.016.012-.049-.057-.174-.052-.095-.09-.145-.1-.13-.01.017-.018.015-.027-.01-.008-.02-.005-.028.009-.02.031.02.002-.064-.053-.151a3.073 3.073 0 01-.109-.198c-.05-.098-.069-.121-.084-.1-.016.023-.018.02-.008-.01.01-.033-.03-.118-.217-.454a6.797 6.797 0 01-.137-.25 19.147 19.147 0 01-.18-.324c-.087-.157-.165-.28-.175-.274-.01.01-.013 0-.006-.02.006-.017-.005-.056-.023-.085-.04-.062-.29-.504-.29-.514 0-.01-.05-.095-.11-.202a20.614 20.614 0 01-.189-.342l-.166-.301a18.337 18.337 0 01-.256-.466c-.035-.068-.036-.01-.032 2.304l.005 2.374h-2.519l.005-4.353.005-4.363c0-.01.608-.01 1.351-.01 1.423.01 1.39.01 1.405.095a.162.162 0 00.023.06c.009.01.056.096.105.19.088.167.167.314.274.51.03.054.112.207.18.34.148.282.169.314.19.294.01-.01.01-.01.004.01-.008.014.024.097.073.19.184.345.263.485.278.492.01.01.011.015.005.026-.006.01.001.034.016.053a.743.743 0 01.066.107c.02.04.047.068.057.062.01-.01.013-.01.005.01-.007.014.017.08.054.149l.141.26c.36.67.422.785.457.845.019.033.058.111.088.174.031.068.066.116.085.117.018 0 .022.01.01.01-.015.01.03.11.12.275l.172.322c.027.05.03-.183.035-2.228.004-1.671 0-2.292-.017-2.311-.017-.02-.017-.028 0-.028.012 0 .022-.016.022-.035 0-.025.005-.027.016-.01.013.019.293.026 1.25.03l1.233.01v4.346c0 2.39-.003 4.35-.007 4.353-.011.011-2.554.017-2.571.01zm-14.393-.04c.012-.022.055-.137.097-.255.088-.25.328-.908.383-1.055l.1-.28a3.6 3.6 0 01.093-.248.435.435 0 00.034-.144c0-.04.008-.065.015-.054.007.012.024-.014.038-.056.013-.042.036-.104.05-.137.015-.033.056-.144.091-.248.035-.103.076-.211.091-.24a.267.267 0 00.027-.069c0-.018.154-.451.272-.768.045-.119.065-.204.058-.24-.008-.04-.006-.045.006-.016.013.03.044-.04.133-.29.063-.18.124-.338.135-.351a.211.211 0 00.023-.093c.002-.04.008-.066.013-.063.006.01.045-.09.088-.207a337.523 337.523 0 01.444-1.222 1.2 1.2 0 00.055-.175c0-.015.006-.026.013-.026.007 0 .024-.038.038-.084a1.75 1.75 0 01.052-.155c.016-.04.075-.2.132-.36l.173-.48c.192-.528.22-.617.197-.64-.016-.016-.015-.02.006-.016.02.01.062-.086.147-.324.065-.181.122-.34.126-.355.006-.02.277-.024 1.31-.02l1.303.01.027.08a4.83 4.83 0 01.145.39c.099.29.192.552.223.63.013.033.063.168.11.3l.178.5c.052.142.113.318.135.39a.78.78 0 00.054.139c.006.01.045.109.085.23.04.12.114.332.163.47l.138.385c.027.074.055.128.063.12.008-.01.01 0 .002.018-.006.017.006.076.028.13.066.16.302.83.302.857 0 .014.006.028.015.032.008.01.049.106.09.227.04.12.11.319.154.44.14.386.242.672.35.979l.18.5c.04.11.083.229.093.265.011.036.029.065.04.065s.015.01.008.019c-.006.01.007.07.03.135l.11.305.218.61c.083.231.15.436.151.455 0 .033-.078.035-1.367.035h-1.367l-.02-.055c-.02-.052-.138-.464-.195-.675l-.06-.22a2.876 2.876 0 00-.063-.205l-.032-.085-1.34.01-1.34.01-.075.24-.167.54c-.051.165-.104.331-.118.37l-.024.07-1.345.01c-1.34.01-1.344.01-1.322-.035zm5.187-3.144a3.275 3.275 0 00-.062-.225 22.385 22.385 0 01-.177-.613 12.437 12.437 0 00-.143-.506c-.05-.164-.164-.556-.176-.61a6.954 6.954 0 00-.145-.5c-.022-.14-.04-.12-.114.124-.041.136-.1.327-.132.426l-.14.45a88.226 88.226 0 01-.191.62 7.233 7.233 0 00-.086.276c-.05.172-.054.205-.027.194.017-.01.008.01-.022.038-.03.028-.054.067-.054.087 0 .02-.018.09-.04.154a1.02 1.02 0 00-.04.133c0 .01.352.016.781.016h.782zm-1.509.01c0-.022.008-.036.02-.029.01.01.013.026.007.041-.016.041-.027.036-.027-.012zm.3-.977c0-.01.009-.024.02-.031.01-.01.014 0 .008.018-.014.034-.028.041-.028.013zm.87-.027c.008-.019.02-.031.026-.025.006.01 0 .022-.014.036-.02.019-.022.016-.011-.012zm-.32-1.12c.008-.02.02-.03.026-.024.006.01 0 .022-.014.036-.02.02-.022.017-.011-.011zm-.089-.225c.001-.023.006-.028.012-.012.006.015.005.03-.002.039-.006.01-.011-.01-.01-.026zm-8.496 5.277c.001-.024.006-.028.012-.012.006.015.005.031-.002.038-.006.01-.01-.01-.01-.026zm27.88-.01c.013-.015.03-.02.036-.015.006.01-.005.018-.025.025-.029.011-.03.01-.011-.01zm-15.056-.073c-.011-.029-.008-.03.011-.01.014.013.02.028.014.035-.006.01-.018-.01-.025-.025zm15.682-.277c.001-.023.006-.028.012-.012.006.015.005.03 0 .039-.006.01-.012-.01-.011-.026zm-28.656-.054c.007-.02.019-.031.025-.025.006.01 0 .022-.014.036-.02.02-.022.016-.011-.011zm3.707 0c0-.01.016-.02.035-.035.032-.025.032-.024.007.01-.026.033-.042.044-.042.027zm6.33-.062c.006-.016.015-.03.02-.03.004 0 .007.014.007.03 0 .017-.008.03-.02.03-.01 0-.013-.014-.007-.03zm12.45-.111c-.02-.033-.003-.04.027-.01.014.015.017.028.006.028-.011 0-.026-.01-.033-.021zm-15.242-.258c0-.022.007-.043.017-.05.01-.01.013.011.007.04-.01.058-.024.064-.024.01zm-2.657-.122c0-.017.013-.05.03-.07.03-.038.03-.038.012 0l-.03.07c-.01.026-.01.026-.012 0zm24.722-.232c-.005-.01.004-.04.018-.066l.027-.051-.006.054c-.006.059-.025.088-.039.062zm-7.39-.518c0-.023.006-.027.012-.012s.005.03-.001.039c-.006.01-.012-.01-.01-.026zm4.729-.078c.006-.016.02-.03.031-.03.012 0 .01.013-.005.03-.013.017-.028.03-.031.03-.004 0-.002-.013.005-.03zm-.003-.73c-.007-.012 0-.015.018-.01.035.013.041.027.013.027-.01 0-.025-.01-.031-.02zm-.02-.134c-.01-.029-.007-.031.012-.011.014.014.02.029.014.036-.006.01-.018-.01-.025-.025zm-21.369-.152c.007-.019.019-.03.025-.025.006.01 0 .022-.014.036-.02.02-.022.017-.01-.012zm-.6-.174c.005-.01.016-.02.02-.02.005 0 .01.01.01.02 0 .011-.01.02-.022.02-.011 0-.015-.01-.009-.02zm21.115-.014c.015-.01.032-.01.038 0 .006.01-.005.012-.026.01-.023 0-.028-.01-.012-.012zm-21.084-.058c0-.024.006-.029.012-.012.006.015.005.031-.002.038-.006.01-.011-.01-.01-.026zm.718-.198c0-.016.008-.03.02-.03.01 0 .013.013.007.03-.006.016-.015.03-.02.03-.004 0-.007-.014-.007-.03zm19.19-.058c0-.01.014-.013.031-.02.018-.01.026-.01.02.01-.013.018-.05.028-.05.012zm-12.752-.104c.001-.024.006-.029.012-.012.006.015.005.031-.002.038-.006.01-.011-.01-.01-.026zm-7.027-.035c.007-.02.02-.03.025-.025.006.01 0 .022-.013.036-.02.02-.022.018-.012-.01zm.78-.3c.007-.02.019-.03.025-.024.006.01 0 .022-.014.036-.02.02-.022.017-.011-.012zm-.64-.033c-.008-.012 0-.015.018-.01.035.013.041.028.012.028-.01 0-.024-.01-.03-.02zm.049-.16c0-.01.009-.023.02-.03.011-.01.014.01.008.018-.014.034-.028.04-.028.012zm-6.185-.144c.006-.01.02-.012.03-.01.026.017.023.022-.011.022-.016 0-.024-.01-.019-.017zm3.358-.153c-.006-.01.003-.016.018-.016.016 0 .024.01.018.016-.006.01-.013.017-.018.017-.005 0-.012-.01-.018-.017zm.05-.095c0-.023.006-.028.012-.012.006.015.005.03-.002.038-.006.01-.011-.01-.01-.026zm2.939-.08c0-.024.006-.027.012-.012s.005.03-.002.038c-.006.01-.012-.01-.01-.026zm13.221-.068c-.006-.011-.003-.02.01-.02.011 0 .02.01.02.02s-.004.02-.008.02c-.005 0-.015-.01-.022-.02zm-7.017-.082c-.007-.012-.009-.026-.004-.031.006-.01.015.01.021.022.014.035.002.04-.017.01zM89.123 135c-.02-.066-.02-.07.005-.037.024.033.04.111.024.111a.344.344 0 01-.029-.075zm26.017-.338c.015-.01.032-.01.039 0 .006.01-.006.012-.027.01-.023 0-.028-.01-.012-.012zm-.386-.126c-.007-.011.001-.015.02-.01.034.013.04.028.011.028-.01 0-.024-.01-.03-.02zm-24.425-.531c-.02-.051-.014-.063.01-.022.011.02.017.04.011.046-.006.01-.015-.01-.021-.023zm3.659-.158c-.007-.02-.005-.029.007-.021.01.01.02.01.02-.012 0-.013.005-.019.011-.013.006.01.003.027-.007.045-.017.031-.02.031-.031 0zm.008-.103c0-.023.006-.027.012-.012s.005.032-.002.04c-.006.01-.012-.01-.01-.027zm15.97-.958a.12.12 0 01.02-.05c.01-.018.02-.022.02-.01a.113.113 0 01-.02.05c-.01.016-.02.02-.02.01zm-19.158-.226c-.006-.01.003-.016.018-.016s.023.01.017.016c-.006.01-.013.017-.017.017-.005 0-.013-.01-.018-.017zm3.11-.243c0-.028.004-.04.01-.025a.072.072 0 010 .05c-.007.014-.01 0-.01-.026zm16.398-.16a.042.042 0 01.032-.02c.011 0 .015.01.007.02a.042.042 0 01-.032.02c-.011 0-.014-.01-.007-.02zm.17-.19c.014-.017.03-.027.035-.023.014.014-.015.052-.039.052-.013 0-.012-.01.005-.03zm-22.328-.262c.001-.024.006-.028.013-.012.006.015.005.031-.002.038-.006.01-.012-.01-.01-.026zm2.959-.02c.001-.023.006-.028.012-.012.006.015.005.031-.002.038-.006.01-.011-.01-.01-.026zm6.655-.067c0-.01.01-.024.02-.03.011-.01.015.01.008.017-.013.035-.028.041-.028.013zm-3.536-.19c.003-.04.035-.103.036-.07a.12.12 0 01-.018.06c-.01.016-.019.02-.018.01zm-9.328-.792c-.007-.01-.01-.026-.004-.03.006-.01.015.01.021.02.013.035.002.041-.018.01zm6.898-.944c.007-.02.019-.03.025-.025.006.01 0 .022-.013.036-.02.02-.023.017-.012-.012zm-7.246-.085c.001-.024.006-.028.012-.012.006.015.005.031-.002.04-.006.01-.011-.01-.01-.027zm2.809-.562c-.011-.028-.008-.031.01-.011.014.014.02.029.014.036-.006.01-.017-.01-.024-.025zm4.697-.16c-.01-.028-.008-.031.011-.011.014.013.02.029.014.036-.006.01-.017-.01-.025-.025zm-7.806-.28a.262.262 0 00-.013-.06c-.01-.034-.01-.034.012-.01.012.02.018.048.013.06-.007.019-.01.019-.012 0zm7.976-.197c.001-.023.006-.028.013-.012.006.015.005.03-.002.038-.006.01-.012-.01-.011-.026zm-5.017-.08c0-.023.006-.028.012-.012.006.015.005.03-.002.039-.006.01-.011-.01-.01-.026zm-.266-.202a.045.045 0 01.05 0c.013.01.003.01-.025.01s-.04-.01-.025-.01z"
        ></path>
      </g>
    </svg>
  );
}

export default LogoVans;
