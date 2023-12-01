import { createContext } from 'react';
import { ICardProduct } from '../../interfaces';

interface ContextProps {
    cart: ICardProduct[];

    //Methods
    addProductToCart: (product: ICardProduct) => void;
    updateCartQuantity: (product: ICardProduct) => void;
    removeCartProduct: (product: ICardProduct) => void;
}


export const CartContext = createContext({} as ContextProps);