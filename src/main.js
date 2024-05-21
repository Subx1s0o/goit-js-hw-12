import {
  pixApi,
  currentPage,
  perPage,
  setCurrentPage,
  getCurrentPage,
} from './js/pixabay-api.js';
import renderImages from './js/render-functions.js';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const form = document.querySelector('form');
const input = document.querySelector('input[data-search]');
const loader = document.querySelector('.loader-div');
const list = document.querySelector('.list');
const moreBtn = document.querySelector('.show-more');

let searchRemember = '';

form.addEventListener('submit', async e => {
  e.preventDefault();
  loader.style.visibility = 'visible';

  const search = input.value.trim();
  list.innerHTML = '';

  setCurrentPage(1);

  try {
    const data = await pixApi(search);
    searchRemember = search;
    const result = data.hits;
    const totalPages = Math.ceil(data.totalHits / perPage);

    if (result.length !== 0 && search !== '') {
      renderImages(result, list);

      totalPages > currentPage
        ? (moreBtn.style.visibility = 'visible')
        : (moreBtn.style.visibility = 'hidden');

      console.log(totalPages - currentPage);
    } else {
      iziToast.show({
        title: '❌',
        message:
          'Sorry, there are no images matching your search query. Please try again!',
        messageColor: 'white',
        backgroundColor: '#E25757',
        position: 'topRight',
      });
    }
  } catch (error) {
    console.error('Помилка при рендері картинок', error);
    moreBtn.style.visibility = 'hidden';
    iziToast.show({
      title: '❌',
      message: 'Sorry, check your internet connection!',
      messageColor: 'white',
      backgroundColor: '#E25757',
      position: 'topRight',
      timeout: 5000,
    });
  } finally {
    loader.style.visibility = 'hidden';

    e.target.reset();
  }
});

//button more
moreBtn.addEventListener('click', async () => {
  loader.style.visibility = 'visible';

  setCurrentPage(getCurrentPage() + 1);

  try {
    const data = await pixApi(searchRemember);
    const result = data.hits;
    renderImages(result, list);
    const totalPages = Math.ceil(data.totalHits / perPage);
    console.log(totalPages - currentPage);
    totalPages > currentPage
      ? (moreBtn.style.visibility = 'visible')
      : iziToast.show({
          title: '❌',
          message: "We're sorry, but you've reached the end of search results.",
          messageColor: 'white',
          backgroundColor: '#E25757',
          position: 'topRight',
          timeout: 5000,
        });
  } catch (error) {
    console.error('Помилка при рендері картинок', error);

    iziToast.show({
      title: '❌',
      message: 'Sorry, check your internet connection!',
      messageColor: 'white',
      backgroundColor: '#E25757',
      position: 'topRight',
      timeout: 5000,
    });
  } finally {
    loader.style.visibility = 'hidden';
  }
});
