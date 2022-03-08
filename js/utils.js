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

const getRandomComment = (mesArray) => {
  const message = mesArray[getRandomNum(0, mesArray.length-1)];
  if (getMaxStringLength(message, 140)) {
    return message;
  }
  return message;
};

const getAvatarNumber = (num) => `img/avatar-${num}.svg`;

export {getRandomNum, getRandomComment, getAvatarNumber};
