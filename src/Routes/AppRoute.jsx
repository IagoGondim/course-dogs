import { Route, Routes } from "react-router-dom";
import NotFound from "../Components/Helper/NotFound";
import ProtectedRoute from "../Components/Helper/ProtectedRoute";
import Home from "../Components/Home/Home";
import Login from "../Components/Login/Login";
import Photo from "../Components/Photo/Photo";
import User from "../Components/User/User";
import UserProfile from "../Components/User/UserProfile";

const AppRoute = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="login/*" element={<Login />} />
      <Route
        path="conta/*"
        element={
          <ProtectedRoute>
            <User />
          </ProtectedRoute>
        }
      />
      <Route path="foto/:id" element={<Photo />} />
      <Route path="perfil/:user" element={<UserProfile />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRoute;
