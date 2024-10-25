import { createContext, useContext, useReducer } from 'react';
import { getProfile, modifyProfile } from '../../services/profile.service.js';
import { profileReducer } from './profileReducer.js';
import { profileTypes } from './profileTypes.js'

const ProfileContext = createContext();

export const ProfileProvider = ({ children }) => {
    const initialState = {
        profile: null,
    };

    const [state, dispatch] = useReducer(profileReducer, initialState);

    const getProfileData = async () => {
        try {
            const response = await getProfile();
            if (response) {
                dispatch({
                    type: profileTypes.getProfile,
                    payload: response,
                });
            }
            return response;
        } catch (error) {
            console.error('Error al obtener el perfil:', error);
        }
    };

    const modifyProfileData = async (profile) => {
        try {
            const response = await modifyProfile(profile);
            if (response) {
                dispatch({
                    type: profileTypes.modifyProfile,
                    payload: response,
                });
            }
        } catch (error) {
            console.error('Error al modificar el perfil:', error);
        }
    };

    return (
        <ProfileContext.Provider value={{ state, getProfileData, modifyProfileData }}>
            {children}
        </ProfileContext.Provider>
    );
}

export const useProfile = () => useContext(ProfileContext)