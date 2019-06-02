$(document).ready(function() {
    // 設定平滑滾動
    $('.scrollTop').click(function(e){
      e.preventDefault();
      var targer = $(this).attr('href');
      console.log(targerPos);
      var targerPos = $(targer).offset().top;
      $('html,body').animate({scrollTop:targerPos},1000);
    });  

    $(window).scroll(function(){   
      var scrollPos =$(window).scrollTop();//從Window整個網頁取得現在滾動Y值
      console.log(scrollPos);//在滑動時取到滾動值
      if(scrollPos>590){  //Y軸大於590  在topmenu加入class
        $('.topmenu').addClass('menuActive'); 
      }else{
        $('.topmenu').removeClass('menuActive'); 
      }
      
  });

    $('.showmenu').on('click',  function(e){
       e.preventDefault();
       $('body').toggleClass('menu-show');
    });
});
 
var mySwiper = new Swiper ('.swiper-container', {
  loop: true,
  effect:'slide',
  autoplay: {delay: 3000,},
  pagination: {el: '.swiper-pagination',},

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

})