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
        document.getElementById("main-header").style.fontSize = "25px";
        document.getElementById("main-header").style.height = "115px";
        document.getElementById("main-header").style.justifyContent = "space-between";
        document.getElementById("main-header").style.zIndex= "1";
        document.getElementById("main-header").style.backgroundColor = "rgba(255,255,255, 0.75)";
        document.getElementsByTagName("a")[0].style.color = "rgb(34,33,33)";
        document.getElementsByTagName("a")[1].style.color = "rgb(34,33,33)";
        document.getElementsByTagName("a")[2].style.color = "rgb(34,33,33)";
        document.getElementById("logo").src = "../img/red-logo-2.png";
        
    } else {
        document.getElementById("main-header").style.fontSize = "25px";
        document.getElementById("main-header").style.height = "200px";
        document.getElementById("main-header").style.backgroundColor = "transparent";
        document.getElementsByTagName("a")[0].style.color = "white";
        document.getElementsByTagName("a")[1].style.color = "white";
        document.getElementsByTagName("a")[2].style.color = "white";
        document.getElementById("logo").src = "../img/red-logo-3.png";
    }
}

function openProjects(evt, projectName) {
    // Declare all variables
    var i, tabcontent, tablinks;
  
    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
  
    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
  
    // Show the current tab, and add an "active" class to the link that opened the tab
    document.getElementById(projectName).style.display = "block";
    evt.currentTarget.className += " active";
  }

appearOnScroll.observe(fadeRight);
appearOnScroll.observe(fadeLeft);
appearOnScroll.observe(fadeUp);
