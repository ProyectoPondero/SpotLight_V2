import jwt from 'jsonwebtoken';
import { JWT_KEY } from "../configs/env.config.js";

export const authJWT = (token = '') => {
    try {
        const { user } = jwt.verify(token, JWT_KEY);

        return [true, user];
    } catch (error) {
        return [false, null];
    };
};