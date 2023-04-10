const header = document.querySelector('header');
const backButton = document.querySelector('#back-to-top');

function scrollFunction() {
    if(document.body.scrollTop > 150 || document.documentElement.scrollTop > 150) {
        header.classList.add('bg')
        backButton.style.display = 'block'
    }
    else {
        header.classList.remove('bg')
        backButton.style.display = 'none'
    }
}

window.onscroll = function() { scrollFunction() };


function getToTop() {

    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;

}

backButton.addEventListener('click', getToTop)


 function mobileNav() {
    let x = document.getElementById("nav-bar");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  } 


  function heroScroll () {
    let hero = document.querySelector('.hero')
      hero.style.backgroundSize = 180 - +window.pageYOffset/12+'%'
      hero.style.opacity = 1 - +window.pageYOffset/600 + '' 
    }
  
  window.addEventListener('scroll', heroScroll)
 