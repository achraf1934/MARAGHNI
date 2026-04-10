import { onMounted, onUnmounted } from 'vue';

export function useScrollReveal() {
  let observer: IntersectionObserver | null = null;

  onMounted(() => {
    observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('reveal-active');
          // Optional: Disconnect after revealing to only animate once
          // observer?.unobserve(entry.target);
        }
      });
    }, {
      root: null,
      threshold: 0.15,
      rootMargin: "0px"
    });

    // Select all elements that have reveal classes
    const elements = document.querySelectorAll('.reveal-up, .reveal-left, .reveal-right, .reveal-scale, .reveal-mask');
    elements.forEach((el) => observer?.observe(el));
  });

  onUnmounted(() => {
    if (observer) {
      observer.disconnect();
    }
  });
}
