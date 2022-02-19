
const getRandomNum = function(from, to) {
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
const getMaxStringLength = function(string, length) {
  return string.length <= length;
};
// Проверка работы функции
const comment = 'Это тестовый комментарий, не обращайте внимания. Повторяю! Это тестовый комментарий';
const commentLength = 200;
if (getMaxStringLength(comment, commentLength)) {
  console.log('Отличный комментарий!');
}
else {
  console.log('Нужно меньше слов и больше дела!');
}

getRandomNum(10, 8);
