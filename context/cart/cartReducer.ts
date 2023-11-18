import { CartState } from ".";
import { ICardProduct } from "../../interfaces";

type CartActionType = 
    | {type: '[Cart] - LoadCart from cookies | storage', payload: ICardProduct[]}
    | {type: '[Cart] - Add Product', payload: ICardProduct}

export const cartReducer = ( state: CartState, action: CartActionType ): CartState => {
    switch (action.type) {
        case '[Cart] - LoadCart from cookies | storage' :
            return {
                ...state
            }
        default:
            return state;
    }
}