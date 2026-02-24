import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import MainLayout from "./components/layouts/MainLayout";
import Userprovider from "./contexts/UserContext";
import Products from "./pages/Products";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";

const App = () => {
  return (
    <Userprovider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to={"/auth/login"}/>} />
          
          <Route path="/auth/login" element={<Login />} />
          
          <Route path="/dashboard/overview" element={<Dashboard />} />

          <Route
            path="/home"
            element={
              <MainLayout>
                <Home />
              </MainLayout>
            }
          />
          <Route path="/about" element={<MainLayout children={<About />} />} />
          <Route
            path="/products"
            element={<MainLayout children={<Products />} />}
          />
        </Routes>
      </BrowserRouter>
    </Userprovider>
  );
};

export default App;
