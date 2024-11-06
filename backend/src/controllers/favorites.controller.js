import { favoriteModel } from "../models/favorite.model.js";

export const saveFavorites = async (req, res) => {
    try {
        const user = req.user; // Extrae el usuario autenticado
        const { publicationId } = req.body; // Extrae el publicationId de req.body

        console.log("Usuario autenticado:", user);
        console.log("ID de la publicación:", publicationId);

        const existingFavorite = await favoriteModel.findOne({ user: user._id, publicationId: publicationId });

        if (existingFavorite) {
            console.log("La publicación ya se encuentra en favoritos");
            return res.status(400).json({ message: "La publicación ya está en favoritos" });
        }

        // Crea un nuevo favorito
        const favorite = new favoriteModel({
            user: user._id,
            publicationId: publicationId
        });

        if (favorite) {
            console.log("Ya se encuentra en favoritos")
        }

        await favorite.save();
        console.log("Favorito guardado exitosamente");
        res.status(201).json({ message: "Favorito guardado exitosamente!" });
    } catch (error) {
        console.log("Error al guardar favorito:", error.message);
        res.status(500).json({ message: "Error al guardar el favorito" });
    }
};

export const deleteFavorite = async (req, res) => {
    try {
        const { id, id2 } = req.params

        const existingFavorite = await favoriteModel.findOne({ publicationId: id, favoriteId: id2 });
        if (!existingFavorite) {
            return res.status(404).json({ message: "Esta publicación no se encuentra en favoritos" });
        }
        const suprFavorite = await favoriteModel.findByIdAndDelete(existingFavorite._id);
        res.status(200).json("Se eliminó de favoritos");
    } catch (error) {
        res.status(500).json({ message: "Error al eliminar el favorito" });
    }
}

export const getFavorites = async (req, res) => {
    try {
        const user = req.user; // Usuario autenticado extraído del token JWT

        // Buscar favoritos del usuario, incluyendo los detalles de las publicaciones
        const favorites = await favoriteModel
            .find({ user: user._id })
            .populate("publicationId", "title description author secure_url");

        // Si no se encuentran favoritos, devolver un mensaje
        if (favorites.length === 0) {
            return res.status(404).json({ message: "No se encontraron favoritos" });
        }

        res.status(200).json(favorites); // Devolver los favoritos encontrados
    } catch (error) {
        console.log("Error al obtener favoritos:", error.message);
        res.status(500).json({ message: "Error al obtener los favoritos" });
    }
};



