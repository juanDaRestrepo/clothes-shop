import type { NextPage } from 'next'
import { Typography, Grid, Card, CardActionArea, CardMedia } from '@mui/material';
import { ShopLayout } from '../components/layouts'
import { initialData } from "../database/products"

const Home: NextPage = () => {
  return (
    <ShopLayout title={'The Clothe´s Shop- Home'} pageDescription={'Encuentra las mejores prendas de vestir y ropa deportiva'}>
      <Typography variant='h1' component='h1'>Tienda</Typography>
      <Typography variant='h2' sx={{ mb: 1 }}>Todos los productos</Typography>
      
      <Grid container spacing={4}>
        {
          initialData.products.map( product => (
            <Grid item xs={6} sm={4} key={ product.slug}>
              <Card>
                <CardActionArea>
                  <CardMedia 
                    component='img'
                    image={`products/${product.images[0]}`}
                    alt={ product.title }
                  />
                </CardActionArea>
              </Card>
            </Grid>
          ))
        }

      </Grid>

    </ShopLayout>
  )
}

export default Home
