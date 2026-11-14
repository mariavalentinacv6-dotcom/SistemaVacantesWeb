# Sistema de Gestion de Vacantes

Aplicacion web desarrollada con Java y Spring Boot para administrar ofertas laborales.

## Tecnologias utilizadas

- Java 17
- Spring Boot
- Spring MVC
- Spring Data JPA
- Thymeleaf
- MySQL 8
- Maven
- HTML

## Funcionalidades

- Registrar nuevas vacantes.
- Consultar las vacantes registradas.
- Eliminar vacantes.
- Validar los campos obligatorios.
- Conectar la aplicacion con una base de datos MySQL.

## Base de datos

Nombre de la base de datos: sistema_vacantes

La aplicacion utiliza las variables de entorno DB_USER y DB_PASSWORD para establecer la conexion con MySQL.

## Requisitos

- Java JDK 17 o superior.
- Apache Maven.
- MySQL Server 8.
- Visual Studio Code.

## Ejecucion

1. Configurar las variables de entorno DB_USER y DB_PASSWORD.
2. Crear la base de datos sistema_vacantes en MySQL.
3. Abrir una terminal en la carpeta del proyecto.
4. Ejecutar:

mvn spring-boot:run

5. Abrir en el navegador:

http://localhost:8080

## Autora

Maria Valentina Chambo Vargas

Proyecto academico desarrollado para el programa ADSO del SENA.
