var mySwiper = new Swiper('.swiper-container', {
    slidesPerView: 1,
    loop: true,
    navigation: {
        nextEl: '.arrow',
      },
    breakpoints: {
        // when window width is >= 540px
        540: {
          slidesPerView: 2,
        }
      }  
});

function myFunction() {
  var menuButton = document.getElementById(".menu-button");
  menuButton.classList.toggle("menu-button-active");
  var menu = document.getElementById('.header');
  menu.classList.toggle("header_active");
};