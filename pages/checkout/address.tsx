import React from "react";
import { GetServerSideProps } from "next";
import { ShopLayout } from "../../components/layouts";
import { Box, Button, Grid, TextField, Typography } from "@mui/material";
import { jwt } from "../../utils";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import Cookies from "js-cookie";

type FormData = {
  firstName: string;
  lastName: string;
  address: string;
  address2: string;
  zip: string;
  city: string;
  phone: string;
};

const getAddressFromCookies = (): FormData => {
  return {
    firstName: Cookies.get("firstName") || "",
    lastName: Cookies.get("lastName") || "",
    address: Cookies.get("address") || "",
    address2: Cookies.get("address2") || "",
    zip: Cookies.get("zip") || "",
    city: Cookies.get("city") || "",
    phone: Cookies.get("phone") || "",
  };
};

const AddressPage = () => {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    defaultValues: getAddressFromCookies(),
  });

  const onSubmitAddress = (data: FormData) => {
    console.log(data);
    Cookies.set('firstName', data.firstName);
    Cookies.set('lastName', data.lastName);
    Cookies.set('address', data.address);
    Cookies.set('address2', data.address2 || '');
    Cookies.set('zip', data.zip);
    Cookies.set('city', data.city);
    Cookies.set('phone', data.phone);
  };

  return (
    <ShopLayout
      title="Dirección"
      pageDescription={"Confimar dirección del destino"}
    >
      <form onSubmit={handleSubmit(onSubmitAddress)}>
        <Typography variant="h1" component="h1">
          Dirección
        </Typography>
        <Grid container spacing={2} sx={{ mt: 2 }}>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Nombre"
              variant="filled"
              fullWidth
              {...register("firstName", {
                required: "Este campo es requrido",
              })}
              error={!!errors.firstName}
              helperText={errors.firstName?.message}
            ></TextField>
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField 
              label="Apellido" 
              variant="filled" 
              fullWidth
              {...register("lastName", {
                required: "Este campo es requrido",
              })}
              error={!!errors.lastName}
              helperText={errors.lastName?.message}
            >

            </TextField>
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField 
              label="Dirección" 
              variant="filled" 
              fullWidth
              {...register("address", {
                required: "Este campo es requrido",
              })}
              error={!!errors.address}
              helperText={errors.address?.message}
            >

            </TextField>
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Dirección 2 (opcional)"
              variant="filled"
              fullWidth
            ></TextField>
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Código Postal"
              variant="filled"
              fullWidth
              {...register("zip", {
                required: "Este campo es requrido",
              })}
              error={!!errors.zip}
              helperText={errors.zip?.message}
            ></TextField>
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField 
              label="Ciudad" 
              variant="filled" 
              fullWidth
              {...register("city", {
                required: "Este campo es requrido",
              })}
              error={!!errors.city}
              helperText={errors.city?.message}
            ></TextField>
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField 
              label="Teléfono" 
              variant="filled" 
              fullWidth
              {...register("phone", {
                required: "Este campo es requrido",
              })}
              error={!!errors.phone}
              helperText={errors.phone?.message}
            ></TextField>
          </Grid>
        </Grid>
        <Box sx={{ mt: 3 }} display="flex" justifyContent="center">
          <Button
            type="submit"
            color="secondary"
            className="circular-btn"
            size="large"
          >
            Revisar pedido
          </Button>
        </Box>
      </form>
    </ShopLayout>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  const { token = "" } = req.cookies;
  let isValidToken = false;

  try {
    await jwt.isValidToken(token);
    isValidToken = true;
  } catch (error) {
    isValidToken = false;
  }

  if (!isValidToken) {
    return {
      redirect: {
        destination: "/auth/login?p=/checkout/address",
        permanent: false,
      },
    };
  }

  return {
    props: {},
  };
};

export default AddressPage;
