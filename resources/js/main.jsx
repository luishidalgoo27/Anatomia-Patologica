import { createRoot } from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import '../css/app.css'
import '../assets/dist/css/adminlte.css'
import '../assets/plugins/fontawesome-free/css/all.css'
import AppLayout from './Layouts/AppLayout'
import ErrorPage from './Pages/ErrorPage'
import HomePage from './Pages/HomePage'
import MuestrasPage from './Pages/MuestrasPage'
import InformeFinalPage from './Pages/InformeFinalPage'
import LoginPage from './Pages/LoginPage'
import CrearCuentaPage from './Pages/CrearCuentaPage'
import InicioPage from './Pages/InicioPage'
import ActualizarUsuarioPage from './Pages/ActualizarUsuarioPage'

const router = createBrowserRouter([
    {
        element: <AppLayout />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: '/',
                element: <HomePage />
            },
            {
                path: '/muestras',
                element: <MuestrasPage />
            },
            {
                path: '/informeFinal',
                element: <InformeFinalPage />
            },
            {
                path: '/login',
                element: <LoginPage />
            },
            {
                path: '/CrearCuenta',
                element: <CrearCuentaPage />
            },
            {
                path: '/Inicio',
                element: <InicioPage />
            },
            {
                path: '/ActualizarUsuario',
                element: <ActualizarUsuarioPage />
            }
        ]
    }
])

createRoot(document.getElementById('root')).render(
    <RouterProvider router={router} />
)