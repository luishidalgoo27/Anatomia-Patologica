import { createRoot } from "react-dom/client";
import { RouterProvider, createBrowserRouter, Navigate, Outlet } from "react-router-dom";
import { loader as interpretacionDetail } from "./Pages/InterpretacionPage";
import "../css/app.css";
import "../assets/dist/css/adminlte.css";
import "../assets/plugins/fontawesome-free/css/all.css";
import AppLayout from "./Layouts/AppLayout";
import ErrorPage from "./Pages/ErrorPage";
import LoginPage from "./Pages/LoginPage";
import CrearCuentaPage from "./Pages/CrearCuentaPage";
import HomePage from "./Pages/HomePage";
import MuestrasPage from "./Pages/MuestrasPage";
import InterpretacionPage from "./Pages/InterpretacionPage";

function PrivateRoute() {
    const token = sessionStorage.getItem("token"); // Verificamos si hay token
    /* const tokenUser = false; */
    
    /*   fetch('/api/token')
    .then(resultado => resultado.json())
    .then(datos => {
      if (datos.token === token){
        tokenUser = true;
      }
    })
   */
    if(token){
      return <Outlet/>
    } else {
      return <Navigate to="/login" replace/>
    }
}

const router = createBrowserRouter([
    {
        element: <AppLayout />,
        errorElement: <ErrorPage />,
        children: [
            // 🔓 Rutas Públicas (se pueden acceder sin login)
            {
                path: "/login",
                element: <LoginPage />,
            },
            {
                path: "/CrearCuenta",
                element: <CrearCuentaPage />,
            },

            // 🔒 Rutas Protegidas (requieren autenticación)
            {
                element: <PrivateRoute />, // Aquí protegemos estas rutas
                children: [
                    {
                        path: "/",
                        element: <HomePage />,
                    },
                    {
                        path: "/muestras",
                        element: <MuestrasPage />,
                    },
                    {
                        path: "/interpretacion/:id",
                        element: <InterpretacionPage />,
                        loader: interpretacionDetail
                    }
                ],
            },
        ],
    },
]);

createRoot(document.getElementById("root")).render(
    <RouterProvider router={router} />
);
