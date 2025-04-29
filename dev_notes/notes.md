# PrimeVue Custom Variants Guide

## Goal
Create a DRY, scalable way to add custom button variants (like `dashed`, `outline`, `ghost`, etc.) in PrimeVue using `definePreset` and the `pt` system.

---

# Step 1: Centralize Variant Logic

```ts
// theme/variants/buttonVariants.ts

export const buttonVariants = {
  dashed: {
    classes: ['dashed-button'],
    style: {
      'border-style': 'dashed',
      'border-width': '2px'
    }
  },
  outline: {
    classes: ['p-button-outlined'],
    style: {}
  },
  ghost: {
    classes: ['p-button-text', 'p-button-plain'],
    style: {}
  },
  text: {
    classes: ['p-button-text'],
    style: {}
  },
  solid: {
    classes: ['p-button'],
    style: {}
  }
};
```

---

# Step 2: Create Custom Preset Dynamically

```ts
// theme/presets/myCustomPreset.ts

import { definePreset } from 'primevue/themes';
import { Lara } from 'primevue/themes/lara';
import { buttonVariants } from '../variants/buttonVariants';

export const myCustomPreset = definePreset(Lara, {
  components: {
    button: {
      root: ({ context }) => {
        const variant = context.props.variant || 'solid';
        const variantConfig = buttonVariants[variant] || buttonVariants['solid'];

        return {
          class: [
            'p-button',
            // Severity classes
            {
              'p-button-primary': context.props.severity === 'primary',
              'p-button-secondary': context.props.severity === 'secondary',
              'p-button-success': context.props.severity === 'success',
              'p-button-info': context.props.severity === 'info',
              'p-button-warning': context.props.severity === 'warning',
              'p-button-danger': context.props.severity === 'danger',
            },
            // Variant-specific classes
            ...variantConfig.classes
          ],
          style: variantConfig.style
        };
      }
    },
  },
});
```

---

# Step 3: Setup PrimeVue with Custom Preset

```ts
import PrimeVue from 'primevue/config';
import { myCustomPreset } from './theme/presets/myCustomPreset';

app.use(PrimeVue, {
  unstyled: false,
  preset: myCustomPreset
});
```

---

# Step 4: Usage in Vue Components

```vue
<Button label="Dashed Primary" severity="primary" variant="dashed" />
<Button label="Outline Secondary" severity="secondary" variant="outline" />
<Button label="Ghost Button" severity="info" variant="ghost" />
<Button label="Plain Text" severity="success" variant="text" />
<Button label="Normal Solid" severity="warning" variant="solid" />
```

---

# Summary

| What You Achieve | How |
|:-----------------|:----|
| Create many custom button variants | Centralized in `buttonVariants.ts` |
| Easy to add/modify variants | Update only in one place |
| Full PrimeVue compatibility | Still uses `pt` system and base themes |
| Clean, DRY, scalable code | No inline messy if-checks |

---

# Bonus
✅ You can easily expand this system to apply custom severity color handling.
✅ Easily extendable for other components beyond Button (e.g., Input, Dropdowns).

---

# Optional Next Steps
Would you like to add **automatic severity-color dynamic styles** to make variants even smarter?