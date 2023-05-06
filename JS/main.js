const searchEL = document.querySelector('.search');
/* document 는 HTML 자체 라고 생각하면 된다.*/
const searchInputEL = searchEL.querySelector('input');

searchEL.addEventListener('click', function() {
    searchInputEL.focus();
});

searchInputEL.addEventListener('focus', function() {
    /*focus 는 HTML 요소에 포커스가 갔을때 발생한다.*/
    searchEL.classList.add('focused');
    searchInputEL.setAttribute('placeholder','통합검색'); 
    /* ↑ HTML 속성을 지정할 때 사용 */
});

searchInputEL.addEventListener('blur', function(){
    /*blur 는 HTML 요소가 포커스에서 벗어났을때 발생한다.*/
    searchEL.classList.remove('focused');
    searchInputEL.setAttribute('placeholder', '');
});

const badgeEL = document.querySelector('header .badges');

window.addEventListener('scroll', _.throttle(function() {
    console.log(window.scrollY);
    if(window.scrollY > 500){
        // 배지 숨기기
        // gsap.to(요소, 지속시간, 옵션)
        gsap.to(badgeEL, .6, {
            opacity: 0,
            display: 'none'
            /* display 값을 생략하면 시각적으로만 사라지고 요소는 그대로 남기 때문에
            사라진 후에도 해당 요소보다 아래 있는 요소를 클릭할 수 없게 된다. */
        });
    } else {
        // 배지 노출
        gsap.to(badgeEL, .6, {
            opacity: 1,
            display: 'block'
        })
    }
}, 300));
/* window 는 브라우저 객체, 보고 있는 화면 자체이다.*/
// _.throttle(함수, 시간(millisecond 단위))
/* 100 = millisecond, 1000 = 1초 단위로 함수에 부하를 준다.*/


const fadeEls = document.querySelectorAll('.visual .fade-in');
fadeEls.forEach(function(fadeEl, index) {
    gsap.to(fadeEl, 1, {
        delay: (index + 1) * .7, // 0.7s -> 1.4s -> 2.1s 딜레이 시간 증가
        opacity: 1
    });
});

new Swiper('.notice-line .swiper', {
    direction: 'vertical',
    autoplay: true,
    loop: true
});

new Swiper('.promotion .swiper', {
    /* direction 의 기본값: horizontal */
    slidesPerView: 3,
    /*한번에 보여지는 슬라이드 갯수*/
    spaceBetween: 10,
    /*슬라이드 간의 간격 */
    centeredSlides: true,
    /*슬라이드를 정중앙에 위치*/
    loop: true,
    /* loop 를 넣어주지 않으면 왼쪽에 이미지가 비어서 출력된다.*/
    autoplay: {
        delay: 5000 /* 기본값: 3000 이며 3s 이다. */
    },
    pagination: {
        el: '.promotion .swiper-pagination', // 페이지 번호 요소 선택자
        clickable: true //사용자의 페이지 번호 요소 제어 가능 여부
    },
    navigation: {
        prevEl: '.promotion .swiper-prev',
        nextEl: '.promotion .swiper-next'
    }
});


const promotionEL = document.querySelector('.promotion');
const promotionToggleleBtn = document.querySelector('.toggle-promotion');
let isHidePromotion = false;
promotionToggleleBtn.addEventListener('click', function (){
    isHidePromotion = !isHidePromotion
    /*88행에 false -> true 식으로 변수값을 반댓값으로 변경 및 반환*/
    if (isHidePromotion) {
        promotionEL.classList.add('hide');
    } else {
        promotionEL.classList.remove('hide');
    }
});

// 범위 랜덤 함수(소수점 2자리까지)
function random(min, max) {
    // `.toFixed()`를 통해 반환된 문자 데이터를,
    // `parseFloat()`을 통해 소수점을 가지는 숫자 데이터로 변환
    return parseFloat((Math.random() * (max - min) + min).toFixed(2))
  }

function floatingObject(selector, delay, size){
    gsap.to(
        selector, // 선택자
        random(1.5, 2.5), // 애니메이션 동작 시간
        { // 옵션
            y: size,
            repeat: -1,
            yoyo: true,
            ease: Power1.easeInOut,
            delay: random(0, delay)
    });
}

floatingObject('.floating1', 1, 15);
floatingObject('.floating2', .5, 15);
floatingObject('.floating3', 1.5, 20);