// Слайдер банера главной страницы

$('.banner__parent').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    fade: true,
    dots: true,
    asNavFor: '.banner__child'
});
$('.banner__child').slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    asNavFor: '.banner__parent',
    dots: false,
    arrows: false,
    vertical: true,
    focusOnSelect: true
});


// Слайдер докторов главной страницы

$('.doc__content').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    fade: true,
    dots: false,
    infinite: false,
    asNavFor: '.doctors__list'
});
$('.doctors__list').slick({
    slidesToShow: 10 / 3,
    slidesToScroll: 1,
    asNavFor: '.doc__content',
    dots: false,
    arrows: false,
    infinite: false,
    focusOnSelect: true,
    responsive: [
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 2.3,
            }
        },
        {
            breakpoint: 576,
            settings: {
                slidesToShow: 1.3,
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
            }
        },
    ]
});

// Задается отступ слева для слайдера докторов и отступ справа для доктора на главной странице 

function containerWidth() {
    let containerWidth = $('#containerW').width();
    let windowWidth = $(window).width();
    let marginLeft = ((windowWidth - containerWidth) / 2) + 'px';
    let docRight = ((windowWidth - containerWidth) / 2) - 140 + 'px';
    $('.doctors__slide').css('marginLeft', marginLeft);
    $('.standarts__slider').css('marginLeft', marginLeft);
    $('.standarts__mobile').css('marginLeft', marginLeft);
    if ($(window).width() > 2000) {
        $('.consult__img img').css('marginRight', docRight);
        $('.doctors__slide').css('marginRight', docRight);
        $('.advert__img').css('marginRight', docRight);
        $('.standarts__slider').css('marginRight', docRight);
        $('.banner').css('marginRight', docRight);
        $('.banner').css('marginLeft', docRight);
        $('.standarts++slider').slick('slickRemove', 2);
    }

}
containerWidth();


// Меняется картинка доктора в слайдере на главной странице

$('.doc__content').on('afterChange', function (event, slick, currentSlide, nextSlide) {
    let docPhoto = $('.doc__content .slick-current .doc__item-img').attr('src');
    $('.doc__img img').attr("src", docPhoto)
});


// Слайдер отзывов главной страницы

$('.reviews__slider').slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 3,
            }
        },
        {
            breakpoint: 576,
            settings: {
                slidesToShow: 2,
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
            }
        },
    ]
});


// Слайдер оборудования главной страницы

$('.standarts__slider').slick({
    infinite: true,
    slidesToScroll: 1,
    slidesToShow: 1,
});


// Слайдер оборудования главной страницы мобилка

$('.standarts__mobile').slick({
    infinite: true,
    slidesToScroll: 1,
    slidesToShow: 3,
    responsive: [
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 2,
            }
        },
        {
            breakpoint: 576,
            settings: {
                slidesToShow: 1,
            }
        },
    ]
});


// Убрать прелоудер
$(document).ready(() => {
    $('.preloader').css('display', 'none');
});
function showPreloader() {
    $('.preloader').css('display', 'flex');
}
function hidePreloader() {
    $('.preloader').css('display', 'none');
}


// Раскывание бургер-меню

$('.header__burger').click(function (event) {
    if ($('.header__burger').hasClass('active')) {
        $('.header__burger').toggleClass('active');
        $('.burger').toggleClass('active');
        $('body, html').css('overflow', 'auto');
    }
    else {
        $('.header__burger').toggleClass('active');
        $('.burger').toggleClass('active');
        $('body, html').css('overflow', 'hidden');
    }
})


// Раскрывание адресов в главной странице

$('.clinics__item').click(function () {
    $('.clinics__item-body').css('overflow', 'hidden');
    $('.clinics__item-body').css('height', '0');
    $('.clinics__item').css('height', '98px');
    ($(this).find('.clinics__item-body')).css('height', 'auto');
    ($(this).find('.clinics__item-body')).css('overflow', 'initial');
    $(this).css('height', 'auto');
})

