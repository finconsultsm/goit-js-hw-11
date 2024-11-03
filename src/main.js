import { searchImages } from './js/pixabay-api';
import { createGalaryMatkup } from './js/render-functions';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const form = document.querySelector('.search-form');
const loader = document.querySelector('.loader-wrapper');

form.addEventListener('submit', evt => {
  evt.preventDefault();

  const formData = new FormData(form);
  const query = formData.get('query');

  loader.classList.add('show');

  const response = searchImages(query)
    .then(data => {
      loader.classList.remove('show');

      if (data.hits.length < 1) {
        iziToast.error({
          title: 'Error',
          position: 'topRight',
          message:
            'Sorry, there are no images matching your search query. Please try again!',
        });
        return;
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
});
