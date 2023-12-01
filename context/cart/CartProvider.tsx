import { FC, PropsWithChildren, useEffect, useReducer } from "react";
import { CartContext, cartReducer } from "./";
import { ICardProduct } from "../../interfaces";
import Cookie  from 'js-cookie';

export interface CartState {
  cart: ICardProduct[];
}

const CART_INITIAL_STATE: CartState = {
  cart: [],
};

export const CartProvider: FC<PropsWithChildren> = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, CART_INITIAL_STATE);

  useEffect(() => {
    try {
      const cookieProducts = Cookie.get('cart') ? JSON.parse( Cookie.get('cart')! ) : [];
    dispatch({ type: '[Cart] - LoadCart from cookies | storage', payload: cookieProducts});
    } catch (error) {
      dispatch({ type: '[Cart] - LoadCart from cookies | storage', payload: []});
    }
  }, [])

  useEffect(() => {
    if (state.cart.length > 0) Cookie.set('cart', JSON.stringify(state.cart))
  },[state.cart])

  const addProductToCart = (product: ICardProduct) => {
    const products =
    state.cart.filter((p) => p._id === product._id && product.size?.name === p.size?.name).length > 0
        ? state.cart.map((p) => ({ ...p, quantity: p.size?.name === product.size?.name 
                                                      ? calculateQuantity(product, p.quantity, product.quantity) 
                                                      : p.quantity }))
        : [...state.cart, product];
        
    dispatch({ type: "[Cart] - Update Products in cart", payload: products });
  };

  const calculateQuantity = (product: ICardProduct, previousQuantity: number, newQuantity: number) => {
    if (product.size?.inStock == undefined) return previousQuantity + newQuantity;
    if ((previousQuantity + newQuantity) > product.size?.inStock) return product.size?.inStock;
    return previousQuantity + newQuantity;
  }

  const updateCartQuantity = ( product: ICardProduct) => {
    dispatch({ type:'[Cart] - Change cart quantity', payload: product})
  }

  return (
    <CartContext.Provider
      value={{
        ...state,

        //Methods
        updateCartQuantity,
        addProductToCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
