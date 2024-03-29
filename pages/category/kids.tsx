import React from "react";
import { useProducts } from "../../hooks";
import { ShopLayout } from "../../components/layouts";
import { Typography } from "@mui/material";
import FullScreenLoading from "../../components/ui/FullScreenLoading";
import {ProductList} from "../../components/products";

const KidsPage = () => {
  const { products, isLoading } = useProducts("/products?gender=kid");

  return (
    <ShopLayout
      title={"The Clothe´s Shop- niños"}
      pageDescription={
        "Encuentra las mejores prendas de vestir y ropa deportiva para niños"
      }
    >
      <Typography variant="h1" component="h1">
        Niños
      </Typography>
      <Typography variant="h2" sx={{ mb: 1 }}>
        Productos para niños
      </Typography>
      {isLoading ? <FullScreenLoading /> : <ProductList products={products} />}
    </ShopLayout>
  );
};

export default KidsPage;
