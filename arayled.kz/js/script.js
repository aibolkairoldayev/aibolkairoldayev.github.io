$(function() {
    $('.projects__slider').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: true,
        prevArrow: '<div class="slider-arrows arrow-left"><svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">        <g clip-path="url(#clip0)">        <path d="M16.8812 21.4839L6.96207 11.5657L16.8812 1.64746C17.0599 1.46243 17.0548 1.16752 16.8698 0.988782C16.6892 0.814449 16.4031 0.814449 16.2226 0.988782L5.97455 11.2368C5.7927 11.4187 5.7927 11.7135 5.97455 11.8955L16.2226 22.1435C16.4013 22.3285 16.6962 22.3336 16.8812 22.1549C17.0663 21.9762 17.0714 21.6813 16.8927 21.4963C16.8889 21.4924 16.8851 21.4886 16.8812 21.4848L16.8812 21.4839Z" fill="#FFC107"/>        <path class="arr-w" d="M5.8376 11.5657C5.83738 11.442 5.88629 11.3234 5.97363 11.2359L16.2216 0.987852C16.4067 0.809109 16.7016 0.814262 16.8803 0.999294C17.0547 1.17983 17.0547 1.466 16.8803 1.64649L6.96211 11.5656L16.8812 21.4838C17.0663 21.6626 17.0714 21.9574 16.8927 22.1425C16.7139 22.3276 16.4191 22.3327 16.234 22.154C16.2301 22.1502 16.2263 22.1464 16.2226 22.1425L5.97455 11.8946C5.88712 11.8074 5.83791 11.6891 5.8376 11.5657Z" fill="black"/>   </g>        <defs>        <clipPath id="clip0">        <rect width="21.4286" height="21.4286" fill="white" transform="translate(22.1445 0.857101) rotate(90)"/>        </clipPath>        </defs>        </svg></div>',
        nextArrow: '<div class="slider-arrows arrow-right"><svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">        <g clip-path="url(#clip0)">        <path d="M5.97817 21.4839L15.8973 11.5657L5.97817 1.64746C5.79943 1.46243 5.80458 1.16752 5.98961 0.988782C6.17015 0.814449 6.45632 0.814449 6.63681 0.988782L16.8848 11.2368C17.0667 11.4187 17.0667 11.7135 16.8848 11.8955L6.63681 22.1435C6.45807 22.3285 6.1632 22.3336 5.97813 22.1549C5.7931 21.9762 5.78799 21.6813 5.96669 21.4963C5.97044 21.4924 5.97424 21.4886 5.97813 21.4848L5.97817 21.4839Z" fill="#FFC107"/>        <path class="arr-w" d="M17.0218 11.5657C17.022 11.442 16.9731 11.3234 16.8857 11.2359L6.63773 0.987852C6.45269 0.809109 6.15779 0.814262 5.97905 0.999294C5.80471 1.17983 5.80471 1.466 5.97905 1.64649L15.8973 11.5656L5.97813 21.4838C5.7931 21.6626 5.78799 21.9574 5.96669 22.1425C6.14543 22.3276 6.44029 22.3327 6.62537 22.154C6.62926 22.1502 6.63305 22.1464 6.63681 22.1425L16.8848 11.8946C16.9723 11.8074 17.0215 11.6891 17.0218 11.5657Z" fill="black"/>        </g>        <defs>        <clipPath id="clip0">        <rect width="21.4286" height="21.4286" fill="white" transform="matrix(4.37114e-08 1 1 -4.37114e-08 0.714844 0.857101)"/>        </clipPath>        </defs>        </svg></div>',
        responsive: [{
                breakpoint: 991,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }

            }
        ]

    });
    $('.clients__content-overlay').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        responsive: [{
            breakpoint: 768,
            settings: {
                prevArrow: '<div class="slider-arrows-client arrow-left-client"><svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">        <g clip-path="url(#clip0)">        <path d="M16.8812 21.4839L6.96207 11.5657L16.8812 1.64746C17.0599 1.46243 17.0548 1.16752 16.8698 0.988782C16.6892 0.814449 16.4031 0.814449 16.2226 0.988782L5.97455 11.2368C5.7927 11.4187 5.7927 11.7135 5.97455 11.8955L16.2226 22.1435C16.4013 22.3285 16.6962 22.3336 16.8812 22.1549C17.0663 21.9762 17.0714 21.6813 16.8927 21.4963C16.8889 21.4924 16.8851 21.4886 16.8812 21.4848L16.8812 21.4839Z" fill="#FFC107"/>        <path class="arr-w" d="M5.8376 11.5657C5.83738 11.442 5.88629 11.3234 5.97363 11.2359L16.2216 0.987852C16.4067 0.809109 16.7016 0.814262 16.8803 0.999294C17.0547 1.17983 17.0547 1.466 16.8803 1.64649L6.96211 11.5656L16.8812 21.4838C17.0663 21.6626 17.0714 21.9574 16.8927 22.1425C16.7139 22.3276 16.4191 22.3327 16.234 22.154C16.2301 22.1502 16.2263 22.1464 16.2226 22.1425L5.97455 11.8946C5.88712 11.8074 5.83791 11.6891 5.8376 11.5657Z" fill="#818181"/>   </g>        <defs>        <clipPath id="clip0">        <rect width="21.4286" height="21.4286" fill="white" transform="translate(22.1445 0.857101) rotate(90)"/>        </clipPath>        </defs>        </svg></div>',
                nextArrow: '<div class="slider-arrows-client arrow-right-client"><svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">        <g clip-path="url(#clip0)">        <path d="M5.97817 21.4839L15.8973 11.5657L5.97817 1.64746C5.79943 1.46243 5.80458 1.16752 5.98961 0.988782C6.17015 0.814449 6.45632 0.814449 6.63681 0.988782L16.8848 11.2368C17.0667 11.4187 17.0667 11.7135 16.8848 11.8955L6.63681 22.1435C6.45807 22.3285 6.1632 22.3336 5.97813 22.1549C5.7931 21.9762 5.78799 21.6813 5.96669 21.4963C5.97044 21.4924 5.97424 21.4886 5.97813 21.4848L5.97817 21.4839Z" fill="#FFC107"/>        <path class="arr-w" d="M17.0218 11.5657C17.022 11.442 16.9731 11.3234 16.8857 11.2359L6.63773 0.987852C6.45269 0.809109 6.15779 0.814262 5.97905 0.999294C5.80471 1.17983 5.80471 1.466 5.97905 1.64649L15.8973 11.5656L5.97813 21.4838C5.7931 21.6626 5.78799 21.9574 5.96669 22.1425C6.14543 22.3276 6.44029 22.3327 6.62537 22.154C6.62926 22.1502 6.63305 22.1464 6.63681 22.1425L16.8848 11.8946C16.9723 11.8074 17.0215 11.6891 17.0218 11.5657Z" fill="#818181"/>        </g>        <defs>        <clipPath id="clip0">        <rect width="21.4286" height="21.4286" fill="white" transform="matrix(4.37114e-08 1 1 -4.37114e-08 0.714844 0.857101)"/>        </clipPath>        </defs>        </svg></div>',
                arrows: true,
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }]

    });

    $('.news__content-overlay').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        responsive: [{
            breakpoint: 768,
            settings: {
                prevArrow: '<div class="slider-arrows-news arrow-left-news"><svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">        <g clip-path="url(#clip0)">        <path d="M16.8812 21.4839L6.96207 11.5657L16.8812 1.64746C17.0599 1.46243 17.0548 1.16752 16.8698 0.988782C16.6892 0.814449 16.4031 0.814449 16.2226 0.988782L5.97455 11.2368C5.7927 11.4187 5.7927 11.7135 5.97455 11.8955L16.2226 22.1435C16.4013 22.3285 16.6962 22.3336 16.8812 22.1549C17.0663 21.9762 17.0714 21.6813 16.8927 21.4963C16.8889 21.4924 16.8851 21.4886 16.8812 21.4848L16.8812 21.4839Z" fill="#FFC107"/>        <path class="arr-w" d="M5.8376 11.5657C5.83738 11.442 5.88629 11.3234 5.97363 11.2359L16.2216 0.987852C16.4067 0.809109 16.7016 0.814262 16.8803 0.999294C17.0547 1.17983 17.0547 1.466 16.8803 1.64649L6.96211 11.5656L16.8812 21.4838C17.0663 21.6626 17.0714 21.9574 16.8927 22.1425C16.7139 22.3276 16.4191 22.3327 16.234 22.154C16.2301 22.1502 16.2263 22.1464 16.2226 22.1425L5.97455 11.8946C5.88712 11.8074 5.83791 11.6891 5.8376 11.5657Z" fill="#818181"/>   </g>        <defs>        <clipPath id="clip0">        <rect width="21.4286" height="21.4286" fill="white" transform="translate(22.1445 0.857101) rotate(90)"/>        </clipPath>        </defs>        </svg></div>',
                nextArrow: '<div class="slider-arrows-news arrow-right-news"><svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">        <g clip-path="url(#clip0)">        <path d="M5.97817 21.4839L15.8973 11.5657L5.97817 1.64746C5.79943 1.46243 5.80458 1.16752 5.98961 0.988782C6.17015 0.814449 6.45632 0.814449 6.63681 0.988782L16.8848 11.2368C17.0667 11.4187 17.0667 11.7135 16.8848 11.8955L6.63681 22.1435C6.45807 22.3285 6.1632 22.3336 5.97813 22.1549C5.7931 21.9762 5.78799 21.6813 5.96669 21.4963C5.97044 21.4924 5.97424 21.4886 5.97813 21.4848L5.97817 21.4839Z" fill="#FFC107"/>        <path class="arr-w" d="M17.0218 11.5657C17.022 11.442 16.9731 11.3234 16.8857 11.2359L6.63773 0.987852C6.45269 0.809109 6.15779 0.814262 5.97905 0.999294C5.80471 1.17983 5.80471 1.466 5.97905 1.64649L15.8973 11.5656L5.97813 21.4838C5.7931 21.6626 5.78799 21.9574 5.96669 22.1425C6.14543 22.3276 6.44029 22.3327 6.62537 22.154C6.62926 22.1502 6.63305 22.1464 6.63681 22.1425L16.8848 11.8946C16.9723 11.8074 17.0215 11.6891 17.0218 11.5657Z" fill="#818181"/>        </g>        <defs>        <clipPath id="clip0">        <rect width="21.4286" height="21.4286" fill="white" transform="matrix(4.37114e-08 1 1 -4.37114e-08 0.714844 0.857101)"/>        </clipPath>        </defs>        </svg></div>',
                arrows: true,
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }]

    });


    $('a[href^="#"').on('click', function() {

        let href = $(this).attr('href');

        $('html, body').animate({
            scrollTop: $(href).offset().top
        });
        return false;
    });
});
let ham = document.querySelector('.ham');
let hiddenMenu = document.querySelector('.hidden__menu');
let blank = document.querySelector('.blank');
let hiddenItem = document.querySelectorAll('.hidden__item a');
ham.addEventListener('click', () => {
    ham.classList.toggle('active');
    hiddenMenu.classList.toggle('show');
    blank.classList.toggle('hide');
});
blank.addEventListener('click', () => {
    ham.classList.toggle('active');
    hiddenMenu.classList.toggle('show');
    blank.classList.toggle('hide');
});

hiddenItem.forEach(item => {
    item.addEventListener('click', () => {
        ham.classList.toggle('active');
        hiddenMenu.classList.toggle('show');
        blank.classList.toggle('hide');
    });
});


const head = document.querySelector('.header');
window.addEventListener('scroll', function() {
    if (pageYOffset >= 90) {
        head.style.cssText = 'background: rgba(0,0,0, .8);';
    } else {
        head.style.cssText = 'background:transparent;';
    }
});

let phoneMask = IMask(
    document.getElementById('phone-mask'), {
        mask: '+{7}(000)000-00-00'
    });

$(window).on('load resize', function() {
    if ($(window).width() < 768) {
        $('#items:not(.slick-initialized)').slick({
            centerMode: true,
            infinite: true,
            speed: 100,
            slidesToShow: 1
        });
    } else {
        $("#items.slick-initialized").slick("unslick");
    }
});