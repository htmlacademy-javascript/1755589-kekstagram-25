import './full-size.js';

const template = document.querySelector('#picture').content;
const pictures = document.querySelector('.pictures');

export const toRenderPhotos = (photos) => {
  const pictureFragment = document.createDocumentFragment();
  photos.forEach((element) => {
    const userPicture = template.cloneNode(true);
    userPicture.querySelector('.picture__img').src = element.url;
    userPicture.querySelector('.picture__img').dataset.id = element.id;
    userPicture.querySelector('.picture__comments').textContent = element.comments.length;
    userPicture.querySelector('.picture__likes').textContent = element.likes;
    pictureFragment.appendChild(userPicture);
  });
  pictures.appendChild(pictureFragment);
};
