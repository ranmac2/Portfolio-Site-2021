const slideRightElement = document.querySelector('.about-me-content');

const slideRightElementOptions = {};

const appearOnScroll = new IntersectionObserver(function(entries, appearOnScroll) {
    entries.forEach(entry => {
      if (!entry.isIntersecting) {
          return;
      } else {
        entry.target.classList.add('slide-right-element');
        appearOnScroll.unobserve(entry.target);
      }
    });
  }, slideRightElementOptions);

appearOnScroll.observe(slideRightElement);
  

  

let firstName = document.getElementById('first-name');
let lastName = document.getElementById('last-name');
let email = document.getElementById('email');