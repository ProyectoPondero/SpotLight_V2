import { userModel } from '../models/user.model.js';
import { messageModel } from '../models/message.model.js';

export const userOnline = async (_id) => {
    try {
        const user = await userModel.findById(_id);
        user.online = true;
        await user.save();

        return user;
    } catch (error) {
        console.log(error);
    };
};

export const userOffline = async (_id) => {
    try {
        const user = await userModel.findById(_id);
        user.online = false;
        await user.save();

        return user;
    } catch (error) {
        console.log(error);
    };
};

export const getUsersOnline = async () => {
    try {
        const users = await userModel
            .find()
            .sort('-online');
        return users;
    } catch (error) {
        console.log(error);
    };
};

export const saveMessage = async (payload) => {
    try {
        const message = new messageModel(payload);
        await message.save();

        return message;
    } catch (error) {
        console.log(error);
        return false;
    };
};