import React from 'react'
import ProductListImage from '../productListImage/ProductListImage'
import ProductsListMenu from '../productsListMenu/ProductsListMenu'
import "./productsList.scss"

type Props = {
    data: any
}

const ProductsList = ({data}:Props) => {
  return (
    <div className='productsList'>
       <ProductListImage/>
       <ProductsListMenu/>

    </div>
  )
}

export default ProductsList
