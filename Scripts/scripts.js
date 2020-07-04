// $(document).ready(function(){
//         $(".choose-one").css("opacity" , "1");

//     $("#audio-test").prop('muted', true);
//     $("#audio-test").hide();
// });
// $(".choices#47, .choices2#47").click(function() {
//     // try again or something
//     $(".choose-one").hide();
//     $(".try-again").css("opacity", "1");
// });
// $(".choices#23, .choices2#23").click(function(){
$(document).ready(function() {
    //alert("entered");
        // $(".choose-one").hide();
        // $(".try-again").hide();
        $(".title-block-wrap").css("opacity", "1");
        $("#t1")[0].play();
        $("#t1")[0].pause();
        $("#t2")[0].play();
        $("#t2")[0].pause();
        $("#t3")[0].play();
        $("#t3")[0].pause();
        $("#t4")[0].play();
        $("#t4")[0].pause();
        $("#t5")[0].play();
        $("#t5")[0].pause();
        $("#t6")[0].play();
        $("#t6")[0].pause();
        $("#t7")[0].play();
        $("#t7")[0].pause();
        $("#t8")[0].play();
        $("#t8")[0].pause();
        $("#t9")[0].play();
        $("#t9")[0].pause();
        $("#t10")[0].play();
        $("#t10")[0].pause();
        $("#t11")[0].play();
        $("#t11")[0].pause();
        $("#t12")[0].play();
        $("#t12")[0].pause();
        $("#t13")[0].play();
        $("#t13")[0].pause();
    $(".cover, .dark-bg-wrap1, .dark-bg-wrap2, .home, .nav-links, .logo").fadeIn(1000);
    $(".cover, .dark-bg-wrap1, .info-wrap, .star").css("opacity", "1");
    $(".dark-bg-wrap2").css("opacity", ".5");
    $("body").css("height","1100vh");
    if ($(window).width() > 900){
    $("#img1, #img2, #img3, #img4, #img5, #img6, #img7, #img8, #img9, #img10, #img11, #img12, #richmond1").css("transition","2s ease");
    }
    else {
        $("#img1, #img2, #img3, #img4, #img5, #img6, #img7, #img8, #img9, #img10, #img11, #img12, #richmond1").css("transition","none");
    }
//    setTimeout (function() {
//        $(".track1, .track2, .track3, .track4, .track5, .track6, .track7, .track8, .track9, .track10, .track11, .track12, .track13").css("opacity","1");
//    }, 1000);
    setTimeout (function() {
        $("#img1, #img2, #img3, #img4, #img5, #img6, #img7, #img8, #img9, #img10, #img11, #img12, #richmond1").css("transition","none");
        $("hide-track").css("opacity", "1");
    }, 2000);
    $("#img1").css("transform","translateZ(-2000px)");
    $("#img2").css("transform","translateZ(-4000px)");
    $("#img3").css("-webkit-transform","translateZ(-6000px)");
    $("#img4").css("-webkit-transform","translateZ(-8000px)");
    $("#img5").css("-webkit-transform","translateZ(-10000px)");
    $("#img6").css("-webkit-transform","translateZ(-12000px)");
    $("#img7").css("-webkit-transform","translateZ(-14000px)");
    $("#img8").css("-webkit-transform","translateZ(-16000px)");
    $("#img9").css("-webkit-transform","translateZ(-18000px)");
    $("#img10").css("-webkit-transform","translateZ(-20000px)");
    $("#img11").css("-webkit-transform","translateZ(-22000px)");
    $("#img12").css("-webkit-transform","translateZ(-24000px)");
    $("#richmond1").css("-webkit-transform","translateZ(-26000px)");
    // $("#richmond1").css("-webkit-transform","translateZ(-32000px)");
    // $("#flower1").css("-webkit-transform","translateZ(-31000px)");
    // $("#merch3").css("-webkit-transform","translateZ(-30000px)");
    $(".enter-btn").hide();
    $(".nav-toggle-wrap").css("display", "flex").hide().fadeIn(1000);
    setTimeout (function(){
        $( ".scroller" ).css("opacity","1");
    }, 3000);
    setTimeout (function(){
        $( ".scroller" ).addClass("blink-1");
    }, 4000);
    setInterval (function() {
    if ($("#main > img").length > 10)
        $("#main > img:first-child").remove()
}, 50);
});
$(".logo").click(function () {
    $(".light-bg-wrap1, .light-bg-wrap2").toggleClass("lighten");
});
$(".info-icon").click(function () {
    $(".info-icon").hide();
    $(".info-wrap").addClass("show-credits");
    setTimeout (function(){
        $(".info-credits").fadeIn(1000);
    }, 1000);
});
$(".info-credits").click(function () {
    $(".info-credits").hide();
    $(".info-wrap").removeClass("show-credits");
    setTimeout (function(){
        $(".info-icon").fadeIn(1000);
    }, 1000);
});
$(".home").click(function () {
    $("html, body").animate( 
                { scrollTop: "0" }, 1000); 
    
});

