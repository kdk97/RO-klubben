// sidebar menu
function openNav() {
    document.getElementById("mySidebar").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
  }
  
  function closeNav() {
    document.getElementById("mySidebar").style.width = "0";
    document.getElementById("main").style.marginLeft= "0";
  }

// SVG animation
function transitionHandler(entries, observer) {
  for (const entry of entries) {
      if (entry.isIntersecting) {
          entry.target.classList.add("transition");
          observer.unobserve(entry.target);
      } else {
          entry.target.classList.remove("transition");
      }
  }
}

const transitionObserver = new IntersectionObserver(transitionHandler, {
  threshold: 1,
});

const svgs = document.querySelectorAll("svg");

for (const svg of svgs) {
transitionObserver.observe(svg);
}




