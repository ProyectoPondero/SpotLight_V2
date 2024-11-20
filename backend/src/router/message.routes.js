import { Router } from 'express';
import { validarJWT } from '../middlewares/validationJWT.middleware.js';
import { messagesCtrl } from '../controllers/messages.controller.js';

export const messageRouter = Router();

messageRouter.get('/:from', validarJWT, messagesCtrl.getMessages);
messageRouter.get('/avatar/:id', validarJWT, messagesCtrl.getAvatar);