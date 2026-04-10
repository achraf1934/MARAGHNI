<template>
  <section id="home" class="hero">
    <div class="hero-bg floating-slow"></div>
    <div class="hero-overlay"></div>
    <div class="container hero-content">
      <h1 class="reveal-up delay-100">Créez l'événement de vos rêves</h1>
      <p class="reveal-up delay-300">Décoration premium et sur-mesure pour mariages, réceptions et événements d'entreprise.</p>
      <div class="reveal-up delay-500">
        <a href="#contact" class="btn btn-primary">Demander un Devis</a>
        <a href="#portfolio" class="btn btn-outline" style="margin-left: 1rem; border-color: #fff; color: #fff;">Nos Réalisations</a>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useScrollReveal } from '../composables/useScrollReveal';
useScrollReveal();
</script>

<style scoped>
.hero {
  position: relative;
  height: 100vh;
  min-height: 700px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  overflow: hidden;
}

.hero-bg {
  position: absolute;
  top: -5%;
  left: -5%;
  width: 110%;
  height: 110%;
  background-image: url('../assets/hero_wedding_decor_1775776817661.png');
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  z-index: 0;
  /* Transform for floating parallax effect */
}

.hero-overlay {
  position: absolute;
  top: 0; left: 0; right: 0; bottom: 0;
  background: linear-gradient(135deg, rgba(0, 0, 0, 0.5) 0%, rgba(26, 26, 26, 0.8) 100%);
  z-index: 1;
}

.hero-content {
  position: relative;
  z-index: 2;
  text-align: center;
  color: #ffffff;
  max-width: 900px;
}

.hero-content h1 {
  font-size: 5rem;
  margin-bottom: 1.5rem;
  text-shadow: 0 4px 20px rgba(0,0,0,0.5);
  line-height: 1.1;
  text-transform: uppercase;
}

.hero-content p {
  font-size: 1.3rem;
  margin-bottom: 3rem;
  font-weight: 300;
  letter-spacing: 1px;
  text-shadow: 0 2px 10px rgba(0,0,0,0.5);
}

.hero-content .btn-outline:hover {
  background-color: #fff;
  color: var(--secondary-color) !important;
}

@media (max-width: 768px) {
  .hero-content h1 {
    font-size: 3rem;
  }
  .hero-content .btn {
    display: block;
    width: 100%;
    margin: 0 0 1rem 0 !important;
  }
}
</style>
