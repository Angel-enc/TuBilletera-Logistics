# TuBilletera-Logistics💸

**TuBilletera Logistics**
Es una solución Full Stack diseñada para centralizar la gestión financiera y operativa de profesionales autónomos. Permite el control total sobre la cartera de clientes
y la automatización de presupuestos con estados de pago en tiempo real.

## Stack Tecnológico & Arquitectura

El proyecto utiliza una arquitectura de **API RESTful** desacoplada, permitiendo que el backend de Python gestione la lógica de negocio pesada (como el procesamiento de imágenes) mientras el frontend de React ofrece una experiencia de usuario fluida.

- **Backend:** API REST construida con **Python (Flask)**, estructurada bajo estándares RESTful (uso de métodos GET, POST, PUT, DELETE y códigos de estado HTTP).
- **Base de Datos:** Mapeo Objeto-Relacional (ORM) con **SQLAlchemy** para una gestión eficiente de modelos relacionales.
- **Frontend:** SPA (Single Page Application) con **React.js** y **Bootstrap 5** para una interfaz responsive.
- **Seguridad:** Protocolo **JWT (JSON Web Tokens)** para autenticación persistente y **Bcrypt** para el hash de contraseñas.
- **Procesamiento de Datos:** Integración de **OCR (Tesseract/Cloudinary)** para la lectura automatizada de documentos.
- **Testing:** Jest para componenetes de Frontend.

## Características Principales

- 🔐**Sistema de Autenticación:** Registro y login con tokens JWT y protección de rutas en cliente y servidor.
- 📸**Módulo OCR Inteligente:** Procesamiento de imágenes de facturas para la extracción automática de datos (Importe, Fecha, Comercio), acelerando la contabilidad.
- 👥**Gestión de Clientes y Activos (CRUD):** Administración completa de la cartera de clientes y presupuestos almacenados en la base de datos relacional.
- 📑**Generador de Presupuestos:** Cálculos automáticos de base imponible e impuestos.
- 🚦**Logística de Estados:** Pipeline visual para controlar el flujo de caja (Pendiente /Pagado / Cancelado).



## Instalación y Setup
*(Próximamente...)*
