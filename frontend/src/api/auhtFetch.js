import { API_URL } from '../config/env.config.js';
import { fetchData } from '../utilities/fetch.utility.js';

const URL = API_URL + `api/`;

export const register = async (data) => {
    try {
        const response = await fetchData(URL + 'register', 'POST', data);
        const user = await response.json();
        return user;
    } catch (error) {
        throw error;
    }
};

export const login = async (data) => {
    try {
        const response = await fetchData(URL + 'login', 'POST', data);
        const user = await response.json();
        return user;
    } catch (error) {
        throw error;
    }
};

export const session = async () => {
    try {
        const response = await fetchData(URL + 'session', 'GET');

        if (!response.ok) {
            return { user: null };
        }

        const user = await response.json();
        return user;
    } catch (error) {
        throw error;
    }
};

export const logout = async () => {
    try {
        const response = await fetchData(URL + 'logout', 'GET');
        return response;
    } catch (error) {
        throw error;
    }
};