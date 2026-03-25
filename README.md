# Button Components

A lightweight, type-safe, and highly customizable React Button component featuring multiple variants, native HTML attribute support, and seamless style customization.

## Features

- **Type-Safe:** Fully written in TypeScript with comprehensive prop typing.
- **Customizable:** Easily override colors, backgrounds, and sizes using props.
- **Native Native HTML Attributes:** Seamlessly pass native button attributes like `disabled`, `onClick`, `type`, etc.
- **Variant Styles:** Includes standard, outlined, and flat variations.

## Installation

You can install the package via npm or yarn:

```bash
npm install button-mk
# or
yarn add button-mk
```

## Usage

```tsx
import Button, { ButtonVariant } from 'button-mk'

function App() {
  return (
    <div style={{ display: 'flex', gap: '10px' }}>
      <Button variant={ButtonVariant.Standard}>Standard</Button>
      <Button variant={ButtonVariant.Outlined} color="blue">Outlined</Button>
      <Button variant={ButtonVariant.Flat} bgcolor="lightgray">Flat</Button>
    </div>
  )
}
```

## Props

The `Button` component extends all standard HTML `<button>` attributes (e.g., `disabled`, `type`, `onClick`) and accepts the following custom properties:

| Prop | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `size` | `number` | `undefined` | Adjusts the font-size of the button text in pixels. |
| `variant` | `ButtonVariant` | `ButtonVariant.Standard` | The visual style variant of the button (`Standard`, `Outlined`, `Flat`). |
| `bgcolor` | `string` | `undefined` | Custom background color override applied via inline styles. |
| `color` | `string` | `undefined` | Custom text color override applied via inline styles. |
| `title` | `string` | `undefined` | Optional tooltip text displayed when the user hovers over the button. |

---
