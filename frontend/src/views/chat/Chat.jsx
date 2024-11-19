import { InboxChats } from "../../components/InboxChats"
import { SidebarChat } from "../../components/SidebarChat"
import { SelectChat } from "../../components/SelectChat"
import { useChatContext } from "../../contexts/chat/chatContextProvider"

export const Chat = () => {

    const { chatState } = useChatContext();

    return (
        <div className="flex h-screen">
            <div className="w-1/5">
                <SidebarChat />
            </div>
            <div className="w-4/5">
                {chatState.chatActive ? <InboxChats /> : <SelectChat />}
            </div>
        </div>
    )
}