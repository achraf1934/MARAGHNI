<template>
  <section id="about" class="about">
    <div class="container about-container">
      <div class="about-text">
        <h2 class="section-title reveal-mask">À propos de Maraghni Events</h2>
        <p class="reveal-up delay-100">Chez <strong class="shimmer-text">Maraghni Events</strong>, nous transformons vos rêves en réalité. Nous concevons et réalisations des décors exceptionnels pour tous vos événements, afin de graver des souvenirs inoubliables dans le cœur de vos invités.</p>
        <p class="reveal-up delay-200">Que ce soit un mariage somptueux, une Wtia traditionnelle, un événement d'entreprise prestigieux ou un dïner intimiste, notre équipe met à votre disposition son savoir-faire, sa créativité et son souci du détail pour une prestation haut de gamme et sur mesure.</p>
        
        <div class="stats reveal-up delay-300">
          <div class="stat-item">
            <h3>{{ displayEvents }}+</h3>
            <span>Événements réussis</span>
          </div>
          <div class="stat-item">
            <h3>Sur Mesure</h3>
            <span>Créations uniques</span>
          </div>
          <div class="stat-item">
            <h3>{{ displaySatisfaction }}%</h3>
            <span>Clients satisfaits</span>
          </div>
        </div>
      </div>
      <div class="about-image reveal-scale delay-400">
        <div class="image-box">
          <div class="box-overlay">Créateurs de Souvenirs.</div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useScrollReveal } from '../composables/useScrollReveal';

useScrollReveal();

const displayEvents = ref(0);
const displaySatisfaction = ref(0);
const hasAnimated = ref(false);

const startCounting = () => {
  if (hasAnimated.value) return;
  hasAnimated.value = true;
  
  const duration = 2000;
  const steps = 60;
  const eventsTarget = 500;
  const satTarget = 100;
  
  let currentStep = 0;
  
  const interval = setInterval(() => {
    currentStep++;
    displayEvents.value = Math.floor(eventsTarget * (currentStep / steps));
    displaySatisfaction.value = Math.floor(satTarget * (currentStep / steps));
    
    if (currentStep >= steps) {
      clearInterval(interval);
      displayEvents.value = eventsTarget;
      displaySatisfaction.value = satTarget;
    }
  }, duration / steps);
}

onMounted(() => {
  const observer = new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting) {
      startCounting();
    }
  }, { threshold: 0.5 });
  
  const statsEl = document.querySelector('.stats');
  if (statsEl) observer.observe(statsEl);
});
</script>

<style scoped>
.about {
  background-color: var(--bg-color);
}

.about-container {
  display: flex;
  align-items: center;
  gap: 5rem;
}

.about-text {
  flex: 1;
}

.about-text p {
  margin-bottom: 2rem;
  font-size: 1.15rem;
  color: var(--text-light);
  line-height: 1.8;
}

.about-text strong {
  color: var(--primary-color);
  font-weight: 600;
}

.stats {
  display: flex;
  flex-wrap: wrap;
  gap: 3rem;
  margin-top: 3rem;
  padding-top: 2.5rem;
  border-top: 1px solid rgba(0,0,0,0.05);
}

@media (max-width: 600px) {
  .stats {
    gap: 1.5rem;
    justify-content: center;
    text-align: center;
  }
}

.stat-item h3 {
  font-family: var(--font-heading);
  color: var(--primary-color);
  font-size: 2.5rem;
  margin-bottom: 0.2rem;
}

.stat-item span {
  font-size: 0.85rem;
  text-transform: uppercase;
  letter-spacing: 2px;
  color: var(--text-light);
  font-weight: 600;
}

.about-image {
  flex: 1;
  position: relative;
}

.image-box {
  width: 100%;
  aspect-ratio: 4/5;
  background-color: var(--secondary-color);
  position: relative;
  border-radius: 4px;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: -20px 20px 0 var(--primary-dark);
}

.box-overlay {
  color: var(--primary-color);
  font-family: var(--font-heading);
  font-size: 3rem;
  font-style: italic;
  text-align: center;
  padding: 3rem;
  border: 1px solid rgba(212, 175, 55, 0.3);
  margin: 2rem;
  background: rgba(26, 26, 26, 0.8);
  backdrop-filter: blur(5px);
}

@media (max-width: 900px) {
  .about-container {
    flex-direction: column;
    gap: 3rem;
  }
}
</style>
