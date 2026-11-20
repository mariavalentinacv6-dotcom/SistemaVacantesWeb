
/**
 * Componente que representa una tarjeta individual de vacante.
 * Muestra la información laboral y permite eliminar el registro.
 */

function VacanteCard({ vacante, onEliminar }) {

    // Utilizar el título cuando el campo cargo esté vacío.
    const nombreCargo = vacante.cargo?.trim() || vacante.titulo;

    // Formatear el salario como moneda colombiana.
    const formatearSalario = (salario) => {
        if (!salario) return "No especificado";

        const valor = Number(String(salario).replace(",", "."));

        if (Number.isNaN(valor)) return salario;

        return new Intl.NumberFormat("es-CO", {
            style: "currency",
            currency: "COP",
            maximumFractionDigits: 0
        }).format(valor);
    };

    return (
        <article className="vacante-card">

            <div className="vacante-card-header">
                <span className="vacante-etiqueta">
                    Oferta laboral
                </span>

                <span className="vacante-id">
                    ID: {vacante.id}
                </span>
            </div>

            <h3>{nombreCargo}</h3>

            <p className="vacante-empresa">
                {vacante.empresa}
            </p>

            <p className="vacante-descripcion">
                {vacante.descripcion || "Sin descripción disponible."}
            </p>

            <div className="vacante-detalles">

                <div>
                    <span className="detalle-label">Salario</span>
                    <strong>{formatearSalario(vacante.salario)}</strong>
                </div>

                <div>
                    <span className="detalle-label">Ubicación</span>
                    <strong>{vacante.ubicacion || "No especificada"}</strong>
                </div>

            </div>

            <button
                type="button"
                className="boton-eliminar"
                onClick={() => onEliminar(vacante.id)}
            >
                Eliminar vacante
            </button>

        </article>
    );
}

export default VacanteCard;
