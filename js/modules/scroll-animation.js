export default function initScrollAnimation() {
  const sections = document.querySelectorAll('[data-anime="scroll"]');
  function animaScroll() {
    sections.forEach((section) => {
      const sectionTop = section.getBoundingClientRect().top;
      const halfWindow = window.innerHeight * 0.6;
      const isSectionVisibile = sectionTop - halfWindow < 0;
      if (isSectionVisibile) section.classList.add('active');
      else if (section.classList.contains('active')) section.classList.remove('active');
    });
  }

  if (sections.length) {
    animaScroll();
    window.addEventListener('scroll', animaScroll);
  }
}
