
$(document).ready(function () {
    $('.banner__content').slick({
        autoplay: false,
        arrows: true,
        infinite: false,
        focusOnSelect: true,
    });
});

$(document).ready(function () {
    $('.good__big-img').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.good__small-img'
    });
    $('.good__small-img').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        asNavFor: '.good__big-img',

        focusOnSelect: true,
        arrows: false,
    });
});



$(document).ready(function () {
    $('.others__slider').slick({
        autoplay: false,
        arrows: true,
        infinite: false,
        focusOnSelect: true,
        slidesToShow: 3,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,

                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },

        ]
    });
});





