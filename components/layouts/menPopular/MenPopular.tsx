import React from 'react'
import Image from "next/image";
import "./menPopular.scss"
import special_shoe02 from "../../../app/assets/images/special_shoe02.png"
import menrunning from "../../../app/assets/images/menrunning.png"
import shoe12 from "../../../app/assets/images/shoe12.png"
import shoe13 from "../../../app/assets/images/shoe13.png"
import shoe14 from "../../../app/assets/images/shoe14.png"
import shoe15 from "../../../app/assets/images/shoe15.png"
import shoe16 from "../../../app/assets/images/shoe16.png"
import shoe17 from "../../../app/assets/images/shoe17.png"
import shoe18 from "../../../app/assets/images/shoe18.png"
import shoe19 from "../../../app/assets/images/shoe19.png"
import menAuction from "../../../app/assets/images/menAuction.png"
import blueBtn from "../../../app/assets/images/blueBtn.png"

type Props = {}

const MenPopular = (props: Props) => {


  window.addEventListener('scroll', () => {
    let scroll = window.pageYOffset;
   
    console.log(scroll)

    if (scroll > 2100) {(document.getElementById("menPopularTitle") as HTMLFormElement).classList.add("fadeInTop");}

    if (scroll > 2200) {(document.getElementById("menPromotion") as HTMLFormElement).classList.add("fadeInTop");}

    if (scroll > 2500) {const elements = document.getElementsByClassName("menItem1"); for (let i = 0; i < elements.length; i++) {elements[i].classList.add("fadeInTop");}}
    
    if (scroll > 2700) {const elements = document.getElementsByClassName("menItem2");for (let i = 0; i < elements.length; i++) {elements[i].classList.add("fadeInTop");}}

    if (scroll > 3000) {(document.getElementById("menAuction") as HTMLFormElement).classList.add("fadeInTop");}
  })


  return (
    <div className='menPopular'>
        <div className="container">
            
            <div id="menPopularTitle" className="title animate">
              <p>MEN</p>
              <p>POPULAR SHOES</p>
            </div>
            <div id="menPromotion" className="menPromotion animate">
              <div className="container">
                <Image src={special_shoe02} alt="" />
                <div className="text">
                  <p>Hyperion  Tempo</p>
                  <p>Men's road-running shoes</p>
                  <p>$ 150.00</p>
                  <div className="imageContainer">
                    <Image src={blueBtn} alt="" />
                    <p>More Info</p>
                  </div>
                </div>
              </div>
              <Image src={menrunning} alt="" />
            </div>
            
            <div className="shoesContainer">
              <div className="itemContainer menItem1 animate">
                <Image src={shoe12} alt="" />
                <div className="itemTexts"><p>Draft XC Spikeless</p><p>$ 65.00</p></div>
              </div>
              <div className="itemContainer menItem1 animate">
                <Image src={shoe13} alt="" />
                <div className="itemTexts"><p>Launch GTS 9</p><p>$ 90.00</p></div>
              </div>
              <div className="itemContainer menItem1 animate">
                <Image src={shoe14} alt="" />
                <div className="itemTexts"><p>ELMN8 v5</p><p>$ 120.00</p></div>
              </div>
              <div className="itemContainer menItem1 animate">
                <Image src={shoe15} alt="" />
                <div className="itemTexts"><p>PUMA x SPARCO OG</p><p>$ 100.00</p></div>
              </div>
              <div className="itemContainer menItem2 animate">
                <Image src={shoe16} alt="" />
                <div className="itemTexts"><p>PUMA x SPARCO PGX</p><p>$ 60.00</p></div>
              </div>
              <div className="itemContainer menItem2 animate">
                <Image src={shoe17} alt="" />
                <div className="itemTexts"><p>Mercedes F1 NEO</p><p>$ 54.00</p></div>
              </div>
              <div className="itemContainer menItem2 animate">
                <Image src={shoe18} alt="" />
                <div className="itemTexts"><p>Porsche Legacy</p><p>$ 120.00</p></div>
              </div>
              <div className="itemContainer menItem2 animate">
                <Image src={shoe19} alt="" />
                <div className="itemTexts"><p>Varion Indoor Sports</p><p>$ 60.00</p></div>
              </div>
            </div>

          <div id="menAuction" className="menAuction animate">
            <Image src={menAuction} alt="" />
            <div className="textContainer">
              <p>SHRINKING PRICE</p>
              <div className="titleContainer">
                <p>Hyperion Tempo</p>
                <p>Blue</p>
              </div>
              <p>If the big race is around the corner, the Hyperion Tempo is the lightweight running shoe that can help you kick it into high gear. Ultra-light cushioning and energy-saving design help you train harder and longer while staying comfortable.</p>
              <p>$237.00</p>
              <div className="imageContainer">
                  <Image src={blueBtn} alt="" />
                  <p>BUY NOW</p>
                  <p>Only 5 left</p>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default MenPopular