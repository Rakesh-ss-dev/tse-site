$("#home-course-slider").owlCarousel({
    loop: true,
    margin: 20,
    dots: false,
    nav: true,
    autoWidth: true,
    navText: [
      "<i class='fas fa-chevron-left'></i>",
      "<i class='fas fa-chevron-right'></i>",
    ],
    responsive: {
      0: {
        items: 2,
      },
      600: {
        items: 4,
      },
      1000: {
        items: 7,
      },
    },
  });