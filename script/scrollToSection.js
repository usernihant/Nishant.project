// Function to handle smooth scrolling to a section
function scrollToSection(event) {
    event.preventDefault();
    const target = event.target.getAttribute('href');
    const element = document.querySelector(target);
  
    if (element) {
      const yOffset = -50; // You can adjust this value to fine-tune the scroll position
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
  
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  }
  
  // Add click event listeners to all links inside the nav
  const navLinks = document.querySelectorAll('nav a');
  navLinks.forEach(link => {
    link.addEventListener('click', scrollToSection);
  });
  