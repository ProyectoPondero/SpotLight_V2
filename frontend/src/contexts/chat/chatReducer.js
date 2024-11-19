import { chatTypes } from "./chatTypes"

export const chatReducer = (state, action) => {

    switch (action.type) {

        case chatTypes.LOAD_USERS:
            return {
                ...state,
                users: [...action.payload]
            };
        case chatTypes.SELECT_CHAT:
            if (state.chatActive === action.payload)
                return state
            return {
                ...state,
                chatActive: action.payload,
                messages: [],
            };
        case chatTypes.NEW_MESSAGE:
            if (state.chatActive === action.payload.from ||
                state.chatActive === action.payload.to) {
                return {
                    ...state,
                    messages: [...state.messages, action.payload]
                }
            } else {
                return state;
            };
        case chatTypes.SET_MESSAGES:
            return {
                ...state,
                messages: [...action.payload]
            };
        default:
            return state
    }
}