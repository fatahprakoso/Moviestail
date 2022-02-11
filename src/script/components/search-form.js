/* eslint-disable no-plusplus */
const searchTextField = document.getElementById('search-text-field');
const searchButton = document.getElementById('search-button');
const carouselContainer = document.querySelector('.carousel-header');
const searchForm = document.querySelector('.search-form');
const cards = document.getElementById('cards');

async function getCards(searchText) {
  const data = await fetch(`http://www.omdbapi.com/?apikey=b206be1f&s=${searchText}`)
    .then((r) => r.json())
    .catch((e) => console.log(e))
    .finally(() => {
      console.log('finally');
    });

  let cardsElement = '';
  data.Search.forEach((c) => {
    cardsElement += `
      <div class="card movie-card">
        <img src="${c.Poster}" class="card-img-top" alt="..." />
        <div class="card-body">
          <h4 class="card-title">${c.Title}</h4>
          <h6 class="card-subtitle mb-3">${c.Year}, ${c.Type}</h6>
          <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
      </div>
        `;
  });

  return cardsElement;
  // return data;
}

searchTextField.addEventListener('keyup', (e) => {
  if (e.key === 'Enter') {
    if (searchTextField.value.length > 0) {
    // do something

      carouselContainer.classList.add('carousel-container-colapse');
      searchForm.classList.add('search-form-colapse');
      searchButton.classList.add('search-btn-colapse');
      setTimeout(() => {
        searchButton.remove();
      }, 600);

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

      const card = document.createElement('div');
      getCards(searchTextField.value).then((cardsElement) => {
        card.innerHTML = cardsElement;
        // console.log(cardsElement);
        // console.log(searchTextField.value);
      });
      cards.appendChild(card);

      searchTextField.value = '';
    }
  }
});

searchButton.addEventListener('click', (e) => {
  if (searchTextField.value.length > 0) {
    // do something
    searchTextField.value = '';
    carouselContainer.classList.add('carousel-container-colapse');
    searchForm.classList.add('search-form-colapse');
    searchButton.classList.add('search-btn-colapse');
    setTimeout(() => {
      searchButton.remove();
    }, 600);

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

    for (let index = 0; index < 10; index++) {
      const card = document.createElement('div');
      card.innerHTML = `
      <div class="card movie-card">
          <img src="https://m.media-amazon.com/images/M/MV5BZjdkOTU3MDktN2IxOS00OGEyLWFmMjktY2FiMmZkNWIyODZiXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg
          " class="card-img-top" alt="..." />
          <div class="card-body">
            <h4 class="card-title">Card title</h4>
            <h6 class="card-subtitle mb-3">Card subtitle</h6>
            <a href="#" class="btn btn-primary">Go somewhere</a>
          </div>
      </div>
      `;

      cards.appendChild(card);
    }
  }
});
