import { definePreset } from '@primevue/themes';
import Lara from '@primevue/themes/lara';

const BullsPreset = definePreset(Lara, {
  semantic: {
    primary: {
      50: '#fdecea',
      100: '#f9c8c2',
      200: '#f4a199',
      300: '#ef7a70',
      400: '#eb5247',
      500: '#e62b1e',
      600: '#bf2318',
      700: '#981b12',
      800: '#70120c',
      900: '#490a06',
      950: '#220302',
    },
    neutral: {
      0: '#ffffff', 
      500: '#000000',
    },
  },
});

export default {
  preset: BullsPreset,
  options: {
    darkModeSelector: '.p-dark',
    ripple: true,
  },
};
