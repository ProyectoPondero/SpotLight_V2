import { userService } from '../services/user.service.js';
import { generarJWT } from '../helpers/generateJWT.js';

export const authCtrl = {};

// Registrar nuevo usuario
authCtrl.register = async (req, res) => {
    const { username, email, password } = req.body;
    try {
        const newUser = await userService.createUser({
            username,
            email,
            password
        });
        // Comprobando si el usuario ya existe
        if (newUser instanceof Error) {
            return res.status(400).json({ message: newUser.message });
        }
        //Generar el perfil del usuario
        await userService.createProfile(newUser._id, newUser.username, newUser.email);
        // Si el usuario fue creado
        res.status(201).json({
            message: 'Usuario creado correctamente',
            data: newUser
        });
        // Capturando errores
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Error del servidor' });
    };
};

// Loguear un usuario
authCtrl.login = async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await userService.login(email, password);
        // Comprobando si el usuario no existe
        if (user instanceof Error) {
            return res.status(400).json({ message: user.message });
        }

        const token = await generarJWT(user);

        res.cookie('token', token, {
            httpOnly: false, // The cookie only accessible by the web server //! Cambiar a true luego de probar
            secure: false,  // Set to true if your website is served over HTTPS //! Cambiar a true en caso de usar https
            maxAge: 60 * 60 * 1000 // 1 hour
        });

        // Si el usuario existe
        res.status(200).json({
            message: 'Usuario logeado correctamente',
            data: user
        });
        // Capturando errores
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Error del servidor' });
    }
}

// Endpoint para validar la sesión
authCtrl.session = async (req, res) => {
    try {
        const user = req.user;

        const token = await generarJWT(user);

        res.cookie('token', token, {
            httpOnly: true, // The cookie only accessible by the web server //! Cambiar a true luego de probar
            secure: false,  // Set to true if your website is served over HTTPS //! Cambiar a true en caso de usar https
            maxAge: 60 * 60 * 1000 // 1 hour
        });

        res.status(200).json({
            user,
            message: 'User retrieved successfully.'
        });
    } catch (error) {
        res.status(500).json({
            message: 'An error occurred. Please try again later.'
        });
    }
};

// Endpoint de cierre de sesión (logout)
authCtrl.logout = async (_req, res) => {
    try {
        res.clearCookie('token');
        return res.json({ message: 'Cierre de sesión exitoso' });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Error Inesperado' });
    }
};