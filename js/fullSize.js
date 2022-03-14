import {createPhotos} from './mock.js';
const userPicture = createPhotos();

window.addEventListener('load', () => {
  const picture = document.querySelectorAll('.picture');
  const bigPicture = document.querySelector('.big-picture');
  for (let i = 0; i < picture.length; i++) {
    picture[i].addEventListener('click', () => {
      bigPicture.classList.remove('hidden');
      bigPicture.querySelector('.big-picture__img').children[0].src = userPicture[i].url;
      bigPicture.querySelector('.likes-count').textContent = userPicture[i].likes;
      bigPicture.querySelector('.comments-count').textContent = userPicture[i].comments.length;
      bigPicture.querySelector('.social__header').querySelector('.social__caption').textContent = userPicture[i].description;
      bigPicture.querySelector('.social__comment-count').classList.add('hidden');
      bigPicture.querySelector('.comments-loader').classList.add('hidden');

      const userComments = userPicture[i].comments;
      const comment = bigPicture.querySelector('.social__comments').children;
      for (let j = 0; j < comment.length; j++) {
        comment[j].querySelector('.social__picture').src = userComments[j].avatar;
        comment[j].querySelector('.social__picture').alt = userComments[j].name;
        comment[j].querySelector('.social__text').textContent = userComments[j].message;
      }
    });
  }
  const cancelBigPicture = bigPicture.querySelector('.cancel');
  cancelBigPicture.addEventListener('click', () => {
    bigPicture.classList.add('hidden');
  });
  window.addEventListener('keydown', (evt) => {
    if (evt.key === 'Escape') {
      bigPicture.classList.add('hidden');
    }
  });
});

