import { searchImages } from './js/pixabay-api';
import { createGalaryMatkup } from './js/render-functions';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const form = document.querySelector('.search-form');
const loader = document.querySelector('.loader-wrapper');

const url = new URL(window.location);
const searchParams = url.searchParams;
const query = searchParams.get('q');
const perPage = searchParams.get('per_page') ? searchParams.get('per_page') : 15

if (query) {
  fetchImage(query)
}



form.addEventListener('submit', (evt => {
  evt.preventDefault();

  const formData = new FormData(form);
  const query = formData.get('query').trim();

  if(query.length < 1) {
    iziToast.error({
      title: 'Error',
      position: 'topRight',
      message: 'Query field cannot be empty!',
    });
    return;
  }

  url.searchParams.set('q', query);
  url.searchParams.set('per_page', perPage)
  window.history.pushState({}, '', url);
  
  fetchImage(query, perPage);

}));

function fetchImage (query, perPage) {
  

  loader.classList.add('show');

  const response = searchImages(query, perPage)
    .then(data => {
      loader.classList.remove('show');

      if (data.hits.length < 1) {
        iziToast.error({
          title: 'Error',
          position: 'topRight',
          message:
            'Sorry, there are no images matching your search query. Please try again!',
        });
      }
      createGalaryMatkup(data.hits);
    })
    .catch(err => {
      loader.classList.remove('show');
      iziToast.error({
        title: 'Error',
        position: 'topRight',
        message: 'Failed to load images. Please try again!',
      });
    });
}