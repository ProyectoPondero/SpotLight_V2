import { profileModel } from '../models/profile.model.js';

export const profileServices = {};

profileServices.getProfile = async (userId) => {
    try {
        return await profileModel.findOne({ userId: userId });
    }
    catch (error) {
        console.log(error);
    }
}

profileServices.updateProfile = async (userId, profile) => {
    try {
        return await profileModel.findOneAndUpdate({ userId: userId }, profile, { new: true });
    }
    catch (error) {
        console.log(error);
    }
}

profileServices.deleteProfile = async (userId) => {
    try {
        return await profileModel.findOneAndDelete({ userId: userId });
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