import { BrowserRouter, Routes, Route } from "react-router-dom";
import PrivateRoutes from "./PrivateRoutes";
import PublicRoutes from "./PublicRoutes";
import { Login } from "../views/login/Login";
import { Register } from "../views/register/Register";
import { Home } from "./Home";

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
                    {/* Rutas comentadas, se pueden habilitar según sea necesario */}
                    {/* <Route path="/message" element={<Message />} />
                    <Route path="/support" element={<Support />} />
                    <Route path="/profile" element={<Profile />} /> */}
                </Route>
            </Routes>
        </BrowserRouter>
    );
};

export default AppRouter;