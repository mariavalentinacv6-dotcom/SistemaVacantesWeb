
package com.sena.vacantes.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Pattern;
import jakarta.validation.constraints.Size;

/**
 * Representa una vacante laboral del sistema.
 * Incluye validaciones para los datos registrados.
 */
@Entity
@Table(name = "vacantes")
public class Vacante {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotBlank(message = "El cargo es obligatorio.")
    @Size(max = 255, message = "El cargo no puede superar los 255 caracteres.")
    private String cargo;

    @NotBlank(message = "El título es obligatorio.")
    @Size(max = 100, message = "El título no puede superar los 100 caracteres.")
    private String titulo;

    @NotBlank(message = "La empresa es obligatoria.")
    @Size(max = 255, message = "La empresa no puede superar los 255 caracteres.")
    private String empresa;

    @Size(max = 255, message = "La descripción no puede superar los 255 caracteres.")
    private String descripcion;

    @Pattern(
        regexp = "^$|^[0-9]{1,10}([.,][0-9]{1,2})?$",
        message = "El salario debe contener solo números y hasta dos decimales."
    )
    private String salario;

    @Size(max = 255, message = "La ubicación no puede superar los 255 caracteres.")
    private String ubicacion;

    public Vacante() {
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getCargo() {
        return cargo;
    }

    public void setCargo(String cargo) {
        this.cargo = cargo;
    }

    public String getTitulo() {
        return titulo;
    }

    public void setTitulo(String titulo) {
        this.titulo = titulo;
    }

    public String getEmpresa() {
        return empresa;
    }

    public void setEmpresa(String empresa) {
        this.empresa = empresa;
    }

    public String getDescripcion() {
        return descripcion;
    }

    public void setDescripcion(String descripcion) {
        this.descripcion = descripcion;
    }

    public String getSalario() {
        return salario;
    }

    public void setSalario(String salario) {
        this.salario = salario;
    }

    public String getUbicacion() {
        return ubicacion;
    }

    public void setUbicacion(String ubicacion) {
        this.ubicacion = ubicacion;
    }
}
