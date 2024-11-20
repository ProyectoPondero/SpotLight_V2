import { API_URL } from '../config/env.config';
import { fetchData } from '../utilities/fetch.utility';

const URL = API_URL + `api`;

export const registerService = async (user) => {
    try {
        const response = await fetchData(`${URL}/register`, 'POST', user);
        const data = await response.json();
        return data;
    } catch (error) {
        console.log({ 'Error al registrar usuario': error });
    }
}

export const loginService = async (user) => {
    try {
        const response = await fetchData(`${URL}/login`, 'POST', user);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error({ 'Error al logear usuario': error });
        toast.error("Error al iniciar sesión. Por favor, inténtelo de nuevo.");
    }
}

export const sessionService = async () => {
    try {
        const response = await fetchData(`${URL}/session`, 'GET');
        if (!response.ok) {
            return { user: null };
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error({ 'Error al obtener sesion': error });
    }
}

export const logoutService = async () => {
    try {
        const response = await fetchData(`${URL}/logout`, 'GET');
        return response;
    } catch (error) {
        console.error({ 'Error al cerrar sesion': error });
    }
}

export const getMessagesService = async (_id) => {
    try {
        const response = await fetchData(`${URL}/messages/${_id}`, 'GET');
        const data = await response.json();
        return data;
    } catch (error) {
        console.error({ 'Error al obtener mensajes': error });
    }
}

export const getAvatarService = async (_id) => {
    try {
        const response = await fetchData(`${URL}/messages/avatar/${_id}`, 'GET');
        const data = await response.json();
        return data;
    } catch (error) {
        console.error({ 'Error al obtener avatar': error });
    }
}