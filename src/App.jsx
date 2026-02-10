import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Header from "./components/navs/Header";
import MainLayout from "./components/layouts/MainLayout";
import UserProvider from "./contexts/UserContext";

const App = () => {
  return (
    <UserProvider>
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
        </Routes>
      </BrowserRouter>
    </UserProvider>
  );
};

export default App;
