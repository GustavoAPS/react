
# React 

Create the project with the command npm create vite@latest nasa-react-app, vite is just a build tool.

vite.config.js - The vite.config.js file is a configuration file used by Vite, a fast and modern build tool for front-end projects. It allows you to customize the default behavior of Vite and specify various options for your project's build and development environment.

The main.jsx file is a central entry point in a React project. It typically bootstraps your React application and renders it into the DOM. This file connects the root React component (usually App.jsx) with the index.html file in the project.

## Commands

| Command | Description |
| ----------- | ----------- |
| `npm create vite#latest <app-name>` | Command to create an app using Vite |
| `npm install` | Command to install the dependencies of the project, often is the first thing to do to run the app. |
| `npm run dev` | start the development server for your application. |
| command . . . | description . . . |


### Components

- Javascript functions that return markup.
- A piece of UI that has its own logic and appearance.
- Must start with Uppercase letters.
- export default keywords specify the main component in the file.

### Data from API
- In react the way to fetch data from an api is, via an useEffect hook. (hook = function that leet you use state and lifecycle features).
- The useEffect takes an arrow function as input and an dependency array

`useEffect(() => {}, [])`

- Blank dependency array will be called in page load.
- if there is a variable in the array, the function will be called when the variable changes.

### className
- In react className is used instead of css class.

### Display Data

- Use { } to display data in components.

### Conditional Rendering

```jsx


```