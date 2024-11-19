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
                <div className='flex items-center font-bold ms-2 dark:text-gray-100'>
                    <img className='h-10 md:h-12 p-1' src="/spotlight.ico" alt="icon Spot" />
                    <h1 className='p-2 pl-2 md:text-2xl sm:text-xl'>Spotlight</h1>
                </div>
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