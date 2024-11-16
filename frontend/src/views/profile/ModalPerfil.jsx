import { set, useForm } from "react-hook-form";
import { useProfile } from "../../contexts/profile/profileContext.jsx";
import { useEffect, useState } from "react";
import { validateEmail, validateName, validatePhone } from "../../validation/validations.js";
import toast from "react-hot-toast";

export const ModalPerfil = ({ profile }) => {
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false);

  const eñol = (error) => {
    throw new Error(error);

  }

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: {
      name: "",
      description: "",
      address: "",
      phoneNumber: "",
      email: "",
    },
  });

  const { modifyProfileData } = useProfile();

  useEffect(() => {
    reset({
      name: profile?.name,
      description: profile?.description,
      address: profile?.address,
      phoneNumber: profile?.phoneNumber,
      email: profile?.email,
    });
  }, [profile]);

  const onSubmit = async (data) => {
    try {
      setLoading(true)
      // Crear una instancia de FormData
      const formData = new FormData();

      // Agregar cada campo del formulario a formData
      for (const key in data) {
        try {

        } catch (error) {

        }
        switch (key) {
          case "name":
            validateName(data[key]) ?
              formData.append(key, data[key]) : eñol('El nombre no es válido');
            break;
          case "phoneNumber":
            validatePhone(data[key]) ?
              formData.append(key, data[key]) : eñol('El teléfono no es válido');
            break;
          case "email":
            validateEmail(data[key]) ?
              formData.append(key, data[key]) :
              eñol('El email no es válido');
            break;
          default:
            formData.append(key, data[key])
            break;
        }

      }

      // Si el campo de avatar tiene un archivo, lo agregamos a formData
      if (data.avatar && data.avatar[0]) {
        formData.append("avatar", data.avatar[0]); // El archivo se encuentra en la primera posición
      }

      await modifyProfileData(formData);

      // Cerrar el modal si la actualización fue exitosa
      document.getElementById("my_modal_2").close();
    } catch (error) {
      setError(error.message);
      toast.error("Error al modificar el perfil");
    }
    finally {
      setLoading(false);
    }
  };

  const handleCancel = () => {
    reset(); // Resetea el formulario a los valores predeterminados.
    document.getElementById("my_modal_2").close();
  };

  return (
    <dialog id="my_modal_2" className="modal">
      <div className="modal-box bg-white dark:bg-gray-800 border dark:border-gray-700 text-gray-900 dark:text-white p-6 rounded-lg shadow-lg relative">
        <h3 className="font-bold text-lg mb-4">Editar Perfil</h3>
        <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
          <div>
            <label className="block text-sm font-medium mb-1">Nombre:</label>
            <input
              type="text"
              {...register("name", { required: "El nombre es requerido" })}
              className="w-full border rounded p-2 dark:bg-gray-700 dark:border-gray-600 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.nombre && (
              <p className="text-red-500 text-sm">{errors.nombre.message}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">
              Descripción:
            </label>
            <input
              type="text"
              {...register("description")}
              className="w-full border rounded p-2 dark:bg-gray-700 dark:border-gray-600 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Dirección:</label>
            <input
              type="text"
              {...register("address")}
              className="w-full border rounded p-2 dark:bg-gray-700 dark:border-gray-600 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500" />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Teléfono:</label>
            <input
              type="text"
              {...register("phoneNumber")}
              className="w-full border rounded p-2 dark:bg-gray-700 dark:border-gray-600 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Email:</label>
            <input
              type="email"
              {...register("email", { required: "El email es requerido" })}
              className="w-full border rounded p-2 dark:bg-gray-700 dark:border-gray-600 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.email && (
              <p className="text-red-500 text-sm">{errors.email.message}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">
              Foto de perfil:
            </label>
            <input
              type="file"
              {...register("avatar")}
              accept="image/*"
              className="w-full border rounded p-2 dark:bg-gray-700 dark:border-gray-600 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
          <div className="mt-6 flex justify-end space-x-2">
            <button
              type="button"
              className="bg-red-500 disabled:bg-red-100 text-white px-4 py-2 rounded hover:bg-red-600 transition duration-200"
              onClick={handleCancel}
              disabled={loading ? true : false}
            >
              Cancelar
            </button>
            <button
              type="submit"
              className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 disabled:bg-green-100 transition duration-200"
              disabled={loading ? true : false}
            >
              Guardar
            </button>
          </div>
        </form>

      </div>
    </dialog>
  );
};
