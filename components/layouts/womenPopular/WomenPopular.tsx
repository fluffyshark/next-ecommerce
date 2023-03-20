import React from 'react'
import Image from "next/image";
import "./womenPopular.scss"
import special_shoe01 from "../../../app/assets/images/special_shoe01.png"
import womannotting from "../../../app/assets/images/womannotting.png"
import shoe4 from "../../../app/assets/images/shoe4.png"
import shoe5 from "../../../app/assets/images/shoe5.png"
import shoe6 from "../../../app/assets/images/shoe6.png"
import shoe7 from "../../../app/assets/images/shoe7.png"
import shoe8 from "../../../app/assets/images/shoe8.png"
import shoe9 from "../../../app/assets/images/shoe9.png"
import shoe10 from "../../../app/assets/images/shoe10.png"
import shoe11 from "../../../app/assets/images/shoe11.png"
import womenAuction from "../../../app/assets/images/womenauction.png"
import pinkBtn from "../../../app/assets/images/pinkBtn.png"

type Props = {}

const WomenPopular = (props: Props) => {
  return (
    <div className='womenPopular'>
        <div className="container">
            
            <div className="title">
              <p>WOMEN</p>
              <p>POPULAR SHOES</p>
            </div>
            <div className="womenPromotion">
              <div className="container">
                <Image src={special_shoe01} alt="" />
                <div className="text">
                  <p>Launch 9</p>
                  <p>Women's road-running shoes</p>
                  <p>$ 80.00</p>
                  <div className="imageContainer">
                    <Image src={pinkBtn} alt="" />
                    <p>More Info</p>
                  </div>
                </div>
              </div>
              <Image src={womannotting} alt="" />
            </div>
            
            <div className="shoesContainer">
              <div className="itemContainer">
                <Image src={shoe4} alt="" />
                <div className="itemTexts"><p>ForeverRUN Nitro</p><p>$ 180.00</p></div>
              </div>
              <div className="itemContainer">
                <Image src={shoe5} alt="" />
                <div className="itemTexts"><p>Run XX WNS Nitro</p><p>$ 100.00</p></div>
              </div>
              <div className="itemContainer">
                <Image src={shoe6} alt="" />
                <div className="itemTexts"><p>Deviate 2 Nitro</p><p>$ 139.00</p></div>
              </div>
              <div className="itemContainer">
                <Image src={shoe7} alt="" />
                <div className="itemTexts"><p>Electrify 2 Nitro</p><p>$ 120.00</p></div>
              </div>
              <div className="itemContainer">
                <Image src={shoe8} alt="" />
                <div className="itemTexts"><p>Ghost 15</p><p>$ 140.00</p></div>
              </div>
              <div className="itemContainer">
                <Image src={shoe9} alt="" />
                <div className="itemTexts"><p>Grand 360</p><p>$ 290.00</p></div>
              </div>
              <div className="itemContainer">
                <Image src={shoe10} alt="" />
                <div className="itemTexts"><p>Glycerin 20</p><p>$ 150.00</p></div>
              </div>
              <div className="itemContainer">
                <Image src={shoe11} alt="" />
                <div className="itemTexts"><p>Adredaline GTS 22</p><p>$ 140.00</p></div>
              </div>
            </div>

          <div className="womanAuction">
            <Image src={womenAuction} alt="" />
            <div className="textContainer">
              <p>SHRINKING PRICE</p>
              <div className="titleContainer">
                <p>Ariel '20</p>
                <p>Peacoat/White</p>
              </div>
              <p>The Ariel ’20 is known for its trusted stability and soft, cushioned ride. This reliable women’s running shoe offers just-right support and reduces impact for a more comfortable stride.</p>
              <p>$200.00</p>
              <div className="imageContainer">
                  <Image src={pinkBtn} alt="" />
                  <p>BUY NOW</p>
                  <p>Only 5 left</p>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default WomenPopular