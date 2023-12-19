'use strict';

{
  const next = document.getElementById('next');
  const prev = document.getElementById('prev');
  const newss = document.getElementById('newss');
  const slides = newss.children;
  const dots = [];
  let currentIndex = 0;

  function updateButtons() {
    prev.classList.remove('hidden');
    next.classList.remove('hidden');

    if (currentIndex === 0) {
      prev.classList.add('hidden');
    }
    if (currentIndex === slides.length - 1) {
      next.classList.add('hidden');
    }
  }

  function moveSlides() {
    const slideWidth = slides[0].getBoundingClientRect().width;
    newss.style.transform = `translateX(${-1 * slideWidth * currentIndex}px)`;
  }

  function setupDots() {
    for (let i = 0; i < slides.length; i++) {
      const button = document.createElement('button');
      button.addEventListener('click', () => {
        currentIndex = i;
        updateDots();
        updateButtons();
        moveSlides();
      });
      dots.push(button);
      document.getElementById('Nnav').appendChild(button);
    }

    dots[0].classList.add('current');
  }

  function updateDots() {
    dots.forEach(dot => {
      dot.classList.remove('current');
    });
    dots[currentIndex].classList.add('current');
  }

  updateButtons();
  setupDots();

  next.addEventListener('click', () => {
    currentIndex++;
    updateButtons();
    updateDots();
    moveSlides();
  });

  prev.addEventListener('click', () => {
    currentIndex--;
    updateButtons();
    updateDots();
    moveSlides();
  });

  window.addEventListener('resize', () => {
    moveSlides();
  });


  // Intersection Observer API


  function callback(entries, obs) {
    entries.forEach(entry => {
      if (!entry.isIntersecting) {
        return;
      }

      entry.target.classList.add('appear');
      obs.unbserve(entry.target);
    });
  }

  const options = {
    threshold: 0.2,
  };

  const observer = new IntersectionObserver(callback, options);

  const targets = document.querySelectorAll('.animate');

  targets.forEach(target => {
    observer.observe(target);
  });
  
  // animate2

  // function callback(entries, obs) {
  //   entries.forEach(entry => {
  //     if (!entry.isIntersecting) {
  //       return;
  //     }

  //     entry.target.classList.add('appear');
  //     obs.unbserve(entry.target);
  //   });
  // }

  // const options = {
  //   threshold: 0.2,
  // };

  // const observer = new IntersectionObserver(callback, options);

  // const targets = document.querySelectorAll('.animate');

  // targets.forEach(target => {
  //   observer.observe(target);
  // });

  
  
}

$(window).on('load',function(){
$("#splash-logo").delay(1200).fadeOut('slow');//ロゴを1.2秒でフェードアウトする記述

//=====ここからローディングエリア（splashエリア）を1.5秒でフェードアウトした後に動かしたいJSをまとめる
$("#splash").delay(1500).fadeOut('slow',function(){//ローディングエリア（splashエリア）を1.5秒でフェードアウトする記述

$('body').addClass('appear');//フェードアウト後bodyにappearクラス付与

});
//=====ここまでローディングエリア（splashエリア）を1.5秒でフェードアウトした後に動かしたいJSをまとめる

//=====ここから背景が伸びた後に動かしたいJSをまとめたい場合は
$('.splashbg1').on('animationend', function() { 
//この中に動かしたいJSを記載
});
//=====ここまで背景が伸びた後に動かしたいJSをまとめる

});


// 読み込み時TOPに戻る


$(function() {
    $('html,body').animate({ scrollTop: 0 }, '1');
});


// ヒーローのスライド


{
  function play() {
    setTimeout(() => {
      images[currentIndex].classList.remove('current');
      currentIndex++;
      if (currentIndex > images.length - 1) {
          currentIndex = 0;
      }
      images[currentIndex].classList.add('current');
      play();
    }, 5700);
  }

  const images = document.querySelectorAll('.heros img');
  let currentIndex = 0;

  play();
}