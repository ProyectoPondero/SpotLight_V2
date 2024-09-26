import { UserContext } from '../contexts/UserContext';
import { useContext, useEffect } from 'react';

import React from 'react'

export const Home = () => {
    const { state } = useContext(UserContext);

    useEffect(() => {
    }, [state])

    return (
        <div>
            <h1>Home</h1>
            <h2>{state.usuario ? state.usuario.userName : "No hay usuario"}</h2>
        </div>
    )
}
