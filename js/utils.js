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

export {getRandomNum, getMaxStringLength};
