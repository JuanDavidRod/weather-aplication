# Weather Application

La **Weather Application** consulta la información precisa y detallada sobre las condiciones climáticas en cualquier lugar del mundo. Accede fácilmente a pronósticos precisos, datos en tiempo real en una interfaz intuitiva.

## Tabla de Contenidos

1. [Presentación](#presentación)
2. [Características Principales](#características-principales)
3. [Despliegue](#despliegue)
4. [Uso de la API Weather](#uso-de-la-api-weather)
5. [Contribuciones](#contribuciones)
6. [Licencia](#licencia)


## Características Principales

- **Pronósticos Precisos:** Obtén pronósticos confiables basados en datos meteorológicos precisos proporcionados por [WeatherAPI](https://weatherapi.com)

- ...


## Configuración

### Requisitos previos

Asegúrate de tener instalados los siguientes elementos:
- Node.js
- pnpm
- Vite

### Pasos de Configuración

1. Clona el repositorio: `git clone https://github.com/tu-usuario/weather-aplication.git`
2. Entra al directorio del proyecto: `cd weather-aplication`
3. Instala las dependencias: `pnpm install`

### Despliegue

Instrucciones para desplegar la aplicación.

### Uso de la API Weather

Este proyecto utiliza la API de [WeatherAPI](https://weatherapi.com) para obtener datos meteorológicos. Asegúrate de obtener una clave API y configúrala en el archivo de entorno.

```env
VITE_API_KEY=TuClaveAPI
```

### Contribuciones

Si quieres contribuir, por favor sigue estos pasos:

	1.	Crea un fork del proyecto
	2.	Crea una rama para tu función: git checkout -b nueva-funcion
	3.	Realiza tus cambios y haz un commit: git commit -m "Agrega nueva función"
	4.	Haz push a tu rama: git push origin nueva-funcion
	5.	Abre un pull request

### Licencia

Este proyecto está bajo la Licencia [___]. 
Consulta el archivo LICENSE.md para más detalles.

## React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
}
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
