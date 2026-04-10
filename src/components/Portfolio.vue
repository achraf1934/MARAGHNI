<template>
  <section id="portfolio" class="portfolio">
    <div class="container">
      <div class="text-center">
        <h2 class="section-title reveal-up">Nos Services & Réalisations</h2>
        <p class="portfolio-desc reveal-up delay-200">Découvrez une sélection de nos prestations. Nous nous adaptons à toutes vos envies pour vous offrir une décoration à votre image.</p>
      </div>

      <div class="portfolio-grid">
        <!-- Mariage -->
        <div class="portfolio-item reveal-scale delay-100">
          <img src="../assets/hero_wedding_decor_1775776817661.png" alt="Décoration de Mariage" />
          <div class="item-overlay">
            <h3>Mariage & Réception</h3>
            <p>Une élégance incomparable pour le plus beau jour de votre vie.</p>
            <a href="#contact" class="btn btn-outline" style="border-color: var(--primary-color); color: var(--primary-color);">Réserver</a>
          </div>
        </div>

        <!-- Wtia -->
        <div class="portfolio-item reveal-scale delay-200">
          <img src="../assets/traditional_wtia_decor_1775776848225.png" alt="Décoration Wtia Traditionnelle" />
          <div class="item-overlay">
            <h3>Wtia & Outia</h3>
            <p>Le charme traditionnel tunisien, revisité avec luxe et raffinement.</p>
            <a href="#contact" class="btn btn-outline" style="border-color: var(--primary-color); color: var(--primary-color);">Réserver</a>
          </div>
        </div>

        <!-- Corporate -->
        <div class="portfolio-item reveal-scale delay-300">
          <img src="../assets/corporate_event_decor_1775776834662.png" alt="Événement Corporate" />
          <div class="item-overlay">
            <h3>Événement Entreprise</h3>
            <p>Prestations professionnelles pour vos conférences, lancements et dîners d'affaires.</p>
            <a href="#contact" class="btn btn-outline" style="border-color: var(--primary-color); color: var(--primary-color);">Réserver</a>
          </div>
        </div>

        <!-- Anniversaire -->
        <div class="portfolio-item reveal-scale delay-400">
          <img src="../assets/party_birthday_decor_1775777064522.png" alt="Décoration Anniversaire et Fête" />
          <div class="item-overlay">
            <h3>Anniversaires & Fêtes</h3>
            <p>Une décoration vibrante et personnalisée pour des soirées mémorables.</p>
            <a href="#contact" class="btn btn-outline" style="border-color: var(--primary-color); color: var(--primary-color);">Réserver</a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useScrollReveal } from '../composables/useScrollReveal';
useScrollReveal();
</script>

<style scoped>
.portfolio {
  background-color: #fff;
}

.portfolio-desc {
  max-width: 600px;
  margin: 0 auto;
  color: var(--text-light);
  margin-bottom: 4rem;
}

.portfolio-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
}

.portfolio-item {
  position: relative;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0,0,0,0.05);
  cursor: pointer;
  height: 400px;
}

.portfolio-item img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.6s ease;
}

.portfolio-item:hover img {
  transform: scale(1.05);
}

.item-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(to top, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.2) 50%, transparent 100%);
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 2rem;
  color: #fff;
  opacity: 0.9;
  transition: var(--transition);
}

.portfolio-item:hover .item-overlay {
  opacity: 1;
  background: linear-gradient(to top, rgba(0,0,0,0.95) 0%, rgba(0,0,0,0.4) 60%, rgba(26,26,26,0.2) 100%);
}

.item-overlay h3 {
  font-size: 1.8rem;
  color: var(--primary-color);
  margin-bottom: 0.5rem;
  transform: translateY(20px);
  transition: var(--transition);
}

.item-overlay p {
  font-size: 0.95rem;
  margin-bottom: 1.5rem;
  color: #ddd;
  transform: translateY(20px);
  opacity: 0;
  transition: var(--transition);
}

.item-overlay .btn {
  align-self: flex-start;
  transform: translateY(20px);
  opacity: 0;
  transition: var(--transition);
  border-color: var(--primary-color) !important;
  color: #fff !important;
}

.item-overlay .btn:hover {
  background-color: var(--primary-color) !important;
}

.portfolio-item:hover .item-overlay h3,
.portfolio-item:hover .item-overlay p,
.portfolio-item:hover .item-overlay .btn {
  transform: translateY(0);
  opacity: 1;
}

.portfolio-item:hover .item-overlay p {
  transition-delay: 0.1s;
}

.portfolio-item:hover .item-overlay .btn {
  transition-delay: 0.2s;
}

@media (max-width: 768px) {
  .portfolio-item {
    height: 350px;
  }
}
</style>
