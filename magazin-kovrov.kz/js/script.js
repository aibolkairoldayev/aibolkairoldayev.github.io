var acc = document.getElementsByClassName("faq__button");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {
        /* Toggle between adding and removing the "active" class,
        to highlight the button that controls the panel */
        this.classList.toggle("active");

        /* Toggle between hiding and showing the active panel */
        var panel = this.nextElementSibling;
        if (panel.style.display === "block") {
            panel.style.display = "none";
        } else {
            panel.style.display = "block";
        }
    });
}
$('#menuItem1').on('click', function () {
    $(this).toggleClass('menu--item-active');
});

function openMenu() {

    if ($('#dropdown1').css('display') === "none") {
        $('#dropdown1').css('display', 'block');
        $('#dropdown2').css('display', 'none');
        $('#menuItem2').removeClass('menu--item-active');
    } else {
        $('#dropdown1').css('display', 'none');
    }

}

$('#menuItem2').on('click', function () {
    $(this).toggleClass('menu--item-active');
});
function openMenu2() {
    $('#menuItem').removeClass('menu--item-active');
    if ($('#dropdown2').css('display') === "none") {
        $('#dropdown2').css('display', 'block');
        $('#dropdown1').css('display', 'none');
        $('#menuItem1').removeClass('menu--item-active');
    } else {
        $('#dropdown2').css('display', 'none');
    }
}

$(function () {
    var tab = $('#tabs .tabs__items > div');
    tab.hide().filter(':first').show();

    // Клики по вкладкам.
    $('#tabs .tabs__nav a').click(function () {
        tab.hide();
        tab.filter(this.hash).show();
        $('#tabs .tabs__nav a').removeClass('active');
        $(this).addClass('active');
        return false;
    }).filter(':first').click();
});


$(function () {
    var tab = $('#tabs2 .tabs2__items > div');
    tab.hide().filter(':first').show();

    // Клики по вкладкам.
    $('#tabs2 .tabs2__nav a').click(function () {
        tab.hide();
        tab.filter(this.hash).show();
        $('#tabs2 .tabs2__nav a').removeClass('active');
        $(this).addClass('active');
        return false;
    }).filter(':first').click();
});

$('.heart-icon').on('click', function () {
    $(this).toggleClass('heart-icon-active');
});

$('.filter__option').on('click', function () {
    $(this).toggleClass('filter__option-active');
});

$('.add-icon').on('click', function () {
    openCartModal();

});

// Callback functions

function openCallback() {
    $('#callback-modal').css('display', 'block');
    $('body').css('overflow', 'hidden');
}

function closeCallback() {
    $('#callback-modal').css('display', 'none');
    $('body').css('overflow', 'unset');
}

$('.callback__wrapper').click(function (event) {
    if (!$(event.target).is('callback__content')) {
        $('#callback-modal').css('display', 'none');
        $('body').css('overflow', 'unset');
    }
});

// Thanks functions

function openThanks() {
    $('#thanks-modal').css('display', 'block');
    $('body').css('overflow', 'hidden');
}

function closeThanks() {
    $('#thanks-modal').css('display', 'none');
    $('body').css('overflow', 'unset');
}

$('.thanks__wrapper').click(function (event) {
    if (!$(event.target).is('thanks__content')) {
        $('#thanks-modal').css('display', 'none');
        $('body').css('overflow', 'unset');
    }
});

$(function () {
    var tab = $('#tabs-r1 .tabs__items-r1 > div');
    tab.hide().filter(':first').show();

    // Клики по вкладкам.
    $('#tabs-r1 .tabs__nav-r1 a').click(function () {
        tab.hide();
        tab.filter(this.hash).show();
        $('#tabs-r1 .tabs__nav-r1 a').removeClass('active-r1');
        $(this).addClass('active-r1');
        return false;
    }).filter(':first').click();
});

