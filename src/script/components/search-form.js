const searchTextField = document.getElementById('search-text-field');
const searchButton = document.getElementById('search-button');
const carousel = document.querySelector('.carousel-content');

searchTextField.addEventListener('keyup', (e) => {
  if (e.key === 'Enter') {
    // do something
    console.log(searchTextField.value);
    searchTextField.value = '';
    carousel.classList.add('carousel-content-colapse');
    carousel.classList.remove('carousel-content');
  }
});

searchButton.addEventListener('click', (e) => {
  console.log(searchTextField.value);
  searchTextField.value = '';
});
