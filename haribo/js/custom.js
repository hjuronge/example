jQuery(document).ready(function($){
  // 메뉴 토글 버튼 //
  //open/close primary navigation 기본 탐색 열기/닫기
  $('.menuclick').on('click', function(){
    $('.menup').toggleClass('is-clicked'); 
    $('.header').toggleClass('menu-is-open');
    
    //in firefox transitions break when parent overflow is changed, so we need to wait for the end of the trasition to give the body an overflow hidden
    //firefox에서 전환은 상위 오버플로가 변경될 때 중단되므로 전환이 끝날 때까지 기다려야 본문에 오버플로가 숨겨집니다.
    if( $('.menuNav').hasClass('is-visible') ) {
      $('.menuNav').removeClass('is-visible').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend',function(){
        $('body').removeClass('overflow-hidden');
      });
    } else {
      $('.menuNav').addClass('is-visible').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend',function(){
        $('body').addClass('overflow-hidden');
      });	
    }
  });
});

/*
  $('.cd-primary-nav-trigger').on('click', function(){
    $('.cd-menu-icon').toggleClass('is-clicked'); 
    $('.cd-header').toggleClass('menu-is-open');
    
    //in firefox transitions break when parent overflow is changed, so we need to wait for the end of the trasition to give the body an overflow hidden
    //firefox에서 전환은 상위 오버플로가 변경될 때 중단되므로 전환이 끝날 때까지 기다려야 본문에 오버플로가 숨겨집니다.
    if( $('.cd-primary-nav').hasClass('is-visible') ) {
      $('.cd-primary-nav').removeClass('is-visible').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend',function(){
        $('body').removeClass('overflow-hidden');
      });
    } else {
      $('.cd-primary-nav').addClass('is-visible').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend',function(){
        $('body').addClass('overflow-hidden');
      });	
    }
  });
*/