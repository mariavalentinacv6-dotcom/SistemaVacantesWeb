
package com.sena.vacantes.controller;

import com.sena.vacantes.model.Vacante;
import com.sena.vacantes.repository.VacanteRepository;

import jakarta.validation.Valid;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PathVariable;

import org.springframework.web.servlet.mvc.support.RedirectAttributes;

/**
 * Controlador encargado de gestionar las vacantes.
 * Permite registrar, consultar y eliminar ofertas laborales.
 */
@Controller
public class VacanteController {

    private final VacanteRepository vacanteRepository;

    public VacanteController(VacanteRepository vacanteRepository) {
        this.vacanteRepository = vacanteRepository;
    }

    // Mostrar todas las vacantes registradas.
    @GetMapping("/vacantes")
    public String listarVacantes(Model model) {
        model.addAttribute("vacantes", vacanteRepository.findAll());
        return "vacantes";
    }

    // Mostrar el formulario para registrar una vacante.
    @GetMapping("/vacantes/nueva")
    public String mostrarFormulario(Model model) {
        model.addAttribute("vacante", new Vacante());
        return "formulario-vacante";
    }

    // Guardar una nueva vacante en la base de datos.
    @PostMapping("/vacantes/guardar")
    public String guardarVacante(
            @Valid Vacante vacante,
            BindingResult resultado,
            RedirectAttributes atributos) {

        if (resultado.hasErrors()) {
            return "formulario-vacante";
        }

        vacanteRepository.save(vacante);
        atributos.addFlashAttribute("mensaje", "Vacante registrada correctamente.");

        return "redirect:/vacantes";
    }

    // Eliminar una vacante por su identificador.
    @GetMapping("/vacantes/eliminar/{id}")
    public String eliminarVacante(
            @PathVariable Long id,
            RedirectAttributes atributos) {

        if (vacanteRepository.existsById(id)) {
            vacanteRepository.deleteById(id);
            atributos.addFlashAttribute("mensaje", "Vacante eliminada correctamente.");
        }

        return "redirect:/vacantes";
    }
}
