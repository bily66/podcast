$('.hamburger').on('click', function () {
    $('body, nav, .black').toggleClass('active');
});

$('.close-nav, .black').on('click', function () {
    $('body, nav, .black').removeClass('active');
});