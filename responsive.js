// Responsive adjustments
if (window.innerWidth <= 767) {
  // Example: disable animation on mobile
  document.querySelectorAll('.reveal, .reveal-left, .reveal-right')
    .forEach(el => {
      el.classList.add('active');
    });
}
