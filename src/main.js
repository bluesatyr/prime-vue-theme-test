import './assets/main.css'
import PrimeVue from 'primevue/config';          // Core CSS
import 'primeicons/primeicons.css';
import Aura from '@primevue/themes/aura';
import { createApp } from 'vue'
import App from './App.vue'
import { myCustomPreset } from './theme/presets/myCustomPreset';

// Import some specific PrimeVue components that we'll use in the landing page
import Button from 'primevue/button';
import Card from 'primevue/card';
import Divider from 'primevue/divider';
import Panel from 'primevue/panel';

const app = createApp(App);
app.use(PrimeVue, {
  unstyled: false,
  theme: {
    preset: Aura
  },
  pt: myCustomPreset
});

// Register components
app.component('Button', Button);
app.component('Card', Card);
app.component('Divider', Divider);
app.component('Panel', Panel);

app.mount('#app')
