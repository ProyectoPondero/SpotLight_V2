import { Router } from 'express';
import { validarJWT } from '../middlewares/validationJWT.middleware.js';
import { profileCtrl } from '../controllers/profile.controller.js';
import { fileUploadMiddleware } from '../middlewares/fileUpload.middleware.js';

// Inicializacion
export const profileRoutes = Router();

// Rutas
profileRoutes.get('/', validarJWT, profileCtrl.getProfile);
profileRoutes.put('/', validarJWT, fileUploadMiddleware('avatar'), profileCtrl.updateProfile);
profileRoutes.delete('/', validarJWT, profileCtrl.deleteProfile);
profileRoutes.get('/publications', validarJWT, profileCtrl.getPublications);