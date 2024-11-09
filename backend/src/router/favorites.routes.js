import { Router } from "express";
import { saveFavorites, getFavorites, deleteFavorite } from "../controllers/favorites.controller.js";
import { validarJWT } from "../middlewares/validationJWT.middleware.js";

export const favoriteRoute = Router();

favoriteRoute.post("/", validarJWT, saveFavorites);
favoriteRoute.delete("/:id", validarJWT, deleteFavorite);
favoriteRoute.get("/", validarJWT, getFavorites);

