const ALERT_SHOW_TIME = 10000;

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

const showErrorMessage = (message) => {
  const alertContainer = document.createElement('div');
  alertContainer.style.zIndex = 100;
  alertContainer.style.position = 'absolute';
  alertContainer.style.left = 0;
  alertContainer.style.top = 0;
  alertContainer.style.right = 0;
  alertContainer.style.padding = '10px 3px';
  alertContainer.style.fontSize = '30px';
  alertContainer.style.textAlign = 'center';
  alertContainer.style.backgroundColor = 'red';

  alertContainer.textContent = message;

  document.body.append(alertContainer);

  setTimeout(() => {
    alertContainer.remove();
  }, ALERT_SHOW_TIME);
};

const showSuccessMessage = (message) => {
  const templateMessage = document.querySelector('#success').content;
  const messageSuccess = templateMessage.cloneNode(true);
  const success = messageSuccess.querySelector('.success__inner');
  success.querySelector('.success__title').textContent = message;
  document.body.append(success);
  return success;
};

const showPostErrorMessage = (message) => {
  const templateMessage = document.querySelector('#error').content;
  const messageError = templateMessage.cloneNode(true);
  const err = messageError.querySelector('.error__inner');
  err.querySelector('.error__title').textContent = message;
  document.body.append(err);
  return err;
};
export {getRandomNum, isStringLengthMax, isEscPressed, showErrorMessage, showPostErrorMessage, showSuccessMessage};
