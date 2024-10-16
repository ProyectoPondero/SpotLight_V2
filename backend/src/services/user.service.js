import { userModel } from '../models/user.model.js';
import { profileModel } from '../models/profile.model.js';
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

// Crear perfil de usuario
userService.createProfile = async (_id, userName, email) => {
    try {
        const newProfile = await profileModel.create({
            name: userName,
            description: null,
            address: null,
            phoneNumber: null,
            email: email,
            user: _id,
            avatar: null
        });
        if (!newProfile) {
            throw new Error('No se a podido crear el perfil');
        }
        return newProfile;
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