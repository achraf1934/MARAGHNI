<template>
  <footer class="footer">
    <div class="container footer-container">
      <div class="footer-brand">
        <h3>Maraghni<span>Events</span></h3>
        <p>L'art de recevoir et de célébrer, avec élégance et distinction.</p>
      </div>
      
      <div class="footer-links">
        <h4>Liens Rapides</h4>
        <ul>
          <li><a href="#home">Accueil</a></li>
          <li><a href="#about">À propos</a></li>
          <li><a href="#portfolio">Nos Services</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </div>
      
      <div class="footer-social">
        <h4>Suivez-nous</h4>
        <a href="https://www.instagram.com/maraghni_events/?hl=en" target="_blank" class="social-icon">Instagram</a>
      </div>
    </div>
    <div class="footer-bottom">
      <p>&copy; {{ new Date().getFullYear() }} Maraghni Events. Tous droits réservés.</p>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  background-color: var(--secondary-color);
  color: #fff;
  padding-top: 4rem;
}

.footer-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 3rem;
  margin-bottom: 3rem;
}

.footer-brand h3 {
  font-family: var(--font-heading);
  font-size: 1.8rem;
  letter-spacing: 1px;
  margin-bottom: 1rem;
}

.footer-brand span {
  color: var(--primary-color);
  font-weight: 400;
  font-style: italic;
}

.footer-brand p {
  color: #aaa;
  font-size: 0.95rem;
}

.footer-links h4, .footer-social h4 {
  font-family: var(--font-heading);
  color: #fff;
  margin-bottom: 1.5rem;
  position: relative;
  display: inline-block;
}

.footer-links h4::after, .footer-social h4::after {
  content: '';
  position: absolute;
  bottom: -5px;
  left: 0;
  width: 30px;
  height: 2px;
  background-color: var(--primary-color);
}

.footer-links ul {
  list-style: none;
}

.footer-links li {
  margin-bottom: 0.8rem;
}

.footer-links a {
  color: #aaa;
  transition: var(--transition);
}

.footer-links a:hover {
  color: var(--primary-color);
  padding-left: 5px;
}

.social-icon {
  display: inline-block;
  color: #aaa;
  border: 1px solid #aaa;
  padding: 0.5rem 1.5rem;
  border-radius: 4px;
  transition: var(--transition);
}

.social-icon:hover {
  border-color: var(--primary-color);
  color: var(--primary-color);
}

.footer-bottom {
  text-align: center;
  padding: 1.5rem;
  border-top: 1px solid rgba(255,255,255,0.1);
  color: #888;
  font-size: 0.9rem;
}
</style>
