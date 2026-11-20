# Sistema de Gestión de Vacantes

Aplicación web desarrollada como proyecto formativo del programa Análisis y Desarrollo de Software (ADSO) del SENA. El sistema permite administrar ofertas laborales mediante una interfaz construida con React y un backend desarrollado en Java con Spring Boot, conectado a una base de datos MySQL.

## Tecnologías utilizadas

### Backend
- Java 17.
- Spring Boot.
- Spring MVC.
- Spring Data JPA.
- Spring Web.
- Spring Validation.
- Thymeleaf.
- Maven.

### Frontend
- React 19.
- JavaScript.
- Vite.
- HTML5.
- CSS3.
- ESLint.

### Base de datos
- MySQL 8.

### Herramientas de desarrollo
- Visual Studio Code.
- Git.
- GitHub.
- Apache Maven.
- Node.js y npm.

## Funcionalidades

- Registrar nuevas vacantes laborales.
- Consultar las vacantes registradas.
- Buscar vacantes mediante un campo de búsqueda.
- Eliminar vacantes con confirmación.
- Validar los campos obligatorios de los formularios.
- Consultar información almacenada en MySQL.
- Comunicar el frontend React con el backend mediante una API REST.
- Mostrar mensajes de confirmación y errores al usuario.

## Estructura del proyecto

```text
SistemaVacantesWeb/
│
├── src/
│   └── main/
│       ├── java/
│       │   └── com/sena/vacantes/
│       │       ├── controller/
│       │       ├── model/
│       │       └── repository/
│       │
│       └── resources/
│           ├── templates/
│           └── application.properties
│
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── services/
│   │   ├── App.jsx
│   │   ├── App.css
│   │   └── main.jsx
│   │
│   ├── package.json
│   └── vite.config.js
│
├── pom.xml
├── README.md
└── ENLACE_REPOSITORIO.txt
```

## Base de datos

Nombre de la base de datos: `sistema_vacantes`.

El proyecto utiliza MySQL para almacenar la información de las vacantes.

La conexión se configura mediante las variables de entorno:

- `DB_USER`
- `DB_PASSWORD`

Estas variables contienen las credenciales de acceso a MySQL.

## Requisitos para ejecutar el proyecto

- Java JDK 17 o superior.
- Apache Maven.
- MySQL Server 8.
- Node.js y npm.
- Visual Studio Code.
- Navegador web.

## Instalación y ejecución

### 1. Configurar la base de datos

Crear la base de datos `sistema_vacantes` en MySQL y configurar las variables de entorno `DB_USER` y `DB_PASSWORD`.

### 2. Ejecutar el backend

Abrir una terminal en la carpeta principal del proyecto y ejecutar:

```powershell
mvn spring-boot:run
```

El backend estará disponible en:

http://localhost:8080

La API REST para consultar y administrar las vacantes estará disponible en:

http://localhost:8080/api/vacantes

### 3. Ejecutar el frontend

Abrir una segunda terminal en Visual Studio Code y entrar a la carpeta frontend:

```powershell
cd frontend
```

Instalar las dependencias:

```powershell
npm install
```

Iniciar el servidor de desarrollo:

```powershell
npm run dev
```

El frontend estará disponible en:

http://localhost:5173

### 4. Verificar el proyecto

Con el backend y el frontend ejecutándose simultáneamente, abrir el navegador en:

http://localhost:5173

Desde la interfaz se pueden consultar, registrar, buscar y eliminar vacantes.

## Validación y compilación del frontend

Para revisar la calidad del código:

```powershell
npm run lint
```

Para generar la compilación de producción:

```powershell
npm run build
```

Los archivos optimizados se generan en la carpeta `frontend/dist`.

## Control de versiones

El proyecto utiliza Git para el control de versiones y GitHub como plataforma de alojamiento del código fuente.

Repositorio:

https://github.com/mariavalentinacv6-dotcom/SistemaVacantesWeb

## Autora

**Maria Valentina Chambo Vargas**

Proyecto académico desarrollado para el programa Análisis y Desarrollo de Software (ADSO) del Servicio Nacional de Aprendizaje (SENA).
