const openModal = document.querySelector('.open-modal');
const modal = document.querySelector('.modal');
const closeModal = document.querySelector('.close-modal');


openModal.addEventListener('click', () => {
  modal.style.visibility = 'visible';
})
closeModal.addEventListener('click', () => {
  modal.style.visibility = 'hidden';
})
modal.addEventListener('click', (e) => {
  if (e.target.classList.contains('modal')) {
    modal.style.visibility = 'hidden';
  }
})