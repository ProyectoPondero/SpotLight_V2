import { userType } from "./userTypes";

export const userReducer = (state, action) => {
    switch (action.type) {

        case userType.LOGIN: {
            return {
                ...state,
                user: action.payload.data,
                isLogged: true,
            };
        }

        case userType.LOADING: {
            return {
                ...state,
                isLoading: !state.isLoading,
            };
        }

        case userType.SESSION: {
            return {
                ...state,
                user: action.payload.data,
                isLogged: true,
            };
        }

        case userType.LOGOUT: {
            return {
                ...state,
                user: null,
                isLogged: false,
            };
        }

        default:
            return state;
    }
};