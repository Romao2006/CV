function openModal() {
  var modal = document.getElementById('phoneModal');
  modal.style.display = 'block';

  // Добавляем обработчик для закрытия модального окна при клике вне него
  window.addEventListener('click', outsideClickHandler);
}

function closeModal() {
  var modal = document.getElementById('phoneModal');
  modal.style.display = 'none';

  // Удаляем обработчик при закрытии модального окна
  window.removeEventListener('click', outsideClickHandler);
}

function outsideClickHandler(event) {
  var modal = document.getElementById('phoneModal');

  if (event.target === modal) {
    closeModal();
  }
}

document.getElementById('phoneLink').addEventListener('click', function(event) {
  event.preventDefault();
  openModal();
});
