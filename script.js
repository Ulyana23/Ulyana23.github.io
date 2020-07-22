$(function () {
    var header = $("#header"),
        introH = $("#intro").innerHeight(),
        scrollOffset = $(window).scrollTop(),
        headerH = $("#header").innerHeight(),

        aboutTop = $("#about").offset().top,
        aboutBottom = aboutTop + $("#about").innerHeight(),

        servicesTop = $("#services").offset().top,
        servicesBottom = servicesTop + $("#services").innerHeight(),

        workTop = $("#work").offset().top,
        workBottom = workTop + $("#work").innerHeight(),

        blogTop = $("#blog").offset().top,
        blogBottom = blogTop + $("#blog").innerHeight(),

        footerTop = $("#footer").offset().top,
        footerBottom = footerTop + $("#footer").innerHeight();

    /* Fixed Header */
    checkScroll(scrollOffset);

    $(window).resize(function() {
        introH = $("#intro").innerHeight();
        headerH = $("#header").innerHeight();
    });

    $(window).scroll(function () {
        scrollOffset = $(this).scrollTop() + headerH - 9;
        aboutTop = $("#about").offset().top;
        aboutBottom = aboutTop + $("#about").innerHeight();

        servicesTop = $("#services").offset().top;
        servicesBottom = servicesTop + $("#services").innerHeight();

        workTop = $("#work").offset().top;
        workBottom = workTop + $("#work").innerHeight();

        blogTop = $("#blog").offset().top;
        blogBottom = blogTop + $("#blog").innerHeight();

        footerTop = $("#footer").offset().top;
        footerBottom = footerTop + $("#footer").innerHeight();

        checkScroll(scrollOffset);

        checkScrollAbout(scrollOffset);
        checkScrollBlog(scrollOffset);
        checkScrollFooter(scrollOffset);
        checkScrollServices(scrollOffset);
        checkScrollWork(scrollOffset);

        if($(window).scrollTop()+$(window).height()>=$(document).height()){ //проверяем, прокрутил ли пользователь в конец страницы
            $('[data-scroll = "#footer"]').addClass("active");
        }

        else {
            $('[data-scroll = "#footer"]').removeClass("active");
        }

    });

    function checkScroll(scrollOffset) {
        if( scrollOffset >= introH ) {
            header.addClass("fixed");
        }

        else {
            header.removeClass("fixed");
        }
    }

    function checkScrollAbout(scrollOffset) {
        if( scrollOffset <= aboutBottom && scrollOffset >= aboutTop ) {
            $('[data-scroll = "#about"]').addClass("active");
        }

        else {
            $('[data-scroll = "#about"]').removeClass("active");
        }
    }

    function checkScrollServices(scrollOffset) {
        if( scrollOffset <= servicesBottom && scrollOffset >= servicesTop ) {
            $('[data-scroll = "#services"]').addClass("active");
        }

        else {
            $('[data-scroll = "#services"]').removeClass("active");
        }
    }

    function checkScrollWork(scrollOffset) {
        if( scrollOffset <= workBottom && scrollOffset >= workTop ) {
            $('[data-scroll = "#work"]').addClass("active");
        }

        else {
            $('[data-scroll = "#work"]').removeClass("active");
        }
    }

    function checkScrollBlog(scrollOffset) {
        if( scrollOffset <= blogBottom && scrollOffset >= blogTop ) {
            $('[data-scroll = "#blog"]').addClass("active");
        }

        else {
            $('[data-scroll = "#blog"]').removeClass("active");
        }
    }

    function checkScrollFooter(scrollOffset) {
        if( scrollOffset <= footerBottom && scrollOffset >= footerTop ) {
            $('[data-scroll = "#footer"]').addClass("active");
        }

        else {
            $('[data-scroll = "#footer"]').removeClass("active");
        }
    }

    /* Smooth Scroll */
    $("[data-scroll]").click(function (event) {
        event.preventDefault(); //отменяем стандартное поведение ссылки

        var blockId = $(this).data("scroll"),
            blockOffset = $(blockId).offset().top - headerH + 10;

        $(".nav_link").removeClass("active");
        $(this).addClass("active");

        $("html, body").animate({
            scrollTop: blockOffset
        }, 1000);

    });


    /* Menu nav toggle */
    $("#nav-toggle").click(function () {
        $(this).toggleClass("active"); //убирает и добавляет класс
        $("#nav").toggleClass("active");
        $("#header").toggleClass("active");
    });

    $(".nav_link").click(function () {
        $("#nav-toggle").removeClass("active");
        $("#nav").removeClass("active");
        $("#header").removeClass("active");
    });

    $(".header_logo").click(function () {
        $("#nav-toggle").removeClass("active");
        $("#nav").removeClass("active");
        $("#header").removeClass("active");
    });

    /* Collapse */
    $(".accordion_header").click(function () {

        $(this).parent(".accordion_item").children(".accordion_content").slideToggle();
        $(this).parent(".accordion_item").toggleClass("active");
    });


    /* Slider */
    $('.sliderJs').slick({
        infinite: false
    });

    function slider() {
        $(".slick-prev").addClass("reviews_btn reviews_btn--pref");
        $(".slick-next").addClass("reviews_btn reviews_btn--next");
        $(".slick-track").css({
            display: "flex",
            alignItems: "center"
        });
    }

    slider();
});