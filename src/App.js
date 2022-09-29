import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavbarSearch from "./components/NavbarSearch";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ContextProvider } from "./context/provider";
import Home from "./components/Home";
import FavoritesPhotos from "./components/FavoritesPhotos";
// import Contact from "./components/Contact";

function App() {
  return (
    <ContextProvider>
      <BrowserRouter>
        <NavbarSearch />;
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/favoritesPhotos" element={<FavoritesPhotos />} />
        </Routes>
      </BrowserRouter>
    </ContextProvider>
  );
}

export default App;
