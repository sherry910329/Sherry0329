(function (a) {
    var d = a(window);
    d.on("scroll", function () {
        var p = d.scrollTop();
        if (p < 300) {
            a(".sticky").removeClass("is-sticky")
        } else {
            a(".sticky").addClass("is-sticky")
        }
    });
    a('[data-toggle="tooltip"]').tooltip();
    var h = a(".bg-img");
    h.each(function (s, q) {
        var r = a(q),
            p = r.data("bg");
        r.css("background-image", "url(" + p + ")")
    });
    a(".hero-slider-active").slick({
        fade: true,
        speed: 1000,
        dots: false,
        autoplay: true,
        prevArrow: '<button type="button" class="slick-prev"><i class="pe-7s-angle-left"></i></button>',
        nextArrow: '<button type="button" class="slick-next"><i class="pe-7s-angle-right"></i></button>',
        responsive: [{
            breakpoint: 992,
            settings: {
                arrows: false,
                dots: true
            }
        }]
    });
   
    m.slider({
        range: true,
        min: k,
        max: j,
        values: [k, j],
        slide: function (p, q) {
            g.val("$" + q.values[0] + " - $" + q.values[1])
        }
    });
    g.val(" $" + m.slider("values", 0) + " - $" + m.slider("values", 1));
    a("#create_pwd").on("change", function () {
        a(".account-create").slideToggle("100")
    });
    a("#ship_to_different").on("change", function () {
        a(".ship-to-different").slideToggle("100")
    });
    
    
    
})(jQuery);