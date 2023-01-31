import { Route, Routes } from "react-router-dom";
import ProtectedRoute from "../Components/Helper/ProtectedRoute";
import Home from "../Components/Home/Home";
import Login from "../Components/Login/Login";
import Photo from "../Components/Photo/Photo";
import User from "../Components/User/User";

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
    </Routes>
  );
};

export default AppRoute;
