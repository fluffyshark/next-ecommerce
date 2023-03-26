"use client"

import PriceSlider from '@/components/functionality/priceSlider/PriceSlider'
import React, { useState } from 'react'
import "./productsFilter.scss"

type Props = {}

const ProductsFilter = (props: Props) => {

    const [minPrice, setMinPrice] = useState(0);
    const [maxPrice, setMaxPrice] = useState(1000);
  
    const handlePriceChange = (min: number, max: number) => {
      setMinPrice(min);
      setMaxPrice(max);
    };

    const [brands, setBrands] = useState({
        adidas: false,
        brooks: false,
        converse: false,
        fredperry: false,
        nb: false,
        nike: false,
        puma: false,
        reebok: false,
        saucony: false,
        vans: false,
      });

      const [occasion, setOcassion] = useState({
        outdoor: false,
        trail: false,
        treadmill: false,
        walking: false,
      });

      const handleBrandsChange = (checkboxName: string, checked: boolean) => {
        setBrands({ ...brands, [checkboxName]: checked });
      };

      const handleOccasionChange = (checkboxName: string, checked: boolean) => {
        setOcassion({ ...occasion, [checkboxName]: checked });
      };


    function toggleFilter(filter: string, filterHeight: string) {

        if ((document.getElementById(filter) as HTMLFormElement).style.height === filterHeight) {
            (document.getElementById(filter) as HTMLFormElement).style.height = "50px";
            (document.getElementById(filter) as HTMLFormElement).style.marginBottom = "0px";
        } else {
            (document.getElementById(filter) as HTMLFormElement).style.height = filterHeight;
            (document.getElementById(filter) as HTMLFormElement).style.marginBottom = "10px";
        }
    }


  return (
    <div className="productsFilter">
            <div className="foundItem">
                <p>Found</p>
                <p>79</p>
            </div>
            <div className="resetFilter"><p>RESET FILTER</p></div>
            <div id="filter_brand" className="searchOption" style={{marginTop:"40px"}} >
                <div className="default" onClick={() => toggleFilter("filter_brand", "250px")}>
                    <p>BRAND</p>
                    <p>+</p>
                </div>
                <div className="filterContent">
                    <div className="inputContainer"><input type="checkbox" checked={brands.adidas} onChange={(event) => handleBrandsChange('adidas', event.target.checked)}/><p>Adidas</p></div>
                    <div className="inputContainer"><input type="checkbox" checked={brands.brooks} onChange={(event) => handleBrandsChange('brooks', event.target.checked)}/><p>Brooks</p></div>
                    <div className="inputContainer"><input type="checkbox" checked={brands.converse} onChange={(event) => handleBrandsChange('converse', event.target.checked)}/><p>Converse</p></div>
                    <div className="inputContainer"><input type="checkbox" checked={brands.fredperry} onChange={(event) => handleBrandsChange('fredperry', event.target.checked)}/><p>Fred Perry</p></div>
                    <div className="inputContainer"><input type="checkbox" checked={brands.nb} onChange={(event) => handleBrandsChange('nb', event.target.checked)}/><p>NB</p></div>
                    <div className="inputContainer"><input type="checkbox" checked={brands.nike} onChange={(event) => handleBrandsChange('nike', event.target.checked)}/><p>Nike</p></div>
                    <div className="inputContainer"><input type="checkbox" checked={brands.puma} onChange={(event) => handleBrandsChange('puma', event.target.checked)}/><p>Puma</p></div>
                    <div className="inputContainer"><input type="checkbox" checked={brands.reebok} onChange={(event) => handleBrandsChange('reebok', event.target.checked)}/><p>Reebok</p></div>
                    <div className="inputContainer"><input type="checkbox" checked={brands.saucony} onChange={(event) => handleBrandsChange('saucony', event.target.checked)}/><p>Saucony</p></div>
                    <div className="inputContainer"><input type="checkbox" checked={brands.vans} onChange={(event) => handleBrandsChange('vans', event.target.checked)}/><p>Vans</p></div>
                </div>
            </div>
            <div id="filter_size" className="searchOption" >
                <div className="default" onClick={() => toggleFilter("filter_size", "240px")}>
                    <p>SIZE</p>
                    <p>+</p>
                </div>
                <div className="filterContent">
                    <div className="sizeBoxContainer">
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
                    </div>
                </div>
            </div>
            <div id="filter_occasion" className="searchOption">
                <div className="default" onClick={() => toggleFilter("filter_occasion", "130px")}>
                    <p>OCCASION</p>
                    <p>+</p>
                </div>
                <div className="filterContent">
                    <div className="inputContainer"><input type="checkbox" checked={occasion.outdoor} onChange={(event) => handleOccasionChange('outdoor', event.target.checked)}/><p>Outdoor Running</p></div>
                    <div className="inputContainer"><input type="checkbox" checked={occasion.trail} onChange={(event) => handleOccasionChange('brooks', event.target.checked)}/><p>Trail & Hiking</p></div>
                    <div className="inputContainer"><input type="checkbox" checked={occasion.treadmill} onChange={(event) => handleOccasionChange('converse', event.target.checked)}/><p>Treadmill & Gym</p></div>
                    <div className="inputContainer"><input type="checkbox" checked={occasion.walking} onChange={(event) => handleOccasionChange('fredperry', event.target.checked)}/><p>Walking</p></div>
                </div>
            </div>
            <div id="filter_price" className="searchOption">
                <div className="default" onClick={() => toggleFilter("filter_price", "130px")}>
                    <p>PRICE</p>
                    <p>+</p>
                </div>
                <div className="filterContent">
                    <PriceSlider  />
                </div>
            </div>
        </div>
  )
}

export default ProductsFilter