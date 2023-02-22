import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./HomePage";
import LoginPage from "./LoginPage";
import RegisterPage from "./RegisterPage";
import PropertyDetailPage from "./PropertyDetailPage";

function RoutesPage() {
  return (
    <div style={{height: "100vh"}}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/properties/:id" element={<PropertyDetailPage />} />
        <Route path="/properties" element={<h1>Properties</h1>} />
        <Route path="*" element={<h1>404: Not Found</h1>} />
      </Routes>
    </div>
  );
}

export default RoutesPage;
