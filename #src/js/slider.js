const images = document.querySelectorAll('.slider .slider-line img'); //получаем коллекцию всех img
const sliderLine = document.querySelector('.slider-line'); //получаем коллекцию из slider-line
let count = 0; // переменная ссыдантся на активный слайдер
let width; //необходимо будет переделать -> обернуть в функцию


//при старте страницы вычисляем ширину рабочей области и изменяем слайдер
function init() {
   console.log('resize'); //так узнаем что прошол пересчет (потом убрать)
   width = document.querySelector('.slider').offsetWidth;  //получаем ширину '.slider'
   console.log(width); //для теста

   //далее подганяем slider-line по ширине области просмотра * на коллисестао слайдов
   sliderLine.style.width = width * images.length + 'px';

   //далее делаем ширину всех изображений  =  ширине слайдера
   images.forEach(item => {
      item.style.width = width + 'px';
      item.style.height = 'auto'; //это позволит сохратить пропорции изображения
   });
   rollSlider(); // ткт тоже пересчитываем ширину поле в случае смещения экрана
}


//далее нужно вызывать ф-ю init() при каждом изменении ширины экрана браузера:
//вешаем событие
window.addEventListener('resize', init); //первый аргумент это событие изменения ширины браузера, а второй - колбек ф-я init();
init();



//длаее кнопки
document.querySelector('.slider-prev').addEventListener('click', function () {
   count--;
   //проверка края смешения (если достигли конца слайдера)
   if (count < 0) {
      count = images.length - 1;
   }

   rollSlider();

});

document.querySelector('.slider-next').addEventListener('click', function () {
   count++;

   //проверка края смешения (если достигли конца слайдера)
   if (count >= images.length) {
      count = 0;
   }

   rollSlider();

});

//функция расчитывает смешение слайда
function rollSlider() {
   sliderLine.style.transform = 'translate(-' + count * width + 'px)'; //смещение высчитывается по формуле [смещение = ширина сдайдера * на номер текушего слайда]
}