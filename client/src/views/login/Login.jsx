import { useContext, useState } from "react";
import { UserContext } from "../../contexts/UserContext";
import { userType } from "../../contexts/userTypes";
import { Link } from "react-router-dom";
import "./login.css";

export const Login = () => {
  const { stateDispatch } = useContext(UserContext);

  const [form, setForm] = useState({
    usuario: "",
    contrasenia: "",
  });

  const handleChange = ({ target }) => {
    const { value, name } = target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const peticion = await fetch("http://localhost:3368/api/user/login", {
      method: "POST",
      body: JSON.stringify(form),
      headers: {
        "Content-type": "application/json",
      },
    });

    const response = await peticion.json();

    if (peticion.ok) {
      stateDispatch({
        type: userType.logIn,
        token: response.token,
        usuario: form.usuario,
      });
    }

    alert(response.msg);
  };

  return (
    <main className="flex items-center justify-center min-h-screen bg-gray-900">
      <div className="w-full max-w-md bg-gray-800 p-8 rounded-lg shadow-md">
        <div className="mb-6 text-center">
          <h2 className="text-2xl font-bold text-white">Login</h2>
        </div>
        <form className="" onSubmit={handleSubmit}>
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
            <label htmlFor="contrasenia" className="block text-gray-300 text-sm font-bold mb-2">
              Contraseña
            </label>
            <input
              id="contrasenia"
              name="contrasenia"
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