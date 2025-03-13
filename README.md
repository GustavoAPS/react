
# React 

React is a JavaScript library for building user interfaces. It allows developers to create reusable UI components and efficiently update the display when data changes. Key features include:   

- Component-based: UIs are built from reusable pieces of code.   
- Virtual DOM: Optimizes performance by updating only necessary parts of the UI.   
- Declarative: Developers describe what the UI should look like, and React handles the updates.   


### 1.Project Setup

To create a react project we can use the command `npm create vite@latest app-name`, in this case, we are using Vite, that is just a build tool. After that we can open the app folder and run `npm install` and `npm run dev`

#### Files and Folders created:

- **vite.config.js:** The vite.config.js file is a configuration file used by Vite. It allows you to customize the default behavior of Vite and specify various options for your project's build and development environment.

- **main.jsx:** Is the central entry point in a React project. It typically bootstraps your React application and renders it into the DOM. This file connects the root React component (usually App.jsx) with the index.html file in the project.


### 2.Components

- Create a `components` folder to place your components. Example

```
--components
  |--Todolist.jsx
  |--Card.jsx
```
- Type `rfc` (React Functional Component) in vscode to generate the base structure of a react component via Emmet Abbreviation. 
- Components can be imported in other components.

```javascript
import React from 'react';
import MyComponent from './MyComponent';

function App() {
  return (
    <div>
      <MyComponent />
    </div>
  );
}

export default App;
```

- Components are Javascript functions that return markup.
- A piece of UI that has its own logic and appearance.
- Must start with Uppercase letters.
- export default keywords specify the main component in the file.
- In react className is used instead of css class.
- Use { } to display data in components.


### 3.Variables and Data

React as a Javacript framework has acess to the standart variables declaring like let and const, but a core feature of react is the statefull data:

```javascript
import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0); // Declaring state variable "count"

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

export default Counter;
```

Stateful data in React refers to data that can change over time and trigger UI updates when it does. This data is stored inside a component's state and is managed using React's state management mechanisms, such as the useState hook in functional components or this.state in class components.


### 4.Hooks

React hooks are functions that let you use the state and lifecycle features in functional components, They were introduced in React 16.8 to enable writing cleaner, more reusable code without needing class components.


## Commands

| Command | Description |
| ----------- | ----------- |
| `npm create vite@latest <app-name>` | Command to create an app using Vite |
| `npm install` | Command to install the dependencies of the project, often is the first thing to do to run the app. |
| `npm run dev` | start the development server for your application. |
| command . . . | description . . . |


### Data from API
- In react the way to fetch data from an api is, via an useEffect hook. (hook = function that leet you use state and lifecycle features).
- The useEffect takes an arrow function as input and an dependency array

`useEffect(() => {}, [])`

- Blank dependency array will be called in page load.
- if there is a variable in the array, the function will be called when the variable changes.
