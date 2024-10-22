import { profileServices } from '../services/profile.service.js';

export const profileCtrl = {};

profileCtrl.getProfile = async (req, res) => {
    try {
        const profile = await profileServices.getProfile(req.user._id);
        res.status(200).json(profile);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

profileCtrl.updateProfile = async (req, res) => {
    try {
        const profile = await profileServices.updateProfile(req.user._id, req.body, req.file);
        res.status(200).json(profile);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

profileCtrl.deleteProfile = async (req, res) => {
    try {
        await profileServices.deleteProfile(req.user._id);
        res.status(200).json({ message: 'Profile deleted' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

profileCtrl.getPublications = async (req, res) => {
    try {
        const publications = await profileServices.getPublications(req.user._id);
        res.status(200).json(publications);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};