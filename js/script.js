$(".btn-top").on("click",function(){

//id=aboutがついているHTMLのページ最上かrなお距離//

    var distance = $("body").offset().top;
    $("body,html").animate({scrollTop:distance},1000);

});

//nav要素の中の子要素のaがクリックされたら、
//
$(".nav-item > a").on("click",function(){

    var href = $(this).attr("href");
    console.log(href);

    var targetDom = $(href);
    var distance = $(href).offset().top;
    // var distance = $(href).offset().top;
    $("body,html").animate({scrollTop:distance},1000);
});

$(window).scroll(function() {
    if ($(this).scrollTop() > 1){  
        $('#menu ul').addClass("sticky");
      }      else{
        $('#menu ul').removeClass("sticky");
      }
});

// BUTTON アニメーション

$("#rect").mouseover(function(){
	$(this).animate({
        opacity: ".3"
    }, 1000)
}).mouseout(function(){
	$(this).animate({
		opacity:"1"
    }, 1000)
    });
    
//ヘッダーアニメーション

var menuHeight = $("#menu-wrap").height();
var startPos = 0;
$(window).scroll(function(){
  var currentPos = $(this).scrollTop();
  if (currentPos > startPos) {
    if($(window).scrollTop() >= 200) {
      $("#menu-wrap").css("top", "-" + menuHeight + "px");
    }
  } else {
    $("#menu-wrap").css("top", 0 + "px");
  }
  startPos = currentPos;
});


//
$(window).on('load',function(){
	
	// fade-up
    $(window).scroll(function (){
        $(".item-box").each(function(){
            var POS = $(this).offset().top;
            var scroll = $(window).scrollTop();
            var windowHeight = $(window).height();

            if (scroll > POS - windowHeight){
                $(this).css({
                        'opacity':'1',
                        'transform':'translateY(0)',
                        '-webkit-transform':'translateY(0)',
                        '-moz-transform':'translateY(0)',
                        '-ms-transform':'translateY(0)'
                });
            } else {
                $(this).css({
                        'opacity':'0',
                        'transform':'translateY(70px)',
                        '-webkit-transform':'translateY(70px)',
                        '-moz-transform':'translateY(70px)',
                        '-ms-transform':'translateY(70px)'
                });
            }
        });
    });
});
