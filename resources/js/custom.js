// By Alexander Wilson van Deurs

var lastScrollTop = 0;
$(window).scroll(function(){
    var scrollTop = $(this).scrollTop();
    if (scrollTop - lastScrollTop > 50){
        var navHeight = $('.navbar').css('height');
        $('.navbar').animate({top: '-' + navHeight}, 90);
        lastScrollTop = scrollTop;
    } else if (lastScrollTop - scrollTop > 50) {
        $('.navbar').animate({top: '0px'}, 90);
        lastScrollTop = scrollTop;
    }
});
