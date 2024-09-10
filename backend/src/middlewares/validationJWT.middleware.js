import jwt from 'jsonwebtoken';
import { JWT_KEY } from '../configs/env.config.js';
import { connectDB } from '../dataBase/dbConfig.js';
import { userModel } from '../models/user.model.js';

// Middleware para verificar el token JWT
export const validarJWT = async (req, res, next) => {
    try {
        // console.log(req.session); // Imprime la sesión de la solicitud para depuración
        // console.log('-----------'); // Imprime una línea separadora para depuración
        // console.log(req.cookies); // Imprime las cookies de la solicitud para depuración
        const token = req.cookies.authToken; // Obtiene el token JWT de las cookies de la solicitud

        if (!token) {
            return res.status(403).json({ message: 'Token no proporcionado' });
        }
        // Verifica y decodifica el token usando la clave JWT
        const decoded = jwt.verify(token, JWT_KEY);
        await connectDB();

        // Buscar al usuario en la base de datos usando Mongoose
        const user = await userModel.findById(decoded.userId);

        if (!user) {
            return res.status(401).json({ message: 'Token inválido' });
        }

        // Agrega el usuario a la solicitud para que esté disponible en los siguientes middleware
        req.user = user;
        next();
    } catch (error) {
        return res.status(500).json({ message: 'Error del servidor', error: error.message });
    }
};