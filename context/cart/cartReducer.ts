import { CartState } from ".";
import { ICardProduct } from "../../interfaces";

type CartActionType =
    | { type: '[Cart] - LoadCart from cookies | storage', payload: ICardProduct[] }
    | { type: '[Cart] - Update Products in cart', payload: ICardProduct[] }
    | { type: '[Cart] - Change cart quantity', payload: ICardProduct }

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
        case '[Cart] - Change cart quantity':
                return {
                    ...state,
                    cart: state.cart.map( product => {
                        if( product._id !== action.payload._id){
                            return product;

                        } 
                        if( product.size?.name !== action.payload.size?.name) {
                            return product;
                        }
                        return action.payload;
                    })
                }
        default:
            return state;
    }
}