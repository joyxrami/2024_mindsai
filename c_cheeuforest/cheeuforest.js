new Swiper('.program03--image .swiper-container', {
    centeredSlides: true,  // 활성 슬라이드를 중앙에 위치시키기
    slidesPerView: 'auto',  // 한 번에 보여지는 슬라이드 수를 자동으로 설정
    spaceBetween: 30,       // 슬라이드 사이의 간격 설정
    navigation: {           // 네비게이션 설정
        nextEl: '.program03--image .swiper-button-next',  // 다음 버튼 클래스명
        prevEl: '.program03--image .swiper-button-prev',  // 이전 버튼 클래스명
    },
    scrollbar: {            // 스크롤바 설정
        el: '.program03--image .swiper-scrollbar',
        draggable: true,
    },
    pagination: {           // 페이징 설정
        el: '.program03--image .swiper-pagination',
        clickable: true,
    },
    on: {                   // 슬라이드 변경 이벤트
        slideChangeTransitionStart: function () {
            this.slides.forEach(slide => {
                slide.style.filter = "blur(4px)";  // 슬라이드 변경 시작 시 블러 처리
            });
        },
        slideChangeTransitionEnd: function () {
            this.slides[this.activeIndex].style.filter = "none";  // 슬라이드 변경 종료 시 블러 해제
        }
    }
});

// new Swiper('.program03--image .swiper-container', {

// 	// 스크롤바 설정하기
// 	scrollbar : {
// 		el : '.program03--image .swiper-scrollbar',
// 		draggable: true,
// 	},
// 	navigation : { // 네비게이션 설정
// 		nextEl : '.program03--image .swiper-button-next', // 다음 버튼 클래스명
// 		prevEl : '.program03--image .swiper-button-prev', // 이번 버튼 클래스명
// 	},
// });

// new Swiper('.program03--image .swiper-container', {
//     scrollbar: {
//         el: '.program03--image .swiper-scrollbar',
//         draggable: true,
//     },
//     pagination: {
//         el: '.program03--image .swiper-pagination',
//         clickable: true,
//     },
//     navigation: {
//         nextEl: '.program03--image .swiper-button-next',
//         prevEl: '.program03--image .swiper-button-prev',
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
