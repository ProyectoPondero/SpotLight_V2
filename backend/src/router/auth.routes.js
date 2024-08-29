import { Router } from 'express';
import authCtrl from '../controller/auth.controller.js';

// Initializations
const authRoutes = Router();

// Routes
authRoutes.post('/register', authCtrl.register);
authRoutes.post('/login', authCtrl.login);

// Export
export default authRoutes;