$(function(){

// 메뉴 토글 버튼 //
  //.menu의 자식인 .list클릭시
  $(".slideBar .list").click(function(){
    $(this).toggleClass("on");//on클래스를 추가 또는 제거
    $(this).next(".txt").stop().slideToggle();
    //클릭한 list의 다음형제인 .txt요소에 slideToggle메서드 적용
  });


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
    leftSlide(); //leftSlide함수 호출
    count++;
    numberCount()
  });

  //왼쪽방향으로 슬라이드되는 코드
  function leftSlide(){
    var first = $(".new_album > .album").first();
    $(".new_album").animate({"left":"-1200px"},1000,function(){
      $(this).append(first).css("left",0);
    })
  };

  var count = 0;


// 순서 변경 //
  function numberCount(){
    if(count >= $(".num > li").length){
      count = 0;
    }else if(count < 0){
      count = $(".num > li").length-1;
    }
    $(".num > li").removeClass("on").eq(count).addClass("on");
  };


// 실시간 차트 호버효과 //
  $(".chart table tr").mouseenter(function(){//tr에 마우스올려놨을때
    $(".chart table tr").removeClass("on");
    $(this).addClass("on");
  })



// 지니TV 화살표 버튼 //
 $(".genieTv").slick({
    dots: true,
    infinite: true,
    centerMode: true,
    slidesToShow: 5,
    slidesToScroll: 3
  });


// 에디터 추천에 클릭이벤트 생성 //
  $("#one").click(function(){
  //변수 season에 클릭한 요소(#springBtn)의 data-season 속성값을 할당
  var season = $(this).attr("data-season");
  /*#largeImg요소의 자식인 img요소의 src속성을 변경,
    alt 속성값을 season변수 값으로 설정*/
  $(".bigPick > img").attr({"src":"img/270_180.jpg","alt":season});
  });
  
  //#summerBtn에 클릭이벤트 생성
  $("#two").click(function(){
  var season = $(this).attr("data-season");
  //#largeImg요소의 자식인 img요소의 src속성을 변경
  $(".bigPick > img").attr({"src":"img/270_1802.jpg","alt":season});
  });

  //#fallBtn에 클릭이벤트 생성
  $("#three").click(function(){
  var season = $(this).attr("data-season");
  //#largeImg요소의 자식인 img요소의 src속성을 변경
  $(".bigPick > img").attr({"src":"img/270_1803.jpg","alt":season});
  });

  //#winterBtn에 클릭이벤트 생성
  $("#four").click(function(){
  var season = $(this).attr("data-season");
  //#largeImg요소의 자식인 img요소의 src속성을 변경 
  $(".bigPick > img").attr({"src":"img/270_1804.jpg","alt":season});
  });


// 뉴 뮤직 비디오 썸네일 이미지요소 클릭 시 //
  $(".music_video").click(function(){
    var src = $(this).attr("src");
    //클릭한 이미지의 src속성값을 변수 src에 할당
    var caption = $(this).attr("alt");
    //클릭한 이미지의 alt속성값을 변수 caption에 할당

    $(".modal-content").attr("src",src);
    $(".caption").text(caption);
    //모달 이미지 요소의 src속성값을 src변수값으로 할당하고
    //caption요소의 텍스트 콘텐츠로 caption변수값을 할당
    $("#modal").css("display","block"); //#modal을 화면에 표시
  });

  //.close버튼 클릭 시, modal팝업을 제거
  $(".close").click(function(){
    $("#modal").css("display","none");
  })


// musicBar y축으로만 드래그 //
  $("#wrap > .musicBar").draggable({
    axis:"y"
  });


// 뉴뮤직비디오 -> 라이트박스 플러그인 //
  lightbox.option({
    //세부옵션
    'resizeDuration':200,
    'wrapAround':true
  })
});