$(".nav-toggle-wrap").click(function() {
    var toggle = $(".nav-toggle");
    
    $(".nav-toggle").toggleClass("rotate");
    if ($(".nav-toggle").hasClass("rotate")){
        $(".menu-wrap").fadeOut(500);
    }
    else{
        $(".menu-wrap").css("display","flex").hide().fadeIn(500);
        shifted != shifted;
    }
    
});

function preloadImages(urls, allImagesLoadedCallback){
    var loadedCounter = 0;
    var toBeLoadedNumber = urls.length;
    urls.forEach(function(url){
        preloadImage(url, function(){
            loadedCounter++;
//            console.log('Number of loaded images: ' + loadedCounter);
            if(loadedCounter == toBeLoadedNumber){
                allImagesLoadedCallback();
            }
        });
    });
    function preloadImage(url, anImageLoadedCallback){
      var img = new Image();
      img.onload = anImageLoadedCallback;
      img.src = url;
    }
}

preloadImages([
    "images/jz1.jpg",
    "images/jz2.jpg",
    "images/jz3.jpg",
    "images/jz4.jpg",
    "images/jz5.jpg",
    "images/jz6.jpg",
    "images/jz7.jpg",
    "images/jz8.jpg",
    "images/jz9.jpg",
    "images/jz10.jpg",
    "images/jz11.jpg",
    "images/jz12.jpg",
    "images/jz13.jpg",
    "images/lind_bg_light1.jpg",
    "images/lind_bg_dark1_ds.jpg",
    "images/lind_bg_dark2_ds.jpg"
], function(){
    console.log('All images were loaded');
    $(".loading").fadeToggle(500);
    setTimeout (function() {
        $(".enter-btn").fadeToggle("slow");
    }, 500);
    
});
$("#img1").click(function () {
        //alert("test");
//        $("#t1")[0].play();
////        $("#t1").prop('muted', true);
//        $("#t2")[0].play();
//        $("#t2").prop('muted', true);
//        $("#t3")[0].play();
//        $("#t3").prop('muted', true);
//        $("#t4")[0].play();
//        $("#t4").prop('muted', true);
//        $("#t5")[0].play();
//        $("#t5").prop('muted', true);
//        $("#t6")[0].play();
//        $("#t6").prop('muted', true);
//        $("#t7")[0].play();
//        $("#t7").prop('muted', true);
//        $("#t8")[0].play();
//        $("#t8").prop('muted', true);
//        $("#t9")[0].play();
//        $("#t9").prop('muted', true);
//        $("#t10")[0].play();
//        $("#t10").prop('muted', true);
//        $("#t11")[0].play();
//        $("#t11").prop('muted', true);
//        $("#t12")[0].play();
//        $("#t12").prop('muted', true);
//        $("#t13")[0].play();
//        $("#t13").prop('muted', true);
    });
document.getElementById("main").onmouseup = function() {
  pressed = false;
}

