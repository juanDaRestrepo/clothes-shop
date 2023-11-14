import type { NextPage } from "next";

import { Typography } from "@mui/material";
import { ShopLayout } from "../components/layouts";
import { initialData } from "../database/products";
import ProductList from "../components/products/ProductCardList";

import useSWR from "swr";
const fetcher = (...args: [key: string]) =>
  fetch(...args).then((res) => res.json());

const Home: NextPage = () => {
  const { data, error, isLoading } = useSWR("/api/products", fetcher);

  console.log(data);

  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;

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

      <ProductList products={data} />
    </ShopLayout>
  );
};

export default Home;
