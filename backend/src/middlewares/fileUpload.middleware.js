import multer from "multer";
import { upload } from "../utils/multer.utility.js";
import fs from 'node:fs';

// Directorio temporal para almacenar archivos subidos
const tempDir = 'temp';
if (!fs.existsSync(tempDir)) {
    fs.mkdirSync(tempDir);
}

export const fileUploadMiddleware = (fieldName) => (req, res, next) => {
    const uploadSingle = upload.single(fieldName);

    uploadSingle(req, res, (err) => {
        if (err instanceof multer.MulterError) {
            // Error específico de Multer
            return res.status(400).json({ message: err.message });
        } else if (err) {
            // Otro tipo de error
            return res.status(500).json({ message: err.message });
        }

        if (!req.file) {
            // No se ha seleccionado un archivo
            return res.status(400).json({ message: "No se ha seleccionado un archivo" });
        }

        // Asignar el nombre del archivo al cuerpo de la solicitud
        req.body = { ...req.body, [fieldName]: req.file.filename };
        next();
    });
};