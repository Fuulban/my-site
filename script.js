// onstart
alert('Сайт тестовый, и предназначен исключительно для примера');

// const/variable
const htmlContent = document.getElementById('content');
let screenHeight = window.innerHeight;
let screenWidth = window.innerWidth;

// functions
// no function

// main code
while (true) {
  if (screenWidth > screenHeight) {
    htmlContent.innerHTML = '<table cellspacing="50"><tr><td><h1>Привет!</h1><p>Эта страничка для обучения и теста.</p><div style="height: 0fr;"></div></td><td><h1>С помощью этой страницы мы</h1><p>• Обучаем новичков базовой разметке<br>• Стилизуем сайт через CSS<br>• Добавляем контент страницы через JS</p><div style="height: 0fr;"></div></td></tr></table>';
  }

  if (screenWidth < screenHeight) {
    htmlContent.innerHTML = '<p>Извините, ещё не готово</p>';
  }

  setTimeout(() => {;;}, 250);
}
