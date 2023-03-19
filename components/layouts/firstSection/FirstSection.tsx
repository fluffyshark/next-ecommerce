"use client"

import Image from "next/image";
import "./firstSection.scss"
import shoe01 from "../../../app/assets/images/shoe01.png"
import shoe02 from "../../../app/assets/images/shoe02.png"
import blue_promotion from "../../../app/assets/images/blue_promotion.png"
import shoe03 from "../../../app/assets/images/shoe03.png"
import runningimage from "../../../app/assets/images/runningimage.png"

type Props = {}

const FirstSection = (props: Props) => {
    

    const menuClickHandler = (selectedMenu: string) => {

        // Create array with button IDs and removes/filter the one selected
        let selectedArray: string[] = ["popular", "newest", "sale"].filter((item: string) => !item.includes(selectedMenu));
        
        // Add class to the one selected and uses the array to remove the class of those which are not selected, if they do have it 
        (document.getElementById(selectedMenu) as HTMLFormElement).classList.add("selectedMenu");
        (document.getElementById(selectedArray[0]) as HTMLFormElement).classList.remove("selectedMenu");
        (document.getElementById(selectedArray[1]) as HTMLFormElement).classList.remove("selectedMenu");
    };


  return (
    <div className='firstSection'>
        <div className="container">
            <div className="menu">
                <div id="popular" className="divButton" onClick={() => menuClickHandler("popular")}><p>POPULAR</p></div>
                <div id="newest" className="divButton" onClick={() => menuClickHandler("newest")}><p>NEWEST</p></div>
                <div id="sale" className="divButton" onClick={() => menuClickHandler("sale")}><p>SALE</p></div>
            </div>
            <div className="offerContainer">
                <div className="section1">
                    <div className="itemContainer">
                        <Image src={shoe01} alt="" />
                        <div className="itemTexts"><p>Velocity Nitro 2</p><p>$ 140.00</p></div>
                    </div>
                    <div className="divider"></div>
                    <div className="itemContainer">
                        <Image src={shoe02} alt="" />
                        <div className="itemTexts"><p>Softride Enzo NXT</p><p>$ 80.00</p></div>
                    </div>
                </div>
                <div className="section2"><Image src={blue_promotion} alt="" /></div>
                <div className="section3">
                    <div className="itemContainer">
                        <Image src={runningimage} alt="" />
                      
                    </div>
                    <div className="divider"></div>
                    <div className="itemContainer">
                        <Image src={shoe03} alt=""/>
                        <div className="itemTexts"><p>Retaliate Block</p><p>$ 90.00</p></div>
                    </div>
                    
                </div>
            </div>
        </div>
    </div>
  )
}

export default FirstSection