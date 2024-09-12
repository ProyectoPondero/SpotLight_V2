import { uploadImg } from "../utils/cloudinary.util.js";
import { imgModel } from "../models/img.model.js";
import fs from "fs-extra";

// Controlador para manejar las operaciones de subida de imágenes
export const imagesCtrl = {};

// Implementar la función uploadImg que maneja la subida de imágenes
imagesCtrl.uploadImg = async (req, res) => {
    try {
        // Obtener el archivo del objeto req
        const image = await req.files.img;
        const result = await uploadImg(image.tempFilePath);
        // Crear una instancia del modelo imgModel con los datos de la imagen
        const newImg = new imgModel({
            public_id: result.public_id,
            secure_url: result.secure_url,
        });
        // Guardar la instancia en la base de datos
        await newImg.save();
        // Eliminar el archivo temporal subido
        await fs.unlink(image.tempFilePath);
        // Enviar una respuesta de éxito al cliente con la imagen
        return res.status(200).send({ message: "Imagen subida exitosamente.", image });
    } catch (err) {
        // Manejar errores y enviar una respuesta de error al cliente
        res.status(500).send({ message: "Error al subir la imagen.", error: err });
    }
};