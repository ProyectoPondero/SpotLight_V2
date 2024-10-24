import { Router } from "express";
import { saveFavorites } from "../controllers/favorites.controller.js";
import { validarJWT } from "../middlewares/validationJWT.middleware.js";

export const favoriteRoute = Router();

favoriteRoute.post("/", validarJWT, saveFavorites);
