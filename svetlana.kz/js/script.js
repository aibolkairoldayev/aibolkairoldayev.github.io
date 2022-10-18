// var vue = new Vue({
//     el: '#app',
//     data() {
//         return {
//             size: {
//                 width: null, // ширина
//                 height: null, // высота
//                 scroll: 0 // скрол вверху в рх
//             },
//             isOnload: true, // прилодер
//             isIndex: false, // опредиляет главную страницу

//             isWrapper: true, // затемнение фона
//             isSidebar: false, // меню для мобилке

//             // модалки
//             isModalLeaveFeedback: true,
//         }
//     },
//     methods: {
//         // этого проекта
//         toggleModalLeaveFeedback() {
//             this.isWrapper = this.isModalLeaveFeedback = true
//             this.scrollBlock()
//         },


//         // стандартные 
//         phoneValue(event) {
//             if (event.target.value == false) {
//                 event.target.value = '+7 ('
//             }
//         },
//         toggleWrapper() {
//             this.isWrapper = this.isModalLeaveFeedback = this.isSidebar = false
//             this.scrollBlock()
//         },
//         toggleSidebar() {
//             this.isWrapper = this.isSidebar = true
//             this.scrollBlock()
//         },
//         scrollBlock() {
//             if (this.isWrapper == true) {
//                 document.body.style.overflow = 'hidden'
//             } else {
//                 document.body.style.overflowY = 'auto'
//             }
//         },
//         toggleOnload() {
//             this.isOnload = false
//         },
//         updateSize() {
//             this.size.width = window.innerWidth
//             this.size.height = window.innerHeight
//         },
//         onScroll() {
//             if (true) {
//                 let select = document.querySelector('.header')
//                 if (this.size.scroll > window.scrollY || this.size.scroll < 80) {
//                     select.classList.remove('header-hide')
//                 } else {
//                     select.classList.add('header-hide')
//                 }
//                 if (this.size.scroll < window.scrollY || this.size.scroll < 80) {
//                     select.classList.remove('header-wrapper')
//                 } else {
//                     select.classList.add('header-wrapper')
//                 }
//             }
//             this.size.scroll = window.scrollY
//         },
//         toggleIndex() {
//             if (location.pathname == "/index.html" || location.pathname == "/index.php" || location.pathname == "/") {
//                 this.isIndex = true
//             } else {
//                 this.isIndex = false
//             }
//         },
//         start() {
//             this.updateSize()
//             this.toggleIndex()
//         }
//     },
//     created() {
//         window.addEventListener('scroll', this.onScroll)
//     },
//     mounted() {
//         this.start()
//     }
// })

// document.body.onload = function () {
//     setTimeout(() => {
//         vue.toggleOnload()
//     }, 500)
// }

// window.addEventListener('load', function () {
//     // baguetteBox.run('.gallery__items');
// });

mybutton = document.getElementById("up");

// Когда пользователь прокручивает вниз 20px от верхней части документа, покажите кнопку
window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 900 || document.documentElement.scrollTop > 900) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}

// Когда пользователь нажимает на кнопку, прокрутите до верхней части документа
function topFunction() {
    document.body.scrollTop = 0; // Для Safari
    document.documentElement.scrollTop = 0; // Для Chrome, Firefox, IE и Opera
}

// Закрытие и открытие меню
function closeMenu() {
    document.getElementById("modalMenu").style.display = "none";
}
function openMenu() {
    document.getElementById("modalMenu").style.display = "block";
}

// Закрытие и открытие модалки
function closeMenu2() {
    document.getElementById("modalReview").style.display = "none";
    document.body.style.overflow = "unset";
}
function openMenu2() {
    document.getElementById("modalReview").style.display = "block";
    document.body.style.overflow = "hidden";
}

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

//tabs

$('.js-tab-trigger').click(function () {
    // клик! 
})

$('.js-tab-trigger').click(function () {
    var id = $(this).attr('data-tab'), // 1
        content = $('.js-tab-content[data-tab="' + id + '"]'); // 2
});

$('.js-tab-trigger').click(function () {
    var id = $(this).attr('data-tab'),
        content = $('.js-tab-content[data-tab="' + id + '"]');

    $('.js-tab-trigger.active').removeClass('active'); // 1
    $(this).addClass('active'); // 2

    $('.js-tab-content.active').removeClass('active'); // 3
    content.addClass('active'); // 4
});

var jsTriggers = document.querySelectorAll('.js-tab-trigger'),
    jsContents = document.querySelectorAll('.js-tab-content');

jsTriggers.forEach(function (trigger) { // 1
    trigger.addEventListener('click', function () { // 2
        // клик!
    });
});

var id = this.getAttribute('data-tab'), // 1
    content = document.querySelector('.js-tab-content[data-tab="' + id + '"]'), // 2
    activeTrigger = document.querySelector('.js-tab-trigger.active'), // 3
    activeContent = document.querySelector('.js-tab-content.active'); // 4

var jsTriggers = document.querySelectorAll('.js-tab-trigger'),
    jsContents = document.querySelectorAll('.js-tab-content');
jsTriggers.forEach(function (trigger) {
    trigger.addEventListener('click', function () {
        var id = this.getAttribute('data-tab'),
            content = document.querySelector('.js-tab-content[data-tab="' + id + '"]'),
            activeTrigger = document.querySelector('.js-tab-trigger.active'),
            activeContent = document.querySelector('.js-tab-content.active');

        activeTrigger.classList.remove('active'); // 1
        trigger.classList.add('active'); // 2

        activeContent.classList.remove('active'); // 3
        content.classList.add('active'); // 4
    });
});