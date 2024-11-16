import { checkSchema } from 'express-validator';

export const validateRegister = checkSchema({
    username: {
        notEmpty: {
            errorMessage: 'Username is required',
        },
        isString: {
            errorMessage: 'Username must be a string',
        },
    },
    email: {
        notEmpty: {
            errorMessage: 'Email is required',
        },
        isEmail: {
            errorMessage: 'Invalid email',
        },
    },
    password: {
        notEmpty: {
            errorMessage: 'Password is required',
        },
        isLength: {
            options: { min: 6 },
            errorMessage: 'Password must be at least 6 characters',
        },
    }
});

export const validateLogin = checkSchema({
    email: {
        notEmpty: {
            errorMessage: 'Email is required',
        },
        isEmail: {
            errorMessage: 'Invalid email',
        },
    },
    password: {
        notEmpty: {
            errorMessage: 'Password is required',
        },
        isLength: {
            options: { min: 6 },
            errorMessage: 'Password must be at least 6 characters',
        },
    }
});