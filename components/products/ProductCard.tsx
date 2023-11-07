

import { Typography, Grid, Card, CardActionArea, CardMedia } from '@mui/material';
import { IProduct } from '../../interfaces';
import { FC } from 'react';

interface Props {
    product: IProduct;
}

const ProductCard: FC<Props> = ({product}) => {
  return (
    <Grid item xs={6} sm={4} key={product.slug}>
      <Card>
        <CardActionArea>
          <CardMedia
            component="img"
            image={`products/${product.images[0]}`}
            alt={product.title}
          />
        </CardActionArea>
      </Card>
    </Grid>
  );
};

export default ProductCard;
