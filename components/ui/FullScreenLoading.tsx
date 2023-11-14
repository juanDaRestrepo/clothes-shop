import { Box, CircularProgress, Typography } from "@mui/material";
import React from "react";

const FullScreenLoading = () => {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
      height="calc(100vh - 200px)"
    >
      <Typography sx={{ mb: 2 }} variant="h2">Cargando...</Typography>
      <CircularProgress thickness={ 2 }/>
    </Box>
  );
};

export default FullScreenLoading;
