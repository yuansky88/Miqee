// 文字动画效果
var textWrapper = document.querySelector('.ml2');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({loop: false})
  .add({
    targets: '.ml2 .letter',
    scale: [4,1],
    opacity: [0,1],
    translateZ: 0,
    easing: "easeOutExpo",
    duration: 1500,
    delay: (el, i) => 70*i
  });
  // 文字动画效果
  $(function(){
$(".nav-link a:first-child").click(function(){
$("html,body").animate({ scrollTop:$($(this).attr("href")).offset().top + "px"},1000);
});
});


 // var navchange = document.documentElement.scrollTop || document.body.scrollTop || window.pageYOffset;
 // console.log(navchange);
 // var hett = 600;
 // if (navchange > hett)
 //    document.getElementById("navt").style.cssText="color:#9153f8 !important;";
 // if (navchange < hett) 
 //    document.getElementById("navt").style.cssText="color:#fff !important;";
 
 // 不能实现因为不是实时更新
 // 以下用JQ新方法
 $(window).scroll(function() {
var y_scroll_pos = window.pageYOffset;
var scroll_pos_test = 350;
console.log(y_scroll_pos);
if(y_scroll_pos > scroll_pos_test) {
   $(".nav").css("background-color","rgba(145,83,248,1)");
}
else
{
   $(".nav").css("background-color","rgba(145,83,248,0.1)");
}
});





  $(window).scroll(function() {
    var y_scroll = window.pageYOffset;
    var y_scroll_num = num(y_scroll);
    var b;
    

  });