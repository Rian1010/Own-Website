$("document").ready(function() {



    $('.btn_p1').click(function() {
        $("p").toggleClass("p1")
    });
    $('.btn_p2').click(function() {
        $('.p2').slideToggle(500)
    });
    $('.btn_p3').click(function() {
        $('.p3').slideToggle(500)
    });



    $('.p1').mouseenter(function() {
        $('.p1').removeClass('p-fonts')
        $('.p2').removeClass('p-fonts')
        $('.p3').removeClass('p-fonts')
        $('.p1').addClass('p-fonts')
    });
    $('.p1').mouseleave(function() {
        $('.p1').removeClass('p-fonts')
        $('.p2').removeClass('p-fonts')
        $('.p3').removeClass('p-fonts')
    });



    $('.p2').mouseenter(function() {
        $('.p1').removeClass('p-fonts')
        $('.p2').removeClass('p-fonts')
        $('.p3').removeClass('p-fonts')
        $('.p2').addClass('p-fonts')
    });
    $('.p2').mouseleave(function() {
        $('.p1').removeClass('p-fonts')
        $('.p2').removeClass('p-fonts')
        $('.p3').removeClass('p-fonts')
    });



    $('.p3').mouseenter(function() {
        $('.p1').removeClass('p-fonts')
        $('.p2').removeClass('p-fonts')
        $('.p3').removeClass('p-fonts')
        $('.p3').addClass('p-fonts')
    });
    $('.p3').mouseleave(function() {
        $('.p1').removeClass('p-fonts')
        $('.p2').removeClass('p-fonts')
        $('.p3').removeClass('p-fonts')
    });

    var tl = new TimelineMax({ onUpdate: updatePercentage });
    const controller = new ScrollMagic.Controller();

    tl.from(".headerEffect, .text", .1, { x: 200, opacity: 0 })


    const scene = new ScrollMagic.Scene({
            triggerElement: ".sticky",
            triggerHook: "onLeave",
            duration: "100%"
        })
        .setPin(".sticky")
        .setTween(tl)
        .addTo(controller);

    function updatePercentage() {
        tl.progress();
        console.log(tl.progress());
    }
});
