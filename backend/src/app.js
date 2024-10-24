import express from 'express';
import helmet from 'helmet';
import morgan from 'morgan';
import cors from 'cors';
import path from 'node:path';
import cookieParser from 'cookie-parser';
import { validateOrigins } from './configs/cors.config.js';
import { corsMiddleware } from './middlewares/cors.middleware.js';
import { authRoutes } from './router/auth.routes.js';
import { publicationRoutes } from './router/publication.routes.js';
import { profileRoutes } from './router/profile.routes.js';
import { connectDB } from "./dataBase/dataBase.js";
import { PORT } from './configs/env.config.js';

// Inicializacion
const app = express();

// Middlewares
app.use(cors(validateOrigins));
app.use(corsMiddleware);
app.use(helmet());
app.use(morgan('dev'));
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(path.resolve(), "temp")));

// Ruras
app.use('/api/user', authRoutes);
app.use('/publication', publicationRoutes);
app.use('/profile', profileRoutes);

// Server
app.listen(PORT, () => {
    connectDB()
    console.log(`Server corriendo en el puerto: ${PORT}🚀`);
});