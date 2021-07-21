const fadeRight = document.querySelector(".fade-right");
const fadeLeft = document.querySelector(".fade-left");
const fadeUp = document.querySelector(".fade-up");


const appearOptions = {
};

const appearOnScroll = new IntersectionObserver(function(entries, appearOnScroll) {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            return;
        } else {
            entry.target.classList.add('appear');
            appearOnScroll.unobserve(entry.target);
        }
    });
  }, appearOptions);

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        document.getElementById("homepage-header").style.fontSize = "20px";
        document.getElementById("homepage-header").style.flexDirection = "row";
        document.getElementById("homepage-header").style.height = "65px";
        document.getElementById("logo").style.height = "75px";
        document.getElementById("logo").style.width = "75px";
        document.getElementById("homepage-header").style.justifyContent = "space-between";
        document.getElementById("homepage-header").style.zIndex= "1";
    } else {
        document.getElementById("homepage-header").style.fontSize = "25px";
        document.getElementById("homepage-header").style.flexDirection = "column";
        document.getElementById("homepage-header").style.height = "200px";
        document.getElementById("logo").style.height = "125px";
        document.getElementById("logo").style.width = "125px";
    }
}

appearOnScroll.observe(fadeRight);
appearOnScroll.observe(fadeLeft);
appearOnScroll.observe(fadeUp);
