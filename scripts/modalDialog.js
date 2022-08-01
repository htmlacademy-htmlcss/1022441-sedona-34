document.addEventListener('DOMContentLoaded', function() {

  let showButton = document.querySelector('.js-open-modal');
  let closeButton = document.querySelector('.js-modal-close');
  let modalWindow = document.querySelector('.modal-container');

  showButton.addEventListener('click', function(e) {

      e.preventDefault();
      modalWindow.classList.remove('hide');
  });

  closeButton.addEventListener('click', function(e) {
    e.preventDefault();
    modalWindow.classList.add('hide');
  });
});
