$(document).ready(function () {
  $(".slick-container").slick({
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 4,
    slidesToScroll: 2,
    arrows: true,
    prevArrow:
      "<button type='button' class='slick-prev left'><i class='fa-solid fa-chevron-left'></i></button>",
    nextArrow:
      "<button type='button' class='slick-next right'><i class='fa-solid fa-chevron-right'></i></button>",
    responsive: [
      {
        breakpoint: 1600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 1100,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });
});

const menuBtn = document.querySelector(".menu-btn");
const nav = document.querySelector("nav ul");

menuBtn.addEventListener("click", () => {
  nav.classList.toggle("active");
  menuBtn.classList.toggle("active");
  if (nav.classList.contains("active")) {
    document.body.style.overflowY = "hidden";
  }
  else{
    document.body.style.overflowY = "inherit";
  }
});
