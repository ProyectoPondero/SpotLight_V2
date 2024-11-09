import { BrowserRouter, Routes, Route } from "react-router-dom";
import PrivateRoutes from "./PrivateRoutes";
import PublicRoutes from "./PublicRoutes";
import { Login } from "../views/login/Login";
import { Register } from "../views/register/Register";
import { Home } from "../views/home/Home";
import { Perfil } from "../views/profile/Perfil";
import { Soporte } from "../views/support/Soporte";
import { Convocatorias } from "../views/convocations/Convocatorias";
import { Faq } from "../views/faqs/Faq";
import { About } from "../views/about/About";
import { Categories } from "../views/categories/Categories";
import { Favorites } from "../views/favorites/Favorites";

const AppRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                {/* Rutas públicas: Accesibles solo si el usuario NO está autenticado */}
                <Route element={<PublicRoutes />}>
                    <Route path="/" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                </Route>

                {/* Rutas privadas: Solo accesibles si el usuario está autenticado */}
                <Route element={<PrivateRoutes />}>
                    <Route path="/home" element={<Home />} />
                    <Route path="/support" element={<Soporte />} />
                    <Route path="/profile" element={<Perfil />} />
                    <Route path="/convocations" element={<Convocatorias />} />
                    <Route path="/faq" element={<Faq />} />
                    <Route path="/favorites" element={<Favorites />} />
                    <Route path="/categories" element={<Categories />} />
                    <Route path="/about" element={<About />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
};

export default AppRouter;