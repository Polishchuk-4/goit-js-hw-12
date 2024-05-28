import fetchURL from './js/pixabay-api';
import createGallery from './js/render-functions';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const form = document.querySelector('form');
const imageSearchInput = document.querySelector('input');
const gallerySimpleLightbox = new SimpleLightbox('.gallery a');
const loader = document.querySelector('.loader');
const gallery = document.querySelector('.gallery');

form.addEventListener('submit', event => {
  event.preventDefault();
  if (imageSearchInput.value === '') {
    iziToastInfo('Please, enter the query value');
    return;
  }
  gallery.innerHTML = '';
  showLoadingIndicator();
  fetchURL(imageSearchInput.value)
    .then(values => {
      hideLoadingIndicator();
      if (values.totalHits == 0) {
        iziToastInfo(
          'Sorry, there are no images matching your search query. Please try again!'
        );
        return;
      }
      createGallery(values.hits);
      gallerySimpleLightbox.refresh();
    })
    .catch(error => {
      iziToastInfo('Server is not responding. Please try again later.');
      console.log('--Error:--', error);
    });
});

function iziToastInfo(message) {
  iziToast.info({
    timeout: 2000,
    position: 'topRight',
    message: `${message}`,
  });
}

function showLoadingIndicator() {
  loader.style.display = 'block';
}

function hideLoadingIndicator() {
  loader.style.display = 'none';
}
