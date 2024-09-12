import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import  Home  from "../pages/Home"
import { Perfil } from "../pages/Perfil";
export const AppRouter = () => {
    return (
        <Router>
        <Routes>
            <Route path="/perfil" element={<Perfil/>}></Route>
            <Route path="/" element={<Home />} />
        </Routes>
        </Router>
    );
    }