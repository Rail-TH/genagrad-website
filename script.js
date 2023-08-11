// Получаем ссылки на изображения
const images = document.querySelectorAll('img');

// Получаем модальное окно и его компоненты
const modal = document.getElementById('modal');
const modalImage = document.getElementById('modalImage');
const caption = document.getElementById('caption');
const closeBtn = document.querySelector('.close');

// При клике на изображение открываем модальное окно
images.forEach(image => {
  image.addEventListener('click', () => {
    modal.style.display = 'block';
    modalImage.src = image.src;
    caption.textContent = image.alt;
  });
});

// При клике на кнопку закрытия закрываем модальное окно
closeBtn.addEventListener('click', () => {
  modal.style.display = 'none';
});

// Закрываем модальное окно при клике вне его области
window.addEventListener('click', (event) => {
  if (event.target === modal) {
    modal.style.display = 'none';
  }
});