$(function () {
    var tab = $('#tabs-r2 .tabs__items-r2 > div');
    tab.hide().filter(':first').show();

    // Клики по вкладкам.
    $('#tabs-r2 .tabs__nav-r2 a').click(function () {
        tab.hide();
        tab.filter(this.hash).show();
        $('#tabs-r2 .tabs__nav-r2 a').removeClass('active-r2');
        $(this).addClass('active-r2');
        return false;
    }).filter(':first').click();
});

$(function () {
    var tab = $('#tabs-r3 .tabs__items-r3 > section');
    tab.hide().filter(':first').show();

    // Клики по вкладкам.
    $('#tabs-r3 .tabs__nav-r3 section').click(function () {

        $('#tabs-r3 .tabs__nav-r3 section').removeClass('active-r3');
        $(this).addClass('active-r3');
        return false;
    }).filter(':first').click();
});

$(function () {
    var tab = $('#tabs-r4 .tabs__items-r4 > div');
    tab.hide().filter(':first').show();

    // Клики по вкладкам.
    $('#tabs-r4 .tabs__nav-r4 a').click(function () {
        tab.hide();
        tab.filter(this.hash).show();
        $('#tabs-r4 .tabs__nav-r4 a').removeClass('active-r4');
        $(this).addClass('active-r4');
        return false;
    }).filter(':first').click();
});

$(function () {
    var tab = $('#tabs-r5 .tabs__items-r5 > div');
    tab.hide().filter(':first').show();

    // Клики по вкладкам.
    $('#tabs-r5 .tabs__nav-r5 a').click(function () {
        tab.hide();
        tab.filter(this.hash).show();
        $('#tabs-r5 .tabs__nav-r5 a').removeClass('active-r5');
        $(this).addClass('active-r5');
        return false;
    }).filter(':first').click();
})

$(function () {
    var tab = $('#tabs-r6 .tabs__items-r6 > div');
    tab.hide().filter(':first').show();

    // Клики по вкладкам.
    $('#tabs-r6 .tabs__nav-r6 a').click(function () {
        $('#tabs-r6 .tabs__nav-r6 a').removeClass('active-r6');
        $(this).addClass('active-r6');
        return false;
    }).filter(':first').click();
})

$(function () {
    var tab = $('#tabs-r7 .tabs__items-r7 > section');
    tab.hide().filter(':first').show();

    // Клики по вкладкам.
    $('#tabs-r7 .tabs__nav-r7 section').click(function () {

        $('#tabs-r7 .tabs__nav-r7 section').removeClass('active-r7');
        $(this).addClass('active-r7');
        return false;
    }).filter(':first').click();
});

$(function () {
    var tab = $('#tabs-r8 .tabs__items-r8 > div');
    tab.hide().filter(':first').show();

    // Клики по вкладкам.
    $('#tabs-r8 .tabs__nav-r8 a').click(function () {
        tab.hide();
        tab.filter(this.hash).show();
        $('#tabs-r8 .tabs__nav-r8 a').removeClass('active-r8');
        $(this).addClass('active-r8');
        return false;
    }).filter(':first').click();
})

$(function () {
    var tab = $('#tabs-r9 .tabs__items-r9 > div');
    tab.hide().filter(':first').show();

    // Клики по вкладкам.
    $('#tabs-r9 .tabs__nav-r9 a').click(function () {
        $('#tabs-r9 .tabs__nav-r9 a').removeClass('active-r9');
        $(this).addClass('active-r9');
        return false;
    }).filter(':first').click();
})

$(function () {
    var tab = $('#tabs-c .tabs__items-c > div');
    tab.hide().filter(':first').show();

    // Клики по вкладкам.
    $('#tabs-c .tabs__nav-c a').click(function () {
        tab.hide();
        tab.filter(this.hash).show();
        $('#tabs-c .tabs__nav-c a').removeClass('active-c');
        $(this).addClass('active-c');
        return false;
    }).filter(':first').click();
});

$(function () {
    var tab = $('#tabs-r10 .tabs__items-r10 > div');
    tab.hide().filter(':first').show();

    // Клики по вкладкам.
    $('#tabs-r10 .tabs__nav-r10 a').click(function () {
        $('#tabs-r10 .tabs__nav-r10 a').removeClass('active-r10');
        $(this).addClass('active-r10');
        return false;
    }).filter(':first').click();
})

