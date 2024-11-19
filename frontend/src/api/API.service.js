import { API_URL } from '../config/env.config';
import { fetchData } from '../utilities/fetch.utility';

const URL = API_URL + `api/`;

export const registerService = async (user) => {
    try {
        const response = await fetchData(`${URL}/register`, 'POST', user);
        const user = await response.json();
        return user;
    } catch (error) {
        console.log({ 'Error al registrar usuario': error });
    }
}

export const loginService = async (user) => {
    try {
        const response = await fetchData(`${URL}/login`, 'POST', user);
        const user = await response.json();
        return user;
    } catch (error) {
        console.error({ 'Error al logear usuario': error });
    }
}

export const sessionService = async () => {
    try {
        const response = await fetchData(`${URL}/session`, 'GET');
        if (!response.ok) {
            return { user: null };
        }

        const user = await response.json();
        return user;
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
        const messages = await response.json();
        return messages;
    } catch (error) {
        console.error({ 'Error al obtener mensajes': error });
    }
}