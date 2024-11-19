import { useChatContext } from "../contexts/chat/chatContextProvider";
import { ChatBubble } from "./ChatBubble";
import { SendMessage } from "./SendMessage";

export const InboxChats = () => {

    const { chatState } = useChatContext();

    return (

        <div className="h-screen bg-gray-900 text-white p-4 flex flex-col">
            <ul
                id="chat-messages"
                className="flex-grow overflow-y-auto"
            >
                {chatState.messages
                    .map((message) => (
                        <ChatBubble
                            key={message._id}
                            message={message}
                        />
                    ))}
            </ul>
            <SendMessage />
        </div>

    );

};