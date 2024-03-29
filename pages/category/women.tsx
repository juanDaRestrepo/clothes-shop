import React from "react";
import { useProducts } from "../../hooks";
import { ShopLayout } from "../../components/layouts";
import { Typography } from "@mui/material";
import FullScreenLoading from "../../components/ui/FullScreenLoading";
import {ProductList }from "../../components/products";

const WomenPage = () => {
  const { products, isLoading } = useProducts("/products?gender=women");
  return (
    <ShopLayout
      title={"The Clothe´s Shop - Mujeres"}
      pageDescription={
        "Encuentra las mejores prendas de vestir y ropa deportiva para mujeres"
      }
    >
      <Typography variant="h1" component="h1">
        Mujeres
      </Typography>
      <Typography variant="h2" sx={{ mb: 1 }}>
        Productos para mujeres
      </Typography>
      {isLoading ? <FullScreenLoading /> : <ProductList products={products} />}
    </ShopLayout>
  );
};

export default WomenPage;
