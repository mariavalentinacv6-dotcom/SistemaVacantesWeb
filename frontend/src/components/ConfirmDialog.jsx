
/**
 * Ventana de confirmación para acciones importantes.
 * Solicita autorización antes de eliminar una vacante.
 */

function ConfirmDialog({ abierto, mensaje, onConfirmar, onCancelar }) {

    // No mostrar la ventana cuando está cerrada.
    if (!abierto) {
        return null;
    }

    return (
        <div className="modal-fondo">
            <div
                className="modal-contenido"
                role="alertdialog"
                aria-modal="true"
                aria-labelledby="modal-titulo"
            >
                <div className="modal-icono">!</div>

                <h2 id="modal-titulo">Confirmar eliminación</h2>

                <p>{mensaje}</p>

                <div className="modal-acciones">
                    <button
                        type="button"
                        className="boton-cancelar"
                        onClick={onCancelar}
                    >
                        Cancelar
                    </button>

                    <button
                        type="button"
                        className="boton-confirmar"
                        onClick={onConfirmar}
                    >
                        Sí, eliminar
                    </button>
                </div>
            </div>
        </div>
    );
}

export default ConfirmDialog;
