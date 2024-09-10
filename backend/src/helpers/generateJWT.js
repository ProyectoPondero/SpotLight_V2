import jwt from 'jsonwebtoken';
import { JWT_KEY } from '../configs/env.config.js';

// Exporta una función llamada generarJWT que toma un userId como argumento
export const generarJWT = (userId) => {
    // Retorna una nueva promesa
    return new Promise((resolve, reject) => {
        try {
            // Crea un payload con el userId
            const payload = { userId };
            // Firma el token JWT con el payload, una clave secreta y una configuración de expiración
            jwt.sign(payload, JWT_KEY, {
                expiresIn: '5h' // El token expira en 1 hora
            }, (error, token) => {
                // Si hay un error al firmar el token, lo registra en la consola y rechaza la promesa
                if (error) {
                    console.log(error);
                    reject('No se pudo generar el token');
                } else {
                    // Si no hay error, resuelve la promesa con el token generado
                    resolve(token);
                }
            });
        } catch (error) {
            // Si ocurre un error en el bloque try, lo registra en la consola y rechaza la promesa
            console.log(error);
            reject('Error al intentar generar el token');
        }
    });
};