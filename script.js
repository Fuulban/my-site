// onstart
alert('Сайт тестовый, и предназначен исключительно для примера');

// const/variable
const htmlContent = document.getElementById('content'); // Исправлено: getElementById (строчные буквы)
let screenHeight = window.innerHeight;
let screenWidth = window.innerWidth;

// functions
// no function

// main code
if (screenWidth > screenHeight) {
  htmlContent.innerHTML = '<table cellspacing="50">' +
    '<tr>' +
      '<td>' +
        '<h1>Привет!</h1>' +
        '<p>Эта страничка для обучения и теста.</p>' +
      '</td>' +
      '<td>' +
        '<h1>С помощью этой страницы мы</h1>' +
        '<p>• Обучаем новичков базовой разметке<br>' +
        '• Стилизуем сайт через CSS<br>' +
        '• Добавляем контент страницы через JS</p>' + // Исправлено: закрыт тег <p>
      '</td>' + // Исправлено: был <td><tr>, должно быть </td> + <tr>
    '</tr>' +
  '</table>'; // Исправлено: закрыт тег <table>
}
