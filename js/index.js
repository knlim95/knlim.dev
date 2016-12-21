$(document).ready(function(){
    console.log("Page Ready");
});

// Smooth Scrolling for Anchor Links
// $(function() {
//     $('a[href*="#"]:not([href="#"])').click(function() {
//         if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
//             var target = $(this.hash);
//             target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
            
//             if (target.length) {
//                 $('html, body').animate({
//                 scrollTop: target.offset().top
//             }, 1000);

//             return false;
//             }
//         }
//     });
// });

$('a[href^="#"]').on('click', function(event) {
    var target = $(this.getAttribute('href'));
    if( target.length ) {
        event.preventDefault();
        $('html, body').stop().animate({
            scrollTop: target.offset().top
        }, 1000);
    }
});