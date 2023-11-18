import { createContext } from 'react';
import { ICardProduct } from '../../interfaces';


interface ContextProps {
    cart: ICardProduct[];
}


export const CartContext = createContext({} as ContextProps);