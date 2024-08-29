import User from '../model/user.model.js';
import bcryptHelper from '../helpers/bcrypt.js';

// Variables
const userService = {};

// CRUD Functions

// Create a new user
userService.createUser = async (user) => {
    try {
        const userExists = await userService.getUserByEmail(user.email);
        if (userExists) {
            throw new Error('El usuario ya existe!');
        }
        const hastPassword = await bcryptHelper.hashPassword(user.password);
        const newUser = await User.create({
            userName: user.userName,
            email: user.email,
            password: hastPassword
        });
        if (!newUser) {
            throw new Error('No se a podido crear el usuario');
        }
        return newUser;
    } catch (error) {
        return error;
    }
};

// Login a user
userService.login = async (email, password) => {
    try {
        const user = await userService.getUserByEmail(email);
        if (!user) {
            throw new Error('El usuario no existe');
        }
        const match = await bcryptHelper.comparePassword(password, user.password);
        if (!match) {
            throw new Error('La contraseña es incorrecta');
        }
        return user;
    } catch (error) {
        return error;
    }
};

// Find user to login
userService.getUserByEmail = async (email) => {
    try {
        return await User.findOne({ where: { email } });
    }
    catch (error) {
        console.log(error);
    }
};

// userService.getAllUsers = async () => {
//     try {
//         return await User.findAll();
//     } catch (error) {
//         console.log(error);   
//     }
// };


// userService.getUserById = async (id) => {
//     try {
//         return await User.findByPk(id);
//     }
//     catch (error) {
//         console.log(error);
//     }
// };


// userService.updateUser = async (id, user) => {
//     try {
//         const updateUser = await User.update(user, { where: { id } });
//         return updateUser;
//     }
//     catch (error) {
//         console.log(error);
//     }
// };


// userService.deleteUser = async (id) => {
//     try {
//         const deleteUser = await User.destroy({ where: { id } });
//         return deleteUser;
//     }
//     catch (error) {
//         console.log(error);
//     }
// };

// Export
export default userService;