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
    if (document.body.scrollTop > 825 || document.documentElement.scrollTop > 825) {
        document.getElementById("homepage-header").style.fontSize = "25px";
        document.getElementById("homepage-header").style.height = "115px";
        document.getElementById("homepage-header").style.justifyContent = "space-between";
        document.getElementById("homepage-header").style.zIndex= "1";
        document.getElementById("homepage-header").style.backgroundColor = "rgba(255,255,255, 0.75)";
        document.getElementsByTagName("a")[0].style.color = "rgb(34,33,33)";
        document.getElementsByTagName("a")[1].style.color = "rgb(34,33,33)";
        document.getElementsByTagName("a")[2].style.color = "rgb(34,33,33)";
        document.getElementById("logo").src = "../img/red-logo-2.png";
        
    } else {
        document.getElementById("homepage-header").style.fontSize = "25px";
        document.getElementById("homepage-header").style.height = "200px";
        document.getElementById("homepage-header").style.backgroundColor = "transparent";
        document.getElementsByTagName("a")[0].style.color = "white";
        document.getElementsByTagName("a")[1].style.color = "white";
        document.getElementsByTagName("a")[2].style.color = "white";
        document.getElementById("logo").src = "../img/red-logo-3.png";
    }
}

appearOnScroll.observe(fadeRight);
appearOnScroll.observe(fadeLeft);
appearOnScroll.observe(fadeUp);
