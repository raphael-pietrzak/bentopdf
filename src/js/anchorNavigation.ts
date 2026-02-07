// Handle smooth scrolling to anchor links with offset for sticky navbar
document.addEventListener('DOMContentLoaded', () => {
  // Get all anchor links in the navbar
  const anchorLinks = document.querySelectorAll('a[href^="#"]');

  anchorLinks.forEach((link) => {
    link.addEventListener('click', (e) => {
      const href = link.getAttribute('href');
      if (!href || href === '#') return;

      // Get the target element
      const targetId = href.substring(1);
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        e.preventDefault();

        // Calculate offset (navbar height + some padding)
        const navbarHeight = 80;
        const elementPosition = targetElement.getBoundingClientRect().top;
        const offsetPosition =
          elementPosition + window.pageYOffset - navbarHeight;

        // Smooth scroll to position
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth',
        });

        // Update URL hash
        history.pushState(null, '', href);
      }
    });
  });

  // Handle page load with hash
  if (window.location.hash) {
    setTimeout(() => {
      const targetId = window.location.hash.substring(1);
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        const navbarHeight = 80;
        const elementPosition = targetElement.getBoundingClientRect().top;
        const offsetPosition =
          elementPosition + window.pageYOffset - navbarHeight;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth',
        });
      }
    }, 100);
  }
});
