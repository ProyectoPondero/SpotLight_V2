import { useProfile } from "../contexts/profile/profileContext";
import { authContext } from "../contexts/user/UserContexProvider";
import { getAvatarService } from "../api/API.service";
import { useEffect, useState } from "react";
export const ChatBubble = ({ message, id }) => {

    const { state } = authContext();
    const [avatar, setAvatar] = useState("");
    const { state: { profile } } = useProfile();

    const isLoggedUser = message.from === state.user._id;

    const myAvatar = profile?.avatar ? profile.avatar.url : "https://via.placeholder.com/150";


    useEffect(() => {
        (async () => {
            if (id !== state.user._id) {
                const response = await getAvatarService(id);
                setAvatar(response.avatar.url);
            }
        })()
    }, []);

    return (

        <li className={`flex items-end mb-4 ${isLoggedUser ? 'justify-end' : 'justify-start'}`}>
            {!isLoggedUser && (
                <img src={avatar} alt="profile" className="w-8 h-8 rounded-full mr-2" />
            )}
            <div className={`max-w-xs px-4 py-2 rounded-lg ${isLoggedUser ? 'bg-blue-500 text-white' : 'bg-gray-300 text-black'}`}>
                {message.message}
            </div>
            {isLoggedUser && (
                <img src={myAvatar} alt="profile" className="w-8 h-8 rounded-full ml-2" />
            )}
        </li>

    );
};