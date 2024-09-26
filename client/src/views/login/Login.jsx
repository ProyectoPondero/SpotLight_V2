import { useContext, useState } from "react";
import { UserContext } from "../../contexts/UserContext";
import { Link, useNavigate } from "react-router-dom";
import "./login.css";

export const Login = () => {
  // Estado inicial del formulario
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  // Hook para la navegación
  const navigate = useNavigate();

  // Manejar cambios en los campos del formulario
  const handleChange = ({ target }) => {
    const { value, name } = target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  // Obtener la función login del contexto de usuario
  const { login } = useContext(UserContext);

  // Manejar el envío del formulario
  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await login(form);
    if (response) {
      alert(response.data.userName);
      return navigate("/home");
    }
  };

  return (
    <main className="flex items-center justify-center min-h-screen bg-gray-900">
      <div className="w-full max-w-md bg-gray-800 p-8 rounded-lg shadow-md">
        <div className="mb-6 text-center">
          <h2 className="text-2xl font-bold text-white">Inicio Sesión</h2>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-300 text-sm font-bold mb-2">
              Correo electrónico
            </label>
            <input
              id="email"
              name="email"
              type="text"
              autoComplete="email"
              required
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-700 text-white"
              onChange={handleChange}
            />
          </div>
          <div className="relative mb-6">
            <label htmlFor="password" className="block text-gray-300 text-sm font-bold mb-2">
              Contraseña
            </label>
            <input
              id="password"
              name="password"
              type="password"
              autoComplete="current-password"
              required
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-700 text-white"
              onChange={handleChange}
            />
          </div>
          <div className="mb-4 text-center">
            <div className="text-sm text-gray-300">
              ¿No tienes una cuenta?{" "}
              <Link
                to="/register"
                className="text-blue-400 hover:text-blue-600"
              >
                Regístrate
              </Link>
            </div>
          </div>
          <div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Iniciar Sesión
            </button>
          </div>
        </form>
      </div>
    </main>
  );
};