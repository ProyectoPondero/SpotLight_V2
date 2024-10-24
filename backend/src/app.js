import express from 'express';
import helmet from 'helmet';
import morgan from 'morgan';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import { validateOrigins } from './configs/cors.config.js';
import { corsMiddleware } from './middlewares/cors.middleware.js';
import { authRoutes } from './router/auth.routes.js';
import { publicationRoutes } from './router/publication.routes.js';
import { profileRoutes } from './router/profile.routes.js';
import { connectDB } from "./dataBase/dataBase.js";
import { PORT } from './configs/env.config.js';
import { favoriteRoute } from './router/favorites.routes.js';

// Inicializacion
const app = express();

// Middlewares
app.use(express.urlencoded({ extended: false }));
app.use(cors(validateOrigins));
app.use(corsMiddleware);
app.use(morgan('dev'));
app.use(express.json());
app.use(cookieParser());
app.use(helmet());

// Rutas
app.use('/api/user', authRoutes);
app.use('/publication', publicationRoutes);
app.use('/profile', profileRoutes);
app.use("/favorites", favoriteRoute)

// Server
app.listen(PORT, () => {
    connectDB()
    console.log(`Server corriendo en el puerto: ${PORT}🚀`);
});