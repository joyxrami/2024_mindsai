$(function(){
  $(".ourmission .btn_download").hover(function(){
    $(".btn_download .btn--download--normal").css("visibility","hidden");
    $(".btn_download .btn--download--hover").css("visibility","visible");
  },function(){
    $(".btn_download .btn--download--normal").css("visibility","visible");
    $(".btn_download .btn--download--hover").css("visibility","hidden");
  });
});


//history
$(function(){
  $('.nav').click(function(e){
      
      e.preventDefault();
      
      $('.nav').removeClass('active');

      // 클릭된 .nav만 .active 클래스 추가
      $(this).addClass('active');

  //내가 선택한 .nav의 형제 .sub의 속성 display가 block 입니까?
      
      if ( $(this).siblings('.sub').css('display') === 'block' ) {
               //예 블럭입니다. 그럼 닫히세요
               $(this).siblings('.sub').stop().slideUp();
        } else {
                //아니오. 그럼 열리세요
                $('.sub').slideUp();
                $(this).siblings('.sub').stop().slideDown();
        }
 });
});



new Swiper('.media .swiper-container', {
  scrollbar: {
      el: '.media .swiper-scrollbar',
      draggable: true,
  },
  pagination: {
      el: '.media .swiper-pagination',
      clickable: true,
  },
  navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
  },
  centeredSlides: true,
  slidesPerView: 'auto',  // '2'에서 'auto'로 변경하면 각 슬라이드의 크기에 맞춰 보여질 수 있습니다.
  spaceBetween: 30,
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

// new Swiper('.media .swiper-container', {

// 	// 스크롤바 설정하기
// 	scrollbar : {
// 		el : '.media .swiper-scrollbar',
// 		draggable: true,
// 	},
// 	navigation : { // 네비게이션 설정
// 		nextEl : '.media .swiper-button-next', // 다음 버튼 클래스명
// 		prevEl : '.media .swiper-button-prev', // 이번 버튼 클래스명
// 	},
// });

// new Swiper('.media .swiper-container', {
//     scrollbar: {
//         el: '.media .swiper-scrollbar',
//         draggable: true,
//     },
//     pagination: {
//         el: '.swiper-pagination',
//         clickable: true,
//     },
//     navigation: {
//         nextEl: '.swiper-button-next',
//         prevEl: '.swiper-button-prev',
//     },
//     centeredSlides: true, // 활성 슬라이드를 중앙에 위치시키기
//     slidesPerView: '2', // 한 번에 보여지는 슬라이드 수를 자동으로 설정
//     spaceBetween: 30, // 슬라이드 사이의 간격 설정
//     on: {
//         slideChangeTransitionStart: function () {
//             this.slides.forEach(slide => {
//                 slide.style.filter = "blur(4px)"; // 슬라이드 변경 시작 시 블러 처리
//             });
//         },
//         slideChangeTransitionEnd: function () {
//             this.slides[this.activeIndex].style.filter = "none"; // 슬라이드 변경 종료 시 블러 해제
//         }
//     }
// });



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
  // $(".news .tab_wrap .tit_list > li a").on("click", function(e) {
  //     e.preventDefault();
  //     let tabId = $(this).attr("href");
  //     activateTab(tabId, true);
  // });
  $(".news .tab_wrap .tit_list > li a").on("click", function(e) {
      e.preventDefault();
      let tabId = $(this).attr("href");
      activateTab(tabId);
  });

//   //페이지 로드 했을 때 탭메뉴 선택
//   let firstTabId = $('.news .tab_wrap .tit_list > li:first-child a').attr('href');
//   activateTab(firstTabId);
//   // slider(); //슬라이드 실행
// }
  // 초기 탭 설정
  let firstTabId = $('.news .tab_wrap .tit_list > li:first-child a').attr('href');
  activateTab(firstTabId);  // 페이지 로딩 시 첫 번째 탭 활성화
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

//2차 수정
on: {
  init: function () {
      // 초기 로딩 시 4번째 슬라이드에 블러 효과 추가
      const slides = document.querySelectorAll('.news .tab_list .swiper-slide');
      if (slides.length > 3) { // 슬라이드가 최소 4개 이상 있는지 확인
          slides[3].classList.add('blur-effect'); // 4번째 슬라이드에 블러 효과 적용
      }
  },
  transitionEnd: function () {
      const slides = document.querySelectorAll('.news .tab_list .swiper-slide');
      slides.forEach(slide => slide.classList.remove('blur-effect')); // 모든 블러 효과 제거

      // 현재 활성화된 슬라이드의 다음 슬라이드에 블러 효과 적용
      let nextSlideIndex = this.activeIndex + 3; // 활성 슬라이드에서 세 칸 뒤
      if (nextSlideIndex < slides.length) {
          slides[nextSlideIndex].classList.add('blur-effect');
      }
  }
}

//1차 수정
//   on: {
//     transitionEnd: function () {
//         const slides = document.querySelectorAll('.news  .swiper-slide');
//         slides.forEach(slide => slide.classList.remove('blur-effect')); // 모든 블러 효과 제거

//         // 현재 활성화된 슬라이드 다음 슬라이드에 블러 효과 적용
//         let nextSlideIndex = this.activeIndex + 3; // +4가 아닌 +3을 사용
//         if (nextSlideIndex < slides.length) {
//             slides[nextSlideIndex].classList.add('blur-effect');
//         }
//     }
// }
//   on: {
//     transitionEnd: function () {
//         const slides = document.querySelectorAll('.news .swiper-slide');
//         slides.forEach(slide => slide.classList.remove('blur-effect')); // 모든 블러 효과 제거
        
//         // 현재 화면에 보이는 4번째 슬라이드에 블러 효과 적용
//         if (this.activeIndex + 4 < slides .length) {
//             slides[this.activeIndex + 3].classList.add('blur-effect');
//         }
//     }
// }

})
;



// $(function(){
//   $(".news .swiper-slide").hover(function(){
//     $(".news .img_normal").css("visibility","hidden");
//     $(".news .img_hover").css("visibility","visible");
//   },function(){
//     $(".news .img_normal").css("visibility","visible");
//     $(".news .img_hover").css("visibility","hidden");
//   });
// });

$(function(){
  $(".news .swiper-slide").hover(
      function(){
          $(this).find(".img_hover").css({"visibility":"visible", "opacity": "1"});
          $(this).find(".img_normal").css({"visibility":"hidden", "opacity": "0"});
      },
      function(){
          $(this).find(".img_hover").css({"visibility":"hidden", "opacity": "0"});
          $(this).find(".img_normal").css({"visibility":"visible", "opacity": "1"});
      }
  );
});




/**
 * 올해가 몇 년도인지 계산
 */
// const thisYear = document.querySelector('.this-year')
// thisYear.textContent = new Date().getFullYear()
