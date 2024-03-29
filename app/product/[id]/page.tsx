import ProductDetails from '@/components/layouts/productDetails/ProductDetails';
import axios from 'axios';
import React from 'react';


type Props = {
  params: {
    id: string;
  };
};


const getProductDetails = async (id:string) => {
    const { data } = await axios.get(`${process.env.API_URL}/api/products/${id}`);
    return data?.product;
  };
  
  const ProductDetailsPage = async ({params}:Props) => {
    const product = await getProductDetails(params.id);
    

    return <ProductDetails product={product} />;
  };
  
  export default ProductDetailsPage;