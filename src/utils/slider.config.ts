export const featuredSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  arrows: false,
  centerMode: true,
  centerPadding: "0",
  touchThreshold: 100,
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 3,
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
};

export const featuredBreakpoints = {
  1200: {
    slidesPerView: 3,
    spaceBetween: 0,
  },
  768: {
    slidesPerView: 1,
    spaceBetween: 10,
  },
  200: {
    slidesPerView: 1,
    spaceBetween: 10,
  },
};

export const genresBreakpoints = {
  1200: {
    slidesPerView: 6,
    spaceBetween: 0,
  },
  991: {
    slidesPerView: 4,
    spaceBetween: 10,
  },
  767: {
    slidesPerView: 3,
    spaceBetween: 10,
  },
  479: {
    slidesPerView: 2,
    spaceBetween: 10,
  },
  200: {
    slidesPerView: 2,
    spaceBetween: 10,
  },
};

export const relatedBooksBreakpoints = {
  1200: {
    slidesPerView: 4,
    spaceBetween: 30,
  },
  991: {
    slidesPerView: 3,
    spaceBetween: 25,
  },
  767: {
    slidesPerView: 2,
    spaceBetween: 20,
  },
  200: {
    slidesPerView: 1,
    spaceBetween: 10,
  },
};

export const genresSettings = {
  infinite: true,
  slidesToShow: 6,
  slidesToScroll: 1,
  arrows: true,
  dots: false,
  autoplay: false,
  speed: 1000,
  touchThreshold: 1000,
  responsive: [
    {
      breakpoint: 1199,
      settings: {
        slidesToShow: 5,
        slidesToScroll: 5,
      },
    },
    {
      breakpoint: 991,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 4,
      },
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
      },
    },
    {
      breakpoint: 479,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 400,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};
