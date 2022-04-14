import { sendData } from './api.js';
import { showPostErrorMessage, showSuccessMessage } from './utils.js';

const pictures = document.querySelector('.pictures');
const imgUploadForm = pictures.querySelector('.img-upload__form');
const hashtag = pictures.querySelector('.text__hashtags');
const comments = pictures.querySelector('.text__description');
const pristine = new Pristine(imgUploadForm, {
  classTo: 'img-upload__text',
  errorTextParent: 'img-upload__text',
  errorTextTag: 'div',
  errorTextClass: 'img-upload__text-error',
}, true);
const re = /^#[A-Za-zА-Яа-яЁё0-9]{1,19}$/;
const isHashtagEqualedRegex = (array) => array.every((item) => re.test(item));
const getHashtagsArray = (string) => string.split(' ').map((item) => item.toLowerCase());
const isHashtagsSimilar = (array) => array.every((item) => array.indexOf(item) === array.lastIndexOf(item));
const isHashtagArrayLength = (array) => array.length <= 5;
const isCommentLength = (value) => value.length <= 140;

const getHashtagValidation = (array) => {
  const hashtagArray = getHashtagsArray(array);
  return isHashtagEqualedRegex(hashtagArray) && isHashtagsSimilar(hashtagArray) && isHashtagArrayLength(hashtagArray);
};
const getCommentValidation = (comment) =>  isCommentLength(comment);


pristine.addValidator(hashtag, getHashtagValidation, 'Хэштег невалидный');
pristine.addValidator(comments, getCommentValidation, 'Комментарий не может быть больше 140 символов');

const closeUserForm = () => {
  document.querySelector('.img-upload__overlay').classList.add('hidden');
};

const setUserFormPost = (onSuccess) => {
  imgUploadForm.addEventListener('submit', (evt) => {
    evt.preventDefault();
    const isValid = pristine.validate();
    if (isValid) {
      showSuccessMessage('Изображение успешно загружено');
      sendData(
        () => onSuccess(),
        () => showPostErrorMessage('Ой, что-то сломалось, сейчас мы все исправим'),
        new FormData(evt.target)
      );
    }
  });
};

setUserFormPost(closeUserForm);
