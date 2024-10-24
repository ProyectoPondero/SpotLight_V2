import { favoriteModel } from "../models/favorite.model.js";

export const saveFavorites = async (req, res) => {
    try {
        const user = req.user; // Extrae el usuario autenticado
        const { publicationId } = req.body; // Extrae el publicationId de req.body

        console.log("Usuario autenticado:", user);
        console.log("ID de la publicación:", publicationId);

        // Crea un nuevo favorito
        const favorite = new favoriteModel({
            user: user._id,
            publicationId: publicationId
        });

        await favorite.save();
        console.log("Favorito guardado exitosamente");
        res.status(201).json({ message: "Favorito guardado exitosamente!" });
    } catch (error) {
        console.log("Error al guardar favorito:", error.message);
        res.status(500).json({ message: "Error al guardar el favorito" });
    }
};

