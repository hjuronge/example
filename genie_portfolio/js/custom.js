$(function(){

// 메뉴 토글 버튼 //
  //.menu의 자식인 .list클릭시
  $(".slideBar .list").click(function(){
    $(this).toggleClass("on");//on클래스를 추가 또는 제거
    $(this).next(".txt").stop().slideToggle();
    //클릭한 list의 다음형제인 .txt요소에 slideToggle메서드 적용
  });

var count = 0;

// 앨범 화살표 버튼 //
  //왼쪽 화살표 버튼
  $(".prev").click(function(){
  if($(".new_album").is(":animated")) return false;
  //.new_album에 animate기능이 실행중일 때 return false로 함수 내부의 코드를 실행하지 말아라
  var last = $(".new_album > .album").last();
  //마지막 이미지를 last변수에 할당

  /*.new_album의 마지막 이미지를 첫번째 자식으로 위치를 변경하고
    left값을 -600px로 설정하여 이미지의 넓이만큼 왼쪽으로 이동시켜 줌.
    그 후에 animate함수로 left를 0으로 0.5초 동안 변경하여 오른쪽으로 이동시켜 줌.*/
  $(".new_album").prepend(last).css("left","-1200px").animate({"left":0},1000);
    count--;
    numberCount()
  });
  //오른쪽 화살표 버튼
  $(".next").click(function(){
    if($(".new_album").is(":animated")) return false;
    var first = $(".new_album > .album").first();
    $(".new_album").animate({"left":"-1200px"},1000,function(){
      $(this).append(first).css("left",0);
    })
    count++;
    numberCount()
  });

// 순서 변경
  function numberCount(){
    if(count >= $(".num > li").length){
      count = 0;
    }else if(count < 0){
      count = $(".num > li").length-1;
    }
    $(".num > li").removeClass("on").eq(count).addClass("on");
  };



// 광고 닷버튼에 클릭이벤트 생성 //
  $(".ad_dot > li").click(function(){
    
  //모든 버튼에 on클래스를 제거
  $(".ad_dot > li").removeClass("on");
  //클릭한 버튼에 on클래스를 추가
  $(this).addClass("on");

  var i = $(this).index(); //클릭한 li요소의 index번호를 변수 i에 할당
  var pos = i*700; //640+82(margin-left)
  //i변수에 할당한 li의 순번과 이미지의 넓이값을 -값으로 곱하여 pos변수에 할당
  //i = 0이면 pos = 0, i = 1이면 pos = -722
  $(".ad > .ad_one > .one_dotArea").stop().animate({"left":-pos+"px"},500);
  //viewer의 left값을 pos값으로 0.5초 동안 변경
  //animate함수의 인자를 문자열로 키워드를 넘겨 가감속 제어
  });



// 실시간 차트 호버효과 //
  $(".chart table tr").mouseenter(function(){//tr에 마우스올려놨을때
    $(".chart table tr").removeClass("on");
    $(this).addClass("on");
    $(".chart table tr td:nth-child(2) img").css("display","none");
    $(this).find("img").css("display","inline");
  })



// 핫앤뉴 닷버튼에 클릭이벤트 생성 //
  var slideIndex = 1;//이미지의 순번을 담을 변수
  fadeinout(slideIndex);//fadeinout함수호출시 slideIndex를 인자로 전달
  //prev버튼클릭시
  $(".hot_prev").click(function(){
    fadeinout(slideIndex -= 1);//fadeinout함수 호출시 slideIndex의 값에서 1을 뺀값을 인자로 전달
  })
  //next버튼클릭시
  $(".hot_next").click(function(){
    fadeinout(slideIndex += 1);//fadeinout함수 호출시slideIndex의 값에서 1을 더한 값을 인자로 전달
  })
  //dot버튼 클릭시
  $(".hot_new > .wrap > .dot > ul li").click(function(){

    //모든 버튼에 on클래스를 제거
    $(".hot_new > .wrap > .dot > ul li").removeClass("on");
    //클릭한 버튼에 on클래스를 추가
    $(this).addClass("on");

    var i = $(this).index()+1;//.dot버튼의 순번에 1을 더한값을 변수i에 할당
    fadeinout(slideIndex = i);//fadeinout함수 호출시 slideIndex값에 i를 할당한후 그값을 전달
  });

  //fadeinout함수생성
  function fadeinout(n){//fadeinout함수 생성 이때 전달받은 인자값을 매개변수 n으로 함수 내부로 전달
    var slides = $(".hot_new > .wrap > .box1 > .box");
    var dots = $(".hot_new > .wrap > .dot");
    //슬라이드이미지와 닷버튼을 변수에 할당
    if(n > slides.length){slideIndex = 1}//이미지의 갯수보다 n값이 크면 slideIndex값을 1로 초기화
    if(n < 1){slideIndex = slides.length}//n값이 1보다 작으면 slideIndex값을 마지막이미지순서로 할당
    slides.css("display","none");//모든 이미지 제거
    dots.removeClass("active");//모든 닷버튼에 active클래스제거
    slides.eq(slideIndex-1).css("display","block");
    dots.eq(slideIndex-1).addClass("active");
    //이미지와 dot버튼의 순번이 slideIndex-1값인 요소를 화면에 표시하고 active클래스를 추가합니다.
  }

    

// 에디터 추천에 클릭이벤트 생성 //
  $(".smallPick > div").click(function(){
    var text = $(this).find(".text").html();
    $(".bigPick > .box > .text").html(text)

  var season = $(this).attr("data-season");
  //#largeImg요소의 자식인 img요소의 src속성을 변경
  $(".bigPick > .box img").attr({"src":season});
  });



// 지니TV 화살표 버튼 //
  //왼쪽 화살표 버튼
  $(".left_prev").click(function(){
  if($(".genieTv > .tvSlide").is(":animated")) return false;
  //.new_album에 animate기능이 실행중일 때 return false로 함수 내부의 코드를 실행하지 말아라
  var last = $(".tvSlide > .box").last();
  //마지막 이미지를 last변수에 할당

  /*.tvSlide의 마지막 이미지를 첫번째 자식으로 위치를 변경하고
    left값을 -600px로 설정하여 이미지의 넓이만큼 왼쪽으로 이동시켜 줌.
    그 후에 animate함수로 left를 0으로 0.5초 동안 변경하여 오른쪽으로 이동시켜 줌.*/
  $(".genieTv > .tvSlide").prepend(last).css("left","-400px").animate({"left":0},1000);
  current--;
  });
  //오른쪽 화살표 버튼
  $(".right_next").click(function(){
    if($(".genieTv > .tvSlide").is(":animated")) return false;
    leftSlide(); //leftSlide함수 호출
    current++;
  });

  //왼쪽방향으로 슬라이드되는 코드
  function leftSlide(){
    var first = $(".tvSlide > .box").first();
    $(".genieTv > .tvSlide").animate({"left":"-400px"},1000,function(){
      $(this).append(first).css("left",0);
    })
  };

  var current = 0;



// musicBar y축으로만 드래그 // //드래그 안됨!!!//
  $("#wrap > .musicBar").draggable({
    axis:"y"
  });
  


// 뉴뮤직비디오 -> 라이트박스 플러그인 // //근데 화살표랑 x닫기 창이 안나오는게 문제!!!//
  lightbox.option({
    //세부옵션
    'resizeDuration':200,
    'wrapAround':true
  })
});