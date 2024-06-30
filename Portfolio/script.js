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
