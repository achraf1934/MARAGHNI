<template>
  <section id="contact" class="contact">
    <div class="container contact-container">
      <div class="contact-info">
        <h2 class="section-title reveal-mask">Prenons Contact</h2>
        <p class="reveal-up delay-100">Prêt à organiser l'événement de vos rêves ? Contactez-nous pour discuter de votre projet et obtenir un devis personnalisé.</p>

        <div class="info-list">
          <div class="info-item reveal-left delay-200">
            <span class="icon floating">📞</span>
            <div>
              <h4>Téléphone</h4>
              <p>+216 29 198 301</p>
            </div>
          </div>
          
          <div class="info-item reveal-left delay-300">
            <span class="icon floating" style="animation-delay: 1s">✉️</span>
            <div>
              <h4>Email</h4>
              <p>contact@maraghnievents.com</p>
            </div>
          </div>

          <div class="info-item reveal-left delay-400">
            <span class="icon floating" style="animation-delay: 2s">📍</span>
            <div>
              <h4>Adresse</h4>
              <p>Tunis, Tunisie</p>
            </div>
          </div>
          
          <div class="info-item reveal-left delay-500">
            <span class="icon floating" style="animation-delay: 3s">📸</span>
            <div>
              <h4>Instagram</h4>
              <p><a href="https://www.instagram.com/maraghni_events/?hl=en" target="_blank">@maraghni_events</a></p>
            </div>
          </div>
        </div>
      </div>

      <div class="contact-form reveal-right delay-300">
        <form @submit.prevent>
          <div class="form-group">
            <input type="text" placeholder="Votre Nom" required />
          </div>
          <div class="form-group">
            <input type="email" placeholder="Votre Email" required />
          </div>
          <div class="form-group">
            <select required>
              <option value="" disabled selected>Type d'événement</option>
              <option value="mariage">Mariage</option>
              <option value="wtia">Wtia</option>
              <option value="corporate">Corporate</option>
              <option value="autre">Autre</option>
            </select>
          </div>
          <div class="form-group">
            <textarea rows="5" placeholder="Parlez-nous de votre projet..." required></textarea>
          </div>
          <button type="submit" class="btn btn-primary" style="width: 100%;">Envoyer la demande</button>
        </form>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useScrollReveal } from '../composables/useScrollReveal';
useScrollReveal();
</script>

<style scoped>
.contact {
  background-color: var(--bg-color);
}

.contact-container {
  display: flex;
  gap: 4rem;
}

.contact-info {
  flex: 1;
}

.contact-info p {
  color: var(--text-light);
  margin-bottom: 2rem;
}

.info-list {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.info-item {
  display: flex;
  gap: 1rem;
  align-items: flex-start;
}

.icon {
  font-size: 1.5rem;
  background-color: #fff;
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  box-shadow: 0 5px 15px rgba(0,0,0,0.05);
}

.info-item h4 {
  margin-bottom: 0.2rem;
  font-family: var(--font-body);
  color: var(--secondary-color);
}

.info-item p {
  margin-bottom: 0;
}

.info-item a {
  color: var(--primary-color);
  font-weight: 500;
}

.contact-form {
  flex: 1;
  background-color: #fff;
  padding: 3rem;
  border-radius: 8px;
  box-shadow: 0 10px 40px rgba(0,0,0,0.05);
}

.form-group {
  margin-bottom: 1.5rem;
}

input, select, textarea {
  width: 100%;
  padding: 1rem;
  border: 1px solid #eee;
  border-radius: 4px;
  font-family: var(--font-body);
  font-size: 0.95rem;
  background-color: #fcfcfc;
  transition: var(--transition);
}

input:focus, select:focus, textarea:focus {
  outline: none;
  border-color: var(--primary-color);
  background-color: #fff;
}

@media (max-width: 900px) {
  .contact-container {
    flex-direction: column;
  }
}
</style>
