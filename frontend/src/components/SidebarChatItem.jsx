import { useChatContext } from "../contexts/chat/chatContextProvider";
import { chatTypes } from "../contexts/chat/chatTypes";
import { getMessagesService } from "../api/API.service";
import { scrollToBottom } from "../helpers/scrollToBottom";

export const SidebarChatItem = ({ user }) => {

    const { chatState, dispatch } = useChatContext();
    const { chatActive } = chatState;
    const selectChat = async () => {

        dispatch({
            type: chatTypes.SELECT_CHAT,
            payload: user._id
        });

        const res = await getMessagesService(user._id);

        dispatch({
            type: chatTypes.SET_MESSAGES,
            payload: res.messages
        });

        setTimeout(() => {
            scrollToBottom('chat-messages');
        }, 0);

    };

    return (
        <div onClick={selectChat}
            className={`flex items-center p-2 shadow-lg transition-colors duration-1000 ${(user._id == chatActive) ? 'bg-gray-900' : ''}`}>
            <div className="relative">
                <img src={''} alt={`${user.username} profile`} className="w-10 h-10 rounded-full" />
                <span className={`absolute bottom-0 right-0 w-3 h-3 rounded-full ${user.online ? 'bg-green-500' : 'bg-gray-500'}`}></span>
            </div>
            <div className="ml-4">
                <div className="text-lg font-medium">{user.username}</div>
                <div className="text-sm text-gray-400">
                    mensaje random para rellenar
                    {/* {user.lastMessage.length > 25 ? `${user.lastMessage.slice(0, 25)}...` : user.lastMessage} */}
                </div>
            </div>
        </div>
    )
}