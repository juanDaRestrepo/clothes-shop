import type { GetServerSideProps, NextPage } from "next";

import { Box, Typography } from "@mui/material";
import { ShopLayout } from "../../components/layouts";
import ProductList from "../../components/products/ProductCardList";
import FullScreenLoading from "../../components/ui/FullScreenLoading";
import { dbProducts } from "../../database";
import { IProduct } from "../../interfaces";

interface Props {
  products: IProduct[];
  foundProducts: boolean;
  query: string;
}

const SearchPage: NextPage<Props> = ({ products, foundProducts, query }) => {
  return (
    <ShopLayout
      title={"The Clothe´s Shop- Search"}
      pageDescription={
        "Encuentra las mejores prendas de vestir y ropa deportiva"
      }
    >
      <Typography variant="h1" component="h1">
        Buscar producto
      </Typography>

      {foundProducts ? (
        <Typography variant="h2" sx={{ mb: 1 }}>
          Término: {query}{" "}
        </Typography>
      ) : (
        <Box display='flex'>
          <Typography variant="h2" sx={{ mb: 1 }}> No encontramos ningún producto</Typography>
          <Typography variant="h2" sx={{ ml: 1 }} color="secondary">{ query }</Typography>
        </Box>
      )}

      <ProductList products={products} />
    </ShopLayout>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const { query = "" } = params as { query: string };

  if (query.length === 0) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  let products = await dbProducts.getProductsByTerm(query);
  const foundProducts = products.length > 0;

  if( !foundProducts ) {
    products = await dbProducts.getAllProducts();
  }

  return {
    props: {
      products,
      foundProducts,
      query,
    },
  };
};

export default SearchPage;
