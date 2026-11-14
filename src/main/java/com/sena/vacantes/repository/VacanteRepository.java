
package com.sena.vacantes.repository;

import com.sena.vacantes.model.Vacante;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

/**
 * Repositorio para gestionar las operaciones de las vacantes.
 * Spring Data JPA proporciona automaticamente el CRUD.
 */
@Repository
public interface VacanteRepository extends JpaRepository<Vacante, Long> {
}
