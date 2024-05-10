    
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

on: {
    transitionEnd: function () {
        const slides = document.querySelectorAll('.paper  .swiper-slide');
        slides.forEach(slide => slide.classList.remove('blur-effect')); // 모든 블러 효과 제거

        // 현재 화면에 보이는 4번째 슬라이드에 블러 효과 적용
        if (this.activeIndex + 4 < slides.length) {
            slides[this.activeIndex + 3].classList.add('blur-effect');
        }
    }
}
})
;



$(function(){
$(".paper .swiper-slide").hover(function(){
    $(".paper .img_normal").css("visibility","hidden");
    $(".paper .img_hover").css("visibility","visible");
},function(){
    $(".paper .img_normal").css("visibility","visible");
    $(".paper .img_hover").css("visibility","hidden");
});
});