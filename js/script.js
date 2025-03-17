document.addEventListener("DOMContentLoaded", function () {
  AOS.init();

  // 배너 스와이퍼
  var swiper = new Swiper(".laSwiper", {
    loop: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    effect: "fade",
    autoplay: {
      delay: 2000,
      disableOnInteraction: false,
    },
  });

  // 베스트셀러 스와이퍼
  var swiper = new Swiper(".bestSellerSwiper", {
    loop: true,
    slidesPerView: 2,
    spaceBetween: 10,
    pagination: {
      el: ".swiper-pagination",
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    autoplay: {
      delay: 2000,
      disableOnInteraction: false,
    },

    breakpoints: {
      1260: {
        slidesPerView: 4,
        spaceBetween: 10,
      },
      760: {
        slidesPerView: 3,
        spaceBetween: 10,
      },
    },
  });

  // 립스와이퍼
  var swiper = new Swiper(".lipSwiper", {
    loop: true,
    slidesPerView: 2,
    spaceBetween: 10,
    pagination: {
      el: ".swiper-pagination",
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    autoplay: {
      delay: 2000,
      disableOnInteraction: false,
    },
    breakpoints: {
      1260: {
        slidesPerView: 4,
        spaceBetween: 10,
      },
      760: {
        slidesPerView: 3,
        spaceBetween: 10,
      },
    },
  });

  // bg색 변경
  const sec2 = document.querySelector(`.sec_2`);
  const sec4 = document.querySelector(`.sec_4`);

  window.addEventListener(`scroll`, () => {
    const sec2Top = sec2.offsetTop - 300;
    const sec4Top = sec4.offsetTop;

    const scrollTop = window.scrollY;
    console.log(scrollTop);

    const bodyBg = document.querySelector(`body`);

    if (scrollTop > sec2Top && scrollTop < sec4Top) {
      bodyBg.classList.add(`bg`);
    } else {
      bodyBg.classList.remove(`bg`);
    }
  });

  // 스크롤이벤트
  window.addEventListener(`scroll`, () => {
    const scrollTopData = window.scrollY;
    console.log(scrollTopData);

    const headerArea = document.querySelector(`.header_area`);

    if (scrollTopData >= 200) {
      headerArea.classList.add(`scroll`);
    } else {
      headerArea.classList.remove(`scroll`);
    }
  });

  // 서브메뉴
  const subMenu = document.querySelectorAll(`.menu li`);
  const tabBox = document.querySelectorAll(`.sub_menu_box .sub_menu`);

  for (const menu of subMenu) {
    menu.addEventListener(`mouseenter`, function () {
      this.classList.add(`active`);

      for (const noMenu of subMenu) {
        if (noMenu != this) {
          noMenu.classList.remove(`active`);
        }
      }

      // 탭연결
      for (tabContent of tabBox) {
        tabContent.classList.remove(`active`);
      }

      const tabData = this.getAttribute(`data-tab`);
      const changeTab = document.querySelector(`#${tabData}`);
      changeTab.classList.add(`active`);
    });
  }

  // 메뉴안에 li가 아니라 탭 자체에서 마우스가 빠질때 탭이 없어지도록 한 코드
  for (tabContent of tabBox) {
    tabContent.addEventListener(`mouseleave`, function () {
      this.classList.remove(`active`);

      // 메뉴안에 li가 아니라 탭 자체에서 마우스가 빠질때 밑줄도 없어짐
      for (const menu of subMenu) {
        menu.classList.remove(`active`);
      }
    });
  }

  const menuUl = document.querySelector(".menu");
  const hamburger = document.querySelector("#hamburger");

  hamburger.addEventListener("click", function () {
    menuUl.classList.toggle("menuClick");
  });
});
