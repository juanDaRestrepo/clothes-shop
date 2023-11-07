import type { NextPage } from 'next'
import { Typography } from '@mui/material';
import { ShopLayout } from '../components/layouts'
import { initialData } from "../database/products"
import ProductList from '../components/products/ProductCardList';

const Home: NextPage = () => {
  return (
    <ShopLayout title={'The Clothe´s Shop- Home'} pageDescription={'Encuentra las mejores prendas de vestir y ropa deportiva'}>
      <Typography variant='h1' component='h1'>Tienda</Typography>
      <Typography variant='h2' sx={{ mb: 1 }}>Todos los productos</Typography>
      
      <ProductList 
        products={initialData.products as any}
      />


    </ShopLayout>
  )
}

export default Home
