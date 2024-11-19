import { Loading } from "../components/Loading";
import { authContext } from "../contexts/user/UserContexProvider";
import { Navigate, Outlet } from "react-router-dom";

const PrivateRoutes = () => {

    const { state } = authContext();

    if (state.user === undefined) {
        return <Loading />;
    }

    return state.user ? <Outlet /> : <Navigate to={"/home"} />;
};

export default PrivateRoutes;