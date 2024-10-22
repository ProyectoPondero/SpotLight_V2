import { publicationService } from "../services/publication.service.js";

// Controlador para manejar las publicaciones
export const publicationCtrl = {};

// Función que maneja la subida de publicaciones
publicationCtrl.uploadPublication = async (req, res) => {
    try {
        const user = req.user; // Obtener el usuario autenticado
        const { title, description } = req.body; // Obtener los datos de la publicación
        const file = await req.file; // Obtener el archivo

        // Llamar al servicio para manejar la lógica de la subida de la publicación
        const newPublication = await publicationService.uploadPublication(user, title, description, file);

        // Enviar una respuesta de éxito al cliente con la nueva publicación
        return res.status(200).send({ message: "Publicación subida exitosamente", newPublication });
    } catch (error) {
        // Manejar errores y enviar una respuesta de error al cliente
        return res.status(500).send({ message: "Error al subir la publicación", error: error.message });
    }
};

// Función que maneja la obtención de todas las publicaciones
publicationCtrl.getAllPublications = async (_req, res) => {
    try {
        // Llamar al servicio para obtener todas las publicaciones
        const publications = await publicationService.getAllPublications();

        // Enviar una respuesta de éxito al cliente con todas las publicaciones
        return res.status(200).send(publications);
    } catch (error) {
        // Manejar errores y enviar una respuesta de error al cliente
        return res.status(500).send({ message: "Error al obtener las publicaciones", error: error.message });
    }
};

// Función que maneja la obtención de las publicaciones de un usuario
publicationCtrl.getUserPublications = async (req, res) => {
    try {
        const user = req.user; // Obtener el usuario autenticado

        // Llamar al servicio para obtener las publicaciones del usuario
        const publications = await publicationService.getUserPublications(user._id);

        // Enviar una respuesta de éxito al cliente con las publicaciones del usuario
        return res.status(200).send(publications);
    } catch (error) {
        // Manejar errores y enviar una respuesta de error al cliente
        return res.status(500).send({ message: "Error al obtener las publicaciones del usuario", error: error.message });
    }
};

// Función que maneja la actualización de una publicación
publicationCtrl.updatePublication = async (req, res) => {
    try {
        const user = req.user; // Obtener el usuario autenticado
        const { title, description } = req.body; // Obtener los datos de la publicación

        // Llamar al servicio para actualizar la publicación
        const publication = await publicationService.updatePublication(user._id, req.params.id, title, description);

        // Verificar si la publicación fue encontrada y actualizada
        if (!publication) {
            return res.status(409).send({ message: "Publicación no encontrada o no autorizado" });
        }

        // Enviar una respuesta de éxito al cliente con la publicación actualizada
        return res.status(200).send({ message: "Publicación actualizada exitosamente", publication });
    } catch (error) {
        // Manejar errores y enviar una respuesta de error al cliente
        return res.status(500).send({ message: "Error al actualizar la publicación", error: error.message });
    }
};

// Función que maneja la eliminación de una publicación
publicationCtrl.deletePublication = async (req, res) => {
    try {
        const user = req.user; // Obtener el usuario autenticado

        // Llamar al servicio para eliminar la publicación
        const publication = await publicationService.deletePublication(user._id, req.params.id);

        // Verificar si la publicación fue encontrada y eliminada
        if (!publication) {
            return res.status(409).send({ message: "Publicación no encontrada o no autorizado" });
        }

        // Enviar una respuesta de éxito al cliente con la publicación eliminada
        return res.status(200).send({ message: "Publicación eliminada exitosamente", publication });
    } catch (error) {
        // Manejar errores y enviar una respuesta de error al cliente
        return res.status(500).send({ message: "Error al eliminar la publicación", error: error.message });
    }
};