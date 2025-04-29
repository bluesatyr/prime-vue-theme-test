export const cardVariants = {
  standard: {
    classes: ['p-card'],
    style: {}
  },
  elevated: {
    classes: ['p-card', 'elevated-card'],
    style: {
      'box-shadow': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)'
    }
  },
  flat: {
    classes: ['p-card', 'flat-card'],
    style: {
      'box-shadow': 'none',
      'border': '1px solid var(--surface-border, #dee2e6)'
    }
  },
  highlighted: {
    classes: ['p-card', 'highlighted-card'],
    style: {
      'border-left': '4px solid var(--primary-color, #6366F1)'
    }
  }
};