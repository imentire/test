// Main javascript entry point
// Should handle bootstrapping/starting application

'use strict';

var $ = require('jquery');

$(function() {
    $('.ui-target').on('click', function(e) {
        e.preventDefault();
        $('html, body').toggleClass('is-opened-menu');
        $('.js-menu').toggleClass('is-open');
    });

    $(window).resize(function() {
        if ($(window).width() >= 768) {
            $('html, body').removeClass('is-opened-menu');
            $('.js-menu').removeClass('is-open');
        }
    })
});


$(function() {
    function getHoveredItemPosition(item) {
        return { left: $(item).position().left + $(item).find('a').position().left, width: $(item).width() };
    }

    var activeItem = $('.js-menu .active');

    $('.js-menu .ui-menu__item').on('mouseenter', function() {
        $('.ui-menu-indicator').css(getHoveredItemPosition(this));
    });

    $('.js-menu .ui-menu__item').on('mouseleave', function() {
        $('.ui-menu-indicator').css(getHoveredItemPosition(activeItem));
    });

    $(document).ready(function() {
        $('.ui-menu-indicator').css(getHoveredItemPosition(activeItem));
    });
});