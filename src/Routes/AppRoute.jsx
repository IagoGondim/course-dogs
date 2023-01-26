import {  Route, Routes } from 'react-router-dom';
import Home from '../Components/Home/Home';
import Login from '../Components/Login/Login';


const AppRoute = () => {
  return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login/*" element={<Login />} />
      </Routes>
  )
};

export default AppRoute