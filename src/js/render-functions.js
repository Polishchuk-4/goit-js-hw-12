export default function createGallery(images) {
  const gallery = document.querySelector('.gallery');

  const imgHtmlElems = images
    .map(elem => {
      return `
        <li class="gallery-item">
          <a class="gallery-link" href="${elem.largeImageURL}">
            <img class="gallery-img" src="${elem.webformatURL}" alt="${elem.tags}">
          </a>
          <ul class="info">
            <li class="info-item">
              <h2 class="info-title">Likes</h2>
              <p class="info-value">${elem.likes}</p>
            </li>
            <li class="info-item">
              <h2 class="info-title">Views</h2>
              <p class="info-value">${elem.views}</p>
            </li>
            <li class="info-item">
              <h2 class="info-title">Comments</h2>
              <p class="info-value">${elem.comments}</p>
            </li>
            <li class="info-item">
              <h2 class="info-title">Downloads</h2>
              <p class="info-value">${elem.downloads}</p>
            </li>
          </ul>
        </li>`;
    })
    .join('');
  gallery.innerHTML = imgHtmlElems;
}
