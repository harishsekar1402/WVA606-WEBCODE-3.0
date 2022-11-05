//preloader//

setTimeout(function(){
    $('.loader_bg').fadeToggle();
}, 1500);



//AOS//
AOS.init();
//menu//
const menuBtn = document.querySelector('.menu');
let menuOpen = false;
menuBtn.addEventListener('click',() =>{
    if(!menuOpen){
        menuBtn.classList.add('open');
        menuOpen = true;
    }
    else{
        menuBtn.classList.remove('open');
        menuOpen = false;
    }
});

//toggle//
let button = document.querySelector(".menu"),
    links = document.querySelector(".nav-links");

    button.addEventListener("click",() =>{
        links.classList.toggle("display");
    });

//auto text//
var typed = new Typed(".auto-input",{
    strings: [" COUNTRY"," NATION","PRIDE"],
    typeSpeed: 100,
    backSpeed: 100,
    loop: true
  });

//How Large//



