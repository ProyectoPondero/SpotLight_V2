import { Router } from 'express';
import { authCtrl } from '../controllers/auth.controller.js';
import { validateLogin, validateRegister } from '../utils/expressValidator.util.js';
import { applyExpressValidator } from '../middlewares/applyExpressValidator.middleware.js';
import { validarJWT } from '../middlewares/validationJWT.middleware.js';

export const authRouter = Router();

authRouter.post('/register', [
    validateRegister,
    applyExpressValidator
], authCtrl.register);

authRouter.post('/login', [
    validateLogin,
    applyExpressValidator
], authCtrl.login);

authRouter.get('/session', validarJWT, authCtrl.session);

authRouter.get('/logout', authCtrl.logout);