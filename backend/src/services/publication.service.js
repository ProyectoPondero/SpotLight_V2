import { deleteFile, uploadFile } from "../utils/cloudinary.util.js";
import { publicationModel } from "../models/publication.model.js";
import fs from "fs-extra";

// Servicio de publicaciones
export const publicationService = {};

// Subir una nueva publicación
publicationService.uploadPublication = async (user, title, description, file) => {
    try {
        // Subir el archivo a la nube
        const result = await uploadFile(file.path);

        // Crear una nueva instancia del modelo de publicación con los datos proporcionados
        const newPublication = new publicationModel({
            user: user._id,
            author: user.userName,
            title,
            description,
            public_id: result.public_id,
            secure_url: result.secure_url,
        });

        // Guardar la nueva publicación en la base de datos
        await newPublication.save();

        // Eliminar el archivo temporal subido
        await fs.unlink(file.path);

        return newPublication;
    } catch (error) {
        throw new Error("Error al subir la publicación: " + error.message);
    }
};

// Obtener todas las publicaciones
publicationService.getAllPublications = async () => {
    try {
        // Obtener todas las publicaciones de la base de datos
        const publications = await publicationModel.find();
        return publications;
    } catch (error) {
        throw new Error("Error al obtener las publicaciones: " + error.message);
    }
};

// Obtener todas las publicaciones de un usuario específico
publicationService.getUserPublications = async (userId) => {
    try {
        // Buscar publicaciones por ID de usuario
        const publications = await publicationModel.find({ user: userId });
        return publications;
    } catch (error) {
        throw new Error("Error al obtener las publicaciones del usuario: " + error.message);
    }
};

// Actualizar una publicación existente
publicationService.updatePublication = async (userId, publicationId, title, description) => {
    try {
        // Buscar y actualizar la publicación por ID de usuario y ID de publicación
        const publication = await publicationModel.findOneAndUpdate(
            { _id: publicationId, user: userId },
            { title, description },
            { new: true }
        );
        return publication;
    } catch (error) {
        throw new Error("Error al actualizar la publicación: " + error.message);
    }
};

// Eliminar una publicación
publicationService.deletePublication = async (userId, publicationId) => {
    try {
        // Buscar y eliminar la publicación por ID de usuario y ID de publicación
        const publication = await publicationModel.findOneAndDelete({ _id: publicationId, user: userId });

        // Si no se encuentra la publicación, devolver null
        if (!publication) {
            return null;
        }

        // Eliminar la imagen de la nube
        await deleteFile(publication.public_id);

        return publication;
    } catch (error) {
        throw new Error("Error al eliminar la publicación: " + error.message);
    }
};