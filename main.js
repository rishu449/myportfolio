// Select menu icon and navbar elements
const menuIcon = document.querySelector('#menu-icon');
const navbar = document.querySelector('.navbar');

// Toggle the navbar visibility and menu icon state
menuIcon.addEventListener('click', () => {
  menuIcon.classList.toggle('fa-times'); // Toggles the "X" icon
  navbar.classList.toggle('active'); // Toggles the visibility of the navbar
});

// Close the navbar when a link is clicked (optional for improved UX)
navbar.addEventListener('click', (e) => {
  if (e.target.tagName === 'A') {
    menuIcon.classList.remove('fa-times');
    navbar.classList.remove('active');
  }
});
//===========typed js===============

    // Initialize Typed.js after a delay

     
  


