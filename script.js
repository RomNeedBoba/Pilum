// const reveals = document.querySelectorAll('.reveal');

// const observer = new IntersectionObserver((entries) => {
//   entries.forEach((entry) => {
//     if (entry.isIntersecting) {
//       entry.target.classList.add('in-view');
//     } else {
//       entry.target.classList.remove('in-view');
//     }
//   });
// }, { threshold: 1 });
// let scrolled = false;

// window.addEventListener('scroll', () => {
//   if (!scrolled) {
//     const scrollPosition = window.scrollY;
//     const revealPosition = document.querySelector('.reveal').offsetTop;
//     if (scrollPosition >= revealPosition - 200) {
//       scrolled = true;
//       const reveals = document.querySelectorAll('.reveal');
//       reveals.forEach((reveal) => {
//         reveal.classList.add('in-view');
//       });
//     }
//   }
// });
// Get the navbar element
const navbar = document.querySelector('.navbar');

// Track the previous scroll position
let prevScrollpos = window.pageYOffset;

// Event listener for scroll event
window.addEventListener('scroll', function() {
  // Current scroll position
  let currentScrollPos = window.pageYOffset;
  
  // If the previous scroll position is greater than the current scroll position, show the navbar
  if (prevScrollpos > currentScrollPos) {
    navbar.style.top = '0';
  } else {
    // Otherwise, hide the navbar
    navbar.style.top = '-80px'; // Adjust the height of your navbar accordingly
  }
  
  // Update the previous scroll position
  prevScrollpos = currentScrollPos;
});
