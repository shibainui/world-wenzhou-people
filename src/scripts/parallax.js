const parallaxEls = document.querySelectorAll('[data-parallax-bg]');

function updateParallax() {
  const scrolled = window.scrollY;

  parallaxEls.forEach((el) => {
    const parent = el.closest('.parallax-section');
    if (!parent) return;

    const rect = parent.getBoundingClientRect();
    const parentTop = rect.top + scrolled;
    const offset = (scrolled - parentTop) * 0.4;
    el.style.transform = `translateY(${offset}px)`;
  });
}

let ticking = false;
window.addEventListener('scroll', () => {
  if (!ticking) {
    requestAnimationFrame(() => {
      updateParallax();
      ticking = false;
    });
    ticking = true;
  }
});

updateParallax();
