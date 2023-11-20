import React from "react";
import { useProducts } from "../../hooks";
import { ShopLayout } from "../../components/layouts";
import { Typography } from "@mui/material";
import FullScreenLoading from "../../components/ui/FullScreenLoading";
import {ProductList} from "../../components/products";

const MenPage = () => {
  const { products, isLoading } = useProducts("/products?gender=men");
  return (
    <ShopLayout
      title={"The Clothe´s Shop - Hombres"}
      pageDescription={
        "Encuentra las mejores prendas de vestir y ropa deportiva para Hombres"
      }
    >
      <Typography variant="h1" component="h1">
        Hombres
      </Typography>
      <Typography variant="h2" sx={{ mb: 1 }}>
        Productos para hombres
      </Typography>
      {isLoading ? <FullScreenLoading /> : <ProductList products={products} />}
    </ShopLayout>
  );
};

export default MenPage;
