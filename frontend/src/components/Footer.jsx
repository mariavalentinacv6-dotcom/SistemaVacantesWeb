
/**
 * Pie de página del Sistema de Gestión de Vacantes.
 * Presenta información general y tecnológica del proyecto.
 */

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-contenido">

                <div className="footer-marca">
                    <span className="footer-logo">SV</span>

                    <div>
                        <strong>Sistema de Vacantes</strong>
                        <p>Conectando talento con oportunidades.</p>
                    </div>
                </div>

                <div className="footer-informacion">
                    <span>Proyecto formativo ADSO</span>
                    <span>Desarrollado con React y Spring Boot</span>
                </div>

            </div>

            <div className="footer-copyright">
                © {new Date().getFullYear()} Sistema de Gestión de Vacantes.
                Todos los derechos reservados.
            </div>
        </footer>
    );
}

export default Footer;
