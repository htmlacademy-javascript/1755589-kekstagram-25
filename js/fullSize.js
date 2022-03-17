import {createPhotos} from './mock.js';

const userPicture = createPhotos();
const pictureContainer = document.querySelector('.pictures');
const bigPicture = document.querySelector('.big-picture');

pictureContainer.addEventListener('click', () => {
  const picture = pictureContainer.querySelectorAll('.picture');
  bigPicture.classList.remove('hidden');
  for (let i = 0; i < picture.length; i++) {
    bigPicture.querySelector('.big-picture__img').children[0].src = userPicture[i].url;
    bigPicture.querySelector('.likes-count').textContent = userPicture[i].likes;
    bigPicture.querySelector('.comments-count').textContent = userPicture[i].comments.length;
    bigPicture.querySelector('.social__header').querySelector('.social__caption').textContent = userPicture[i].description;
    bigPicture.querySelector('.social__comment-count').classList.add('hidden');
    bigPicture.querySelector('.comments-loader').classList.add('hidden');

    const userComments = userPicture[i].comments;
    //console.log(userComments);
    const comment = bigPicture.querySelector('.social__comments').children;
    for (let j = 0; j < comment.length; j++) {
      comment[j].querySelector('.social__picture').src = userComments[j].avatar;
      comment[j].querySelector('.social__picture').alt = userComments[j].name;
      comment[j].querySelector('.social__text').textContent = userComments[j].message;
    }
  }
});

const cancelBigPicture = bigPicture.querySelector('.cancel');
cancelBigPicture.addEventListener('click', () => {
  bigPicture.classList.add('hidden');
});
window.addEventListener('keydown', (evt) => {
  if (evt.key === 'Escape') {
    bigPicture.classList.add('hidden');
  }
});
