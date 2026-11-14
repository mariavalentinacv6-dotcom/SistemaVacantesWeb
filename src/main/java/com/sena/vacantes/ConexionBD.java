package com.sena.vacantes;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;

public class ConexionBD {

    private static final String URL =
            "jdbc:mysql://localhost:3306/sistema_vacantes?useSSL=false&serverTimezone=UTC&allowPublicKeyRetrieval=true";

    private static final String USUARIO = System.getenv("DB_USER");
    private static final String CONTRASENA = System.getenv("DB_PASSWORD");

    public static Connection obtenerConexion() throws SQLException {

        if (USUARIO == null || CONTRASENA == null) {
            throw new SQLException(
                    "No se encontraron las variables de entorno DB_USER y DB_PASSWORD."
            );
        }

        return DriverManager.getConnection(URL, USUARIO, CONTRASENA);
    }
}