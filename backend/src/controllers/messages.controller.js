import { messageModel } from '../models/message.model.js';

export const messagesCtrl = {};

messagesCtrl.getMessages = async (req, res) => {
    try {
        const id = req.user._id;
        const messageFrom = req.params.from;

        const messages = await messageModel.find({
            $or: [
                { from: id, to: messageFrom },
                { from: messageFrom, to: id },
            ],
        })
            .sort({ createdAt: 'asc' });


        res.status(200).json({
            messages,
        });
    } catch (error) {
        res.status(500).json({
            message: 'Error retrieving messages',
            error,
        });
    }
};