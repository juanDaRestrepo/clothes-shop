import { FC, PropsWithChildren, useReducer } from "react";
import { CartContext, cartReducer } from "./";
import { ICardProduct } from "../../interfaces";

export interface CartState {
  cart: ICardProduct[];
}

const CART_INITIAL_STATE: CartState = {
  cart: [],
};

export const CartProvider: FC<PropsWithChildren> = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, CART_INITIAL_STATE);

  const addProductToCart = (product: ICardProduct) => {
    const products =
      state.cart.filter((p) => p._id === p._id && product.size === p.size).length > 0
        ? state.cart.map((p) => ({ ...product, quantity: product.quantity + p.quantity }))
        : [...state.cart, product];
    dispatch({ type: "[Cart] - Update Products in cart", payload: products });
  };

  return (
    <CartContext.Provider
      value={{
        ...state,

        //Methods
        addProductToCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
