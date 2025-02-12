export default function AppNavBar() {
    return (
        <>
            <nav className="main-header navbar navbar-expand  navbar-light ">
                <ul className="navbar-nav">
                    {//boton para deslizar el nav
                    }
                    <li className="nav-item">
                        <a
                            className="nav-link"
                            data-widget="pushmenu"
                            href="#"
                            role="button"
                        >
                            <i className="fas fa-bars"></i>
                        </a>
                    </li>


                    <li className="nav-item d-none d-sm-inline-block">
                        <a href="../../index3.html" className="nav-link">
                            Inicio
                        </a>
                    </li>


                    <li className="nav-item d-none d-sm-inline-block">
                        <a href="#" className="nav-link">
                            Contacto
                        </a>
                    </li>
                </ul>

                <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                        <a
                            className="nav-link"
                            data-widget="fullscreen"
                            href="#"
                            role="button"
                        >
                            <i className="fas fa-expand-arrows-alt"></i>
                        </a>
                    </li>
                    
                    <li className="nav-item">
                        <a
                            className="nav-link"
                            data-widget=""
                            href="#"
                            role="button"
                        >
                            <i className="fas  fa-user"></i>
                        </a>
                    </li>


                </ul>
            </nav>
        </>
    );
}
