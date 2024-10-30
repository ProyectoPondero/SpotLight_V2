import { Router } from "express";
import { publicationCtrl } from "../controllers/publication.controller.js";
import { validarJWT } from "../middlewares/validationJWT.middleware.js";
import { fileUploadMiddleware } from "../middlewares/fileUpload.middleware.js";

export const publicationRoutes = Router();

publicationRoutes.post('/', validarJWT, fileUploadMiddleware('file'), publicationCtrl.uploadPublication);
publicationRoutes.get('/', validarJWT, publicationCtrl.getAllPublications);
publicationRoutes.get('/user', validarJWT, publicationCtrl.getUserPublications);
publicationRoutes.put('/:id', validarJWT, publicationCtrl.updatePublication);
publicationRoutes.delete('/:id', validarJWT, publicationCtrl.deletePublication);