import { profileTypes } from './profileTypes'

export const profileReducer = (state, action) => {
    switch (action.type) {
        case profileTypes.getProfile: {
            return {
                ...state,
                profile: action.payload,
            };
        }

        case profileTypes.modifyProfile: {
            return {
                ...state,
                profile: action.payload,
            };
        }

        default:
            return state;
    }
}