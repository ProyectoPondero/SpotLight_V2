import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Login } from "../views/login/Login";
import { Register } from "../views/register/Register";
import { Tareas } from "../views/tareas/Tareas";
import PrivateRoutes from "./PrivateRoutes";
import PublicRoutes from "./PublicRoutes";
import { NuevaTarea } from "../views/tareas/nueva-tarea/NuevaTarea";
import { EditarTarea } from "../views/tareas/editar-tarea/EditarTarea";
import { EliminarTarea } from "../views/tareas/eliminar-tarea/EliminarTarea";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Rutas públicas accesibles solo si el usuario no está logueado */}
        <Route element={<PublicRoutes />}>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Route>

        {/* Rutas privadas accesibles solo si el usuario está logueado */}
        <Route element={<PrivateRoutes />}>
          <Route path="/tareas" element={<Tareas />} />
          <Route path="/tareas/nueva-tarea" element={<NuevaTarea />} />
          <Route path="/tareas/editar-tarea/:id" element={<EditarTarea />} />
          <Route
            path="/tareas/eliminar-tarea/:id"
            element={<EliminarTarea />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;