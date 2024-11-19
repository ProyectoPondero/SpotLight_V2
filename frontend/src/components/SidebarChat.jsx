import { Link } from 'react-router-dom';
import { authContext } from '../contexts/user/UserContexProvider';
import { useChatContext } from '../contexts/chat/chatContextProvider';
import { SidebarChatItem } from './SidebarChatItem';

export const SidebarChat = () => {

    const { state } = authContext();
    const { chatState } = useChatContext();

    return (
        <div className="h-screen bg-gray-800 text-white">
            <Link to='/home' className="p-4 border-b border-gray-700">
                <h2 className="ms-2 text-xl font-semibold">Chats</h2>
            </Link>
            <div>
                {chatState.users
                    .filter(user => user._id !== state.user._id)
                    .map((user) => (
                        <SidebarChatItem
                            key={user._id}
                            user={user}
                        />
                    ))
                }
            </div>
        </div>
    );
};