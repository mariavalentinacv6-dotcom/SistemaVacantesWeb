
/**
 * Página de inicio del Sistema de Gestión de Vacantes.
 * Presenta la aplicación y permite acceder a las ofertas laborales.
 */

function Inicio({ totalVacantes, onVerVacantes, onRegistrar }) {

    return (
        <main className="inicio">

            <section className="inicio-hero">

                <div className="inicio-hero-contenido">

                    <span className="inicio-etiqueta">
                        SISTEMA DE GESTIÓN DE VACANTES
                    </span>

                    <h1>
                        Encuentra tu próxima
                        <span> oportunidad laboral.</span>
                    </h1>

                    <p>
                        Explora ofertas de empleo, conoce nuevas empresas
                        y descubre oportunidades para impulsar tu desarrollo
                        profesional.
                    </p>

                    <div className="inicio-hero-botones">

                        <button
                            type="button"
                            className="boton-principal"
                            onClick={onVerVacantes}
                        >
                            Explorar vacantes
                        </button>

                        <button
                            type="button"
                            className="boton-secundario"
                            onClick={onRegistrar}
                        >
                            Publicar una vacante
                        </button>

                    </div>

                </div>

                <div className="inicio-ilustracion" aria-hidden="true">
                    <div className="ilustracion-circulo">
                        <div className="ilustracion-documento">
                            <span className="documento-icono">SV</span>
                            <span className="documento-linea"></span>
                            <span className="documento-linea corta"></span>
                            <span className="documento-linea"></span>
                            <span className="documento-linea media"></span>
                            <div className="documento-check">✓</div>
                        </div>
                    </div>
                </div>

            </section>

            <section className="inicio-estadisticas">

                <div className="inicio-estadistica">
                    <strong>{totalVacantes}</strong>
                    <span>Vacantes registradas</span>
                </div>

                <div className="inicio-estadistica">
                    <strong>100%</strong>
                    <span>Gestión digital</span>
                </div>

                <div className="inicio-estadistica">
                    <strong>24/7</strong>
                    <span>Acceso al sistema</span>
                </div>

            </section>

            <section className="inicio-informacion">

                <h2>Conectamos talento con empresas</h2>

                <p>
                    El sistema permite administrar ofertas laborales,
                    consultar vacantes disponibles y registrar nuevas
                    oportunidades de empleo de manera sencilla.
                </p>

            </section>

        </main>
    );
}

export default Inicio;
