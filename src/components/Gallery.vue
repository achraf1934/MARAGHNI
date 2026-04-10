<template>
  <section id="gallery" class="gallery">
    <div class="container">
      <div class="text-center">
        <h2 class="section-title reveal-up">Une Galerie d'Inspiration</h2>
        <p class="gallery-desc reveal-up delay-200">Plongez dans l'univers Maraghni Events où chaque détail est pensé avec passion et précision.</p>
      </div>

      <div class="masonry-grid">
        <div class="masonry-item reveal-scale delay-100 tall">
          <div class="img-wrapper">
             <img src="../assets/hero_wedding_decor_1775776817661.png" alt="Mariage Majestueux" />
          </div>
        </div>
        
        <div class="masonry-item reveal-scale delay-200">
           <div class="img-wrapper">
             <img src="../assets/gallery_centerpiece_1775781176235.png" alt="Centre de table" />
           </div>
        </div>
        
        <div class="masonry-item reveal-scale delay-300">
           <div class="img-wrapper">
             <img src="../assets/traditional_wtia_decor_1775776848225.png" alt="Wtia Traditionnelle" />
           </div>
        </div>

        <div class="masonry-item reveal-scale delay-400 tall">
           <div class="img-wrapper">
             <img src="../assets/gallery_lighting_1775781288542.png" alt="Éclairage Ambiance" />
           </div>
        </div>
        
        <div class="masonry-item reveal-scale delay-500">
           <div class="img-wrapper">
             <img src="../assets/corporate_event_decor_1775776834662.png" alt="Corporate Setup" />
           </div>
        </div>
        
        <div class="masonry-item reveal-scale delay-100 wide">
           <div class="img-wrapper">
             <img src="../assets/party_birthday_decor_1775777064522.png" alt="Fête Anniversaire" />
           </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useScrollReveal } from '../composables/useScrollReveal';
// Re-initialize observer when component mounts
useScrollReveal();
</script>

<style scoped>
.gallery {
  background-color: #111; /* Dark background for gallery contrast */
  color: #fff;
}

.gallery .section-title {
  color: var(--primary-color);
}

.gallery-desc {
  max-width: 600px;
  margin: 0 auto 5rem;
  color: #aaa;
  font-size: 1.1rem;
}

/* Masonry Layout */
.masonry-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  grid-auto-rows: 250px;
  gap: 1.5rem;
}

.masonry-item {
  width: 100%;
  height: 100%;
  border-radius: 4px;
  overflow: hidden;
  position: relative;
  cursor: crosshair;
}

/* Enhancing grid spans for asymmetric look if grid supports it */
@media (min-width: 900px) {
  .masonry-grid {
    grid-template-columns: repeat(4, 1fr);
  }
  .tall { grid-row: span 2; }
  .wide { grid-column: span 2; }
}

.img-wrapper {
  width: 100%;
  height: 100%;
  overflow: hidden;
}

.masonry-item img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 1s cubic-bezier(0.25, 0.46, 0.45, 0.94), filter 0.6s ease;
  filter: brightness(0.7) grayscale(20%);
}

.masonry-item:hover img {
  transform: scale(1.08);
  filter: brightness(1.1) grayscale(0%);
}
</style>
