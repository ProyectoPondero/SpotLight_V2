import { userService } from '../services/user.service.js';
import { generarJWT } from '../helpers/generateJWT.js';

export const authCtrl = {};

// Registrar nuevo usuario
authCtrl.register = async (req, res) => {
    const { userName, email, password } = req.body;
    try {
        const newUser = await userService.createUser({
            userName,
            email,
            password
        });
        // Comprobando si el usuario ya existe
        if (newUser instanceof Error) {
            return res.status(400).json({ message: newUser.message });
        }
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
        // Generar token JWT
        const token = await generarJWT(user._id);
        // Almacenar el token en una cookie segura
        res.cookie('authToken', token, {
            httpOnly: true, // La cookie no es accesible desde JavaScript
            secure: false, // Cambiar a true en producción con HTTPS
            maxAge: 3600000 // Expiración en milisegundos (1 hora)
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
    return res.json({ message: 'Acceso permitido a área protegida', user: req.user });
};

// Endpoint de cierre de sesión (logout)
authCtrl.logout = async (req, res) => {
    try {
        res.clearCookie('authToken');
        return res.json({ message: 'Cierre de sesión exitoso' });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Error Inesperado' });
    }
};

//Hice este controlador para obtener los datos del usuario
authCtrl.getUserDetails = async (req, res) => {
    try {
        if (!req.user) {
            return res.status(401).json({ message: 'No autenticado' });
        }

        // Devuelve el ID y el nombre de usuario
        return res.json({
            userId: req.user._id,
            userName: req.user.userName,
            email: req.user.email
        });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Error del servidor' });
    }
};
