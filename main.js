$(function(){
  $(".ourmission .btn_download").hover(function(){
    $(".btn_download .btn--download--normal").css("visibility","hidden");
    $(".btn_download .btn--download--hover").css("visibility","visible");
  },function(){
    $(".btn_download .btn--download--normal").css("visibility","visible");
    $(".btn_download .btn--download--hover").css("visibility","hidden");
  });
});


new Swiper('.media .swiper-container', {

	// 스크롤바 설정하기
	scrollbar : {
		el : '.media .swiper-scrollbar',
		draggable: true,
	},
	navigation : { // 네비게이션 설정
		nextEl : '.media .swiper-button-next', // 다음 버튼 클래스명
		prevEl : '.media .swiper-button-prev', // 이번 버튼 클래스명
	},
});

new Swiper('.media .swiper-container', {
    scrollbar: {
        el: '.media .swiper-scrollbar',
        draggable: true,
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    centeredSlides: true, // 활성 슬라이드를 중앙에 위치시키기
    slidesPerView: '2', // 한 번에 보여지는 슬라이드 수를 자동으로 설정
    spaceBetween: 30, // 슬라이드 사이의 간격 설정
    on: {
        slideChangeTransitionStart: function () {
            this.slides.forEach(slide => {
                slide.style.filter = "blur(4px)"; // 슬라이드 변경 시작 시 블러 처리
            });
        },
        slideChangeTransitionEnd: function () {
            this.slides[this.activeIndex].style.filter = "none"; // 슬라이드 변경 종료 시 블러 해제
        }
    }
});



// news //
// news tab menu//
$(document).ready(function() {
  tab();
})

function tab() {
  //탭메뉴 실행 함수
  function activateTab(tabId) {
      //초기화
      $(".news .tab_wrap .tit_list > li").removeClass("active");
      $(".news .tab_wrap .tab_list").hide();

      //실행
      $(`.news .tab_wrap .tit_list > li a[href*="${tabId}"]`).parent().addClass("active");
      $(tabId).show();
  }

  //탭메뉴 클릭할 때 실행
  $(".news .tab_wrap .tit_list > li a").on("click", function(e) {
      e.preventDefault();
      let tabId = $(this).attr("href");
      activateTab(tabId, true);
  });

  //페이지 로드 했을 때 탭메뉴 선택
  let firstTabId = $('.news .tab_wrap .tit_list > li:first-child a').attr('href');
  activateTab(firstTabId);
  // slider(); //슬라이드 실행
}



// news slider btn //
const swiper = new Swiper('.news .swiper-container', {
  slidesPerView: 4,
  spaceBetween: 20,  

  // 마지막에 끊길때..
  loopAdditionalSlides: 0,

  // navigation: {
  //   nextEl: '.swiper-button-next',
  //   prevEl: '.swiper-button-prev',
  // },
  scrollbar: {
    el: '.news .swiper-scrollbar',
    draggable: true,
  },

  on: {
    transitionEnd: function () {
        const slides = document.querySelectorAll('.news .swiper-slide');
        slides.forEach(slide => slide.classList.remove('blur-effect')); // 모든 블러 효과 제거
        
        // 현재 화면에 보이는 4번째 슬라이드에 블러 효과 적용
        if (this.activeIndex + 4 < slides .length) {
            slides[this.activeIndex + 3].classList.add('blur-effect');
        }
    }
}

})
;



$(function(){
  $(".news .swiper-slide").hover(function(){
    $(".news .img_normal").css("visibility","hidden");
    $(".news .img_hover").css("visibility","visible");
  },function(){
    $(".news .img_normal").css("visibility","visible");
    $(".news .img_hover").css("visibility","hidden");
  });
});




/**
 * 올해가 몇 년도인지 계산
 */
// const thisYear = document.querySelector('.this-year')
// thisYear.textContent = new Date().getFullYear()
