import React from "react";
import axios from "axios";
import MainPage from "@/components/layouts/mainPage/MainPage"

const getProducts = async () => {
  const { data } = await axios.get(`${process.env.API_URL}/api/products`);
  return data;
};

const HomePage = async () => {
  const productsData = await getProducts();

  return <MainPage data={productsData} />;
};

export default HomePage;