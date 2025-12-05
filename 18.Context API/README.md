# Context API

The Context API in React provides a way to pass data through the component tree without having to pass props down manually at every level. This is particularly useful for "global" data like the current authenticated user, theme, or preferred language.

## When to use Context

Context is designed to share data that can be considered "global" for a tree of React components, such as the current authenticated user, theme, or preferred language.

## How to use Context

### 1. Create a Context

You create a Context using `React.createContext()`. This function returns a Provider and a Consumer.

```jsx
// src/contexts/ThemeContext.js
import React from 'react';

const ThemeContext = React.createContext('light'); // Default value

export default ThemeContext;
```

### 2. Provide the Context Value

The `Provider` component is used to wrap the part of your component tree where you want to make the context value available. It accepts a `value` prop to be passed to consuming components that are descendants of this Provider.

```jsx
// src/App.js
import React, { useState } from 'react';
import ThemeContext from './contexts/ThemeContext';
import Toolbar from './components/Toolbar';

function App() {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div style={{ background: theme === 'light' ? '#fff' : '#333', color: theme === 'light' ? '#000' : '#fff', minHeight: '100vh' }}>
        <h1>My App</h1>
        <Toolbar />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
```

### 3. Consume the Context Value

There are two main ways to consume context:

#### a) `useContext` Hook (Functional Components)

The `useContext` hook is the simplest way to consume context in functional components. It takes a context object (the value returned from `React.createContext`) and returns the current context value for that context.

// src/components/ThemeToggler.js
import React, { useContext } from 'react';
import ThemeContext from '../contexts/ThemeContext';

function ThemeToggler() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <button onClick={toggleTheme}>
      Toggle Theme (Current: {theme})
    </button>
  );
}

export default ThemeToggler;


#### b) `Context.Consumer` (Class Components or older React versions)

The `Context.Consumer` component is a way to subscribe to context changes. It requires a function as a child, which receives the current context value and returns a React node.

```jsx
// src/components/ThemeDisplay.js
import React from 'react';
import ThemeContext from '../contexts/ThemeContext';

class ThemeDisplay extends React.Component {
  render() {
    return (
      <ThemeContext.Consumer>
        {({ theme }) => (
          <p>Current theme from Consumer: {theme}</p>
        )}
      </ThemeContext.Consumer>
    );
  }
}

export default ThemeDisplay;
```

## Example Usage in `Toolbar` Component

Let's update the `Toolbar` component to use the `ThemeToggler` and `ThemeDisplay` components.

```jsx
// src/components/Toolbar.js
import React from 'react';
import ThemeToggler from './ThemeToggler';
import ThemeDisplay from './ThemeDisplay';

function Toolbar() {
  return (
    <div style={{ border: '1px solid gray', padding: '10px', margin: '10px' }}>
      <h2>Toolbar</h2>
      <ThemeToggler />
      <ThemeDisplay />
    </div>
  );
}

export default Toolbar;
