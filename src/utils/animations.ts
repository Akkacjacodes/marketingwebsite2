export const animateOnScroll = () => {
  const fadeElements = document.querySelectorAll('.fade-in-element');
  
  fadeElements.forEach(element => {
    const elementPosition = element.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;
    
    if (elementPosition < windowHeight * 0.85) {
      element.classList.add('visible');
    }
  });
};