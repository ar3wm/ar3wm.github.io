$(document).ready(function(){
    $(".title-block-wrap").css("opacity" , "1");
        // $(".content-wrap").css("opacity" , "1");

    $(".cover, .dark-bg-wrap1, .dark-bg-wrap2, .home, .nav-links, .logo").fadeIn(1000);
    $(".cover, .dark-bg-wrap1, .info-wrap").css("opacity", "1");
    $(".dark-bg-wrap2").css("opacity", ".5");
    $("body").css("height","1100vh");
    if ($(window).width() > 900){
    $("#img1, #img1a, #img1b, #img2, #img2a, #img3, #img3a, #img4, #img4a, #img5, #img5a, #img6a, #img6, #img7, #img8, #img8a, #img9, #img10, #img10a, #img11, #img11a, #img12, #richmond1, #haha, #lmao, #lmao1a, #lmao1, #lmao2, #lmao3, #lmao4").css("transition","2s ease");
    }
    else {
        $("#img1, #img1a, #img1b, #img2, #img2a, #img3, #img3a, #img4, #img4a, #img5, #img5a, #img6a, #img6, #img7, #img8, #img8a, #img9, #img10, #img10a, #img11, #img11a, #img12, #richmond1, #haha, #lmao, #lmao1a, #lmao1, #lmao2, #lmao3, #lmao4").css("transition","none");
    }
    setTimeout (function() {
        $("#img1, #img1a, #img1b, #img2, #img2a, #img3, #img3a, #img4, #img4a, #img5, #img5a, #img6a, #img6, #img7, #img8, #img8a, #img9, #img10, #img10a, #img11, #img11a, #img12, #richmond1, #haha, #lmao, #lmao1a, #lmao1, #lmao2, #lmao3, #lmao4").css("transition","none");
        $("hide-track").css("opacity", "1");
    }, 2000);
    $("#img1").css("transform","translateZ(-1000px)");
    $("#img2").css("transform","translateZ(-3000px)");
    $("#img2a").css("transform","translateZ(-3000px)");
    $("#img3").css("-webkit-transform","translateZ(-6000px)");
    $("#img3a").css("-webkit-transform","translateZ(-5500px)");
    $("#img4").css("-webkit-transform","translateZ(-8000px)");
    $("#img4a").css("-webkit-transform","translateZ(-7500px)");
    $("#img5").css("-webkit-transform","translateZ(-11000px)");
    $("#img5a").css("-webkit-transform","translateZ(-9500px)");
    $("#img6").css("-webkit-transform","translateZ(-13000px)");
    $("#img6a").css("-webkit-transform","translateZ(-12000px)");
    $("#img7").css("-webkit-transform","translateZ(-14000px)");
    $("#img8").css("-webkit-transform","translateZ(-16000px)");
    $("#img8a").css("-webkit-transform","translateZ(-17000px)");
    $("#img9").css("-webkit-transform","translateZ(-18000px)");
    $("#img10").css("-webkit-transform","translateZ(-21000px)");
    $("#img10a").css("-webkit-transform","translateZ(-20000px)");
    $("#img11").css("-webkit-transform","translateZ(-22000px)");
    $("#img11a").css("-webkit-transform","translateZ(-23000px)");
    $("#img12").css("-webkit-transform","translateZ(-24500px)");
    $("#img12a").css("-webkit-transform","translateZ(-26000px)");
    $("#richmond1").css("-webkit-transform","translateZ(-27000px)");
    $("#haha").css("-webkit-transform","translateZ(-28500px)");
    $("#lmao").css("-webkit-transform","translateZ(-30000px)");
    $("#lmao1a").css("-webkit-transform","translateZ(-31000px)");
    $("#lmao1").css("-webkit-transform","translateZ(-32500px)");
    $("#lmao2").css("-webkit-transform","translateZ(-34000px)");
    $("#lmao3").css("-webkit-transform","translateZ(-36000px)");
    $("#lmao4").css("-webkit-transform","translateZ(-35000px)");
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
   if (screen >= 1500 && screen < 1990){
       var dSpeed = 4
   }
    else if (screen >= 1990){
        var dSpeed = 3.1;
    }
    else {
        var dSpeed = 5;
    }

    var contentPos = (scrollTop * dSpeed) + 'px';
    
    $('.content').css({'transform': "translateZ(" + contentPos + ")"});
    $('.title-block').hide();
});
// $(document).ready(function () {
//     if(screen.width < 900){
//         $(".intro-text").html("MARCD");
//         $(".scroller").hide();
//     }
//     else{
//         $(".home-content-wrap").mousewheel(function(event, delta) {
//           this.scrollLeft -= (delta * 1.5);
//           event.preventDefault();
//            $( ".scroller" ).fadeOut("slow");
//         });
//     }
// });


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

