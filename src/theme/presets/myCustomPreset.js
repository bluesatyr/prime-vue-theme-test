// Use the PT (PassThrough) system for component variants
export const myCustomPreset = {
  button: {
    root: ({ props }) => {
      // Define styles directly based on variants
      let variantStyles = {};

      if (props.variant === 'dashed') {
        variantStyles = {
          'border-style': 'dashed',
          'border-width': '1px',
          'background-color': 'transparent',
          'color': 'var(--secondary-color)',
          'border-color': 'var(--primary-color)'
        };

        // Apply severity-specific colors if a severity is specified
        if (props.severity) {
          variantStyles.color = `var(--${props.severity}-color)`;
          variantStyles.borderColor = `var(--${props.severity}-color)`;
        }
      } else if (props.variant === 'purple') {
        variantStyles = {
          'background-color': '#8A2BE2', // Purple
          'color': '#FFFF00', // Yellow
          'border': 'none'
        };
      }

      return {
        class: [
          // Use PrimeVue's built-in classes when possible
          {
            'p-button-outlined': props.variant === 'outline',
            'p-button-text': props.variant === 'text' || props.variant === 'ghost',
            'p-button-plain': props.variant === 'ghost'
          }
        ],
        style: (props.variant === 'dashed' || props.variant === 'purple') ? variantStyles : undefined
      };
    }
  },
  card: {
    root: ({ props }) => {
      // Define styles directly based on variants
      let variantStyles = {};

      if (props.variant === 'elevated') {
        variantStyles = {
          'box-shadow': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
          'transition': 'transform 0.3s ease, box-shadow 0.3s ease'
        };
      } else if (props.variant === 'flat') {
        variantStyles = {
          'box-shadow': 'none',
          'border': '1px solid var(--surface-border)'
        };
      } else if (props.variant === 'highlighted') {
        variantStyles = {
          'border-left': '4px solid var(--primary-color)',
          'transition': 'transform 0.3s ease'
        };
      }

      return {
        style: variantStyles
      };
    }
  }
};