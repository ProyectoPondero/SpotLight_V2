import { Router } from 'express';

// import { loginValidation, registerValidation } from '../validations/user.validation.js';
// import { applyUserValidations } from '../middlewares/apply.userValidation.js';
import { authCtrl } from '../controller/auth.controller.js';

// Inicializacion
export const authRoutes = Router();

// Rutas
authRoutes.post('/register', authCtrl.register);
authRoutes.post('/login', authCtrl.login);