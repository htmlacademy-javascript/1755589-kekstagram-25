import {createPhotos} from './mock.js';
import { isEscPressed } from './utils.js';

const userPicture = createPhotos();

const pictureContainer = document.querySelector('.pictures');
const bigPicture = document.querySelector('.big-picture');

const renderPopup = (data) => {
  bigPicture.classList.remove('hidden');
  bigPicture.querySelector('.big-picture__img').children[0].src = data.url;
  bigPicture.querySelector('.likes-count').textContent = data.likes;
  bigPicture.querySelector('.comments-count').textContent = data.comments.length;
  bigPicture.querySelector('.social__header').querySelector('.social__caption').textContent = data.description;
  bigPicture.querySelector('.social__comment-count').classList.add('hidden');
  bigPicture.querySelector('.comments-loader').classList.add('hidden');

  const userComments = data.comments;
  const comment = bigPicture.querySelector('.social__comments').children;
  for (let j = 0; j < comment.length; j++) {
    comment[j].querySelector('.social__picture').src = userComments[j].avatar;
    comment[j].querySelector('.social__picture').alt = userComments[j].name;
    comment[j].querySelector('.social__text').textContent = userComments[j].message;
  }
};

const getTargenData = (evt) => {
  const targetId = evt.target.getAttribute('data-id');
  const targetData = targetId && userPicture.find((i) => i.id === parseInt(targetId, 10));
  const data = targetData && renderPopup(targetData);
  return data;
};

pictureContainer.addEventListener('click', (evt) => {
  getTargenData(evt);
});

const cancelBigPicture = bigPicture.querySelector('.cancel');
cancelBigPicture.addEventListener('click', () => {
  bigPicture.classList.add('hidden');
});
window.addEventListener('keydown', (evt) => {
  if (isEscPressed(evt)) {
    bigPicture.classList.add('hidden');
  }
});
document.getElementsByTagName('body')[0].classList.add('modal-open');
