import Pagination from 'tui-pagination';
import 'tui-pagination/dist/tui-pagination.css';

const imageList = document.querySelector('.image-list');

const container = document.getElementById('pagination');

const BASE_URl = 'https://pixabay.com/api/';
const API_KEY = 'key=24332293-f673b61ccd63539823a678f1a';
const PER_PAGE = 10;

const options = {
  totalItems: 10,
  itemsPerPage: PER_PAGE,
  visiblePages: 7,
  page: 1,
};

const pagination = new Pagination(container, options);

const page = pagination.getCurrentPage();
console.log(page);
fetchImages(page).then(({ images, total }) => {
  renderImages(images);
  pagination.reset(total);
});

function fetchImages(page) {
  const url = `${BASE_URl}?${API_KEY}&q=city&image_type=photo&orientation=horizontal&safesearch=true&per_page=${PER_PAGE}&page=${page}`;
  return fetch(url)
    .then(response => {
      if (!response.ok) {
        throw new Error(response.status);
      }
      return response.json();
    })
    .then(data => ({ images: data.hits, total: data.totalHits }));
}

function renderImages(images) {
  const markup = images
    .map(
      ({ webformatURL, largeImageURL, tags, likes, views, comments, downloads }) =>
        `<a href="${largeImageURL}">
        <div class="photo-card">
          <div class="thumb">
      <img src="${webformatURL}" alt="${tags}" loading="lazy" />
      </div>
      <div class="info">
        <p class="info-item">
          <b>Likes</b>
          <span>${likes}</span>
        </p>
        <p class="info-item">
          <b>Views</b>
          <span>${views}</span>
        </p>
        <p class="info-item">
          <b>Comments</b>
          <span>${comments}</span>
        </p>
        <p class="info-item">
          <b>Downloads</b>
          <span>${downloads}</span>
        </p>
      </div>
    </div>
    </a>`,
    )
    .join('');

  imageList.insertAdjacentHTML('beforeend', markup);
}

pagination.on('afterMove', ({ page }) => {
  fetchImages(page).then(({ images }) => {
    renderImages(images);
  });
});
