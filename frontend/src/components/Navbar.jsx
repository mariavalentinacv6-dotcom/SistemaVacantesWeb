
/**
 * Barra de navegación principal del sistema.
 * Permite identificar la aplicación y acceder a sus secciones.
 */

function Navbar({ onInicio, onVacantes, onRegistrar, seccionActiva }) {

    return (
        <header className="navbar">
            <div className="navbar-contenido">

                <button
                    type="button"
                    className="navbar-marca"
                    onClick={onInicio}
                    aria-label="Ir al inicio"
                >
                    <span className="navbar-logo">SV</span>

                    <span className="navbar-titulo">
                        <strong>Sistema de Vacantes</strong>
                        <span>Gestión de oportunidades laborales</span>
                    </span>
                </button>

                <nav
                    className="navbar-enlaces"
                    aria-label="Navegación principal"
                >
                    <button
                        type="button"
                        className={seccionActiva === "inicio" ? "activo" : ""}
                        onClick={onInicio}
                    >
                        Inicio
                    </button>

                    <button
                        type="button"
                        className={seccionActiva === "vacantes" ? "activo" : ""}
                        onClick={onVacantes}
                    >
                        Vacantes
                    </button>

                    <button
                        type="button"
                        className="boton-registro"
                        onClick={onRegistrar}
                    >
                        + Publicar vacante
                    </button>
                </nav>

            </div>
        </header>
    );
}

export default Navbar;
