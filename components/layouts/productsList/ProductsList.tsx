import React from 'react'
import ProductListImage from '../productListImage/ProductListImage'
import "./productsList.scss"

type Props = {
    data: any
}

const ProductsList = ({data}:Props) => {
  return (
    <div className='productsList'>
       <ProductListImage/>
    </div>
  )
}

export default ProductsList
