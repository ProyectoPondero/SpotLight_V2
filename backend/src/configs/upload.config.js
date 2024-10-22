import multer from 'multer';
import path from 'node:path';
import crypto from 'node:crypto';

// Configuración de almacenamiento con multer
export const storage = multer.diskStorage({
    destination: (_req, _file, saveFile) => {
        // Directorio temporal para almacenar archivos
        saveFile(null, 'temp/');
    },
    filename: (_req, file, saveFile) => {
        // Generar un nombre de archivo único usando UUID y mantener la extensión original
        const fileName = crypto.randomUUID() + path.extname(file.originalname);
        saveFile(null, fileName);
    }
});

// Límites de tamaño de archivo (25 MB)
const maxMB = 25;
export const limits = {
    fileSize: 1024 * 1024 * maxMB
};

// Filtro de archivos para permitir solo imágenes y videos
export const fileFilter = (_req, file, saveFile) => {
    // Tipos de archivos permitidos
    const fileTypes = /jpeg|jpg|png|gif|webp|mp4|webm|ogg|ogv/;
    // Verificar la extensión del archivo
    const allowedExtname = fileTypes.test(path.extname(file.originalname).toLowerCase());

    if (!allowedExtname) {
        // Rechazar archivos no permitidos
        return saveFile(new Error('Solo se permiten archivos de imagen y video'));
    }

    // Aceptar el archivo
    return saveFile(null, true);
};