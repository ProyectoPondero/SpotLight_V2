import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./register.css";

// Componente de registro
export const Register = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({});

  // Maneja los cambios en los campos del formulario
  const handleChange = ({ target }) => {
    const { name, value } = target;
    setForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
  };

  // Maneja el envío del formulario
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:3368/api/user/register", {
        method: "POST",
        body: JSON.stringify(form),
        headers: {
          "Content-Type": "application/json",
        },
      });

      const result = await response.json();

      if (response.ok) {
        navigate("/login");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md bg-gray-800 p-8 rounded-lg shadow-md"
      >
        <h2 className="text-2xl font-bold mb-6 text-center text-white">Registro</h2>
        <div className="mb-4">
          <label className="block text-gray-300 text-sm font-bold mb-2" htmlFor="username">
            Nombre de usuario
          </label>
          <input
            type="text"
            name="username"
            id="username"
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-700 text-white"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-300 text-sm font-bold mb-2" htmlFor="email">
            Correo electrónico
          </label>
          <input
            type="email"
            name="email"
            id="email"
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-700 text-white"
          />
        </div>
        <div className="mb-6">
          <label className="block text-gray-300 text-sm font-bold mb-2" htmlFor="password">
            Contraseña
          </label>
          <input
            type="password"
            name="password"
            id="password"
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-700 text-white"
          />
        </div>
        <div className="mb-4 text-center">
          <div className="text-sm text-gray-300">
            ¿Ya tienes una cuenta?{" "}
            <Link
              to="/login"
              className="text-blue-400 hover:text-blue-600"
            >
              Inicia sesión
            </Link>
          </div>
        </div>
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Registrarse
        </button>
      </form>
    </div>
  );
};