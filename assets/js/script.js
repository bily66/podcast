let width = $(window).width();

$('.hamburger').on('click', function () {
    $('body, nav, .black').toggleClass('active');
});

$('.close-nav, .black').on('click', function () {
    $('body, nav, .black').removeClass('active');
});

$('.editor-text').each(function() {
    let editorHeight = $(this).height();
    if (width >= 1024 && editorHeight > 390) {
        $(this).parent().addClass('editor-ellipse');
    } else if (width < 1024 && editorHeight > 420) {
        $(this).parent().addClass('editor-ellipse');
    } else {
        $(this).parent().removeClass('editor-ellipse');
    }
});

$('.editor-button').on('click', function () {
    $(this).parent().removeClass('editor-ellipse');
});

$('.preface').each(function() {
    let prefaceHeight = $(this).height();
     if (width < 1024 && prefaceHeight > 72) {
        $(this).addClass('preface-ellipse');
    } else {
        $(this).removeClass('preface-ellipse');
    }
});

$('.preface-button').on('click', function () {
    $(this).hide();
    $(this).parent().siblings('.preface').removeClass('preface-ellipse');
});

$('.filter-nav > ul > li').on('click', function () {
    $(this).siblings().removeClass('active');
    $(this).siblings().children('ul').slideUp();
    $(this).toggleClass('active');
    $(this).children('ul').slideToggle();
});
$('.filter-nav > ul > li > ul').on('click', function (e) {
    e.stopPropagation();
});
