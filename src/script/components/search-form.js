/* eslint-disable no-plusplus */
const searchTextField = document.getElementById('search-text-field');
const searchButton = document.getElementById('search-button');
const carousels = document.querySelectorAll('.carousel-item');
const carouselContainer = document.querySelector('.carousel-header');
const searchForm = document.querySelector('.search-form');

searchTextField.addEventListener('keyup', (e) => {
  if (e.key === 'Enter') {
    // do something
    searchTextField.value = '';
    carouselContainer.classList.add('carousel-container-colapse');
    searchForm.classList.add('search-form-colapse');
    searchButton.classList.add('search-btn-colapse');
    setTimeout(() => {
      searchButton.remove();
    }, 600);

    carousels.forEach((element) => {
      if (!element.classList.contains('active')) element.remove();
      else element.children[0].classList.add('carousel-content-colapse');
    });
  }
});

searchButton.addEventListener('click', (e) => {
  searchTextField.value = '';
});
