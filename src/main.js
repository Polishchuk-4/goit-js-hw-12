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
    page = 1;
    return;
  }

  gallery.innerHTML = '';
  hideFetchMorePostsBtn();
  showLoadingIndicator();
  currentValueImageSearchInput = imageSearchInput.value;

  try {
    let values = await fetchURL(imageSearchInput.value, page, per_page);

    hideLoadingIndicator();
    if (values.totalHits < per_page) {
      iziToastInfo(
        'Sorry, there are no images matching your search query. Please try again!'
      );
      return;
    }
    createGallery(values.hits);
    gallerySimpleLightbox.refresh();

    checkValueCounts(values.hits.length, values.totalHits);
  } catch (er) {
    console.log(er);
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
    });
});
function scrollToLastAddedCard() {
  const lastCard = gallery.lastElementChild;
  if (lastCard) {
    const rect = lastCard.getBoundingClientRect();
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const scrollLeft =
      window.pageXOffset || document.documentElement.scrollLeft;
    const scrollByY = rect.top + scrollTop - window.pageYOffset;
    const scrollByX = rect.left + scrollLeft - window.pageXOffset;

    window.scrollBy({
      top: scrollByY,
      left: scrollByX,
      behavior: 'smooth',
    });
  }
}

function checkValueCounts(values, totalValues) {
  if (values >= per_page && totalValues > gallery.childElementCount) {
    page += 1;
    showFetchMorePostsBtn();
  } else {
    iziToastInfo("We're sorry, but you've reached the end of search results.");
    hideFetchMorePostsBtn();
  }
}

// seed: sdk

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
