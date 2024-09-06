import express from 'express';
import helmet from 'helmet';
import morgan from 'morgan';
import cors from 'cors';
import { authRoutes } from './router/auth.routes.js';
import { connectDB } from "./dataBase/dbConfig.js";
import { imagesRoutes } from './router/img.routes.js';

// Inicializacion
const app = express();
const PORT = 3000;

// Middlewares
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(morgan('dev'));
app.use(helmet());
app.use(cors());

// Ruras
app.use('/api/user', authRoutes);
app.use('/img', imagesRoutes);

// Server
app.listen(PORT, () => {
    connectDB()
    console.log(`Server is running on port ${PORT} 🚀`);
});