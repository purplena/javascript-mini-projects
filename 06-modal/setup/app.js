// select modal-btn,modal-overlay,close-btn
// listen for click events on modal-btn and close-btn
// when user clicks modal-btn add .open-modal to modal-overlay
// when user clicks close-btn remove .open-modal from modal-overlay

const modalOverlay = document.querySelector('.modal-overlay');
const modalContainer = document.querySelector('.modal-container');

document.querySelector('.modal-btn').addEventListener('click', function () {
  modalOverlay.classList.add('open-modal');
});

document.querySelector('.close-btn').addEventListener('click', function () {
  modalOverlay.classList.remove('open-modal');
});

modalOverlay.addEventListener('click', function (event) {
  if (
    event.target !== modalContainer &&
    !modalContainer.contains(event.target)
  ) {
    modalOverlay.classList.remove('open-modal');
  }
});
