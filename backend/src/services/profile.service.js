import { uploadAvatar } from "../utils/cloudinary.util.js";
import { profileModel } from '../models/profile.model.js';
import fs from 'fs-extra';

export const profileServices = {};

profileServices.getProfile = async (userId) => {
    try {
        return await profileModel.findOne({ user: userId });
    }
    catch (error) {
        console.log(error);
    }
}

profileServices.updateProfile = async (userId, profile, avatar) => {
    try {
        const result = await uploadAvatar(avatar.path);

        const newProfile = {
            ...profile,
            avatar: result.secure_url
        }

        await fs.unlink(avatar.path);

        return await profileModel.findOneAndUpdate({ user: userId }, newProfile, { new: true });
    }
    catch (error) {
        console.log(error);
    }
}

profileServices.deleteProfile = async (userId) => {
    try {
        return await profileModel.findOneAndDelete({ user: userId });
    }
    catch (error) {
        console.log(error);
    }
}

profileServices.getPublications = async (user) => {
    try {
        return await profileModel.findOne({ user: user }).populate('publications');
    }
    catch (error) {
        console.log(error);
    }
}