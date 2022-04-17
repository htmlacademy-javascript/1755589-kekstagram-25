import './mock.js';
import {toRenderPhotos} from './mini.js';
import './upload.js';
import './form.js';
import './modify-pic.js';
import {getData} from './api.js';
import {setData} from './full-size.js';
import { showErrorMessage } from './utils.js';
import {setDataFilters} from './filter-photos.js';

// URL сервера
const URL = 'https://25.javascript.pages.academy/kekstagram/data';


// Функции добавления фото на сайт и рендера большого фото, а также фильтр используют данные полученные с сервера
getData(
  URL,
  (data) => {
    toRenderPhotos(data);
    setData(data);
    setDataFilters(data);
  },
  showErrorMessage('Ой, что-то сломалось. Сейчас исправим')
);

