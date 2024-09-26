import React, { useState, useEffect } from "react";

export const Perfil = () => {
  // Cargar datos desde localStorage o usar valores predeterminados
  const getInitialInfo = () => {
    const savedInfo = localStorage.getItem("userInfo");
    return savedInfo
      ? JSON.parse(savedInfo)
      : {
        nombre: "Emilio Joaquin Ortiz Malich",
        descripcion:
          "Soy un joven de 18 años con la intención de mostrar mi talento en mi deporte favorito. Me desempeño bien jugando al fútbol con mis compañeros. Espero poder encontrar a una persona que me ayude a explotar mi potencial.",
        direccion: "San Hilario, Formosa, Argentina",
        telefono: "3704040642",
        trabajo: "Desocupado",
        cargo: "Ninguno",
        email: "ejemplo@correo.com",
      };
  };

  const [info, setInfo] = useState(getInitialInfo);
  const [isModalOpen, setIsModalOpen] = useState(false); // Estado para el modal

  // Manejar cambios en los inputs
  const handleChange = (e) => {
    const { name, value } = e.target;
    setInfo((prevInfo) => {
      const updatedInfo = {
        ...prevInfo,
        [name]: value,
      };
      // Guardar en localStorage
      localStorage.setItem("userInfo", JSON.stringify(updatedInfo));
      return updatedInfo;
    });
  };

  return (
    <div className="container mx-auto p-4 mt-28">
      <section className="bg-white shadow-2xl rounded-lg overflow-hidden dark:bg-gray-900">
        {/* Header */}
        <div className="sticky">
          <div className="p-2 flex justify-center items-center -bottom-12">
            <div className="w-24 h-24 rounded-full overflow-hidden shadow-lg dark:bg-white border-2">
              <img
                src="../assets/img/spot.png"
                alt={`Foto de perfil de ${info.nombre}`}
              />
            </div>
          </div>
        </div>

        {/* Body */}
        <div className="mt-3 p-1 dark:bg-gray-900">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-gray-800 dark:text-white">
              {info.nombre}
            </h3>
            <p className="text-black mt-2 dark:text-white">
              {info.descripcion}
            </p>
          </div>

          {/* Info */}
          <div className="mt-8 flex flex-col md:flex-row justify-evenly">
            <ul className="text-gray-700 space-y-4 md:w-1/2 dark:bg-gray-900 dark:text-white bg-white p-6 rounded-lg">
              <li className="flex items-center">
                <i className="fas fa-map-marker-alt mr-2 text-blue-500"></i>
                <span>Dirección: {info.direccion}</span>
              </li>
              <li className="flex items-center">
                <i className="fas fa-phone-alt mr-2 text-green-500"></i>
                <span>Teléfono: {info.telefono}</span>
              </li>
              <li className="flex items-center">
                <i className="fas fa-briefcase mr-2 text-yellow-500"></i>
                <span>Trabaja en: {info.trabajo}</span>
              </li>
              <li className="flex items-center">
                <i className="fas fa-building mr-2 text-red-500"></i>
                <span>Cargo: {info.cargo}</span>
              </li>
              <li className="flex items-center">
                <i className="fas fa-envelope mr-2 text-purple-500"></i>
                <span>Email: {info.email}</span>
              </li>
            </ul>

            <div className="p-4">
              <h2 className="dark:text-white">Editar información</h2>
              {/* Botón para abrir el modal */}
              <button
                onClick={() => setIsModalOpen(true)}
                className="bg-blue-500 text-white px-4 py-2 rounded">
                Editar Perfil
              </button>
            </div>
          </div>

          {/* Modal */}
          {isModalOpen && (
            <div className="absolute inset-2 bg-gray-600 bg-opacity-50  flex justify-center j items-center">
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h2 className="text-xl mb-4">Editar Perfil</h2>
                <form className="space-y-2">
                  <div>
                    <label className="block">Nombre:</label>
                    <input
                      type="text"
                      name="nombre"
                      value={info.nombre}
                      onChange={handleChange}
                      className="w-full border rounded p-1"
                    />
                  </div>
                  <div>
                    <label className="block">Descripción:</label>
                    <textarea
                      name="descripcion"
                      value={info.descripcion}
                      onChange={handleChange}
                      className="w-full border rounded p-1"
                    ></textarea>
                  </div>
                  <div>
                    <label className="block">Dirección:</label>
                    <input
                      type="text"
                      name="direccion"
                      value={info.direccion}
                      onChange={handleChange}
                      className="w-full border rounded p-1"
                    />
                  </div>
                  <div>
                    <label className="block">Teléfono:</label>
                    <input
                      type="text"
                      name="telefono"
                      value={info.telefono}
                      onChange={handleChange}
                      className="w-full border rounded p-1"
                    />
                  </div>
                  <div>
                    <label className="block">Trabaja en:</label>
                    <input
                      type="text"
                      name="trabajo"
                      value={info.trabajo}
                      onChange={handleChange}
                      className="w-full border rounded p-1"
                    />
                  </div>
                  <div>
                    <label className="block">Cargo:</label>
                    <input
                      type="text"
                      name="cargo"
                      value={info.cargo}
                      onChange={handleChange}
                      className="w-full border rounded p-2"
                    />
                  </div>
                  <div>
                    <label className="block">Email:</label>
                    <input
                      type="email"
                      name="email"
                      value={info.email}
                      onChange={handleChange}
                      className="w-full border rounded p-2"
                    />
                  </div>
                </form>

                {/* Botones para cerrar o guardar */}
                <div className="mt-4 flex justify-end">
                  <button
                    onClick={() => setIsModalOpen(false)}
                    className="bg-red-500 text-white px-4 py-2 rounded mr-2"
                  >
                    Cancelar
                  </button>
                  <button
                    onClick={() => setIsModalOpen(false)}
                    className="bg-green-500 text-white px-4 py-2 rounded"
                  >
                    Guardar
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};
