// const hamburger = document.querySelector(".hamburger");
// const navLinks = document.querySelector(".nav-links");
// const links = document.querySelectorAll(".nav-links li");
//
// // hamburger.addEventListener("click", () => {
//   navLinks.classList.toggle("open");
//   links.forEach(link => {
//     link.classList.toggle("fade");
//   });
// });

// Carousel Code base
// CSS JSResult Skip Results Iframe


// $(document).ready(function(){
//        $('.btn').click(function(){
//          $('.items').toggleClass("show");
//          $('ul li').toggleClass("hide");
//        });
//      });

//
// if (document.querySelectorAll(".carousel").length > 0) {
//  let carousels = document.querySelectorAll(".carousel");
//  carousels.forEach(carousel => newCarousel(carousel));
//
//  function newCarousel(carousel) {
//    let carouselChildren = document.querySelector(
//      `.carousel[data-carousel="${carousel.dataset.carousel}"]`
//    ).children;
//    let speed = carousel.dataset.speed;
//    let carouselContent = document.querySelectorAll(`.carousel-content`)[
//      carousel.dataset.carousel - 1
//    ];
//    const carouselLength = carouselContent.children.length;
//    let width = window.innerWidth;
//    let count = width;
//    let counterIncrement = width;
//    let int = setInterval(timer, speed);
//
//    // initial transform
//    carouselContent.style.transform = `translateX(-${width}px)`;
//
//    function timer() {
//      if (count >= (counterIncrement - 2) * (carouselLength - 2)) {
//        count = 0;
//        carouselContent.style.transform = `translateX(-${count}px)`;
//      }
//      count = count + counterIncrement;
//      carouselContent.style.transform = `translateX(-${count}px)`;
//    }
//
//    function carouselClick() {
//      // left click
//      carouselChildren[0].addEventListener("click", function() {
//        count = count - width;
//        carouselContent.style.transform = `translateX(-${count - 100}px)`;
//        if (count < counterIncrement) {
//          count = counterIncrement * (carouselLength - 2);
//          carouselContent.style.transform = `translateX(-${count - 100}px)`;
//        }
//      });
//      // right click
//      carouselChildren[1].addEventListener("click", function() {
//        count = count + width;
//        carouselContent.style.transform = `translateX(-${count + 100}px)`;
//        if (count >= counterIncrement * (carouselLength - 1)) {
//          count = counterIncrement;
//          carouselContent.style.transform = `translateX(-${count + 100}px)`;
//        }
//      });
//    }
//
//    function carouselHoverEffect() {
//      // left hover effect events
//      carouselChildren[0].addEventListener("mouseenter", function() {
//        carouselContent.style.transform = `translateX(-${count - 100}px)`;
//        clearInterval(int);
//      });
//      carouselChildren[0].addEventListener("mouseleave", function() {
//        carouselContent.style.transform = `translateX(-${count}px)`;
//        int = setInterval(timer, speed);
//      });
//
//      // right hover effect events
//      carouselChildren[1].addEventListener("mouseenter", function() {
//        carouselContent.style.transform = `translateX(-${count + 100}px)`;
//        clearInterval(int);
//      });
//      carouselChildren[1].addEventListener("mouseleave", function() {
//        carouselContent.style.transform = `translateX(-${count}px)`;
//        int = setInterval(timer, speed);
//      });
//    }
//
//    carouselHoverEffect();
//    carouselClick();
//  }
// }


const myslide = document.querySelectorAll('.myslide'),
	  dot = document.querySelectorAll('.dot');
let counter = 1;
slidefun(counter);

let timer = setInterval(autoSlide, 8000);
function autoSlide() {
	counter += 1;
	slidefun(counter);
}
function plusSlides(n) {
	counter += n;
	slidefun(counter);
	resetTimer();
}
function currentSlide(n) {
	counter = n;
	slidefun(counter);
	resetTimer();
}
function resetTimer() {
	clearInterval(timer);
	timer = setInterval(autoSlide, 8000);
}

function slidefun(n) {

	let i;
	for(i = 0;i<myslide.length;i++){
		myslide[i].style.display = "none";
	}
	for(i = 0;i<dot.length;i++) {
		dot[i].className = dot[i].className.replace(' active', '');
	}
	if(n > myslide.length){
	   counter = 1;
	   }
	if(n < 1){
	   counter = myslide.length;
	   }
	myslide[counter - 1].style.display = "block";
	dot[counter - 1].className += " active";
}

//about us control buttons

let rightButton = document.querySelector("right-button");
let leftButton = document.querySelector("left-button");
