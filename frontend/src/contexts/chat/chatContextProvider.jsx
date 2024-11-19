import { createContext, useContext, useReducer } from 'react'
import { chatReducer } from './chatReducer';

const chatContext = createContext();

export const ChatContextProvider = ({ children }) => {

    const initialState = {
        _id: '',
        chatActive: null,
        users: [],
        messages: [],
    };

    const [chatState, dispatch] = useReducer(chatReducer, initialState);


    return (
        <chatContext.Provider value={{ chatState, dispatch }}>
            {children}
        </chatContext.Provider>
    );
};

export const useChatContext = () => useContext(chatContext);