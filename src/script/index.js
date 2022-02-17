/* eslint-disable import/no-unresolved */

import '../scss/min.scss';
import './components/search-form';

window.onscroll = () => {
  if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
    if (document.getElementById('spinner') === null) {
      console.log('bottom');
      const spinner = document.createElement('div');
      spinner.innerHTML = `
      <div class="text-center" id="spinner" style="margin-bottom: 1rem">
        <div class="spinner-border" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
      </div>`;
      document.getElementById('main-content').appendChild(spinner);
    }
  }
};
