import { Route, Routes } from "react-router-dom";
import ProtectedRoute from "../Components/Helper/ProtectedRoute";
import Home from "../Components/Home/Home";
import Login from "../Components/Login/Login";
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
    </Routes>
  );
};

export default AppRoute;
