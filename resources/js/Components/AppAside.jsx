import { Link } from "react-router-dom"
import DavanteIMG from '../../assets/img/davantefundacion.png'
import UserImg from '../../assets/img/user2-160x160.jpg'
import { useEffect, useState } from "react"

export default function AppAside(){
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

    return(
        <>
            <aside className="main-sidebar bg-navy sidebar-dark-primary elevation-4 font-hola">
                <Link to="https://www.fundaciondavante.org/" className="brand-link">
                    <img src={DavanteIMG} alt="AdminLTE Logo" className="brand-image img-circle elevation-3"/>
                    <span className="brand-text font-weight-light">Davante Fundación</span>
                </Link>

                <div className="sidebar">
                    <div className="user-panel mt-3 pb-3 mb-3 d-flex">
                        <div className="image">
                            <img src={UserImg} className="img-circle elevation-2" alt="User Image"/>
                        </div>
                        <div className="info">
                        
                            <a href="/login" className="d-block">¡Hola {nombreUser}!</a>
                        </div>
                    </div>

                    <div className="form-inline">
                        <div className="input-group" data-widget="sidebar-search">
                            <input className="form-control form-control-sidebar" type="search" placeholder="Search" aria-label="Search"/>
                            <div className="input-group-append">
                                <button className="btn btn-sidebar">
                                    <i className="fas fa-search fa-fw"></i>
                                </button>
                            </div>
                        </div>
                    </div>

                    <nav className="mt-2">
                        <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
                            <li className="nav-item">
                                <Link to="/muestras" className="nav-link">
                                    <i className="nav-icon fas  fa-heartbeat"></i>
                                    <p>
                                        Muestras
                                    </p>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/muestras2" className="nav-link">
                                    <i className="nav-icon fas  fa-image"></i>
                                    <p>
                                        Interpretaciones
                                    </p>
                                </Link>
                            </li>

                            <li className="nav-item">
                                <Link to="/" className="nav-link">
                                    <i className="nav-icon fas  fa-user"></i>
                                    <p>
                                        Usuario
                                    </p>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" onClick={handleLogOut}>
                                    <i className="nav-icon fas fa-power-off"></i>
                                    <p className="text-danger">
                                        Cerrar Sesion
                                    </p>
                                </Link>
                            </li>
                        </ul>
                        
                    </nav>
                </div>
            </aside>
        </>
    )
}