import { profileTypes } from './profileTypes'

export const profileReducer = (state, action) => {
    switch (action.type) {
        case profileTypes.getProfile: {
            return {
                ...state,
                profile: action.payload.data,
            };
        }

        case profileTypes.modifyProfile: {
            return {
                ...state,
                profile: action.payload.data,
            };
        }

        default:
            return state;
    }
}