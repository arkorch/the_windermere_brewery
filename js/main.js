(() => {

  console.log('The js is linked');
  (() => {

    const hamburgerMenu = document.querySelector(".hamburgerMenu");
    const nav = document.querySelector(".nav-links");
    const navLinks = document.querySelectorAll(".nav-links li");



    hamburgerMenu.addEventListener("click", () => {
      //to open nav
      nav.classList.toggle("nav-active");

      //to animate nav links
      navLinks.forEach((link, index) => {
        if (link.style.animation) {
          link.style.animation = ""
        } else {
          link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.5}s`;
        }
      });
      //hamburgerMenu animation
      hamburgerMenu.classList.toggle("toggle");
    });
  })();


  // to go to the top of the webpage
  window.addEventListener("scroll", handle)
  function handle() {
    var oTop = document.body.scrollTop || document.documentElement.scrollTop
    if (oTop >= 200) {
      gotop.style.display = "block";
    } else {
      gotop.style.display = "none";
    }

    gotop.onclick = function () {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      })
    }
  }

})();
