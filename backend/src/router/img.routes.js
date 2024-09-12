import { Router } from "express";
import { imagesCtrl } from "../controllers/image.controller.js";
import { imgUploadMiddleware } from "../middlewares/imgUpload.middleware.js";

export const imagesRoutes = Router();

imagesRoutes.post('/upload', imgUploadMiddleware, imagesCtrl.uploadImg);