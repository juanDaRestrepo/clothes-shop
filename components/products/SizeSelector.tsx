import { FC } from "react";
import { SizeStock } from "../../interfaces";
import { Box, Button } from "@mui/material";

interface Props {
  selectedSize?: string;
  sizes: SizeStock[];

  //method
  onSelectedSize: (size: SizeStock) => void;
}

export const SizeSelector: FC<Props> = ({
  selectedSize,
  sizes,
  onSelectedSize,
}) => {
  return (
    <Box>
      {sizes
        .filter((size) => size.inStock > 0)
        .map((size) => (
          <Button
            key={size.name}
            size="small"
            color={selectedSize === size.name ? "primary" : "info"}
            onClick={() => onSelectedSize(size)}
          >
            {size.name}
          </Button>
        ))}
    </Box>
  );
};
