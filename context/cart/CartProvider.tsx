import { FC, PropsWithChildren, useEffect, useReducer } from "react";
import { CartContext, cartReducer } from "./";
import { ICardProduct } from "../../interfaces";
import Cookie from "js-cookie";

export interface CartState {
  cart: ICardProduct[];
  numberOfItems: number;
  subtotal: number;
  tax: number;
  total: number;
}

const CART_INITIAL_STATE: CartState = {
  cart: [],
  numberOfItems: 0,
  subtotal: 0,
  tax: 0,
  total: 0,
};

export const CartProvider: FC<PropsWithChildren> = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, CART_INITIAL_STATE);

  useEffect(() => {
    try {
      const cookieProducts = Cookie.get("cart")
        ? JSON.parse(Cookie.get("cart")!)
        : [];
      dispatch({
        type: "[Cart] - LoadCart from cookies | storage",
        payload: cookieProducts,
      });
    } catch (error) {
      dispatch({
        type: "[Cart] - LoadCart from cookies | storage",
        payload: [],
      });
    }
  }, []);

  useEffect(() => {
    if (state.cart.length > 0) Cookie.set("cart", JSON.stringify(state.cart));
  }, [state.cart]);

  useEffect(() => {
    const numberOfItems = state.cart.reduce(
      (prev, current) => current.quantity + prev,
      0
    );
    const subtotal = state.cart.reduce(
      (prev, current) => current.price * current.quantity + prev,
      0
    );
    const taxRate = Number(process.env.NEXT_PUBLIC_TAX_RATE || 0);

    const orderSummary = {
      numberOfItems,
      subtotal,
      tax: subtotal * taxRate,
      total: subtotal * (taxRate + 1),
    };
    dispatch({ type: '[Cart] - Update order summary', payload: orderSummary})
  }, [state.cart]);

  const addProductToCart = (product: ICardProduct) => {
    const products =
      state.cart.filter(
        (p) => p._id === product._id && product.size?.name === p.size?.name
      ).length > 0
        ? state.cart.map((p) => ({
            ...p,
            quantity:
              p.size?.name === product.size?.name
                ? calculateQuantity(product, p.quantity, product.quantity)
                : p.quantity,
          }))
        : [...state.cart, product];

    dispatch({ type: "[Cart] - Update Products in cart", payload: products });
  };

  const calculateQuantity = (
    product: ICardProduct,
    previousQuantity: number,
    newQuantity: number
  ) => {
    if (product.size?.inStock == undefined)
      return previousQuantity + newQuantity;
    if (previousQuantity + newQuantity > product.size?.inStock)
      return product.size?.inStock;
    return previousQuantity + newQuantity;
  };

  const updateCartQuantity = (product: ICardProduct) => {
    dispatch({ type: "[Cart] - Change cart quantity", payload: product });
  };

  const removeCartProduct = (product: ICardProduct) => {
    const products = state.cart.filter((p) => {
      if (p._id !== product._id) return true;
      if (p.size?.name !== product.size?.name) return true;
    });
    dispatch({ type: "[Cart] - Remove product in cart", payload: products });
  };

  return (
    <CartContext.Provider
      value={{
        ...state,

        //Methods
        updateCartQuantity,
        addProductToCart,
        removeCartProduct,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
