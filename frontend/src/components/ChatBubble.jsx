import { authContext } from "../contexts/user/UserContexProvider";

export const ChatBubble = ({ message }) => {

    const { state } = authContext();

    const isLoggedUser = message.from === state.user._id;

    return (

        <li className={`flex items-end mb-4 ${isLoggedUser ? 'justify-end' : 'justify-start'}`}>
            {!isLoggedUser && (
                <img src={''} alt="profile" className="w-8 h-8 rounded-full mr-2" />
            )}
            <div className={`max-w-xs px-4 py-2 rounded-lg ${isLoggedUser ? 'bg-blue-500 text-white' : 'bg-gray-300 text-black'}`}>
                {message.message}
            </div>
            {isLoggedUser && (
                <img src={''} alt="profile" className="w-8 h-8 rounded-full ml-2" />
            )}
        </li>

    );
};