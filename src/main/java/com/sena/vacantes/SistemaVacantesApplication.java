package com.sena.vacantes;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

/**
 * Clase principal del Sistema de Gestion de Vacantes.
 * Inicia la aplicacion utilizando Spring Boot.
 */
@SpringBootApplication
public class SistemaVacantesApplication {

    public static void main(String[] args) {

        SpringApplication.run(
            SistemaVacantesApplication.class, args
        );
    }
}