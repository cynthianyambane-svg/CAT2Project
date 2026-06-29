//  DARK MODE TOGGLE 
const toggleBtn = document.getElementById('darkModeToggle');

if (toggleBtn) {
  // Load saved preference
  if (localStorage.getItem('darkMode') === 'enabled') {
    document.body.classList.add('dark-mode');
    toggleBtn.innerHTML = ' Light Mode';
  }

  toggleBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    if (document.body.classList.contains('dark-mode')) {
      localStorage.setItem('darkMode', 'enabled');
      toggleBtn.innerHTML = ' Light Mode';
    } else {
      localStorage.setItem('darkMode', 'disabled');
      toggleBtn.innerHTML = ' Dark Mode';
    }
  });
}

//  CONTACT FORM VALIDATION
const contactForm = document.getElementById('contactForm');

if (contactForm) {
  contactForm.addEventListener('submit', function (e) {
    e.preventDefault();

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();
    const feedback = document.getElementById('formFeedback');

    // Clear previous feedback
    feedback.innerHTML = '';
    feedback.className = 'mt-3';

    let errors = [];

    if (name.length < 2) errors.push('Please enter your full name.');
    if (!email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) errors.push('Please enter a valid email address.');
    if (message.length < 10) errors.push('Message must be at least 10 characters.');

    if (errors.length > 0) {
      feedback.innerHTML = errors.map(e => `<p class="text-danger mb-1"> ${e}</p>`).join('');
    } else {
      feedback.innerHTML = `<div class="alert alert-success"> Thank you, ${name}! Your message has been sent successfully.</div>`;
      contactForm.reset();
    }
  });
}

//  NAVIGATION LINK 
document.addEventListener('DOMContentLoaded', () => {
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  const navLinks = document.querySelectorAll('.nav-link');
  navLinks.forEach(link => {
    if (link.getAttribute('href') === currentPage) {
      link.classList.add('active');
    }
  });
});
// Courses Page
const filterBtns = document.querySelectorAll('.filter-btn');
const courseCards = document.querySelectorAll('.course-card');
const noResults = document.getElementById('noResults');

if (filterBtns.length > 0) {
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.getAttribute('data-filter');
      let visibleCount = 0;

      courseCards.forEach(card => {
        if (filter === 'all' || card.getAttribute('data-category') === filter) {
          card.style.display = 'block';
          visibleCount++;
        } else {
          card.style.display = 'none';
        }
      });

      noResults.classList.toggle('d-none', visibleCount > 0);
    });
  });
}
// GALLERY LIGHTBOX 
const galleryImages = document.querySelectorAll('.gallery-img');
const lightboxImage = document.getElementById('lightboxImage');

if (galleryImages.length > 0) {
  galleryImages.forEach(img => {
    img.style.cursor = 'pointer';
    img.addEventListener('click', () => {
      lightboxImage.src = img.src;
      lightboxImage.alt = img.alt;
      const modal = new bootstrap.Modal(document.getElementById('lightboxModal'));
      modal.show();
    });
  });
}