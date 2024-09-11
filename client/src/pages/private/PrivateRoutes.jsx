import { useContext } from "react";
import { UserContext } from "../context/UserContext";
import { Navigate, Outlet } from "react-router-dom";

const PrivateRoutes = () => {
    // Obtiene el estado del contexto de usuario
    const { state } = useContext(UserContext);

    // Si el usuario no está logueado, redirige a la ruta "/login"
    return state.isLogged ? <Outlet /> : <Navigate to={"/login"} />;
};

export default PrivateRoutes;