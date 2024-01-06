import {
  ClearOutlined,
  SearchOutlined,
  ShoppingCartOutlined,
} from "@mui/icons-material";
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  Link,
  Button,
  IconButton,
  Badge,
  Input,
  InputAdornment,
} from "@mui/material";

import { useRouter } from "next/router";

import NextLink from "next/link";
import { useContext, useState } from "react";
import { CartContext, UiContext } from "../../context";

const Navbar = () => {
  const { toggleSideMenu } = useContext(UiContext);
  const { numberOfItems } = useContext(CartContext);

  const router = useRouter();

  const [searchTerm, setSearchTerm] = useState("");
  const [isSearchVisible, setIsSeachVisible] = useState(false);

  const onSearchTerm = () => {
    if (searchTerm.trim().length === 0) return;
    router.push(`/search/${searchTerm}`);
  };

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
        <Box
          sx={{
            display: isSearchVisible ? "none" : { xs: "none", sm: "block" },
          }}
          className="fadeIn"
        >
          <NextLink href="/category/men" passHref legacyBehavior>
            <Link>
              <Button color={router.asPath.includes("/men") ? "primary" : "info"}>
                Hombres
              </Button>
            </Link>
          </NextLink>

          <NextLink href="/category/women" passHref legacyBehavior>
            <Link>
              <Button color={router.asPath.includes("/women") ? "primary" : "info"}>
                Mujeres
              </Button>
            </Link>
          </NextLink>
          <NextLink href="/category/kids" passHref legacyBehavior>
            <Link>
              <Button color={router.asPath.includes("/kids") ? "primary" : "info"}>
                Niños
              </Button>
            </Link>
          </NextLink>
        </Box>

        <Box flex={1} />

        {/* Pantallas grandes */}

        {isSearchVisible ? (
          <Input
            sx={{ display: { xs: "none", sm: "flex" } }}
            autoFocus
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            onKeyUp={(e) => (e.key === "Enter" ? onSearchTerm() : null)}
            type="text"
            placeholder="Buscar..."
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={() => setIsSeachVisible(false)}
                >
                  <ClearOutlined />
                </IconButton>
              </InputAdornment>
            }
          />
        ) : (
          <IconButton
            onClick={() => setIsSeachVisible(true)}
            className="fadeIn"
            sx={{ display: {xs: 'none', sm: 'flex' }}}
          >
            <SearchOutlined />
          </IconButton>
        )}

        {/* pantallas pequeñas */}
        <IconButton
          sx={{ display: { xs: "flex", sm: "none" } }}
          onClick={toggleSideMenu}
        >
          <SearchOutlined />
        </IconButton>

        <NextLink href="/cart">
          <IconButton>
            <Badge badgeContent={numberOfItems > 9 ? '+9' : numberOfItems} color="secondary">
              <ShoppingCartOutlined />
            </Badge>
          </IconButton>
        </NextLink>

        <Button onClick={toggleSideMenu}>Menu</Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
