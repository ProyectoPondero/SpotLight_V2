import userService from '../services/user.service.js';

// Variables
const authCtrl = {};

// Functions

// Register a new user
authCtrl.register = async (req, res) => {
    const { userName, email, password } = req.body;
// Try to create a new user
    try {
        const newUser = await userService.createUser({
            userName,
            email,
            password
        });
// If the user already exists
        if (newUser instanceof Error) {
            return res.status(400).json({ message: newUser.message });
        }
// If the user is created
        res.status(201).json({
            message: 'Usuario creado correctamente',
            data: newUser
        });
// If there is an error
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Error del servidor' });
    };
};

// Login a user
authCtrl.login = async (req, res) => {
    const { email, password } = req.body;
// Try to log in
    try {
        const user = await userService.login(email, password);
// If the user does not exist
        if (user instanceof Error) {
            return res.status(400).json({ message: user.message });
        }
// If the user exists
        res.status(200).json({
            message: 'Usuario logeado correctamente',
            data: user
        });
// If there is an error
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Error del servidor' });
    }
}

// Export
export default authCtrl;