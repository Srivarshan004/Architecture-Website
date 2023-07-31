AOS.init();

/*=========================================================
                     owl-carousel
=========================================================*/

$('.owl-carousel').owlCarousel({
  loop:true,
  margin:10,
  nav:false,
  autoplay:true,
  dots:false,
  autoplayTimeout:2000,
 

   responsive:{
    0:{
        items:2
    },
    600:{
        items:3
    },
    1000:{
        items:5
    }
  }
})

/*=========================================================
                     scoroll-Top
=========================================================*/

const scrollTop = document.getElementById("scrolltop");

window.onload = () =>{
    scrollTop.style.visibility = "hidden";
    scrollTop.style.opacity = 0;
}

window.onscroll = () =>{
    if(window.scrollY > 200){
        scrollTop.style.visibility = "visible";
        scrollTop.style.opacity = 1;
    } else {
        scrollTop.style.visibility = "hidden";
        scrollTop.style.opacity = 0;
    }
}


/*=========================================================
              num-counter-autoplay
=========================================================*/

let valDisplay = document.querySelectorAll(".num");
let interval = 8000;

valDisplay.forEach((valueDisplay)=>{
    let startvalue = 0;
    let endvalue = parseInt(valueDisplay.getAttribute("data-val"));
    let duration = Math.floor(interval/endvalue);
    let counter = setInterval(function () {
        startvalue += 1;
        valueDisplay.textContent = startvalue;
        if(startvalue == endvalue){
            clearInterval(counter);
        }
    },duration);
});



