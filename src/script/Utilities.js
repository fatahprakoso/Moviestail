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
}

// console.log(getCards('batman').then((e) => e));
getCards('batman').then((e) => {
  console.log(e);
});
