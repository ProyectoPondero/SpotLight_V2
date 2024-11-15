import { uploadAvatar, deleteAvatar } from "../utils/cloudinary.util.js";
import { profileModel } from "../models/profile.model.js";
import { userModel } from "../models/user.model.js";
import { publicationModel } from "../models/publication.model.js";
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
    // Buscar el perfil y usuario relacionados
    const findProfile = await profileModel.findOne({ user: userId });
    if (!findProfile) {
      throw new Error("Perfil no encontrado");
    }

    const findUser = await userModel.findById(userId);
    if (!findUser) {
      throw new Error("Usuario no encontrado");
    }

    // Eliminar avatar anterior si existe
    if (findProfile.avatar && findProfile.avatar.public_id) {
      await deleteAvatar(findProfile.avatar.public_id);
    }

    // Subir el nuevo avatar
    const result = await uploadAvatar(avatar.path);
    const newAvatar = {
      url: result.secure_url,
      public_id: result.public_id,
    };

    // Actualizar el perfil con el nuevo avatar y datos
    const newProfile = {
      ...profile,
      avatar: newAvatar,
    };

    // Actualizar el nombre de usuario en userModel si el nombre cambiÃ³
    if (profile.name && profile.name !== findUser.userName) {
      findUser.userName = profile.name;
      await findUser.save();

      // Actualizar el campo 'author' en las publicaciones del usuario
      await publicationModel.updateMany(
        { user: userId }, // Filtrar publicaciones por usuario
        { author: profile.name } // Nuevo nombre del autor
      );
    }

    // Guardar el nuevo perfil
    await fs.unlink(avatar.path); // Eliminar archivo local
    const updateProfile = await profileModel.findOneAndUpdate(
      { user: userId },
      newProfile,
      { new: true }
    );

    if (!updateProfile) {
      throw new Error("Error al actualizar el perfil");
    }

    return updateProfile;
  } catch (error) {
    console.log(error);
    throw new Error("Error al actualizar el perfil: " + error.message);
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