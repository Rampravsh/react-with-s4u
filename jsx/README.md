# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

The Anatomy of JSX
JSX, which stands for JavaScript XML, is a syntax extension for JavaScript that allows you to write what looks like HTML directly within your JavaScript files. It is not a requirement for using React, but it is the most popular way to build user interfaces with the library because it makes the code more readable and intuitive.

What is JSX?
At its core, JSX is a syntactic sugar. This means it provides a more convenient and readable way to write code that would otherwise be more verbose. When a JSX expression is compiled, it is transformed into standard JavaScript function calls. For example, a JSX element like <p>Hello, World!</p> is ultimately converted into a function call such as React.createElement('p', null, 'Hello, World!'). This process happens automatically with tools like Babel, which is often configured in a React project.

Key Concepts
Declarative UI: JSX is a declarative way to describe your user interface. Instead of writing code that describes how to build the UI step-by-step, you simply declare what the UI should look like. This allows you to focus on the final state of your UI for a given set of data, and React handles updating it efficiently.

Embedding Expressions: You can embed any valid JavaScript expression directly inside JSX using curly braces {}. This is a powerful feature that allows you to display dynamic content, perform calculations, or render different elements based on conditions. For instance, you can display a variable's value or call a function within the markup.

Attribute Differences: Although JSX looks similar to HTML, there are key differences in how attributes are handled to avoid conflicts with reserved JavaScript keywords. For example, the class attribute in HTML becomes className in JSX. Similarly, for becomes htmlFor. This also applies to event handlers, which are named using camelCase (e.g., onClick instead of onclick).

Rules of JSX
Single Root Element: Every JSX expression must have a single top-level element. This means you cannot return multiple adjacent elements without wrapping them in a parent container, such as a <div>, <section>, or a React.Fragment.

CamelCase for Attributes: All attributes in JSX are written in camelCase, such as onClick, tabIndex, and maxLength. This aligns with the standard naming conventions used in JavaScript for properties and methods.

Self-Closing Tags: If an element does not have any children, you must close it with a forward slash at the end of the tag (e.g., <img /> or <input />). This is similar to the self-closing tags found in XML.

Security and Injection: By default, JSX sanitizes and escapes any embedded values. This helps prevent cross-site scripting (XSS) attacks by converting potentially malicious content into a string before rendering it.

Components in JSX
JSX is a fundamental part of working with React components. When you write a component, you define its output using JSX. You can also compose multiple components by including one component's tag inside another's JSX, treating them like built-in HTML elements. This is a core aspect of building modular and reusable user interfaces.

Props: When a component is included in JSX, you can pass data to it using attributes. These attributes are called "props" (short for properties) and allow you to customize a component's behavior or appearance.
