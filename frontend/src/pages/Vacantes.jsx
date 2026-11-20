
import { useMemo } from "react";
import VacanteCard from "../components/VacanteCard";
import SearchBar from "../components/SearchBar";

/**
 * Página encargada de mostrar y buscar las vacantes registradas.
 */

function Vacantes({
    vacantes,
    busqueda,
    setBusqueda,
    onEliminar
}) {

    // Filtrar vacantes según el texto ingresado en el buscador.
    const vacantesFiltradas = useMemo(() => {
        const termino = busqueda.trim().toLowerCase();

        if (!termino) {
            return vacantes;
        }

        return vacantes.filter((vacante) => {
            const cargo = vacante.cargo || "";
            const titulo = vacante.titulo || "";
            const empresa = vacante.empresa || "";
            const ubicacion = vacante.ubicacion || "";

            return [cargo, titulo, empresa, ubicacion]
                .some((dato) => dato.toLowerCase().includes(termino));
        });
    }, [vacantes, busqueda]);

    return (
        <main className="vacantes-pagina">

            <section className="vacantes-encabezado">
                <div>
                    <h1>Explora las vacantes</h1>

                    <p>
                        Encuentra ofertas laborales y descubre nuevas
                        oportunidades para tu crecimiento profesional.
                    </p>
                </div>
            </section>

            <section className="vacantes-contenido">

                <div className="vacantes-herramientas">

                    <div>
                        <h2>Ofertas disponibles</h2>

                        <span className="contador-vacantes">
                            {vacantesFiltradas.length} de {vacantes.length} vacantes
                        </span>
                    </div>

                    <SearchBar
                        busqueda={busqueda}
                        setBusqueda={setBusqueda}
                    />

                </div>

                {vacantesFiltradas.length > 0 ? (

                    <div className="vacantes-grid">

                        {vacantesFiltradas.map((vacante) => (
                            <VacanteCard
                                key={vacante.id}
                                vacante={vacante}
                                onEliminar={onEliminar}
                            />
                        ))}

                    </div>

                ) : (

                    <div className="estado-vacio">

                        <h2>
                            {vacantes.length === 0
                                ? "Todavía no hay vacantes registradas"
                                : "No encontramos resultados"}
                        </h2>

                        <p>
                            {vacantes.length === 0
                                ? "Registra una nueva oferta laboral para comenzar."
                                : "Intenta buscar con otro cargo, empresa o ubicación."}
                        </p>

                    </div>

                )}

            </section>

        </main>
    );
}

export default Vacantes;
