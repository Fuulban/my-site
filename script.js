// variables
let screenWidth = window.innerWidth;
let screenHeight = window.innerHeight;
const content = document.GetElementById("content")

// width > height?
if (screenWidth > screenHeight) {
  document.querySelector("content").innerHTML = '<table cellspacing="50"><tr><td><h1>Привет!</h1><p>Это страничка для обучения.</p></td><td><h1>С помощью этой странички мы</h1><p> • Изучаем базовую разметку на HTML<br> • Стилизовываем сайт через CSS<br> • Добавляем механику через JS</p></td></tr></table>';
};
