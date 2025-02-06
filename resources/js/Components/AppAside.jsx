import { Link } from "react-router-dom"
import MedacLogo from '../../assets/dist/img/MEDAC_LOGO.png'
import UserImg from '../../assets/dist/img/user2-160x160.jpg'

export default function AppAside(){
    return(
        <>
            <aside className="main-sidebar sidebar-dark-primary elevation-4">
                <Link to="/" className="brand-link">
                    <img src={MedacLogo} alt="AdminLTE Logo" className="brand-image img-circle elevation-3"/>
                    <span className="brand-text font-weight-light">Medac Fundación</span>
                </Link>

                <div className="sidebar">
                    <div className="user-panel mt-3 pb-3 mb-3 d-flex">
                        <div className="image">
                            <img src={UserImg} className="img-circle elevation-2" alt="User Image"/>
                        </div>
                        <div className="info">
                            <a href="#" className="d-block">Luis Hidalgo</a>
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
                                    <i className="nav-icon fas fa-tachometer-alt"></i>
                                    <p>
                                        Muestras
                                    </p>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/muestras2" className="nav-link">
                                    <i className="nav-icon fas fa-tachometer-alt"></i>
                                    <p>
                                        Interpretaciones
                                    </p>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/informeFinal" className="nav-link">
                                    <i className="nav-icon fas fa-tachometer-alt"></i>
                                    <p>
                                        Informe Final
                                    </p>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/tablamuestras" className="nav-link">
                                    <i className="nav-icon fas fa-tachometer-alt"></i>
                                    <p>
                                        Tabla muestras
                                    </p>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/muestras" className="nav-link">
                                    <i className="nav-icon fas fa-tachometer-alt"></i>
                                    <p>
                                        Muestras
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