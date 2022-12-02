jQuery(document).ready(function($){
  // 메뉴 토글 버튼 //
  //open/close primary navigation 기본 탐색 열기/닫기 //도움
  $(".menup").click(function(){
    $(".header").toggleClass("on");
  });

  //메뉴 글씨 클릭 시 //
  $(".menutxt > p").click(function(){
    var i = $(this).index();
    $(".photo > .wrap > img").css("display","none").eq(i).css("display","block");
  });

  $(".close").click(function(){
    $(".photo > img").removeClass("active");
    //모든 버튼에 active클래스 제거
    $(".tab-content").css("display","none");
    //모든 탭콘텐츠 요소를 제거
  })

  //.close 클릭 시 // 도움!
  $(".close").click(function(){
    $(".wrap1").css("display","none");
    //.modal을 화면에서 제거
  });
});