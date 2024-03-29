import { UiState } from ".";

type UiActionType = 
    | {type: '[UI] - ToogleMenu'}


export const UiReducer = ( state: UiState, action: UiActionType ): UiState => {
    switch (action.type) {
        case '[UI] - ToogleMenu' :
            return {
                ...state,
                isMenuOpen: !state.isMenuOpen
            }
        default:
            return state;
    }
}