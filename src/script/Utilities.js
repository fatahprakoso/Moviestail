async function getCards(searchText, page = 1) {
  const data = await fetch(`http://www.omdbapi.com/?apikey=b206be1f&s=${searchText}&page=${page}`)
    .then((r) => r.json())
    .catch((e) => console.error(e))
    .finally(() => console.log('finally'));

  let cardsElement = '';
  data.Search.forEach((c) => {
    cardsElement += `
      <div class="card movie-card">
        <img
          src="${c.Poster}"
          class="card-img-top movie-card-img"
          alt=""
        />
        <div class="card-body">
          <h4 class="card-title">
            ${c.Title.length < 17 ? c.Title : `${c.Title.substring(0, 13)}...`}
          </h4>
          <h6 class="card-subtitle mb-3">${c.Year}, ${c.Type}</h6>
          <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
      </div>
        `;
  });

  return cardsElement;
}

const cards = document.getElementById('cards');

function displayCards() {
  const searchTextField = document.getElementById('search-text-field');
  const searchButton = document.getElementById('search-button');
  const carouselContainer = document.querySelector('.carousel-header');
  const searchForm = document.querySelector('.search-form');

  if (searchTextField.value.length > 0) {
    searchForm.classList.add('search-form-colapse');

    if (searchButton || carouselContainer) {
      carouselContainer.classList.add('carousel-container-colapse');
      searchButton.classList.add('search-btn-colapse');
      setTimeout(() => {
        searchButton.remove();
      }, 600);
    }

    setTimeout(() => {
      carouselContainer.remove();
    }, 1000);

    setTimeout(() => {
      const movieCards = document.querySelectorAll('.movie-card');
      let counter = 0;
      movieCards.forEach((card) => {
        counter += 100;
        setTimeout(() => {
          card.classList.add('movie-card-transition');
        }, counter);
      });
    }, 1000);

    getCards(searchTextField.value).then((cardsElement) => {
      cards.innerHTML = cardsElement;
    });

    searchTextField.value = '';
  }
}

export { getCards, displayCards };
