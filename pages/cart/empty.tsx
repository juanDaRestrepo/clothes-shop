import { Link, Box, Typography } from "@mui/material";
import { ShopLayout } from "../../components/layouts";
import { RemoveShoppingCartOutlined } from "@mui/icons-material";
import NextLink from "next/link";

const empty = () => {
  return (
    <ShopLayout
      title="Carrito vacio"
      pageDescription="No hay articulos en el carrito de compras"
    >
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        sx={{ flexDirection: { xs: "column", sm: "row" } }}
        height="calc(100vh - 200px)"
      >
        <RemoveShoppingCartOutlined sx={{fontSize: 100}}/>
        <Box display="flex" flexDirection="column" alignItems="center">
          <Typography>Su carrito esta vacio</Typography>
          <NextLink href="/" passHref legacyBehavior>
            <Link 
                typography="h4"
                color="secondary"
            >
                Regresar
            </Link>
          </NextLink>
        </Box>
      </Box>
    </ShopLayout>
  );
};

export default empty;
