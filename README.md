# @nagendrayakkaladevara/react-button-component

A customizable button component for React and TypeScript.

## Installation

Install the package using npm:

```bash
npm install @nagendrayakkaladevara/react-button-component

```
## Usage

```
import React from 'react';
import { Button } from '@nagendrayakkaladevara/react-button-component';
import '@nagendrayakkaladevara/react-button-component/dist/Button.css';

const App = () => {
  return (
    <div>
      <Button variant="primary" size="large" onClick={() => alert('Button clicked!')}>
        Click Me
      </Button>
    </div>
  );
};

export default App;
```

## Features

- **Customizable Styles**: Choose from different variants (`'primary'`, `'secondary'`, `'danger'`, `'success'`) and sizes (`'small'`, `'medium'`, `'large'`).
- **Event Handling**: Easily handle click events with the `onClick` prop.
- **CSS Customization**: Include the provided CSS file or customize styles further using your own CSS.
- **Loaders**: Display loaders with different styles while waiting for asynchronous operations.
- **Icons**: Integrate icons from popular icon libraries or use custom SVG icons alongside the button text or independently.


## Props

### Button Props

- `variant`: Specifies the button's style variant.
- `size`: Specifies the button's size.
- `onClick`: Event handler for button click events.

<!-- For more detailed usage and customization options, refer to the API documentation. -->