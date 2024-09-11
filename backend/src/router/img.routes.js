import { Router } from "express";
import { imagesCtrl } from "../controllers/image.controller.js";
import { fileUploadMiddleware } from "../middlewares/fileupload.middleware.js";

export const imagesRoutes = Router();

imagesRoutes.post('/upload', fileUploadMiddleware, imagesCtrl.uploadImg);