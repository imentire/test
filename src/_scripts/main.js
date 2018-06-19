// Main javascript entry point
// Should handle bootstrapping/starting application

'use strict';

var $ = require('jquery');

$(function() {
  $('.ui-target').on('click', function() {
    $('html, body').toggleClass('is-opened-menu');
    $('.js-menu').toggleClass('is-open');
  });
});
