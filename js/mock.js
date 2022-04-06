import {getRandomNum, isStringLengthMax} from './utils.js';

const MESSAGES = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];

const NAMES = [
  'Иван',
  'Хуан Себастьян',
  'Мария',
  'Кристоф',
  'Виктор',
  'Юлия',
  'Люпита',
  'Вашингтон',
];

const getRandomComment = (mesArray) => {
  const message = mesArray[getRandomNum(0, mesArray.length-1)];
  if (isStringLengthMax(message, 140)) {
    return message;
  }
  return message;
};

const getCommentObject = (idNum) => ({
  id: idNum,
  avatar:`img/avatar-${getRandomNum(1, 6)}.svg`,
  message: getRandomComment(MESSAGES),
  name: NAMES[getRandomNum(0, NAMES.length-1)]
});

const getComments = (randomNum) => {
  const objArray = [];
  objArray.length = randomNum;
  for (let i = 0; i < objArray.length; i++) {
    objArray[i] = getCommentObject(i+1);
  }
  return objArray;
};

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
