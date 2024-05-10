// common
/*btn-back-to-top*/
// 스크롤 이벤트 리스너
window.addEventListener('scroll', () => {
    // 스크롤 위치가 100px 이상일 때 위로 가기 버튼을 보이게 함
    if (
        document.body.scrollTop > 100 ||
        document.documentElement.scrollTop > 20
    ) {
        document.getElementById('btn-back-to-top').style.display = 'block';
    } else {
        document.getElementById('btn-back-to-top').style.display = 'none';
    }
    });

    // 클릭 시 페이지 맨 위로 스크롤 (애니메이션 효과 추가)
    function backToTop() {
    const position =
        document.documentElement.scrollTop || document.body.scrollTop;
    if (position) {
        window.requestAnimationFrame(() => {
        window.scrollTo(0, position - position / 10);
        backToTop();
        });
    }
    } 

// // 언어 선택 //
// var language__name = document.getElementsByClassName("language__name");

// function handleClick(event) {
// console.log(event.target);
// // console.log(this);
// // 콘솔창을 보면 둘다 동일한 값이 나온다

// console.log(event.target.classList);

// if (event.target.classList[1] === "clicked") {
// event.target.classList.remove("clicked");
// } else {
// for (var i = 0; i < language__name.length; i++) {
//     language__name[i].classList.remove("clicked");
// }

// event.target.classList.add("clicked");
// }
// }

// function init() {
// for (var i = 0; i < language__name.length; i++) {
//     language__name[i].addEventListener("click", handleClick);
// }
// }

// init();


    // 아래로 내려가는 화살표 //
    // common btn-to-down //
    // $(function(){
    //     $(".inner .btn-to-down").hover(function(){
    //     $("#btn-to-down-normal").css("visibility","hidden");
    //     $("#btn-to-down-hover").css("visibility","visible");
    //     },function(){
    //     $("#btn-to-down-normal").css("visibility","visible");
    //     $("#btn-to-down-hover").css("visibility","hidden");
    //     });
    // });

    // $(document).ready(function(){

    //     $('.more-btn').click(function(){
    //         $(this).toggleClass('active');
    //     })
    //     $('header .main-navigation').toggleClass('active');
    // });

    

// more-btn //
const hamburger = document.querySelector('.more-btn');
const nav = document.querySelector('.main-navigation');

function hamburgerClick(){
    console.log("click!!");
    hamburger.classList.toggle('active');
    nav.classList.toggle('active');
}

hamburger.addEventListener("click", hamburgerClick);


//language-btn//
const language = document.querySelector('.language-btn');
const show = document.querySelector('.main-language');

function languageClick(){
    console.log("click!!");
    language.classList.toggle('active');
    show.classList.toggle('active');
}

language.addEventListener("click", languageClick);