// 앵커 이벤트 금지
let docuAnchor = document.querySelectorAll('a[href="#"]');
for(let anchor=0; anchor<docuAnchor.length; anchor++) {
    docuAnchor[anchor].addEventListener('click',function(event){
      event.preventDefault();
    });
}

// 헤더 & 풋터 스크롤 이벤트
function scrollEvent() {
  const header = document.querySelector('header'),
        headerMenu = header.querySelector('.header-nav'),
        gnbHeight = headerMenu.querySelector('.gnb'),
        categories = headerMenu.querySelectorAll('.categories');

  // 헤더 메뉴 고정
  function headerFixed() {
    let headerH = headerMenu.offsetTop;
    let scrollH = document.scrollingElement.scrollTop;
    if(headerH < scrollH) {
      header.classList.add('active');
    } else {
      header.classList.remove('active');
    }
  };
  // 상단 이동 버튼
  function toGoTop() {
    const TOP_BTN = document.querySelector('.top');
    let scrollH = document.scrollingElement.scrollTop;
    if(scrollH > 500) {
      TOP_BTN.classList.add('visible');
    } else {
      TOP_BTN.classList.remove('visible');
    }
    TOP_BTN.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
      });
    })
  };

  // 스크롤 이벤트
  window.addEventListener('scroll', () => {
    headerFixed();
    toGoTop();
  });
  // var jsMediaQuery = window.matchMedia('screen and (max-width: 900px)');
  // 사이즈 변경 후 버튼 추가
    // if(jsMediaQuery.matches){
  for(let i=0; i<categories.length; i++) {
    categories[i].addEventListener('mouseenter', (e) => {
      let target = e.target;
      const allCTGR = target.parentNode.children;
      for(let c=0; c<allCTGR.length; c++) {
        allCTGR[c].classList.remove('on');
      }
      target.classList.add('on');
      headerMenu.addEventListener('mouseleave', () => {
        target.classList.remove('on');
      })
      gnbHeight.addEventListener('mouseenter', () => {
        target.classList.remove('on');
      })
    });
  }
} scrollEvent();

// 타블렛 - 모바일 메뉴
function mobileVisible() {
  const header = document.querySelector('header'),
        MOBILE_BTN = header.querySelector('.hamburger'),
        lnbWrap = document.querySelector('.aside'),
        CLOSE_BTN = lnbWrap.querySelector('.btn-mo_close');
  // 햄버거 버튼
  MOBILE_BTN.addEventListener('click', () => {
    lnbWrap.classList.add('visible');
  });
  CLOSE_BTN.addEventListener('click', () => {
    lnbWrap.classList.remove('visible');
  });

  let lnb = lnbWrap.querySelectorAll('.lnb-title');
  // 사이드 메뉴
  lnb.forEach(function(index){
    index.addEventListener('click', (e) => {
      const target = e.target,
            depth = target.nextElementSibling;
      if(target.className === "active") {
        target.classList.remove('active');
        depth.style.display = 'none';
      } else {
        for(let i=0; i<lnb.length; i++) {
          lnb[i].children[0].classList.remove('active');
          lnb[i].children[1].style.display = 'none';
        }
        target.classList.add('active');
        depth.style.display = 'block';
      }
    });
  });
  // 스크롤 생성
  const asideWarp = document.querySelector('.aside-wrap');
  let asideContentsH = asideWarp.scrollHeight, // 전체 내용
      asideH = asideWarp.offsetHeight; //모니터 화면
  if(asideContentsH > asideH) {
    asideWarp.style.overflowY = 'scroll';
  } else {
    asideWarp.style.overflowY = 'hidden';
  }

} mobileVisible();
// 스크롤 이벤트
