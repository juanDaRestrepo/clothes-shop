import { SearchOutlined, ShoppingCartOutlined } from "@mui/icons-material";
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  Link,
  Button,
  IconButton,
  Badge,
} from "@mui/material";

import NextLink from "next/link";

const Navbar = () => {
  return (
    <AppBar>
      <Toolbar>
        {
          <NextLink
            href="/"
            style={{ textDecoration: "none", color: "rgba(0, 0, 0, 0.87)" }}
            passHref 
            legacyBehavior
          >
            <Link style={{ color: "rgba(0, 0, 0, 0.87)" }}>
              <Box display="flex" alignItems="center" justifyContent="center">
                <Typography variant="h6">The clothes |</Typography>
                <Typography sx={{ ml: 0.5 }}>Shop</Typography>
              </Box>
            </Link>
          </NextLink>
        }

        <Box flex={1} />
        <Box sx={{ display: { xs: "none", sm: "block" } }}>
          <NextLink href="/category/men" passHref legacyBehavior>
            <Link>
              <Button>Hombres</Button>
            </Link>
          </NextLink>

          <NextLink href="/category/women" passHref legacyBehavior>
            <Link>
              <Button>Mujeres</Button>
            </Link>
          </NextLink>
          <NextLink href="/category/kids" passHref legacyBehavior>
            <Link>
              <Button>Niños</Button>
            </Link>
          </NextLink>
        </Box>

        <Box flex={1} />
        <IconButton>
          <SearchOutlined />
        </IconButton>
        <NextLink href="/cart">
          <IconButton>
            <Badge badgeContent={2} color="secondary">
              <ShoppingCartOutlined />
            </Badge>
          </IconButton>
        </NextLink>

        <Button>Menu</Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
