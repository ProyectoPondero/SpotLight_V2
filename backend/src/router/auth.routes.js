import { Router } from 'express';
import { validarJWT } from '../middlewares/validationJWT.middleware.js';
import { authCtrl } from '../controllers/auth.controller.js';

// Inicializacion
export const authRoutes = Router();

// Rutas
authRoutes.post('/register', authCtrl.register);
authRoutes.post('/login', authCtrl.login);
authRoutes.get('/session', validarJWT, authCtrl.session);
authRoutes.post('/logout', authCtrl.logout);