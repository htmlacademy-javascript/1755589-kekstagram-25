const MESSAGEARRAY = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'];

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

const getRandomNum = (from, to) => {
  if (from < to) {
    return Math.abs(Math.floor(Math.random() * (to - from + 1) + from));
  }
  else if (from > to) {
    return Math.abs(Math.floor(Math.random() * (from - to + 1) + to));
  }
  else if (from === to){
    return to;
  }
};

const getIdNumber = (num) => num;

const getMaxStringLength = function(string, length) {
  return string.length <= length;
};

const getRandomComment = (mesArray, quantity) => {
  const array = [];
  for (let i=0; i<mesArray.length; i++) {
    array[i] = getMaxStringLength(mesArray[i], 140) ;
    if (array.length === quantity) {
      break;
    }
  }
  return array;
};

const getAvatarNumber = (num) => `img/avatar-${num}.svg`;

const getCommentObject = (idNum) => {
  const commentObject = {
    id: getIdNumber(idNum),
    avatar:getAvatarNumber(getRandomNum(1, 6)),
    message: getRandomComment(MESSAGEARRAY , getRandomNum(0, MESSAGEARRAY.length-1)),
    name: NAMES[getRandomNum(0, NAMES.length-1)]
  };
  return commentObject;
};

const getCommentArray = (randomNum) => {
  const objArray = [];
  objArray.length = randomNum;
  for (let i = 0; i < objArray.length; i++) {
    objArray[i] = getCommentObject(i+1);
  }
  return objArray;
};

const getPhotoNumber = (num) => `photos/${num}.jpg`;

const createPhotosObject = (idNum, urlNum) => {
  const photoObject = {
    id: getIdNumber(idNum),
    url: getPhotoNumber(urlNum),
    description: 'Описание',
    likes: getRandomNum(15, 200),
    comments:getCommentArray(getRandomNum(1, 25))
  };
  return photoObject;
};

const createPhotosArray = () => {
  const photosArray = [];
  for (let i = 0; i < 25; i++) {
    photosArray[i] = createPhotosObject(i+1, i+1);
  }
  return photosArray;
};

createPhotosArray();
