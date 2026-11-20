
/**
 * Servicio encargado de la comunicación entre React y Spring Boot.
 * Permite consultar, registrar y eliminar vacantes mediante la API REST.
 */

const API_URL = "http://localhost:8080/api/vacantes";

// Consultar todas las vacantes registradas.
export async function obtenerVacantes() {
    const respuesta = await fetch(API_URL);

    if (!respuesta.ok) {
        throw new Error("No fue posible consultar las vacantes.");
    }

    return await respuesta.json();
}

// Registrar una nueva vacante.
export async function registrarVacante(vacante) {
    const respuesta = await fetch(API_URL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(vacante)
    });

    if (!respuesta.ok) {
        const errores = await respuesta.json().catch(() => ({}));

        throw new Error(
            Object.values(errores).join(" ") ||
            "No fue posible registrar la vacante."
        );
    }

    return await respuesta.json();
}

// Eliminar una vacante utilizando su identificador.
export async function eliminarVacante(id) {
    const respuesta = await fetch(`${API_URL}/${id}`, {
        method: "DELETE"
    });

    if (!respuesta.ok) {
        throw new Error("No fue posible eliminar la vacante.");
    }

    return true;
}
