$(document) .ready(function() {
   /*Sidebar Menu*/
   "use strict";
   
   /*Preloader*/ 
   $(".preloader-wrap").delay(1500).fadeOut('slow');

   /*Navigation*/
   $(function() {
   $('a[href*="#"]:not([href="#"])').on('click', function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
   });


  /*Swiper*/
   var swiper = new Swiper('.swiper', {
     autoplay: {
      delay: 4000,
    },
   });
  
  /*Magnific Popup
   $(function() {
    $('div.work').magnificPopup({delegate: 'a', 
      type: 'image',
      gallery: {
        enabled: false
      },
      removalDelay: 300,
      mainClass: 'mfp-fade'
    });
   });

   $(document).ready(function() {
    $('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
        type: 'iframe',
        mainClass: 'mfp-fade',
        removalDelay: 160,
        preloader: false,
        fixedContentPos: true
    });
   });

   $(function() {
      $('.selector').animatedHeadline({
        animationType: 'rotate-2'
      });
   })
*/
   var filterizd = $('.filtr-container').filterizr({
      layout: 'sameSize',
      gridItemsSelector: '.filtr-item',
      gutterPixels: 20,
      selector: '.filtr-container',
      setupControls: true
   });
     
}); 
});
const options ={
  root: null,
  threshold: 0.2,
  rootMargin: "0px",
}
const aboutimg = document.querySelector(".about-me-img")
const aboutText = document.querySelector(".about-text")
const serviceContainers = document.querySelectorAll(".service-container")
const serviceWraps = document.querySelectorAll(".service-wrap")

const observer = new IntersectionObserver((entries)=>{
  //observer.observe(div[0])
 entries.forEach((entry)=>{
    console.log(entry.isIntersecting)
   if(entry.isIntersecting){
    entry.target.classList.add('active')
     // entry.target.style.tansform ='rotate(0deg)';
    //    박스.target.style.transform = 'rotate(0deg)';
    }
    //entry.intersectionRatio
    else{
      entry.target.classList.remove('active')     
    }
  })
},options);

observer.observe(aboutimg)
observer.observe(aboutText)
serviceContainers.forEach(serviceContainer => observer.observe(serviceContainer))
serviceWraps.forEach(serviceWrap => observer.observe(serviceWrap))
