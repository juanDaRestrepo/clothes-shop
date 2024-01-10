import { CartState } from ".";
import { ICardProduct } from "../../interfaces";

type CartActionType =
    | { type: '[Cart] - LoadCart from cookies | storage', payload: ICardProduct[] }
    | { type: '[Cart] - Update Products in cart', payload: ICardProduct[] }
    | { type: '[Cart] - Change cart quantity', payload: ICardProduct }
    | { type: '[Cart] - Remove product in cart', payload: ICardProduct[] }
    | {
        type: '[Cart] - Update order summary', payload: {
            numberOfItems: number;
            subtotal: number;
            tax: number;
            total: number;
        }
    }
export const cartReducer = (state: CartState, action: CartActionType): CartState => {
    switch (action.type) {
        case '[Cart] - LoadCart from cookies | storage':
            return {
                ...state,
                isLoaded: true,
                cart: [...action.payload]
            }
        case '[Cart] - Update Products in cart':
            return {
                ...state,
                cart: [...action.payload]
            }
        case '[Cart] - Change cart quantity':
            return {
                ...state,
                cart: state.cart.map(product => {
                    if (product._id !== action.payload._id) {
                        return product;

                    }
                    if (product.size?.name !== action.payload.size?.name) {
                        return product;
                    }
                    return action.payload;
                })
            }
        case '[Cart] - Remove product in cart':
            return {
                ...state,
                cart: [...action.payload]
            }
        case '[Cart] - Update order summary':
            return {
                ...state,
                ...action.payload
            }
        default:
            return state;
    }
}