const slides = document.querySelectorAll('.slide');
const radios = document.querySelectorAll('.navigation input');
let activeIndex = 0;

function setActiveSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.toggle('active', i === index);
  });
  radios[index].checked = true;
  activeIndex = index;
}

radios.forEach((radio, index) => {
  radio.addEventListener('change', () => setActiveSlide(index));
});

// Initialize first slide
setActiveSlide(0);
