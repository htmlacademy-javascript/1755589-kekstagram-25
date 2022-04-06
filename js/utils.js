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

const isStringLengthMax = (string, length) => string.length <= length;

const isEscPressed = (evt) => evt.key === 'Escape' || evt.keyCode === 27;

const stopPropagation = (evt) => {
  evt.stopPropagation();
};
export {getRandomNum, isStringLengthMax, isEscPressed, stopPropagation};
