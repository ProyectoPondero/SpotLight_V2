import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import path from 'node:path';
import cookieParser from 'cookie-parser';
import { validateOrigins } from './configs/cors.config.js';
import { corsMiddleware } from './middlewares/cors.middleware.js';
import { authRouter } from './router/auth.routes.js';
import { publicationRoutes } from './router/publication.routes.js';
import { profileRoutes } from './router/profile.routes.js';
import { favoriteRoute } from './router/favorites.routes.js';
import { messageRouter } from './router/message.routes.js';

const app = express();

app.use(express.static(path.join(path.resolve(), 'public')));
app.use(express.urlencoded({ extended: true }));
app.use(cors(validateOrigins));
app.use(corsMiddleware);
app.use(express.json());
app.use(cookieParser());
app.use(morgan('dev'));

app.use('/api', authRouter);
app.use('/publication', publicationRoutes);
app.use('/profile', profileRoutes);
app.use('/favorites', favoriteRoute);
app.use('/api/messages', messageRouter);

export { app };