import {getRandomNum, getComments} from './util.js';

const createPhotosObject = (idNum, urlNum) => {
  const photoObject = {
    id: idNum,
    url: `photos/${urlNum}.jpg`,
    description: 'Описание',
    likes: getRandomNum(15, 200),
    comments:getComments(getRandomNum(1, 25))
  };
  return photoObject;
};

const createPhotos = () => {
  const photosArray = [];
  for (let i = 0; i < 25; i++) {
    photosArray[i] = createPhotosObject(i+1, i+1);
  }
  return photosArray;
};

export {createPhotos};
