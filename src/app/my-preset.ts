import { definePreset } from '@primeuix/themes';
import Aura from '@primeuix/themes/aura';

const MyPreset = definePreset(Aura, {
  semantic: {
    primary: {
      50: '#f5f9f2',
      100: '#e6f0de',
      200: '#cde0b8',
      300: '#b0cf90',
      400: '#93be69',
      500: '#7da65d',
      600: '#648145',
      700: '#4d6234',
      800: '#394626',
      900: '#262e19',
      950: '#13170d',
    },
  },
});

export default MyPreset;
