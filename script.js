// onstart
alert('Сайт тестовый, и предназначен исключительно для примера');

// const/variable
const htmlContent = document.getElementById('content');
let screenHeight = window.innerHeight;
let screenWidth = window.innerWidth;

// functions
// no function

// main code
setInterval(() => {
  if (screenWidth > screenHeight) {
    htmlContent.innerHTML = '<table cellspacing="1"><tr><td style="padding: 50px;"><h1>Привет!</h1><p>Эта страничка для обучения и теста.</p></td><td style="padding: 50px;"><h1>С помощью этой страницы мы</h1><p>• Обучаем новичков базовой разметке на HTML<br>• Стилизуем сайт через CSS<br>• Добавляем контент страницы через JS</p></div></td></tr></table>';
  }

  if (screenWidth < screenHeight) {
    htmlContent.innerHTML = '<h1>Привет!</h1><p>Эта страничка для обучения и теста.</p><hr><h1>С помощью этой страницы мы</h1><p> • Обучаем новичков базовой разметке на HTML<br> • Стилизуем сайт через CSS<br> • Добавляем контент страницы через JS</p>';
  }

  screenWidth = window.innerWidth;
  screenHeight = window.innerHeight;
}, 1)
