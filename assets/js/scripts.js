// Navigation menu and icon
$('.menu').on('click', function () {
    if ($('.grid-main').hasClass('is-open')) {
        $('.menu').removeClass('is-active');
        $('.grid-main').removeClass('is-open');
        $('.sidebar').removeClass('animated bounceInRight');

    } else {
        $('.menu').addClass('is-active');
        $('.grid-main').addClass('is-open');
        $('.sidebar').addClass('animated bounceInRight');
    }

});



// Navigation color on scroll

$('.menu-wrapper').waypoint(function () {
    $('.menu-wrapper').addClass('nav-bg animated bounceIn');
}, {
    offset: '-10%'
});
