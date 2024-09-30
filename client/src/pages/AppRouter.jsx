import { BrowserRouter, Routes, Route } from "react-router-dom";
import PrivateRoutes from "./PrivateRoutes";
import PublicRoutes from "./PublicRoutes";
import { Login } from "../views/login/Login";
import { Register } from "../views/register/Register";
import { Home } from "../views/home/Home";
import { Perfil } from "../views/profile/Perfil";
import { Soporte } from "../views/support/Soporte";
import Convocatorias from "../views/convocations/Convocatorias";

const AppRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                {/* Rutas públicas */}
                <Route element={<PublicRoutes />}>
                    <Route path="/" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                </Route>
                {/* Rutas privadas */}
                <Route element={<PrivateRoutes />}>
                    <Route path="/home" element={<Home />} />
                    {/* <Route path="/messagge" element={<Message />} /> */}
                    <Route path="/support" element={<Soporte />} />
                    <Route path="/profile" element={<Perfil />} />
                    <Route path="/convocations" element={<Convocatorias />} />
                </Route>
            </Routes>
        </BrowserRouter >
    );
};

export default AppRouter;