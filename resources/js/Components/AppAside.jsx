import { Link } from "react-router-dom";
import DavanteIMG from "../../assets/img/davantefundacion.png";
import UserImg from "../../assets/img/user2-160x160.jpg";
import { useEffect, useState } from "react"

export default function AppAside() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [nombreUser, setNombreUser] = useState([])
    const handleLogOut = () => {
        sessionStorage.removeItem('token')
        window.location.reload()
    }  
    useEffect(()=>{
        getNombre()
    }, [])
    const getNombre = async() => {
        fetch('/api/user', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization' : 'Bearer ' + sessionStorage.getItem('token')
            },
        })
        .then(resultado => resultado.json())
        .then(datos => {
            setNombreUser(datos.name)
        })
    }
    const [nombreUser, setNombreUser] = useState([])

  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);

  return (
    <>
      <aside className="main-sidebar bg-navy sidebar-dark-primary elevation-4  ">
        <Link
          to="https://www.fundaciondavante.org/"
          className="brand-link flex items-center     "
        >
          <img
            src="public\favicon.ico"
            alt="Davante Fundación Logo"
            className="brand-image  elevation-3"
          />
          <span className="brand-text ">
            Davante Fundación
          </span>
        </Link>

        <div className="sidebar pt-2">
          {/* Menú de usuario con imagen */}
          <div className="relative">
            <button
              onClick={toggleDropdown}
              className="w-full text-white  hover:bg-navHover focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-2 py-2 text-left inline-flex items-center gap-3"
              type="button"
            >
              <img
                src={UserImg}
                alt="Usuario"
                className="w-8 h-8 rounded-full border-2 border-white ml-2"
              />
              <span className="ml-2">¡Hola {nombreUser}!</span>
              <svg
                className="w-2.5 h-2 ms-auto"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 10 6"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 1 4 4 4-4"
                />
              </svg>
            </button>

            {/* Dropdown de usuario */}
            {isDropdownOpen && (
              <div className="absolute right-0 mt-2  z-10 bg-navHover rounded-lg shadow-sm w-auto">  {/**/}
                <ul className="py-2 text-sm text-gray-700 dark:text-gray-200">
                  <li>
                    <Link
                      to="/ActualizarUsuario"
                      className="block px-4 py-2 hover:bg-azulMedac dark:hover:bg-gray-600 dark:hover:text-white "
                    >
                    <i className="nav-icon fas  mr-2 fa-cog"></i>
                    Editar usuario
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/errorPage"
                      className="block px-4 py-2 text-red-600 hover:bg-azulMedac dark:hover:bg-gray-600 dark:text-red-400 dark:hover:text-white"
                    >
                    <i className="nav-icon fas mr-2 fa-power-off"></i>

                    Cerrar sesión 
                    </Link>
                  </li>
                </ul>
              </div>
            )}
          </div>

          {/* Menú de navegación */}
          <nav className="mt-2">
            <ul
              className="nav nav-pills nav-sidebar flex-column"
              data-widget="treeview"
              role="menu"
              data-accordion="false"
            >
              <li className="nav-item">
                <Link to="/muestras" className="nav-link">
                  <i className="nav-icon fas fa-heartbeat"></i>
                  <p>Muestras</p>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/interpretaciones" className="nav-link">
                  <i className="nav-icon fas fa-image"></i>
                  <p>Interpretaciones</p>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/" className="nav-link">
                  <i className="nav-icon fas fa-user"></i>
                  <p>Usuario</p>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </aside>
    </>
  );
}
