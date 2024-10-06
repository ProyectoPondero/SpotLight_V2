// src/hooks/useUserInfo.js
import { useEffect, useState } from 'react';

export const useUserInfo = () => {
    const [fotoPerfil, setFotoPerfil] = useState('');

    useEffect(() => {
        const userInfo = localStorage.getItem('userInfo');
        if (userInfo) {
            const parsedUserInfo = JSON.parse(userInfo);
            setFotoPerfil(parsedUserInfo.fotoPerfil);
        }
    }, []);

    return { fotoPerfil };
};
