"use client"

import React from 'react'
import "./productsListMenu.scss"

type Props = {}

const ProductsListMenu = (props: Props) => {

    const menuClickHandler = (selectedMenu: string) => {

        // Create array with button IDs and removes/filter the one selected
        let selectedArray: string[] = ["product_popular", "product_newest", "product_sale", "product_all"].filter((item: string) => !item.includes(selectedMenu));
        
        // Add class to the one selected and uses the array to remove the class of those which are not selected, if they do have it 
        (document.getElementById(selectedMenu) as HTMLFormElement).classList.add("menu_active");
        (document.getElementById(selectedArray[0]) as HTMLFormElement).classList.remove("menu_active");
        (document.getElementById(selectedArray[1]) as HTMLFormElement).classList.remove("menu_active");
        (document.getElementById(selectedArray[2]) as HTMLFormElement).classList.remove("menu_active");
    };

  return (
    <div className='productsListMenu'>
        <div className="top">
            <p>MEN</p>
            <p>WOMEN</p>
            <p>KIDS</p>
        </div>
        <div className="bottom">
            <p>VIEW BY.</p>
            <p id="product_popular" onClick={() => menuClickHandler("product_popular")}>POPULAR</p>
            <p id="product_newest" onClick={() => menuClickHandler("product_newest")}>NEWEST</p>
            <p id="product_sale" onClick={() => menuClickHandler("product_sale")}>SALE</p>
            <p id="product_all" onClick={() => menuClickHandler("product_all")}>VIEW ALL</p>
        </div>
    </div>
  )
}

export default ProductsListMenu