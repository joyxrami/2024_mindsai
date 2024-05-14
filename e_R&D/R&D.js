    
/*
스와이퍼
*/
// news slider btn //
const swiper = new Swiper('.paper .swiper-container', {
    slidesPerView: 4,
    spaceBetween: 20,  

// 마지막에 끊길때..
loopAdditionalSlides: 0,

scrollbar: {
    el: '.paper .swiper-scrollbar',
    draggable: true,
},

//2차 수정
on: {
    init: function () {
        // 초기 로딩 시 4번째 슬라이드에 블러 효과 추가
        const slides = document.querySelectorAll('.paper .swiper-slide');
        if (slides.length > 3) { // 슬라이드가 최소 4개 이상 있는지 확인
            slides[3].classList.add('blur-effect'); // 4번째 슬라이드에 블러 효과 적용
        }
    },
    transitionEnd: function () {
        const slides = document.querySelectorAll('.paper .swiper-slide');
        slides.forEach(slide => slide.classList.remove('blur-effect')); // 모든 블러 효과 제거

        // 현재 활성화된 슬라이드의 다음 슬라이드에 블러 효과 적용
        let nextSlideIndex = this.activeIndex + 3; // 활성 슬라이드에서 세 칸 뒤
        if (nextSlideIndex < slides.length) {
            slides[nextSlideIndex].classList.add('blur-effect');
        }
    }
}

//1차 수정
// on: {
//     transitionEnd: function () {
//         const slides = document.querySelectorAll('.paper  .swiper-slide');
//         slides.forEach(slide => slide.classList.remove('blur-effect')); // 모든 블러 효과 제거

//         // 현재 활성화된 슬라이드 다음 슬라이드에 블러 효과 적용
//         let nextSlideIndex = this.activeIndex + 3; // +4가 아닌 +3을 사용
//         if (nextSlideIndex < slides.length) {
//             slides[nextSlideIndex].classList.add('blur-effect');
//         }
//     }
// }

//처음에 내가 작성한 거
// on: {
//     transitionEnd: function () {
//         const slides = document.querySelectorAll('.paper  .swiper-slide');
//         slides.forEach(slide => slide.classList.remove('blur-effect')); // 모든 블러 효과 제거

//         // 현재 화면에 보이는 4번째 슬라이드에 블러 효과 적용
//         if (this.activeIndex + 4 < slides.length) {
//             slides[this.activeIndex + 3].classList.add('blur-effect');
//         }
//     }
// }
})
;



// $(function(){
// $(".paper .swiper-slide").hover(function(){
//     $(".paper .img_normal").css("visibility","hidden");
//     $(".paper .img_hover").css("visibility","visible");
// },function(){
//     $(".paper .img_normal").css("visibility","visible");
//     $(".paper .img_hover").css("visibility","hidden");
// });
// });

// $(function(){
//     $(".paper .swiper-slide").hover(function(){
//         $(this).find(".img_normal").css("visibility","hidden");
//         $(this).find(".img_hover").css("visibility","visible");
//     }, function(){
//         $(this).find(".img_normal").css("visibility","visible");
//         $(this).find(".img_hover").css("visibility","hidden");
//     });
// });

$(function(){
    $(".paper .swiper-slide").hover(
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