import React from 'react'
import Image from "next/image";
import ProductListImage from '../productListImage/ProductListImage'
import ProductsListMenu from '../productsListMenu/ProductsListMenu'
import "./productsList.scss"
import ProductsFilter from '../productsFilter/ProductsFilter';

type Props = {
    data: any
}

const ProductsList = ({data}:Props) => {
  return (
    <div className='productsList'>
       <ProductListImage/>
       <ProductsListMenu/>

       <div className="main">

        <ProductsFilter/> 

        <div className="productsContainer">
            
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
       </div>

    </div>
  )
}

export default ProductsList
