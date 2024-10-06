import { userModel } from '../models/user.model.js';
import bcryptHelper from '../helpers/bcrypt.js';

export const userService = {};

// Crear nuevo usuario
userService.createUser = async (user) => {
    try {
        const userExists = await userService.getUserByEmail(user.email);
        if (userExists) {
            throw new Error('El usuario ya existe!');
        }
        const hastPassword = await bcryptHelper.hashPassword(user.password);
        const newUser = await userModel.create({
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

// Loguear un usuario
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

// Encontrar un usuario para loguear
userService.getUserByEmail = async (email) => {
    try {
        return await userModel.findOne({ email: email });
    }
    catch (error) {
        console.log(error);
    }
};
// En user.service.js
userService.getUserById = async (id) => {
    try {
        return await userModel.findById(id); // Asegúrate de que estés usando Mongoose o tu ORM
    } catch (error) {
        console.log(error);
    }
};
