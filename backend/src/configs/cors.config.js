const authOrigins = ["http://localhost:5173", "http://localhost:5500", "http://localhost:3000"];

export const validateOrigins = {
    // Permitir solicitudes desde el front-end
    origin: function (origin, callback) {
        if (authOrigins.indexOf(origin) !== -1 || !origin) {
            callback(null, true); // Permitir solicitud
        } else {
            callback(new Error("Origen no permitido por CORS")); // Rechazar solicitud
        }
    },
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true, // Habilitar envío de cookies
};