$(function () {
    var tab = $('#tabs-d .tabs__items-d > div');
    tab.hide().filter(':first').show();

    // Клики по вкладкам.
    $('#tabs-d .tabs__nav-d a').click(function () {
        tab.hide();
        tab.filter(this.hash).show();
        $('#tabs-d .tabs__nav-d a').removeClass('active-d');
        $(this).addClass('active-d');
        return false;
    }).filter(':first').click();
});

$(document).ready(function () {
    $('body').on('click', '.number-minus, .number-plus', function () {
        var $row = $(this).closest('.cart__item-count');
        var $input = $row.find('.number-text');
        var step = $row.data('step');
        var val = parseFloat($input.val());
        if ($(this).hasClass('number-minus')) {
            val -= step;
        } else {
            val += step;
        }
        $input.val(val);
        $input.change();
        return false;
    });

    $('body').on('change', '.number-text', function () {
        var $input = $(this);
        var $row = $input.closest('.number');
        var step = $row.data('step');
        var min = 1;
        var max = parseInt($row.data('max'));
        var val = parseFloat($input.val());
        if (isNaN(val)) {
            val = step;
        } else if (min && val < min) {
            val = min;
        } else if (max && val > max) {
            val = max;
        }
        $input.val(val);
    });
});

function openReview() {
    $('#review-modal').css('display', 'block');
    $('body').css('overflow', 'hidden');
}

function closeReview() {
    $('#review-modal').css('display', 'none');
    $('body').css('overflow', 'unset');
}

$('.review__wrapper').click(function (event) {
    if (!$(event.target).is('review__content')) {
        $('#review-modal').css('display', 'none');
        $('body').css('overflow', 'unset');
    }
});

$(document).ready(function () {
    $('body').on('click', '.number-minus, .number-plus', function () {
        var $row = $(this).closest('.good__text-count');
        var $input = $row.find('.number-text');
        var step = $row.data('step');
        var val = parseFloat($input.val());
        if ($(this).hasClass('number-minus')) {
            val -= step;
        } else {
            val += step;
        }
        $input.val(val);
        $input.change();
        return false;
    });

    $('body').on('change', '.number-text', function () {
        var $input = $(this);
        var $row = $input.closest('.number');
        var step = $row.data('step');
        var min = 1;
        var max = parseInt($row.data('max'));
        var val = parseFloat($input.val());
        if (isNaN(val)) {
            val = step;
        } else if (min && val < min) {
            val = min;
        } else if (max && val > max) {
            val = max;
        }
        $input.val(val);
    });
});

function openBurger() {
    $('#burger-menu').css('display', 'block');
    $('body').css('overflow', 'hidden');
}

function closeBurger() {
    $('#burger-menu').css('display', 'none');
    $('body').css('overflow', 'unset');
}

$('.burger__wrapper').click(function (event) {
    if (!$(event.target).is('burger__content')) {
        $('#burger-menu').css('display', 'none');
        $('body').css('overflow', 'unset');
    }
});

function catalogToggle() {

    if ($('#catalog-toggle').css('display') === "none") {
        $('#catalog-toggle').css('display', 'block');
    } else {
        $('#catalog-toggle').css('display', 'none');
    }
}

function commerceToggle() {

    if ($('#commerce-toggle').css('display') === "none") {
        $('#commerce-toggle').css('display', 'block');
    } else {
        $('#commerce-toggle').css('display', 'none');
    }
}

function openCartModal() {
    $('#cart-modal').css('display', 'block');
    $('body').css('overflow', 'hidden');
}

function closeCartModal() {
    $('#cart-modal').css('display', 'none');
    $('body').css('overflow', 'unset');
}

$('.cart__wrapper').click(function (event) {
    if (!$(event.target).is('carmod__content')) {
        $('#cart-modal').css('display', 'none');
        $('body').css('overflow', 'unset');
    }
});
