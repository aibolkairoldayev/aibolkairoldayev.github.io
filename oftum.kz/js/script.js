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

// Задается отступ слева для слайдера докторов и отступ справа для доктора на главной странице 

function containerWidth() {
    let containerWidth = $('#containerW').width();
    let windowWidth = $(window).width();
    let marginLeft = ((windowWidth - containerWidth) / 2) + 'px';
    let docRight = ((windowWidth - containerWidth) / 2) - 140 + 'px';
    $('.doctors__slide').css('marginLeft', marginLeft);
    $('.standarts__slider').css('marginLeft', marginLeft);
    $('.consult__img img').css('marginRight', docRight);

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
    slidesToScroll: 1
});


// Слайдер оборудования главной страницы

$('.standarts__slider').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
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
    $('.header__burger').toggleClass('active');
    $('.burger').toggleClass('active');
})


// Раскывание адресов в главной странице

var children = $('.clinics__content').children().length;
for (i = 0; i < children; i++) {
    var arr = [];
    arr.concat(i)
    console.log(arr)
}

$('#clinic__head-' + i).click(function () {
    $('#clinic__body-' + i).css('display', 'block');
    $('#clinic__body-' + i).css('height', 'auto');
    $('#clinic__item-' + i).css('height', 'auto');
})