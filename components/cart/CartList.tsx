import {
  Box,
  Button,
  CardActionArea,
  CardMedia,
  Grid,
  Link,
  Typography,
} from "@mui/material";
import { initialData } from "../../database/products";
import NextLink from "next/link";
import ItemCounter from "../ui/ItemCounter";

const productsInCart = [
  initialData.products[0],
  initialData.products[2],
  initialData.products[3],
];

const CartList = () => {
  return (
    <>
      {productsInCart.map((product) => (
        <Grid container spacing={2} sx={{ mb: 1 }} key={product.slug}>
          <Grid item xs={3}>
            <NextLink href="/product/slug" passHref legacyBehavior>
              <Link>
                <CardActionArea>
                  <CardMedia
                    image={`products/${product.images[0]}`}
                    component="img"
                    sx={{ borderRadius: "5px" }}
                  />
                </CardActionArea>
              </Link>
            </NextLink>
          </Grid>
          <Grid item xs={7}>
            <Box display="flex" flexDirection="column">
              <Typography variant="body1">{product.title}</Typography>
              <Typography variant="body1">
                Talla: <strong>M</strong>{" "}
              </Typography>

              <ItemCounter />
            </Box>
          </Grid>
          <Grid
            item
            xs={2}
            display="flex"
            alignItems="center"
            flexDirection="column"
          >
            <Typography variant="subtitle1">{product.price}</Typography>
            <Button variant="text" color="secondary">Remover</Button>
          </Grid>
        </Grid>
      ))}
    </>
  );
};

export default CartList;
