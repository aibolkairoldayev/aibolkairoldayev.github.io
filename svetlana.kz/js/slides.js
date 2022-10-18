// $('.gallery__items').slick({
//     infinite: true,
//     arrows: true,
//     dots: false,
//     slidesToShow: 3,
//     slidesToScroll: 1,
//     speed: 300,
//     prevArrow: '.gallery-left',
//     nextArrow: '.gallery-right',
//     autoplay: true,
//     autoplaySpeed: 4000,
//     responsive: [
//         {
//             breakpoint: 992,
//             settings: {
//                 slidesToShow: 2,
//                 slidesToScroll: 1,
//             }
//         }, {
//             breakpoint: 768,
//             settings: {
//                 slidesToShow: 1,
//                 slidesToScroll: 1,
//             }
//         }
//     ]
// });
$(document).ready(function () {
    $('.reviews__content').slick({
        autoplay: true,
        arrows: true,
        infinite: false,
        focusOnSelect: true,
    });
});

$(document).ready(function () {
    $('.sliders').slick({
        autoplay: true,
        arrows: true,
        infinite: false,
        focusOnSelect: true,
        slidesToShow: 4,
        responsive: [
            {
                breakpoint: 1400,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 764,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },

            },
        ],
    });
});


