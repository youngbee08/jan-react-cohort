import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import MainLayout from "./components/layouts/MainLayout";
import Userprovider from "./contexts/UserContext";
import Products from "./pages/Products";

const App = () => {
  return (
    <Userprovider>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
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
