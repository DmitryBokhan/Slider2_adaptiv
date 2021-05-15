let offset = 0; //смещение от левого блока
const sliderLine = document.querySelector('.slider-line');

document.querySelector('.slider-prev').addEventListener('click', function () {
   offset -= 245;
   if (offset < 0) {
      offset = 1470;
   }
   sliderLine.style.left = -offset + 'px';
});

document.querySelector('.slider-next').addEventListener('click', function () {
   offset += 245;
   if (offset > 1470) {
      offset = 0;
   }
   sliderLine.style.left = -offset + 'px';
});