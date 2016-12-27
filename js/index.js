'use strict';

$(document).ready(function(){
    console.log("Page Ready");
});

// Smooth Scrolling for Anchor Links
$('a[href^="#"]').on('click', function(event) {
    var target = $(this.getAttribute('href'));
    if(target.length) {
        event.preventDefault();
        $('html, body').stop().animate({
            scrollTop: target.offset().top
        }, 1000);
    }
});

// Calculate Load Time of Webpage
$(window).on('load', function() {
    var time = Date.now() - timeStart;
    $(".timer").text("page loaded in " + time + " ms");
});