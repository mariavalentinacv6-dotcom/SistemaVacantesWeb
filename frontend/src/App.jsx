
import { useEffect, useState } from "react";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import VacanteForm from "./components/VacanteForm";
import ConfirmDialog from "./components/ConfirmDialog";

import Inicio from "./pages/Inicio";
import Vacantes from "./pages/Vacantes";

import {
    obtenerVacantes,
    registrarVacante,
    eliminarVacante
} from "./services/vacanteService";

import "./App.css";

/**
 * Componente principal del Sistema de Gestión de Vacantes.
 * Administra la navegación, los datos y las operaciones del sistema.
 */

function App() {

    // Estados principales de la aplicación.
    const [vacantes, setVacantes] = useState([]);
    const [seccionActiva, setSeccionActiva] = useState("inicio");
    const [busqueda, setBusqueda] = useState("");

    const [cargando, setCargando] = useState(true);
    const [guardando, setGuardando] = useState(false);

    const [mensaje, setMensaje] = useState("");
    const [error, setError] = useState("");

    // Estados para controlar la eliminación de vacantes.
    const [vacanteSeleccionada, setVacanteSeleccionada] = useState(null);
    const [mostrarConfirmacion, setMostrarConfirmacion] = useState(false);

    // Consultar las vacantes al iniciar la aplicación.
    useEffect(() => {
        let componenteActivo = true;

        const consultarVacantes = async () => {
            try {
                setCargando(true);
                setError("");

                const datos = await obtenerVacantes();

                if (componenteActivo) {
                    setVacantes(datos);
                }

            } catch (errorConsulta) {
                if (componenteActivo) {
                    setError(errorConsulta.message);
                }

            } finally {
                if (componenteActivo) {
                    setCargando(false);
                }
            }
        };

        consultarVacantes();

        return () => {
            componenteActivo = false;
        };
    }, []);

    // Cambiar de sección y limpiar los mensajes.
    const navegar = (seccion) => {
        setSeccionActiva(seccion);
        setMensaje("");
        setError("");

        if (seccion === "vacantes") {
            setBusqueda("");
        }
    };

    // Registrar una vacante utilizando la API.
    const manejarRegistro = async (nuevaVacante) => {
        try {
            setGuardando(true);
            setError("");
            setMensaje("");

            const vacanteGuardada = await registrarVacante(nuevaVacante);

            setVacantes((anteriores) => [
                ...anteriores,
                vacanteGuardada
            ]);

            setSeccionActiva("vacantes");
            setMensaje("La vacante fue registrada correctamente.");

        } catch (errorRegistro) {
            setError(errorRegistro.message);

        } finally {
            setGuardando(false);
        }
    };

    // Abrir la ventana de confirmación de eliminación.
    const solicitarEliminacion = (id) => {
        const vacante = vacantes.find((item) => item.id === id);

        if (vacante) {
            setVacanteSeleccionada(vacante);
            setMostrarConfirmacion(true);
            setMensaje("");
            setError("");
        }
    };

    // Eliminar definitivamente la vacante seleccionada.
    const confirmarEliminacion = async () => {
        if (!vacanteSeleccionada) {
            return;
        }

        try {
            await eliminarVacante(vacanteSeleccionada.id);

            setVacantes((anteriores) =>
                anteriores.filter(
                    (item) => item.id !== vacanteSeleccionada.id
                )
            );

            setMensaje("La vacante fue eliminada correctamente.");

        } catch (errorEliminacion) {
            setError(errorEliminacion.message);

        } finally {
            setMostrarConfirmacion(false);
            setVacanteSeleccionada(null);
        }
    };

    // Cancelar la eliminación.
    const cancelarEliminacion = () => {
        setMostrarConfirmacion(false);
        setVacanteSeleccionada(null);
    };

    return (
        <div className="app">

            <Navbar
                onInicio={() => navegar("inicio")}
                onVacantes={() => navegar("vacantes")}
                onRegistrar={() => navegar("registrar")}
                seccionActiva={seccionActiva}
            />

            <div className="contenido-principal">

                {mensaje && (
                    <div className="mensaje-exito" role="status">
                        {mensaje}
                        <button
                            type="button"
                            onClick={() => setMensaje("")}
                            aria-label="Cerrar mensaje"
                        >
                            ×
                        </button>
                    </div>
                )}

                {error && (
                    <div className="mensaje-global-error" role="alert">
                        {error}
                        <button
                            type="button"
                            onClick={() => setError("")}
                            aria-label="Cerrar mensaje"
                        >
                            ×
                        </button>
                    </div>
                )}

                {seccionActiva === "inicio" && (
                    <Inicio
                        totalVacantes={vacantes.length}
                        onVerVacantes={() => navegar("vacantes")}
                        onRegistrar={() => navegar("registrar")}
                    />
                )}

                {seccionActiva === "vacantes" && (
                    cargando ? (
                        <div className="estado-carga">
                            <div className="carga-spinner"></div>
                            <p>Consultando vacantes...</p>
                        </div>
                    ) : (
                        <Vacantes
                            vacantes={vacantes}
                            busqueda={busqueda}
                            setBusqueda={setBusqueda}
                            onEliminar={solicitarEliminacion}
                        />
                    )
                )}

                {seccionActiva === "registrar" && (
                    <main className="pagina-formulario">

                        <div className="formulario-volver">
                            <button
                                type="button"
                                onClick={() => navegar("vacantes")}
                            >
                                ← Volver a vacantes
                            </button>
                        </div>

                        <VacanteForm
                            onGuardar={manejarRegistro}
                            guardando={guardando}
                            onCancelar={() => navegar("vacantes")}
                        />

                    </main>
                )}

            </div>

            <Footer />

            {mostrarConfirmacion && (
                <ConfirmDialog
                    vacante={vacanteSeleccionada}
                    onConfirmar={confirmarEliminacion}
                    onCancelar={cancelarEliminacion}
                />
            )}

        </div>
    );
}

export default App;
