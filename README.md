<h1> Sistema de Registro</h1>

- Estado del proyecto: En construcción. 

- Amigo Secreto

Aplicación web simple para organizar un sorteo de “amigo secreto”.  
Permite **agregar nombres**, **validar entradas**, **visualizar la lista** y **sortear aleatoriamente** un ganador.


##  Índice
- [Características](#-características)
- [Tecnologías](#-tecnologías)
- [Estructura del proyecto](#-estructura-del-proyecto)
- [Cómo ejecutar](#-cómo-ejecutar)
- [Uso](#-uso)
- [Detalles de Implementación](#-detalles-de-implementación)
- [Accesibilidad y UX](#-accesibilidad-y-ux)
- [Roadmap](#-roadmap)
- [Contribución](#-contribución)
- [Licencia](#-licencia)

---

## ✨ Características
- **Agregar nombres** a una lista (con limpieza del input y foco automático).
- **Validación**: evita entradas vacías con `alert()`.
- **Visualización** dinámica de la lista mediante DOM.
- **Sorteo aleatorio** del ganador con `Math.random()` + `Math.floor()`.
- **Interfaz** responsiva con HTML + CSS.

---

## Tecnologías
- **HTML5** para la estructura.
- **CSS3** para estilos.
- **JavaScript (Vanilla)** para la lógica.

---

## Estructura del proyecto

---

## Cómo ejecutar

### Opción A: Live Server (recomendada)
1. Instala la extensión **Live Server** en VS Code.
2. Click derecho sobre `index.html` → **Open with Live Server**.

### Opción B: Doble click
- Abre `index.html` directamente en el navegador (sin servidor).

---

## Uso
1. Escribe un nombre en el campo de texto.
2. Pulsa **“Añadir”**:
   - Si el campo está vacío → aparece `alert('Por favor, inserte un nombre.')`.
   - Si hay texto → el nombre se agrega a la lista y el input se limpia.
3. Repite para agregar varios amigos.
4. Pulsa **“Sortear amigo”** para elegir un ganador al azar (se muestra en el área de resultado).

---




