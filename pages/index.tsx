import type { NextPage } from "next";

import { Typography } from "@mui/material";
import { ShopLayout } from "../components/layouts";
import ProductList from "../components/products/ProductCardList";
import { useProducts } from "../hooks";
import FullScreenLoading from "../components/ui/FullScreenLoading";



const Home: NextPage = () => {
  
  const { products, isLoading } = useProducts('/products');

  return (
    <ShopLayout
      title={"The Clothe´s Shop- Home"}
      pageDescription={
        "Encuentra las mejores prendas de vestir y ropa deportiva"
      }
    >
      <Typography variant="h1" component="h1">
        Tienda
      </Typography>
      <Typography variant="h2" sx={{ mb: 1 }}>
        Todos los productos
      </Typography>
      {
        isLoading 
          ? <FullScreenLoading />
          : <ProductList products={products} />
      }
    </ShopLayout>
  );
};

export default Home;
