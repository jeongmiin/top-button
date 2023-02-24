$(document).ready(function(){


  // topBtn
	function topBtnShow(){
    $('.topBtn').fadeIn();
  }
  function topBtnHide(){
      $('.topBtn').fadeOut();
  }

  var scrollTop = $('html, body').scrollTop();
  var windowHeight = $(window).height();
  var scrollBtm = scrollTop + $(window).height();
  var footerHeight = $('.footer').offset().top;

  $(window).scroll(function(){
    scrollTop = $('html, body').scrollTop();
    scrollBtm = scrollTop + $(window).height();
    if(scrollTop >= $('.header').height()){
      topBtnShow();
      if(scrollBtm >= $('.footer').offset().top){
        $('.topBtn').addClass('fixed');
      }else{
        $('.topBtn').removeClass('fixed');
      }
    }else{
      topBtnHide();
    }

    $('.topBtn').on('click', function(){
      $('html, body').stop().animate({'scrollTop': 0},500);
    });
  });
  // topBtn : end

});