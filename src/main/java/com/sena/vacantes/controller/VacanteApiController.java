
package com.sena.vacantes.controller;

import com.sena.vacantes.model.Vacante;
import com.sena.vacantes.repository.VacanteRepository;

import jakarta.validation.Valid;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * API REST para gestionar las vacantes desde el frontend React.
 * Permite consultar, registrar y eliminar ofertas laborales.
 */
@RestController
@RequestMapping("/api/vacantes")
@CrossOrigin(origins = "http://localhost:5173")
public class VacanteApiController {

    private final VacanteRepository vacanteRepository;

    public VacanteApiController(VacanteRepository vacanteRepository) {
        this.vacanteRepository = vacanteRepository;
    }

    // Consultar todas las vacantes registradas.
    @GetMapping
    public List<Vacante> listarVacantes() {
        return vacanteRepository.findAll();
    }

    // Registrar una nueva vacante.
    @PostMapping
    public ResponseEntity<Vacante> guardarVacante(
            @Valid @RequestBody Vacante vacante) {

        Vacante nuevaVacante = vacanteRepository.save(vacante);

        return ResponseEntity.status(HttpStatus.CREATED).body(nuevaVacante);
    }

    // Eliminar una vacante por su identificador.
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> eliminarVacante(@PathVariable Long id) {

        if (!vacanteRepository.existsById(id)) {
            return ResponseEntity.notFound().build();
        }

        vacanteRepository.deleteById(id);

        return ResponseEntity.noContent().build();
    }

    // Devolver los errores de validación en formato JSON.
    @ExceptionHandler(MethodArgumentNotValidException.class)
    public ResponseEntity<Map<String, String>> manejarErroresValidacion(
            MethodArgumentNotValidException excepcion) {

        Map<String, String> errores = new HashMap<>();

        excepcion.getBindingResult().getFieldErrors().forEach(error ->
            errores.put(error.getField(), error.getDefaultMessage())
        );

        return ResponseEntity.badRequest().body(errores);
    }
}
