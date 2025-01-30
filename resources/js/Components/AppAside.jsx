import { Link } from "react-router-dom"
import MedacLogo from '../../assets/dist/img/MEDAC_LOGO.png'
import UserImg from '../../assets/dist/img/user2-160x160.jpg'

export default function AppAside(){
    return(
        <>
            <aside class="main-sidebar sidebar-dark-primary elevation-4">
                <Link to="/" class="brand-link">
                <img src={MedacLogo} alt="AdminLTE Logo" class="brand-image img-circle elevation-3"/>
                <span class="brand-text font-weight-light">Medac Fundación</span>
                </Link>

                <div class="sidebar">
                <div class="user-panel mt-3 pb-3 mb-3 d-flex">
                    <div class="image">
                    <img src={UserImg} class="img-circle elevation-2" alt="User Image"/>
                    </div>
                    <div class="info">
                    <a href="#" class="d-block">Alexander Pierce</a>
                    </div>
                </div>

                <div class="form-inline">
                    <div class="input-group" data-widget="sidebar-search">
                    <input class="form-control form-control-sidebar" type="search" placeholder="Search" aria-label="Search"/>
                    <div class="input-group-append">
                        <button class="btn btn-sidebar">
                        <i class="fas fa-search fa-fw"></i>
                        </button>
                    </div>
                    </div>
                </div>

                <nav class="mt-2">
                    <ul class="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
                        <li class="nav-item">
                            <Link to="/muestras" class="nav-link">
                            <i class="nav-icon fas fa-tachometer-alt"></i>
                            <p>
                                Muestras
                            </p>
                            </Link>
                        </li>
                        <li class="nav-item">
                            <Link to="/muestras" class="nav-link">
                            <i class="nav-icon fas fa-tachometer-alt"></i>
                            <p>
                                Muestras
                            </p>
                            </Link>
                        </li>
                        <li class="nav-item">
                            <Link to="/muestras" class="nav-link">
                            <i class="nav-icon fas fa-tachometer-alt"></i>
                            <p>
                                Muestras
                            </p>
                            </Link>
                        </li>
                        <li class="nav-item">
                            <Link to="/muestras" class="nav-link">
                            <i class="nav-icon fas fa-tachometer-alt"></i>
                            <p>
                                Muestras
                            </p>
                            </Link>
                        </li>
                        <li class="nav-item">
                            <Link to="/muestras" class="nav-link">
                            <i class="nav-icon fas fa-tachometer-alt"></i>
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