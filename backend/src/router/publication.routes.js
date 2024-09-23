import { Router } from "express";
import { publicationCtrl } from "../controllers/publication.controller.js";
import { validarJWT } from "../middlewares/validationJWT.middleware.js";
import { fileUploadMiddleware } from "../middlewares/fileUpload.middleware.js";

export const publicationRoutes = Router();

publicationRoutes.post('/', validarJWT, fileUploadMiddleware, publicationCtrl.uploadPublication);
publicationRoutes.delete('/:id', validarJWT, publicationCtrl.deletePublication);