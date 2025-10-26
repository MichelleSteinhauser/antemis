// Header-Hintergrund beim Scrollen anpassen
const header = document.querySelector('header');

window.addEventListener('scroll', () => {
  const scrolled = window.scrollY > 8;
  header.style.background = scrolled
    ? 'color-mix(in srgb, #2f4650 82%, transparent)'
    : 'color-mix(in srgb, #2f4650 70%, transparent)';
});
