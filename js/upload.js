import {isEscPressed} from './utils.js';

const pictures = document.querySelector('.pictures');
const uploadFile = pictures.querySelector('#upload-file');
const uploadCancel = pictures.querySelector('#upload-cancel');

uploadFile.addEventListener('change', () => {
  const uploadPreview = pictures.querySelector('.img-upload__preview').children;
  const userPhoto = uploadFile.files[0];
  uploadPreview[0].src = URL.createObjectURL(userPhoto);
  if (userPhoto) {
    pictures.querySelector('.img-upload__overlay').classList.remove('hidden');
  }
  document.getElementsByTagName('body')[0].classList.add('modal-open');
});


uploadCancel.addEventListener('click', () => {
  pictures.querySelector('.img-upload__overlay').classList.add('hidden');
  document.getElementsByTagName('body')[0].classList.remove('modal-open');
});

document.addEventListener('keydown', (evt) => {
  if(isEscPressed(evt)) {
    pictures.querySelector('.img-upload__overlay').classList.add('hidden');
    document.getElementsByTagName('body')[0].classList.remove('modal-open');
  }
});
