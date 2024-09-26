import { useContext } from "react";
import { UserContext } from "../contexts/UserContext";
import { Navigate, Outlet } from "react-router-dom";

const PublicRoutes = () => {
    // Obtiene el estado del contexto de usuario
    const { state } = useContext(UserContext);

    // Si el usuario está logueado, redirige a la ruta "/home"
    return !state.isLogged ? <Outlet /> : <Navigate to={"/home"} />;
};

export default PublicRoutes;