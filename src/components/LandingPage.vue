<script setup>
import { ref } from 'vue';

const features = [
  {
    title: 'Custom Variants',
    description: 'Create DRY, reusable component variants with PrimeVue\'s preset system.',
    cardVariant: 'standard'
  },
  {
    title: 'Themed Components',
    description: 'Apply consistent styling across all components with centralized theme control.',
    cardVariant: 'elevated'
  },
  {
    title: 'Responsive Design',
    description: 'All components are fully responsive and work perfectly on any device.',
    cardVariant: 'flat'
  },
  {
    title: 'Easy Customization',
    description: 'Modify themes and variants in one place to update across your entire application.',
    cardVariant: 'highlighted'
  }
];

const currentTheme = ref('Aura');

const switchTheme = () => {
  // In a real app, you would switch between themes here
  currentTheme.value = currentTheme.value === 'Aura' ? 'Lara' : 'Aura';
};
</script>

<template>
  <div class="landing-container">
    <section class="hero-section">
      <h1 class="hero-title">PrimeVue Custom Theming Demo</h1>
      <p class="hero-subtitle">Showing the power of custom component variants using PrimeVue's PassThrough system</p>
      
      <div>
        <Button label="Get Started" severity="primary" class="mr-2" />
        <Button label="Documentation" severity="secondary" variant="outline" class="mr-2" />
        <Button label="GitHub" severity="info" variant="ghost" />
      </div>
    </section>
    
    <Divider />
    
    <section>
      <h2>Button Variants Demo</h2>
      <div class="my-4">
        <Button label="Solid Button" severity="primary" class="mr-2" />
        <Button label="Outline Button" severity="primary" variant="outline" class="mr-2" />
        <Button label="Dashed Button" severity="primary" variant="dashed" class="mr-2" />
        <Button label="Text Button" severity="primary" variant="text" class="mr-2" />
        <Button label="Ghost Button" severity="primary" variant="ghost" class="mr-2" />
        <Button label="Purple Button" variant="purple" />
      </div>
    </section>
    
    <Divider />
    
    <section>
      <h2>Features</h2>
      <div class="features-grid">
        <Card v-for="(feature, index) in features" 
              :key="index" 
              :variant="feature.cardVariant"
              class="feature-card">
          <template #title>
            <div class="feature-title">{{ feature.title }}</div>
          </template>
          <template #content>
            <p>{{ feature.description }}</p>
          </template>
          <template #footer>
            <Button label="Learn More" variant="text" />
          </template>
        </Card>
      </div>
    </section>
    
    <Divider />
    
    <section class="cta-section">
      <h2>Current Theme: {{ currentTheme }}</h2>
      <Button label="Switch Theme" severity="secondary" variant="dashed" @click="switchTheme" class="mt-2" />
      <p class="mt-4">In a production app, this would actually change the theme</p>
    </section>
    
    <Panel header="How It Works">
      <p>This demo shows how to create custom component variants in PrimeVue using the PassThrough (PT) system:</p>
      <ul>
        <li>Define custom variants in a centralized preset configuration</li>
        <li>Apply variants with a simple variant prop (e.g., variant="dashed")</li>
        <li>Combine with severity props for complete styling control</li>
        <li>Create entirely new variants like "dashed" beyond PrimeVue's defaults</li>
        <li>Change variant definitions in one place to update everywhere</li>
      </ul>
      <p>Key benefits:</p>
      <ul>
        <li>DRY approach - variants defined once, used everywhere</li>
        <li>Semantic API - use meaningful names instead of utility classes</li>
        <li>Type-safe - no risk of typos in class names</li>
        <li>Consistent - same variant looks the same everywhere</li>
      </ul>
    </Panel>
    
    <footer class="footer">
      <p>PrimeVue Theme Demo &copy; 2025</p>
    </footer>
  </div>
</template>

<style scoped>
/* Layout styles */
.landing-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
}

.hero-section {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 2rem 0;
}

.hero-title {
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
  color: var(--primary-color);
}

.hero-subtitle {
  font-size: 1.25rem;
  margin-bottom: 2rem;
  color: var(--text-color-secondary);
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin: 2rem 0;
}

.feature-card {
  height: 100%; 
}

.feature-title {
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  color: var(--primary-color);
}

.cta-section {
  text-align: center;
  margin: 3rem 0;
}

.footer {
  text-align: center;
  padding: 2rem 0;
  border-top: 1px solid var(--surface-border);
  margin-top: 2rem;
}

/* Utility classes */
.mr-2 {
  margin-right: 0.5rem !important;
}

.mt-2 {
  margin-top: 0.5rem !important;
}

.mt-4 {
  margin-top: 1rem !important;
}

.my-4 {
  margin-top: 1rem !important;
  margin-bottom: 1rem !important;
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .hero-title {
    font-size: 2rem;
  }
  
  .hero-subtitle {
    font-size: 1rem;
  }
  
  .features-grid {
    grid-template-columns: 1fr;
  }
}
</style>