import { FC, PropsWithChildren, useReducer } from 'react';
import { UiContext, UiReducer } from './';

export interface UiState {
    isMenuOpen: boolean;
}

const UI_INITIAL_STATE: UiState = {
    isMenuOpen: false,
}

export const UiProvider:FC<PropsWithChildren> = ({children}) => {

    const [state, dispatch] = useReducer(UiReducer, UI_INITIAL_STATE);

    const toggleSideMenu = () => {
        dispatch({ type: '[UI] - ToogleMenu'})
    }
    
    return (
        <UiContext.Provider value={{
            ...state,

            // Methods
            toggleSideMenu
        }}>
            { children }
        </UiContext.Provider>
    )
}