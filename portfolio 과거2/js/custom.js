function init(){
// estrelas 에스트렐라스..? 별 배경 js //
  var style = ["style1", "style2", "style3", "style4"];
  var tam = ["tam1", "tam1", "tam1", "tam2", "tam3"];
  var opacity = ["opacity1", "opacity1", "opacity1", "opacity2", "opacity2", "opacity3"];

  function getRandomArbitrary(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }

  var estrela = "";
  var qtdeEstrelas = 250;
  var noite = document.querySelector(".constelacao");
  var widthWindow = window.innerWidth;
  var heightWindow = window.innerHeight;

  for (var i = 0; i < qtdeEstrelas; i++) {
    estrela += "<span class='estrela " + style[getRandomArbitrary(0, 4)] + " " + opacity[getRandomArbitrary(0, 6)] + " "
    + tam[getRandomArbitrary(0, 5)] + "' style='animation-delay: ." +getRandomArbitrary(0, 9)+ "s; left: "
    + getRandomArbitrary(0, widthWindow) + "px; top: " + getRandomArbitrary(0, heightWindow) + "px;'></span>";
  }

  noite.innerHTML = estrela;

  //meteoros

  var numeroAleatorio = 5000;

  setTimeout(function(){
    carregarMeteoro();
  }, numeroAleatorio);

  function carregarMeteoro(){
    setTimeout(carregarMeteoro, numeroAleatorio);
    numeroAleatorio = getRandomArbitrary(5000, 10000);
    var meteoro = "<div class='meteoro "+ style[getRandomArbitrary(0, 4)] +"'></div>";
    document.getElementsByClassName('chuvaMeteoro')[0].innerHTML = meteoro;
    setTimeout(function(){
      document.getElementsByClassName('chuvaMeteoro')[0].innerHTML = "";
    }, 1000);
  }



// 아래로 스크롤할 때 헤더 보이거나 숨기기 //
  var didScroll;
  var lastScrollTop = 0;
  var delta = 5;
  var navbarHeight = $('header').outerHeight();

  $(window).scroll(function(event){
      didScroll = true;
  });

  setInterval(function() {
      if (didScroll) {
          hasScrolled();
          didScroll = false;
      }
  }, 250);

  function hasScrolled() {
      var st = $(this).scrollTop();
      
      // Make sure they scroll more than delta
      // 델타보다 더 많이 스크롤하는지 확인하십시오.
      if(Math.abs(lastScrollTop - st) <= delta)
          return;
      
      // If they scrolled down and are past the navbar, add class .nav-up.
      // 아래로 스크롤하여 navbar를 지난 경우 클래스 .nav-up을 추가하십시오.
      // This is necessary so you never see what is "behind" the navbar.
      //이는 navbar "뒤에" 무엇이 있는지 절대 볼 수 없도록 하기 위해 필요합니다.
      if (st > lastScrollTop && st > navbarHeight){
          // Scroll Down
          $('header').removeClass('.header').addClass('nav-up');
      } else {
          // Scroll Up
          if(st + $(window).height() < $(document).height()) {
              $('header').removeClass('nav-up').addClass('nav-down');
          }
      }
      
      lastScrollTop = st;
  }

// 스킬바가 채워지는 애니메이션 효과 //
  $(window).scroll(function(){ //브랄우저에 스크롤 이벤트 발생시
    var scroll = $(window).scrollTop();
    var aboutTop = $("#about").offset().top; //#about의 top위치값보다 아래일 때
    if(scroll >= aboutTop){
      $(".skillBar").addClass("fill"); //.skillbar에 fill클래스 추가
    }else{ //스크롤 위치가 aboutTop 위치보다 위일 때
      $(".skillBar").removeClass("fill"); //.skillbar에 fill클래스 제거
    }
  });
}

window.onload = init;