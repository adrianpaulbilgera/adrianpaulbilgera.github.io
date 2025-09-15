document.addEventListener('DOMContentLoaded', function() {
  // Sections
  const skillsSection = document.getElementById('skills');
  const projectsSection = document.getElementById('proj');
  const toolsSection = document.getElementById('tools');

  // Nav links
  const skillsLink = document.querySelector('a[href="#skills"]');
  const projectsLink = document.querySelector('a[href="#proj"]');
  const toolsLink = document.querySelector('a[href="#tools"]');

  function highlightNav() {
    const sections = [
      { section: skillsSection, link: skillsLink },
      { section: projectsSection, link: projectsLink },
      { section: toolsSection, link: toolsLink }
    ];

    let activeFound = false;

    sections.forEach(({ section, link }) => {
      const rect = section.getBoundingClientRect();
      if (!activeFound && rect.top <= 120 && rect.bottom >= 120) {
        link.classList.add('active');
        activeFound = true; // only highlight one at a time
      } else {
        link.classList.remove('active');
      }
    });
  }

  window.addEventListener('scroll', highlightNav);
  highlightNav(); // Run on load
});
