import { createRoot } from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "../css/app.css";
import "../assets/dist/css/adminlte.css";
import "../assets/plugins/fontawesome-free/css/all.css";
import AppLayout from "./Layouts/AppLayout";
import ErrorPage from "./Pages/ErrorPage";
import HomePage from "./Pages/HomePage";
import MuestrasPage from "./Pages/MuestrasPage";
import MuestrasPage2 from "./Pages/MuestrasPage2";
import InformeFinalPage from "./Pages/InformeFinalPage";
import TablaMuestras from "./Pages/TablaMuestras";
import LoginPage from "./Pages/LoginPage";
import CrearCuentaPage from "./Pages/CrearCuentaPage";
import PrivateRoute from "./PrivateRoute"; // Importamos el componente

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
                        path: "/muestras2",
                        element: <MuestrasPage2 />,
                    },
                    {
                        path: "/informeFinal",
                        element: <InformeFinalPage />,
                    },
                    {
                        path: "/tablamuestras",
                        element: <TablaMuestras />,
                    },
                ],
            },
        ],
    },
]);

createRoot(document.getElementById("root")).render(
    <RouterProvider router={router} />
);
