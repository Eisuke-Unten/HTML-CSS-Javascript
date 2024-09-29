'use strict';

{
  const next = document.getElementById('next');
  const prev = document.getElementById('prev');
  const ul = document.getElementById('pic');
  const slides = ul.children;
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
  updateButtons();


  next.addEventListener('click', () => {
    currentIndex++;
    updateButtons();
    const slideWidth = slides[0].getBoundingClientRect().width;
   ul.style.transform = `translateX(${-1 * slideWidth * currentIndex}px)`;
  
  });
  prev.addEventListener('click', () => {
    currentIndex--;
    updateButtons();
    const slideWidth = slides[0].getBoundingClientRect().width;
   ul.style.transform = `translateX(${-1 * slideWidth * currentIndex}px)`;
  
  });

  function callback(entries, obs) {   //コールバック関数
    entries.forEach(entry => {
    if (!entry.isIntersecting) {    
        return;   
      }
      entry.target.classList.add("appear");     
      obs.unobserve(entry.target);    
    });
  }
  
  const options = {
    threshold: 0.5,    
  }

  const observer = new IntersectionObserver(callback, options);//インスタンス（場所）
  const targets = document.querySelectorAll('.animate');       //モノの取得
  
  
  targets.forEach(target => {           //ここで管理してるというコードを必ず入力する！
    observer.observe(target);
  });




}

