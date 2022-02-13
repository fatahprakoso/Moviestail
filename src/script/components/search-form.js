import { displayCards } from '../Utilities';

const searchTextField = document.getElementById('search-text-field');
const searchButton = document.getElementById('search-button');

searchTextField.addEventListener('keyup', (e) => {
  if (e.key === 'Enter') {
    displayCards();
  }
});

searchButton.addEventListener('click', () => {
  displayCards();
});
