import { deleteFile, uploadFile } from "../utils/cloudinary.util.js";
import { publicationModel } from "../models/publication.model.js";
import fs from "fs-extra";

// Controlador para manejar las publicaciones
export const publicationCtrl = {};

// Implementar la función que maneja la subida de publicaciones
publicationCtrl.uploadPublication = async (req, res) => {
    try {
        // Obtener el usuario autenticado
        const user = req.user;
        // Obtener los datos de la publicación
        const { title, description } = req.body;
        // Obtener el archivo
        const file = await req.files.file;
        // Llamar a la función para subir el archivo a la nube
        const result = await uploadFile(file.tempFilePath);
        // Crear una instancia del modelo publicationModel con los datos de la publicación
        const newPublication = new publicationModel({
            user: user._id,
            title: title,
            description: description,
            public_id: result.public_id,
            secure_url: result.secure_url,
        });
        // Guardar la instancia en la base de datos
        await newPublication.save();
        // Eliminar el archivo temporal subido
        await fs.unlink(file.tempFilePath);
        // Enviar una respuesta de éxito al cliente con la nueva publicación
        return res.status(200).send({ message: "Publicación subida exitosamente", newPublication });
    } catch (error) {
        // Manejar errores y enviar una respuesta de error al cliente
        res.status(500).send({ message: "Error al subir la publicación", error });
    }
};

// Implementar la función que maneja la obtención de todas las publicaciones
publicationCtrl.getAllPublications = async (req, res) => {
    try {
        // Obtener todas las publicaciones de la base de datos
        const publications = await publicationModel.find();
        // Enviar una respuesta de éxito al cliente con todas las publicaciones
        return res.status(200).send(publications);
    } catch (error) {
        // En caso de error, devolver un estado 500 con un mensaje de error y el error específico
        res.status(500).send({ message: "Error al obtener las publicaciones", error });
    }
}

// Implementar la función que maneja la obtención de las publicaciones de un usuario
publicationCtrl.getUserPublications = async (req, res) => {
    try {
        // Obtener el usuario autenticado
        const user = req.user;
        // Obtener las publicaciones del usuario autenticado
        const publications = await publicationModel.find({ user: user._id });
        // Enviar una respuesta de éxito al cliente con las publicaciones del usuario
        return res.status(200).send(publications);
    } catch (error) {
        // En caso de error, devolver un estado 500 con un mensaje de error y el error específico
        res.status(500).send({ message: "Error al obtener las publicaciones del usuario", error });
    }
}

// Implementar la función que maneja la actualización de una publicación
publicationCtrl.updatePublication = async (req, res) => {
    try {
        // Obtener el usuario autenticado
        const user = req.user;
        // Obtener los datos de la publicación a modificar
        const { title, description } = req.body;
        // Buscar por ID y validar que el usuario sea el propietario de la publicación
        const publication = await publicationModel.findOneAndUpdate(
            { _id: req.params.id, user: user._id },
            { title, description },
            { new: true }
        );
        // En caso de no encontrar la publicación o que el usuario no sea el propietario, devuelve un mensaje de error
        if (!publication) {
            return res.status(409).send({ message: "Publicación no encontrada o no autorizado" });
        }
        // Enviar una respuesta de éxito al cliente con la publicación actualizada
        return res.status(200).send({ message: "Publicación actualizada exitosamente", publication });
    } catch (error) {
        // En caso de error, devolver un estado 500 con un mensaje de error y el error específico
        res.status(500).send({ message: "Error al actualizar la publicación", error });
    }
};

// Implementar la función que maneja la eliminación de una publicación
publicationCtrl.deletePublication = async (req, res) => {
    try {
        // Obtener el usuario autenticado
        const user = req.user;
        // Buscar por ID y eliminar la publicación de la base de datos
        const publication = await publicationModel.findOneAndDelete({ _id: req.params.id, user: user._id });
        // En caso de no encontrar la publicación, devuelve un mensaje de error
        if (!publication) {
            return res.status(409).send({ message: "Publicación no encontrada o no autorizado" });
        }
        // Llamar a la función para eliminar la imagen de la nube
        await deleteFile(publication.public_id);
        // Enviar una respuesta de éxito al cliente
        return res.status(200).send({ message: "Publicación eliminada exitosamente", publication });
    } catch (error) {
        // En caso de error, devolver un estado 500 con un mensaje de error y el error específico
        res.status(500).send({ message: "Error al eliminar la publicación", error });
    }
};