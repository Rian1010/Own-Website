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
});
