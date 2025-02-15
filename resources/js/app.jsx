import './bootstrap';
import './main';
import '../assets/plugins/jquery/jquery.min.js';
import '../assets/plugins/bootstrap/js/bootstrap.bundle.min.js';
import '../assets/dist/js/adminlte.min.js';
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";  // Componente de ruta privada
import useAuth from "./hooks/useauth";      // Hook de autenticación
import HomePage from "./Pages/HomePage";
import LoginPage from "./Pages/LoginPage";
import CrearCuentaPage from "./Pages/CrearCuentaPage";

function App() {
    const { isAuthenticated, loading } = useAuth(); // Usamos loading
  
    if (loading) {
      return <div>Loading...</div>; // O algún indicador de carga
    }
  
    return (
      <Router>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route
            path="/"
            element={
              <PrivateRoute isAuthenticated={isAuthenticated}>
                <HomePage />
              </PrivateRoute>
            }
          />
          <Route
            path="/creaCuenta"
            element={
              <PrivateRoute isAuthenticated={isAuthenticated}>
                <CrearCuentaPage />
              </PrivateRoute>
            }
          />
        </Routes>
      </Router>
    );
  }
  
export default App;
