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

type Props = {
  data: any
}

const WomenPopular = ({data}:Props) => {

  window.addEventListener('scroll', () => {
    let scroll = window.pageYOffset;

    if (scroll > 599) {(document.getElementById("womanPopularTitle") as HTMLFormElement).classList.add("fadeInTop");}

    if (scroll > 699) {(document.getElementById("womanPromotion") as HTMLFormElement).classList.add("fadeInTop");}

    if (scroll > 900) {const elements = document.getElementsByClassName("womenItem1"); for (let i = 0; i < elements.length; i++) {elements[i].classList.add("fadeInTop");}}
    
    if (scroll > 1200) {const elements = document.getElementsByClassName("womenItem2");for (let i = 0; i < elements.length; i++) {elements[i].classList.add("fadeInTop");}}

    if (scroll > 1500) {(document.getElementById("womanAuction") as HTMLFormElement).classList.add("fadeInTop");}
  })



  return (
    <div className='womenPopular'>
        <div className="container">
            
            <div id="womanPopularTitle" className="title animate">
              <p>WOMEN</p>
              <p>POPULAR SHOES</p>
            </div>
            <div id="womanPromotion" className="womenPromotion animate">
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
              
              {data.products.map((product:any) => {
                if(product.featured === "Popular" && product.category === "Women")
                return (
                  <div key={product._id} className="itemContainer animate womenItem1">
                    <Image src={product.images[0].url} width="250" height="250" alt="" />
                    <div className="itemTexts"><p>{product.name}</p><p>$ {product.price}.00</p></div>
                  </div>
                )
                
              })} 
               

            </div>

          <div id="womanAuction" className="womanAuction animate">
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