$(window).scroll(function () {
    var scrollTop = $(window).scrollTop();
    var screen = $(window).width();
    var sSpeed1 = 2.5;
    var sSpeed2 = 1.5;
    if (screen >= 900 && screen < 1990){
//        alert("lap");
        var dSpeed = 4.3
    }
//    if (screen >= 1500 && screen < 1990){
//        var dSpeed = 4
//    }
    else if (screen >= 1990){
        var dSpeed = 3.1;
    }
    else {
        var dSpeed = 5;
    }
    var starPos1 = (scrollTop * sSpeed1) + 'px';
    var starPos2 = (scrollTop * sSpeed2) + 'px';
    var contentPos = (scrollTop * dSpeed) + 'px';
    
    $('.content').css({'transform': "translateZ(" + contentPos + ")"});
    $('.star-content').css({'transform': "translateZ(" + starPos1 + ")"});
    $('.star-content2').css({'transform': "translateZ(" + starPos2 + ")"});

/* AUDIO */
    
    var st = $(this).scrollTop();
    var wh = $(window).height();
    var perc = (st*100)/wh

    if ($(window).width() < 900){
        if (perc > 50 && perc < 105) {
            $( ".track1" ).removeClass("hide-track");
            $("#t1")[0].play();
        }
        else{
            $( ".track1" ).addClass("hide-track");
            $("#t1")[0].pause();
        }
        if (perc >= 105 && perc < 160) {
            $( ".track2" ).removeClass("hide-track");
            $("#t2")[0].play();
        }
        else{
            $( ".track2" ).addClass("hide-track");
            $("#t2")[0].pause();
        }
        if (perc >= 160 && perc < 215) {
            $( ".track3" ).removeClass("hide-track");
            $("#t3")[0].play();
        }
        else{
            $( ".track3" ).addClass("hide-track");
            $("#t3")[0].pause();
        }
        if (perc >= 215 && perc < 275) {
            $( ".track4" ).removeClass("hide-track");
            $("#t4")[0].play();
        }
        else{
            $( ".track4" ).addClass("hide-track");
            $("#t4")[0].pause();
        }
        if (perc >= 275 && perc < 327) {
            $( ".track5" ).removeClass("hide-track");
            $("#t5")[0].play();
        }
        else{
            $( ".track5" ).addClass("hide-track");
            $("#t5")[0].pause();
        }
        if (perc >= 327 && perc < 387) {
            $( ".track6" ).removeClass("hide-track");
            $("#t6")[0].play();
        }
        else{
            $( ".track6" ).addClass("hide-track");
            $("#t6")[0].pause();
        }
        if (perc >= 387 && perc < 442) {
            $( ".track7" ).removeClass("hide-track");
            $("#t7")[0].play();
        }
        else{
            $( ".track7" ).addClass("hide-track");
            $("#t7")[0].pause();
        }
        if (perc >= 442 && perc < 505) {
            $( ".track8" ).removeClass("hide-track");
            $("#t8")[0].play();
        }
        else{
            $( ".track8" ).addClass("hide-track");
            $("#t8")[0].pause();
        }
        if (perc >= 505 && perc < 552) {
            $( ".track9" ).removeClass("hide-track");
            $("#t9")[0].play();
        }
        else{
            $( ".track9" ).addClass("hide-track");
            $("#t9")[0].pause();
        }
        if (perc >= 552 && perc < 615) {
            $( ".track10" ).removeClass("hide-track");
            $("#t10")[0].play();
        }
        else{
            $( ".track10" ).addClass("hide-track");
            $("#t10")[0].pause();
        }
        if (perc >= 615 && perc < 660) {
            $( ".track11" ).removeClass("hide-track");
            $("#t11")[0].play();
        }
        else{
            $( ".track11" ).addClass("hide-track");
            $("#t11")[0].pause();
        }
        if (perc >= 660 && perc < 710) {
            $( ".track12" ).removeClass("hide-track");
            $("#t12")[0].play();
        }
        else{
            $( ".track12" ).addClass("hide-track");
            $("#t12")[0].pause();
        }
        if (perc >= 710 && perc < 765) {
            $( ".track13" ).removeClass("hide-track");
            $("#t13")[0].play();
        }
        else if (perc > 765) {
            $( ".track13" ).addClass("hide-track");
        }
        else if (perc < 710) {
            $( ".track13" ).addClass("hide-track");
            $("#t13")[0].pause();
        }
    }
    if ($(window).width() > 900){
        if (perc > 50 && perc < 100) {
            $( ".track1" ).removeClass("hide-track");
            $("#t1")[0].play();
        }
        else{
            $( ".track1" ).addClass("hide-track");
            $("#t1")[0].pause();
        }
        if (perc >= 100 && perc < 140) {
            $( ".track2" ).removeClass("hide-track");
            $("#t2")[0].play();
        }
        else{
            $( ".track2" ).addClass("hide-track");
            $("#t2")[0].pause();
        }
        if (perc >= 140 && perc < 190) {
            $( ".track3" ).removeClass("hide-track");
            $("#t3")[0].play();
        }
        else{
            $( ".track3" ).addClass("hide-track");
            $("#t3")[0].pause();
        }
        if (perc >= 190 && perc < 245) {
            $( ".track4" ).removeClass("hide-track");
            $("#t4")[0].play();
        }
        else{
            $( ".track4" ).addClass("hide-track");
            $("#t4")[0].pause();
        }
        if (perc >= 245 && perc < 300) {
            $( ".track5" ).removeClass("hide-track");
            $("#t5")[0].play();
        }
        else{
            $( ".track5" ).addClass("hide-track");
            $("#t5")[0].pause();
        }
        if (perc >= 300 && perc < 340) {
            $( ".track6" ).removeClass("hide-track");
            $("#t6")[0].play();
        }
        else{
            $( ".track6" ).addClass("hide-track");
            $("#t6")[0].pause();
        }
        if (perc >= 340 && perc < 390) {
            $( ".track7" ).removeClass("hide-track");
            $("#t7")[0].play();
        }
        else{
            $( ".track7" ).addClass("hide-track");
            $("#t7")[0].pause();
        }
        if (perc >= 390 && perc < 450) {
            $( ".track8" ).removeClass("hide-track");
            $("#t8")[0].play();
        }
        else{
            $( ".track8" ).addClass("hide-track");
            $("#t8")[0].pause();
        }
        if (perc >= 450 && perc < 500) {
            $( ".track9" ).removeClass("hide-track");
            $("#t9")[0].play();
        }
        else{
            $( ".track9" ).addClass("hide-track");
            $("#t9")[0].pause();
        }
        if (perc >= 500 && perc < 550) {
            $( ".track10" ).removeClass("hide-track");
            $("#t10")[0].play();
        }
        else{
            $( ".track10" ).addClass("hide-track");
            $("#t10")[0].pause();
        }
        if (perc >= 550 && perc < 605) {
            $( ".track11" ).removeClass("hide-track");
            $("#t11")[0].play();
        }
        else{
            $( ".track11" ).addClass("hide-track");
            $("#t11")[0].pause();
        }
        if (perc >= 605 && perc < 650) {
            $( ".track12" ).removeClass("hide-track");
            $("#t12")[0].play();
        }
        else{
            $( ".track12" ).addClass("hide-track");
            $("#t12")[0].pause();
        }
        if (perc >= 650 && perc < 700) {
            $( ".track13" ).removeClass("hide-track");
            $("#t13")[0].play();
        }
        else if (perc > 700) {
            $( ".track13" ).addClass("hide-track");
        }
        else if (perc < 650) {
            $( ".track13" ).addClass("hide-track");
            $("#t13")[0].pause();
        }
    }
        $( ".scroller" ).fadeOut("slow");
});


// function unlock() {
//     var x, text;
//     var screen = $(window).width();
//     x = document.getElementById("numb").value;

//     if (x === "jzLIND2978" && screen > 900) {
//         window.location.href = "https://loveisnotdying.com/home.html";
//     } 
//     else {
//         $("#error").text("incorrect password")
//     }
// }

console.log("%c Site by Marcd %c https://marcd.co", "margin-top: 100px;color: black; font-size: 24px;font-weight: bold;font-family: helvetica, arial;", "margin-top: 20px;margin-bottom: 100px;color: blue; font-size: 14px;font-weight: bold;font-family: helvetica, arial;");

