import { Box, Button, Grid, Typography } from "@mui/material";
import { ShopLayout } from "../../components/layouts";
import ProductSlideshow from "../../components/products/ProductSlideshow";
import ItemCounter from "../../components/ui/ItemCounter";
import SizeSelector from "../../components/products/SizeSelector";
import { useRouter } from "next/router";
import { GetServerSideProps, NextPage } from "next";
import { IProduct } from "../../interfaces";
import { getProductBySlug } from "../../database/dbProducts";
import Product from '../../models/Products';

interface Props {
  product: IProduct;
}

const ProductPage: NextPage<Props> = ({ product }) => {
  const router = useRouter();

  return (
    <ShopLayout title={product.title} pageDescription={product.description}>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={7}>
          <ProductSlideshow images={product.images} />
        </Grid>
        <Grid item xs={12} sm={5}>
          <Box display="flex" flexDirection="column">
            {/* Titulos */}
            <Typography variant="h1" component="h1">
              {product.title}
            </Typography>
            <Typography variant="subtitle1" component="h2">
              ${product.price}
            </Typography>

            {/* Cantidad */}
            <Box sx={{ my: 2 }}>
              <Typography variant="subtitle2">Cantidad</Typography>
              <ItemCounter />
              <SizeSelector sizes={product.sizes} />
            </Box>

            {/* Agregar al carrito */}
            <Button color="secondary" className="circular-btn">
              Agregar al carrito
            </Button>

            {/*  <Chip label="No hay disponibles" color="error" variant="outlined" /> */}

            {/* Descripción */}
            <Box sx={{ mt: 3 }}>
              <Typography variant="subtitle2">Descripción</Typography>
              <Typography variant="body2">{product.description}</Typography>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ShopLayout>
  );
};

export const getServerSideProps: GetServerSideProps = async ({params}) => {
  
  const { slug = '' } = params as { slug: string };
  const product = await  getProductBySlug(slug);

  if ( !product ) {
    return {
      redirect: {
        destination: '/',
        permanent: false
      }
    }
  } 

  return {
    props: {
      product
    }
  }
}

export default ProductPage;
