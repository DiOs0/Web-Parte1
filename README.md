# Programación Web - Web Parte 1

Proyecto educativo de programación web con React, TypeScript y Vite.

## 📋 Descripción

Este proyecto contiene ejemplos y ejercicios de programación web, incluyendo:
- Ejemplos básicos de HTML
- Proyecto React con TypeScript
- Configuración de Vite para desarrollo y producción

## 📁 Estructura del Proyecto

```
├── ejemplos/                 # Ejemplos básicos de HTML
├── react01/                  # Proyecto principal React + TypeScript
│   ├── src/                  # Código fuente
│   │   ├── App.tsx           # Componente principal
│   │   ├── main.tsx          # Punto de entrada
│   │   └── assets/           # Recursos estáticos
│   ├── public/               # Archivos públicos
│   ├── package.json          # Dependencias del proyecto
│   └── vite.config.ts        # Configuración de Vite
├── gradle/                   # Wrapper de Gradle
├── build/                    # Archivos compilados
└── settings.gradle.kts       # Configuración de Gradle
```

## 🚀 Instalación y Configuración

### Requisitos Previos

- **Node.js** (versión 16 o superior)
- **npm** (incluido con Node.js)

### Pasos de Instalación

#### 1. Clonar o descargar el repositorio
```bash
git clone <url-del-repositorio>
cd Web-Parte\ 1
```

#### 2. Navegar a la carpeta del proyecto React
```bash
cd react01
```

#### 3. Instalar dependencias
```bash
npm install
```

Este comando descargará todas las dependencias necesarias especificadas en `package.json`.

## 💻 Comandos Disponibles

### Desarrollo
```bash
npm run dev
```
Inicia el servidor de desarrollo. La aplicación estará disponible en `http://localhost:5173` (o el puerto indicado en la terminal).

### Compilación
```bash
npm run build
```
Compila el proyecto para producción. Los archivos optimizados se guardarán en la carpeta `dist/`.

### Vista Previa de Producción
```bash
npm run preview
```
Sirve los archivos compilados de producción localmente para verificar cómo se verá en producción.

### Linting
```bash
npm run lint
```
Verifica el código TypeScript y JavaScript utilizando ESLint para mantener la calidad del código.

## 🛠️ Tecnologías Utilizadas

- **React 19** - Librería para construir interfaces de usuario
- **TypeScript** - Lenguaje tipado basado en JavaScript
- **Vite** - Constructor y servidor de desarrollo rápido
- **Vite** - Herramienta de compilación optimizada
- **ESLint** - Herramienta de análisis de código

## 📦 Dependencias Principales

### Producción
- `react` - Librería principal de React
- `react-dom` - Renderizador de React para el DOM

### Desarrollo
- `typescript` - Compilador de TypeScript
- `vite` - Servidor de desarrollo
- `@vitejs/plugin-react` - Plugin de React para Vite
- `eslint` - Linter de código
- `@types/*` - Definiciones de tipos para TypeScript

## 🔧 Configuración

### Vite (`vite.config.ts`)
Configuración del servidor de desarrollo y compilación.

### TypeScript (`tsconfig.json`)
Opciones del compilador TypeScript para el proyecto.

### ESLint (`eslint.config.js`)
Reglas de linting para mantener la calidad del código.

## 📝 Guía Rápida de Desarrollo

1. **Crear un nuevo componente:**
   ```
   # Crear archivo en src/
   src/MiComponente.tsx
   ```

2. **Usar el componente:**
   ```typescript
   import MiComponente from './MiComponente';
   
   export default function App() {
     return <MiComponente />;
   }
   ```

3. **Ejecutar en desarrollo:**
   ```bash
   npm run dev
   ```

## 🐛 Solución de Problemas

### El servidor no inicia
- Verifica que Node.js esté instalado: `node --version`
- Elimina `node_modules` y reinstala: `npm install`

### Errores de TypeScript
- Ejecuta `npm run lint` para verificar errores
- Asegúrate de que los tipos estén definidos correctamente

### Problemas de compilación
- Limpia la carpeta `dist/`: `rm -r dist` (o `rmdir /s dist` en Windows)
- Ejecuta `npm run build` nuevamente

## 📚 Recursos Útiles

- [Documentación de React](https://react.dev)
- [Documentación de Vite](https://vitejs.dev)
- [Documentación de TypeScript](https://www.typescriptlang.org)

## 📄 Licencia

Proyecto educativo - Uso libre para fines académicos.

---

**Última actualización:** Abril 2026
