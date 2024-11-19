import { createContext, useEffect } from "react";

import { authContext } from "../user/UserContexProvider";
import { useChatContext } from "../chat/chatContextProvider";
import { useSocket } from "../../hooks/useSocket";

import { chatTypes } from "../chat/chatTypes"
import { scrollToBottomAnimated } from "../../helpers/scrollToBottom";

export const SocketContext = createContext();

export const SocketContextProvider = ({ children }) => {

    const [socket, online, connectSocket, disconnectSocket] = useSocket('http://localhost:3368');
    const { state } = authContext();
    const { dispatch } = useChatContext();

    useEffect(() => {

        if (state.user) {
            connectSocket();
        };

    }, [state, connectSocket]);

    useEffect(() => {

        if (!state.user) {
            disconnectSocket();
        };

    }, [state, disconnectSocket]);

    useEffect(() => {

        socket?.on('users-list', (users) => {
            dispatch({
                type: chatTypes.LOAD_USERS,
                payload: users
            });
        });

    }, [socket, dispatch]);

    useEffect(() => {

        socket?.on('direct-message', (message) => {
            dispatch({
                type: chatTypes.NEW_MESSAGE,
                payload: message
            });

            setTimeout(() => {
                scrollToBottomAnimated('chat-messages');
            }, 0);
        });

    }, [socket, dispatch]);

    return (
        <SocketContext.Provider value={{ socket, online }}>
            {children}
        </SocketContext.Provider>
    );
};