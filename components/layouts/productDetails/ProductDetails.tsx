"use client"

import React from 'react'
import Image from "next/image";
import "./productDetails.scss"
import LogoBrooks from '@/app/assets/logos/logo_brooks';
import IconBagOutline from '@/app/assets/icons/icon_bag_outline';
import LogoNike from '@/app/assets/logos/logo_nike';
import LogoSaucony from '@/app/assets/logos/logo_saucony';
import LogoAdidas from '@/app/assets/logos/logo_adidas';
import LogoFredPerry from '@/app/assets/logos/logo_fredperry';
import LogoPuma from '@/app/assets/logos/logo_puma';
import LogoVans from '@/app/assets/logos/logo_vans';
import LogoNB from '@/app/assets/logos/logo_nb';
import LogoReebook from '@/app/assets/logos/logo_reebook';
import LogoConverse from '@/app/assets/logos/logo_converse';

type Props = {
    product:any
}

const ProductDetails = ({product}:Props) => {

  function showCorrectLogotype() {

    let logo = <></>

    switch (product.seller) {
      case "Nike": logo = <><LogoNike style={{color:"#000", hoverColor:"#4d4d4d", width:"104.26", height:"37.17"}} /></>;  break;
      case "Saucony": logo = <><LogoSaucony style={{color:"#000", hoverColor:"#4d4d4d", width:"137.63", height:"24.95"}} /></>;  break;
      case "Adidas": logo = <><LogoAdidas style={{color:"#000", hoverColor:"#4d4d4d", width:"101.88", height:"68.92"}} /></>;  break;
      case "Brooks": logo = <><LogoBrooks style={{color:"000", hoverColor:"#4d4d4d", width:"140", height:"16.96"}} /></>;  break;
      case "Fredperry": logo = <><LogoFredPerry style={{color:"#000", hoverColor:"#4d4d4d", width:"75.55", height:"79.95"}} /></>;  break;
      case "Puma": logo = <><LogoPuma style={{color:"#000", hoverColor:"#4d4d4d", width:"80.00", height:"39.76"}} /></>;  break;
      case "Vans": logo = <><LogoVans style={{color:"#000", hoverColor:"#4d4d4d", width:"124.91", height:"45.54"}} /></>;  break;
      case "NB": logo = <><LogoNB style={{color:"#000", hoverColor:"#4d4d4d", width:"91.74", height:"50"}} /></>;  break;
      case "Reebook": logo = <><LogoReebook style={{color:"#000", hoverColor:"#4d4d4d", width:"108.81", height:"54.59"}} /></>;  break;
      case "Converse": logo = <><LogoConverse style={{color:"#000", hoverColor:"#4d4d4d", width:"94.97", height:"63.88"}} /></>;  break;
      default:
        break;
    }

    return logo
  }

  console.log(product.seller)


  return (
    <div className='productDetails'>
        <div className="display">
          <div className="bigImage"><Image src={product.images[0].url} width="750" height="750" alt="" /></div>
          <div className="smallerImages">
            <div className="imageContainer"><Image src={product.images[0].url} width="100" height="100" alt="" /></div>
            <div className="imageContainer"><Image src={product.images[1].url} width="100" height="100" alt="" /></div>
            <div className="imageContainer"><Image src={product.images[2].url} width="100" height="100" alt="" /></div>
          </div>
        </div>
        <div className="info">
          <div className="infoContainer">
            <div className="logo">{showCorrectLogotype()}</div>
            <div className="productName"><p>{product.name}</p></div>
            <div className="rating"></div>
            <div className="description"><p>{product.description.substring(0, 200)}...</p></div>
            <div className="color">
              <Image src={product.images[0].url} width="100" height="100" alt="" />
              <Image src={product.images[0].url} width="100" height="100" alt="" />
              <Image src={product.images[0].url} width="100" height="100" alt="" />
              <Image src={product.images[0].url} width="100" height="100" alt="" />
              <Image src={product.images[0].url} width="100" height="100" alt="" />
              <Image src={product.images[0].url} width="100" height="100" alt="" />
              <Image src={product.images[0].url} width="100" height="100" alt="" />
              <Image src={product.images[0].url} width="100" height="100" alt="" />
              <Image src={product.images[0].url} width="100" height="100" alt="" />
              <Image src={product.images[0].url} width="100" height="100" alt="" />
              <Image src={product.images[0].url} width="100" height="100" alt="" />
              <Image src={product.images[0].url} width="100" height="100" alt="" />
            </div>
            <div className="size">
              <div className="sizeBox"><p>7.0</p></div>
              <div className="sizeBox"><p>7.5</p></div>
              <div className="sizeBox"><p>8.0</p></div>
              <div className="sizeBox"><p>8.5</p></div>
              <div className="sizeBox"><p>9.0</p></div>
              <div className="sizeBox"><p>9.5</p></div>
              <div className="sizeBox"><p>10.0</p></div>
              <div className="sizeBox"><p>10.5</p></div>
              <div className="sizeBox"><p>11.0</p></div>
              <div className="sizeBox"><p>11.5</p></div>
              <div className="sizeBox"><p>12.0</p></div>
              <div className="sizeBox"><p>12.5</p></div>
              <div className="sizeBox"><p>13.0</p></div>
              <div className="sizeBox"><p>13.5</p></div>
              <div className="sizeBox"><p>14.0</p></div>
              <div className="sizeBox"><p>14.5</p></div>
              <div className="sizeBox"><p>15.0</p></div>
            </div>
            <div className="buyAndPrice">
              <div className="addToCartBtn">
                <p>ADD TO CART</p>
                <IconBagOutline style={{color:"#ffffff", hoverColor:"#eb5037", width:"19", height:"18.89"}} />
              </div>
              <p>$ {product.price}.00</p>
            </div>
          </div>
        </div>

    </div>
  )
}

export default ProductDetails