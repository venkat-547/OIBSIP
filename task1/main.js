
function highlightActiveLink() {
    const links = document.querySelectorAll('.nav-link');
    const currentPath = window.location.pathname;
  
    links.forEach((link) => {
      const href = link.getAttribute('href');
  
      if (currentPath.includes(href)) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    });
  }

  document.addEventListener('DOMContentLoaded', highlightActiveLink);
  