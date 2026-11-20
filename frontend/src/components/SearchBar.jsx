
/**
 * Componente de búsqueda de vacantes.
 * Permite filtrar las ofertas por cargo, título o empresa.
 */

function SearchBar({ busqueda, setBusqueda }) {

    return (
        <div className="buscador-container">

            <div className="buscador-icono">
                <span>⌕</span>
            </div>

            <input
                type="search"
                className="buscador-input"
                placeholder="Buscar por cargo, título o empresa..."
                value={busqueda}
                onChange={(evento) => setBusqueda(evento.target.value)}
                aria-label="Buscar vacantes"
            />

            {busqueda && (
                <button
                    type="button"
                    className="boton-limpiar"
                    onClick={() => setBusqueda("")}
                    aria-label="Limpiar búsqueda"
                >
                    ×
                </button>
            )}

        </div>
    );
}

export default SearchBar;
