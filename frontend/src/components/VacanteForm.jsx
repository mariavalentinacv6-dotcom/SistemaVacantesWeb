
import { useState } from "react";
import FormField from "./FormField";

/**
 * Formulario para registrar nuevas vacantes.
 * Incluye validaciones antes de enviar la información al backend.
 */

function VacanteForm({ onGuardar, onCancelar, guardando = false }) {

    // Estado inicial de los campos del formulario.
    const [formulario, setFormulario] = useState({
        cargo: "",
        titulo: "",
        empresa: "",
        descripcion: "",
        salario: "",
        ubicacion: ""
    });

    const [errores, setErrores] = useState({});

    // Actualizar los valores cuando el usuario escribe.
    const manejarCambio = (evento) => {
        const { name, value } = evento.target;

        setFormulario((anterior) => ({
            ...anterior,
            [name]: value
        }));

        setErrores((anteriores) => ({
            ...anteriores,
            [name]: ""
        }));
    };

    // Comprobar que los datos cumplan las reglas del sistema.
    const validarFormulario = () => {
        const nuevosErrores = {};

        if (!formulario.cargo.trim()) {
            nuevosErrores.cargo = "El cargo es obligatorio.";
        }

        if (!formulario.titulo.trim()) {
            nuevosErrores.titulo = "El título es obligatorio.";
        }

        if (!formulario.empresa.trim()) {
            nuevosErrores.empresa = "La empresa es obligatoria.";
        }

        if (formulario.salario.trim() &&
            !/^[0-9]{1,10}([.,][0-9]{1,2})?$/.test(formulario.salario)) {
            nuevosErrores.salario =
                "Ingresa un salario numérico con máximo dos decimales.";
        }

        setErrores(nuevosErrores);

        return Object.keys(nuevosErrores).length === 0;
    };

    // Enviar la información validada al componente principal.
    const manejarEnvio = (evento) => {
        evento.preventDefault();

        if (!validarFormulario()) {
            return;
        }

        onGuardar({
            ...formulario,
            cargo: formulario.cargo.trim(),
            titulo: formulario.titulo.trim(),
            empresa: formulario.empresa.trim(),
            descripcion: formulario.descripcion.trim(),
            salario: formulario.salario.trim(),
            ubicacion: formulario.ubicacion.trim()
        });
    };

    return (
        <form className="vacante-form" onSubmit={manejarEnvio}>

            <div className="formulario-encabezado">
                <h2>Registrar nueva vacante</h2>
                <p>Completa los datos de la oferta laboral.</p>
            </div>

            <div className="formulario-grid">

                <FormField
                    label="Cargo"
                    name="cargo"
                    value={formulario.cargo}
                    onChange={manejarCambio}
                    error={errores.cargo}
                    placeholder="Ej. Desarrollador Java"
                    required
                    maxLength={255}
                />

                <FormField
                    label="Título de la vacante"
                    name="titulo"
                    value={formulario.titulo}
                    onChange={manejarCambio}
                    error={errores.titulo}
                    placeholder="Ej. Desarrollador Java Junior"
                    required
                    maxLength={100}
                />

                <FormField
                    label="Empresa"
                    name="empresa"
                    value={formulario.empresa}
                    onChange={manejarCambio}
                    error={errores.empresa}
                    placeholder="Nombre de la empresa"
                    required
                    maxLength={255}
                />

                <FormField
                    label="Salario mensual (COP)"
                    name="salario"
                    value={formulario.salario}
                    onChange={manejarCambio}
                    error={errores.salario}
                    placeholder="Ej. 2500000"
                    maxLength={13}
                />

                <FormField
                    label="Ubicación"
                    name="ubicacion"
                    value={formulario.ubicacion}
                    onChange={manejarCambio}
                    placeholder="Ej. Neiva, Huila"
                    maxLength={255}
                />

                <FormField
                    label="Descripción"
                    name="descripcion"
                    value={formulario.descripcion}
                    onChange={manejarCambio}
                    placeholder="Describe las funciones y requisitos del cargo."
                    multiline
                    maxLength={255}
                />

            </div>

            <p className="formulario-nota">
                Los campos marcados con * son obligatorios.
            </p>

            <div className="formulario-acciones">

                <button
                    type="button"
                    className="boton-cancelar"
                    onClick={onCancelar}
                    disabled={guardando}
                >
                    Cancelar
                </button>

                <button
                    type="submit"
                    className="boton-guardar"
                    disabled={guardando}
                >
                    {guardando ? "Guardando..." : "Registrar vacante"}
                </button>

            </div>

        </form>
    );
}

export default VacanteForm;
