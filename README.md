# Sistema de Gestión de Muestras de Anatomía Patológica

[![Laravel](https://img.shields.io/badge/Laravel-FF2D20?style=for-the-badge&logo=laravel&logoColor=white)](https://laravel.com)
[![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://reactjs.org/)
[![Inertia.js](https://img.shields.io/badge/Inertia-000000?style=for-the-badge&logo=inertia&logoColor=white)](https://inertiajs.com/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)

## Descripción

Sistema web para la gestión de muestras de anatomía patológica que permite a los usuarios registrar, gestionar y generar informes de muestras médicas con sus respectivas imágenes e interpretaciones.

## Características Principales

- 🏷️ Gestión completa de muestras médicas
- 📸 Almacenamiento de imágenes asociadas a cada muestra
- 📊 Generación de informes en PDF
- 🔍 Búsqueda y filtrado de muestras
- 👥 Gestión de usuarios y perfiles
- 🌐 Interfaz intuitiva y responsiva

## Requisitos Técnicos

- PHP 8.2 o superior
- Composer
- Node.js 16+ y npm/yarn
- Base de datos MySQL/PostgreSQL/SQLite
- Servidor web (Apache/Nginx)

## Instalación

1. Clonar el repositorio:
   ```bash
   git clone [URL_DEL_REPOSITORIO]
   cd AnatomiaPatologica

2. Instalar dependencias de PHP:
    composer install

3. Instalar dependencias de JavaScript:
    npm install

4. Configurar el entorno:
    cp .env.example .env
    php artisan key:generate

5. Configurar la base de datos en el archivo .env:
    DB_CONNECTION=mysql
    DB_HOST=127.0.0.1
    DB_PORT=3306
    DB_DATABASE=anatomia_patologica
    DB_USERNAME=tu_usuario
    DB_PASSWORD=tu_contraseña

6. Ejecutar migraciones: 
    php artisan migrate --seed

7. Compilar assets: 
    npm run build

8. Iniciar el servidor de desarrollo: 
    php artisan serve

## Estructura del Proyecto

AnatomiaPatologica/
├── app/                  # Lógica de la aplicación
│   ├── Http/            # Controladores
│   └── Models/          # Modelos de datos
├── config/              # Configuraciones
├── database/            # Migraciones y seeders
├── public/              # Archivos públicos
├── resources/           # Vistas y assets
│   ├── js/              
│   │   ├── Components/  # Componentes React
│   │   └── Pages/       # Páginas de la aplicación
│   └── views/          
├── routes/              # Definición de rutas
└── tests/               # Pruebas

### Uso
    Iniciar sesión con tus credenciales
    Navegar al panel de muestras
    Crear, editar o eliminar muestras
    Añadir imágenes y detalles a cada muestra
    Generar informes en PDF
    Tecnologías Utilizadas
    Backend: Laravel 11
    Frontend: React 18, Inertia.js
    Estilos: Tailwind CSS
    Base de datos: Eloquent ORM
    Generación de PDF: DomPDF
    Almacenamiento: Sistema de archivos local o servicios en la nube
    Contribución
    Las contribuciones son bienvenidas. Por favor, lee las guías de contribución antes de enviar un pull request.

### Licencia
    Este proyecto está bajo la Licencia MIT.

### Contacto
    Para más información, por favor contacta al equipo de desarrollo.