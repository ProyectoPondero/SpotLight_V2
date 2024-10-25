import { useForm } from "react-hook-form";
import { modifyProfile } from "../../services/profile.service";
import { useEffect } from "react";

export const ModalPerfil = ({ info }) => {
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

  useEffect(() => {
    reset({
      name: info.name,
      description: info.description,
      address: info.address,
      phoneNumber: info.phoneNumber,
      email: info.email,
    });
  }, [info]);

  const onSubmit = async (data) => {
    try {
      // Crear una instancia de FormData
      const formData = new FormData();

      // Agregar cada campo del formulario a formData
      for (const key in data) {
        formData.append(key, data[key]);
      }

      // Si el campo de avatar tiene un archivo, lo agregamos a formData
      if (data.avatar && data.avatar[0]) {
        formData.append("avatar", data.avatar[0]); // El archivo se encuentra en la primera posición
      }

      const response = await fetch("http://localhost:3368/profile", {
        method: "PUT",
        body: formData, // Enviar formData en lugar de JSON
        credentials: "include",
      });

      if (!response.ok) {
        throw new Error(`Error: ${response.statusText}`);
      }

      const profile = await response.json();
      console.log(profile);

      // Cerrar el modal si la actualización fue exitosa
      document.getElementById("my_modal_2").close();
    } catch (error) {
      console.error("Error al modificar el perfil:", error);
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
              className="w-full border rounded p-2 dark:bg-gray-700 dark:border-gray-600 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
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

        <div className="mt-6 flex justify-end space-x-2">
          <button
            type="button"
            className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition duration-200"
            onClick={handleCancel}
          >
            Cancelar
          </button>
          <button
            type="submit"
            className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition duration-200"
          >
            Guardar
          </button>
        </div>
        </form>

      </div>
    </dialog>
  );
};
