<template>
  <header :class="{ 'scrolled': isScrolled, 'menu-open': isMenuOpen }" class="header">
    <div class="container header-container">
      <div class="logo">
        <a href="#home" @click="closeMenu">Maraghni<span>Events</span></a>
      </div>
      
      <div class="mobile-toggle" @click="toggleMenu" :class="{ 'active': isMenuOpen }">
        <span></span>
        <span></span>
        <span></span>
      </div>

      <nav class="nav" :class="{ 'nav-open': isMenuOpen }">
        <ul>
          <li><a href="#home" @click="closeMenu">Accueil</a></li>
          <li><a href="#about" @click="closeMenu">À propos</a></li>
          <li><a href="#portfolio" @click="closeMenu">Nos Services</a></li>
          <li><a href="#gallery" @click="closeMenu">Galerie</a></li>
          <li><a href="#contact" @click="closeMenu" class="mobile-btn">Contact</a></li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';

const isScrolled = ref(false);
const isMenuOpen = ref(false);

const handleScroll = () => {
  isScrolled.value = window.scrollY > 50;
};

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
  if(isMenuOpen.value) {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = '';
  }
};

const closeMenu = () => {
  isMenuOpen.value = false;
  document.body.style.overflow = '';
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>

<style scoped>
.header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
  padding: 1.5rem 0;
  transition: var(--transition);
  background: transparent;
}

.header.scrolled, .header.menu-open {
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
  padding: 1rem 0;
}

.header-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo a {
  font-family: var(--font-heading);
  font-size: 1.8rem;
  font-weight: 700;
  color: #fff;
  letter-spacing: 1px;
}

.header.scrolled .logo a, .header.menu-open .logo a {
  color: var(--secondary-color);
}

.logo span {
  color: var(--primary-color);
  font-weight: 400;
  font-style: italic;
}

.nav ul {
  display: flex;
  list-style: none;
  gap: 2rem;
  align-items: center;
}

.nav a {
  color: #fff;
  font-weight: 500;
  font-size: 0.95rem;
  text-transform: uppercase;
  letter-spacing: 1px;
  position: relative;
}

.header.scrolled .nav a {
  color: var(--text-main);
}

.nav a::after {
  content: '';
  position: absolute;
  bottom: -5px;
  left: 0;
  width: 0;
  height: 2px;
  background-color: var(--primary-color);
  transition: var(--transition);
}

.nav a:hover::after {
  width: 100%;
}

.mobile-toggle {
  display: none;
  flex-direction: column;
  justify-content: space-between;
  width: 30px;
  height: 21px;
  cursor: pointer;
  z-index: 1001;
}

.mobile-toggle span {
  display: block;
  height: 3px;
  width: 100%;
  background-color: #fff;
  transition: var(--transition);
  border-radius: 3px;
}

.header.scrolled .mobile-toggle span, .header.menu-open .mobile-toggle span {
  background-color: var(--secondary-color);
}

.mobile-toggle.active span:nth-child(1) {
  transform: translateY(9px) rotate(45deg);
}

.mobile-toggle.active span:nth-child(2) {
  opacity: 0;
}

.mobile-toggle.active span:nth-child(3) {
  transform: translateY(-9px) rotate(-45deg);
}

@media (max-width: 900px) {
  .mobile-toggle {
    display: flex;
  }
  
  .nav {
    position: fixed;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100vh;
    background-color: var(--bg-color);
    display: flex;
    justify-content: center;
    align-items: center;
    transition: var(--transition);
    opacity: 0;
    pointer-events: none;
  }
  
  .nav.nav-open {
    left: 0;
    opacity: 1;
    pointer-events: all;
  }
  
  .nav ul {
    flex-direction: column;
    gap: 3rem;
  }
  
  .nav a {
    color: var(--secondary-color);
    font-size: 1.5rem;
    font-weight: 600;
  }
  
  .header.scrolled .nav a {
    color: var(--secondary-color);
  }
}
</style>
