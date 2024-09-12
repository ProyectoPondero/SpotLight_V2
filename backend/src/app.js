import express from 'express';
import helmet from 'helmet';
import morgan from 'morgan';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import { validateOrigins } from './configs/cors.config.js';
import { corsMiddleware } from './middlewares/cors.middleware.js';
import { authRoutes } from './router/auth.routes.js';
import { imagesRoutes } from './router/img.routes.js';
import { connectDB } from "./dataBase/dataBase.js";
import { PORT } from './configs/env.config.js';

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

// Ruras
app.use('/api/user', authRoutes);
app.use('/img', imagesRoutes);

// Server
app.listen(PORT, () => {
    connectDB()
    console.log(`Server corriendo en el puerto: ${PORT}🚀`);
});