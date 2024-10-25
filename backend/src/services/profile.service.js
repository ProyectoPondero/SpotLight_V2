import { uploadAvatar, deleteAvatar } from "../utils/cloudinary.util.js";
import { profileModel } from "../models/profile.model.js";
import fs from "fs-extra";

export const profileServices = {};

profileServices.getProfile = async (userId) => {
  try {
    return await profileModel.findOne({ user: userId });
  } catch (error) {
    console.log(error);
  }
};

profileServices.updateProfile = async (userId, profile, avatar) => {
  try {
    const findProfile = await profileModel.findOne({ user: userId });
    if (findProfile.avatar.public_id) {
      await deleteAvatar(findProfile.avatar.public_id);
    }
    const result = await uploadAvatar(avatar.path);
    const newProfile = {
      ...profile,
      avatar: {
        url: result.secure_url,
        public_id: result.public_id,
      },
    };

    await fs.unlink(avatar.path);
    const updateProfile = await profileModel.updateOne(
      { user: userId },
      newProfile,
      { new: true }
    );

    if (updateProfile.modifiedCount === 0) {
      throw new Error("Error al actualizar el perfil");
    }

    return newProfile;
  } catch (error) {
    console.log(error);
  }
};

profileServices.deleteProfile = async (userId) => {
  try {
    return await profileModel.findOneAndDelete({ user: userId });
  } catch (error) {
    console.log(error);
  }
};

profileServices.getPublications = async (user) => {
  try {
    return await profileModel.findOne({ user: user }).populate("publications");
  } catch (error) {
    console.log(error);
  }
};
