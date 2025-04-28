# Test de Carta Digital con Gestor de Idioma

Esta aplicación es una prueba de una carta digital que incluye un gestor de idiomas. Permite a los usuarios cambiar entre diferentes idiomas para visualizar el contenido de manera personalizada. Ideal para restaurantes o negocios que necesitan ofrecer menús multilingües.

## Características

- Cambio dinámico de idioma.

- Interfaz amigable y fácil de usar.

- Configuración adaptable para diferentes necesidades.

## Requisitos

- Node.js

- React

## Instalación

1. Clona este repositorio usando:

   ```bash
   git clone https://github.com/enchufin/cartaTest.git
   ```

2. Navega al directorio del proyecto:

   ```bash
   cd cartaTest
   ```

3. Instala las dependencias con:

   ```bash
   pnpm install
   ```

4. Inicia la aplicación en modo desarrollo:

   ```bash
   pnpm run dev
   ```

## Contribución

¡Las contribuciones son bienvenidas! Por favor, abre un issue o envía un pull request.

## Licencia

Este proyecto está bajo la Licencia MIT.

## Arquitectura
```mermaid
graph TD
      JSON[carta.json] --> useCarta
      JSON[precios.json] --> usePrecio
      JSON[traducciones.json] --> IdiomaProvider
      IdiomaProvider --> useCarta
      IdiomaProvider --> usePrecio
      useCarta --> NavPrincipal
      useCarta --> Grupo
      Grupo --> Seccion
      Seccion --> Item
      Item --> PrecioItem
      usePrecio --> PrecioItem
      Item -->|Muestra| Precio/Descripción
```