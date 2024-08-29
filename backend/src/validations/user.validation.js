import { body } from 'express-validator';

export const registerValidation = [
    body('name')
        .isString()
        .isLength({ min: 6, max: 50 }).withMessage('el usuario debe contener entre 3 y 50 caracteres'),
    body('email')
        .isEmail().withMessage('debe ingresar un email valido'),
    body('password')
        .isString()
        .isLength({ min: 3, max: 50 }).withMessage('la contraseña debe contener entre 6 y 50 caracteres'),
];

export const loginValidation = [
    body('email')
        .isEmail().withMessage('debe ingresar un email valido'),
    body('password')
        .isString()
        .isLength({ min: 3, max: 50 }).withMessage('la contraseña debe contener entre 6 y 50 caracteres'),
];