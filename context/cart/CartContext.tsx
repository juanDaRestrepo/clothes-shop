import { createContext } from "react";
import { ICardProduct } from "../../interfaces";

interface ContextProps {

  isLoaded: boolean;
  cart: ICardProduct[];

  numberOfItems: number;
  subtotal: number;
  tax: number;
  total: number;

  //Methods
  addProductToCart: (product: ICardProduct) => void;
  updateCartQuantity: (product: ICardProduct) => void;
  removeCartProduct: (product: ICardProduct) => void;
}

export const CartContext = createContext({} as ContextProps);
