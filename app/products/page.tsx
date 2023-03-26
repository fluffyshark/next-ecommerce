import ProductsList from '@/components/layouts/productsList/ProductsList';
import axios from 'axios';
import React from 'react'

type Props = {}

const getProducts = async () => {
    const { data } = await axios.get(`${process.env.API_URL}/api/products`);
    return data;
  };

  const Products = async () => {

    const productsData = await getProducts();

    return <ProductsList data={productsData} />;
}

export default Products