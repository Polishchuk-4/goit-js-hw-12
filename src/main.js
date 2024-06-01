import fetchURL from './js/pixabay-api';
import createGallery from './js/render-functions';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const form = document.querySelector('form');
const imageSearchInput = document.querySelector('input');
let currentValueImageSearchInput;
const gallerySimpleLightbox = new SimpleLightbox('.gallery a');
const loader = document.querySelector('.loader');
const gallery = document.querySelector('.gallery');
const fetchMorePostsBtn = document.querySelector('.fetchMorePostsBtn');

let page = 1;
const per_page = 15;

form.addEventListener('submit', async event => {
  event.preventDefault();
  if (
    currentValueImageSearchInput === imageSearchInput.value ||
    imageSearchInput.value === ''
  ) {
    iziToastInfo('Please, enter another request');
    return;
  }
  page = 1;
  gallery.innerHTML = '';
  hideFetchMorePostsBtn();
  showLoadingIndicator();

  currentValueImageSearchInput = imageSearchInput.value;

  try {
    let values = await fetchURL(imageSearchInput.value, page, per_page);
    console.log(values);

    hideLoadingIndicator();

    if (values.hits.length == 0) {
      checkValueCounts(values.hits.length, values.totalHits);
      return;
    }

    createGallery(values.hits);
    gallerySimpleLightbox.refresh();

    scrollToLastAddedCard();
    checkValueCounts(values.hits.length, values.totalHits);

    console.log('-- ' + page);
  } catch (er) {
    console.log(er);
    iziToastInfo(
      'An error occurred while fetching images. Please try again later.'
    );
  }
});

fetchMorePostsBtn.addEventListener('click', () => {
  fetchURL(imageSearchInput.value, page, per_page)
    .then(response => {
      createGallery(response.hits);
      gallerySimpleLightbox.refresh();
      scrollToLastAddedCard();

      checkValueCounts(response.hits.length, response.totalHits);
    })
    .catch(er => {
      console.log(er);
      iziToastInfo(
        'An error occurred while fetching more images. Please try again later.'
      );
    });
});
function scrollToLastAddedCard() {
  const lastCard = gallery.lastElementChild;
  if (lastCard) {
    const rect = lastCard.getBoundingClientRect();

    window.scrollBy({
      top: rect.width * 2,
      behavior: 'smooth',
    });
  }
}

function checkValueCounts(values, totalValues) {
  if (values >= per_page && totalValues > per_page) {
    page += 1;
    showFetchMorePostsBtn();
  } else {
    hideFetchMorePostsBtn();
    iziToastInfo("We're sorry, but you've reached the end of search results.");
  }
}

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
function showFetchMorePostsBtn() {
  fetchMorePostsBtn.style.display = 'block';
}
function hideFetchMorePostsBtn() {
  fetchMorePostsBtn.style.display = 'none';
}
