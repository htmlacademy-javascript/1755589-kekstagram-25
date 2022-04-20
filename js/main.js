import {toRenderPhotos} from './mini.js';
import './upload.js';
import './form.js';
import './modify-pic.js';
import {getData} from './api.js';
import {setData} from './full-size.js';
import {setDataFilters} from './filter-photos.js';

const URL = 'https://25.javascript.pages.academy/kekstagram/data';


getData(
  URL,
  (data) => {
    toRenderPhotos(data);
    setData(data);
    setDataFilters(data);
  },
);

