import { userService } from '../services/user.service.js';

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