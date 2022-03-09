const messages = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];

const names = [
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

const getMaxStringLength = (string, length) => string.length <= length;

const getRandomComment = (mesArray, quantity) => {
  const array = [];
  for (let i=0; i<mesArray.length; i++) {
    if (getMaxStringLength(mesArray[i], 140)) {
      array[i] =  mesArray[i];
      if (array.length === quantity) {
        break;
      }
    }
  }
  return array;
};

const getAvatarNumber = (num) => `img/avatar-${num}.svg`;

const getCommentObject = (idNum) => {
  const commentObject = {
    id: idNum,
    avatar:getAvatarNumber(getRandomNum(1, 6)),
    message: getRandomComment(messages , getRandomNum(0, messages.length-1)),
    name: names[getRandomNum(0, names.length-1)]
  };
  return commentObject;
};

const getComments = (randomNum) => {
  const objArray = [];
  objArray.length = randomNum;
  for (let i = 0; i < objArray.length; i++) {
    objArray[i] = getCommentObject(i+1);
  }
  return objArray;
};

export {getComments, getRandomNum};
