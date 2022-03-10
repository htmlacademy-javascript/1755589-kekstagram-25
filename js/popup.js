import {createPhotos} from './mock.js';

const usersPictures = createPhotos();
const template = document.querySelector('#picture').content;
const pictureFragment = document.createDocumentFragment();
const pictures = document.querySelector('.pictures');
usersPictures.forEach((element) => {
  const userPicture = template.cloneNode(true);
  userPicture.querySelector('.picture__img').src = element.url;
  userPicture.querySelector('.picture__comments').value = element.comments;
  userPicture.querySelector('.picture__likes').value = element.likes;
  pictureFragment.appendChild(userPicture);
});
pictures.appendChild(pictureFragment);
