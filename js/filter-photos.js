import {getRandomNum} from './utils.js';
import {toRenderPhotos} from './mini.js';

let collection = [];
const setDataFilters = (data) => {
  collection = data;
};

const filterDefault = document.querySelector('.filter-default');

filterDefault.addEventListener('click', ()=> {
  toRenderPhotos(collection);
});

const filterDiscussed = document.querySelector('.filter-discussed');

const getMaxCommentsLength = () => {
  let array = [];
  return function () {
    array = collection.comments.length.sort((a, b) => (a - b));
    return array;
  };
};

const arrayDiscussedElements = getMaxCommentsLength();

filterDiscussed.addEventListener('click', () => {
  const picture = document.querySelectorAll('.picture');
  picture.forEach((element) => {
    element.remove();
  });
  toRenderPhotos(arrayDiscussedElements);
});

const filterRandom = document.querySelector('#filter-random');

const getRandomPhotos = () => {
  for (let i = 0; i < collection.length; i++) {
    const currentValue = collection[getRandomNum(0, collection.length-1)];
    collection[i] = currentValue;
    return collection;
  }
  return collection;
};

const arrayRandomUniqueElements = getRandomPhotos().splice(0, 10);

filterRandom.addEventListener('click', () =>  {
  const picture = document.querySelectorAll('.picture');
  picture.forEach((element) => {
    element.remove();
  });
  toRenderPhotos(arrayRandomUniqueElements);
});

export {setDataFilters};
