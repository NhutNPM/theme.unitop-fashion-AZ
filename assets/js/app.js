$(document).ready(function () {
    $("#demo-modal").on('hidden.bs.modal', function () {
        alert("ÄÃ£ táº¯t");
    });
    $(".info-gmail").click(function () {
        alert("Báº¡n Ä‘Æ°á»£c link qua trang má»›i");
        return false;
    })
    $('.icon-search').click(function () {
        $(".icon form").stop().slideToggle();
        return false;
    });
    
    //hiá»‡n nÃºt back-to-top
    $(window).scroll(function () {
        if ($(this).scrollTop() != 0) {
            $('#back-to-top').stop().fadeIn(100);
        }
        else {
            $('#back-to-top').stop().fadeOut(100);
        }
    });
    // click vÃ o nÃºt back-to-top
    $(" #back-to-top").click(function () {
        $("html").stop().animate({ scrollTop: 0 }, 1000);
    });

    $('#my-dropdown .nav-link').click(function(){
        $('.dropdown-menu').stop().slideToggle();
        return false;
    });
});

$(document).ready(function () {
    $('.owl-carousel').owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 3
            },
            1000: {
                items: 4
            }

        }
    })
    $(window).click(function(){
        $('form').stop().slideUp();
    });
}); 