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
    asNavFor: '.doctors__list'
});
$('.doctors__list').slick({
    slidesToShow: 10 / 3,
    slidesToScroll: 1,
    asNavFor: '.doc__content',
    dots: false,
    arrows: false,
    focusOnSelect: true
});

// Задается отступ слева для слайдера докторов на главной странице 

function containerWidth() {
    let containerWidth = $('#containerW').width();
    let windowWidth = $(window).width();
    let marginLeft = ((windowWidth - containerWidth) / 2) + 'px';
    $('.doctors__slide').css('marginLeft', marginLeft);
}
containerWidth();

// Меняется картинка доктора в слайдере на главной странице

$('.doc__content').on('afterChange', function (event, slick, currentSlide, nextSlide) {
    let docPhoto = $('.doc__content .slick-current .doc__item-img').attr('src');
    $('.doc__img img').attr("src", docPhoto)
});

