
import NextLink from 'next/link';
import { Box, Button, Grid, Link, TextField, Typography } from "@mui/material"
import AuthLayout from "../../components/layouts/AuthLayout"


const login = () => {
  return (
    <AuthLayout title="Ingresar">
        <Box sx={{ width: 350, padding: '10px 20px' }}>
            <Grid container spacing={2}>
                <Grid item>
                    <Typography variant="h1" component="h1">Iniciar Sesión</Typography>
                </Grid>

                <Grid item xs={12}>
                    <TextField label="Correo" variant="filled" fullWidth/>
                </Grid>
                <Grid item xs={12}>
                    <TextField label="Correo" type="password" variant="filled" fullWidth/>
                </Grid>
                <Grid item xs={12}>
                   <Button color="secondary">
                        Ingresar
                   </Button>
                </Grid>
                <Grid item xs={12} display='flex' justifyContent="end">
                   <NextLink href="/auth/register" passHref legacyBehavior>
                        <Link underline='always'>
                            ¿No tienes cuenta?
                        </Link>
                   </NextLink>
                </Grid>
            </Grid>
        </Box>
    </AuthLayout>
  )
}

export default login
