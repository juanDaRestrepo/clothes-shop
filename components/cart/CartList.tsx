import {
  Box,
  Button,
  CardActionArea,
  CardMedia,
  Grid,
  Link,
  Typography,
} from "@mui/material";

import NextLink from "next/link";
import { ItemCounter } from "../ui";
import { FC, useContext } from "react";
import { ICardProduct } from "../../interfaces";
import { CartContext } from "../../context/cart/CartContext";


interface Props {
  editable?: boolean;
}


const CartList: FC<Props> = ({ editable = false }) => {

  
  const { cart, updateCartQuantity, removeCartProduct } = useContext(CartContext);

  const onUpdateQuantity = (product: ICardProduct, newQuantity: number) => {
    product.quantity = newQuantity;
    updateCartQuantity(product);
  };

  return (
    <>
      {cart.map((product) => (
        <Grid container spacing={2} sx={{ mb: 1 }} key={product.slug + product.size?.name}>
          <Grid item xs={3}>
            <NextLink href={`/product/${product.slug}`} passHref legacyBehavior>
              <Link>
                <CardActionArea>
                  <CardMedia
                    image={`/products/${product.image}`}
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
                Talla: <strong>{product.size?.name}</strong>{" "}
              </Typography>
              {editable ? (
                <ItemCounter
                  currentValue={product.quantity}
                  maxValue={product.size?.inStock ? product.size.inStock : 1}
                  updatedQuantity={(value) => onUpdateQuantity(product, value)}
                />
              ) : (
                <Typography variant="h5">{product.quantity}</Typography>
              )}
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
            {editable && (
              <Button 
                variant="text" 
                color="secondary" 
                onClick={() => removeCartProduct(product)}
              >
                Remover
              </Button>
            )}
          </Grid>
        </Grid>
      ))}
    </>
  );
};

export default CartList;
