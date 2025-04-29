# PrimeVue Custom Variants Demo

This application demonstrates how to create custom component variants in PrimeVue using the definePreset system. It enables a centralized, DRY approach to extending PrimeVue components with custom variants.

## Key Features

- **Custom Button Variants**: solid, outline, dashed, text, ghost
- **Custom Card Variants**: standard, elevated, flat, highlighted
- **Centralized Configuration**: All variants defined in a single place
- **DRY Implementation**: Change a variant once, update everywhere

## Project Structure

- `src/theme/presets/myCustomPreset.js` - Defines custom component variants
- `src/assets/landing.css` - Additional CSS for custom variants
- `src/components/LandingPage.vue` - Demo page showing all variants in use

## How It Works

The implementation uses PrimeVue's PassThrough (PT) system to extend components with custom variants:

```js
// src/theme/presets/myCustomPreset.js
export const myCustomPreset = {
  button: {
    root: ({ props }) => {
      return {
        class: [
          // Variant-specific classes
          {
            'p-button-outlined': props.variant === 'outline',
            'p-button-text': props.variant === 'text' || props.variant === 'ghost',
            'p-button-plain': props.variant === 'ghost',
            'dashed-button': props.variant === 'dashed',
          }
        ],
        style: props.variant === 'dashed' ? {
          'border-style': 'dashed',
          'border-width': '3px',
          'background-color': 'transparent'
        } : undefined
      };
    }
  },
  // ...other component variants
};
```

Then we apply it in main.js:

```js
app.use(PrimeVue, {
  unstyled: false,
  theme: {
    preset: Aura
  },
  pt: myCustomPreset
});
```

## Usage in Components

Using variants is as simple as adding a `variant` prop:

```html
<!-- Default solid button -->
<Button label="Solid Button" severity="primary" />

<!-- Outlined button -->
<Button label="Outline Button" severity="secondary" variant="outline" />

<!-- Custom dashed button -->
<Button label="Dashed Button" severity="success" variant="dashed" />

<!-- Text button -->
<Button label="Text Button" severity="info" variant="text" />

<!-- Ghost button -->
<Button label="Ghost Button" severity="warning" variant="ghost" />
```

## Project Setup

```sh
npm install
npm run dev
```

## Advantages

- **Centralized Configuration**: All variants defined in one place
- **Semantic API**: Use meaningful names (variant="dashed") instead of utility classes
- **Type Safety**: No risk of typos in class names
- **Consistency**: Same variant looks the same everywhere
- **Extensibility**: Easy to add new variants or modify existing ones