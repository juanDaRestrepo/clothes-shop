import { CartState } from ".";
import { ICardProduct } from "../../interfaces";
import { Product } from "../../models";

type CartActionType =
    | { type: '[Cart] - LoadCart from cookies | storage', payload: ICardProduct[] }
    | { type: '[Cart] - Update Products in cart', payload: ICardProduct[] }

export const cartReducer = (state: CartState, action: CartActionType): CartState => {
    switch (action.type) {
        case '[Cart] - LoadCart from cookies | storage':
            return {
                ...state,
                cart: [...action.payload]
            }
        case '[Cart] - Update Products in cart':
            return {
                ...state,
                cart: [...action.payload]
            }
        default:
            return state;
    }
}