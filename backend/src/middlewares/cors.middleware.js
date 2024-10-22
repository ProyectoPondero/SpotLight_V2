// Middleware para manejar errores de CORS
export const corsMiddleware = (err, _req, res, next) => {
    // Verifica si el error es debido a un origen no permitido por CORS
    if (err.message === "Origen no permitido por CORS") {
        // Responde con un estado 403 y un mensaje de error en formato JSON
        return res.status(403).json({ error: "CORS: Origen no permitido" });
    }
    // Si no es un error de CORS, pasa al siguiente middleware
    next();
};