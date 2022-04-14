import {createPhotos} from './mock.js';
import { isEscPressed } from './utils.js';

const COMMENTS_LIMIT = 5;
const userPicture = createPhotos();
const pictureContainer = document.querySelector('.pictures');
const bigPicture = document.querySelector('.big-picture');

const renderPopup = (data) => {
  bigPicture.classList.remove('hidden');
  bigPicture.querySelector('.big-picture__img').children[0].src = data.url;
  bigPicture.querySelector('.likes-count').textContent = data.likes;
  bigPicture.querySelector('.comments-count').textContent = data.comments.length;
  bigPicture.querySelector('.social__header').querySelector('.social__caption').textContent = data.description;

  const socialCommentButton = bigPicture.querySelector('.social__comments-loader');
  //const comment = bigPicture.querySelector('.social__comments').children;

  const toHideLoadButton = () => {
    socialCommentButton.classList.add('hidden');
  };
  const renderComments = (item) => {
    item.forEach(({ avatar, message, name }) => {
      const popupCommentClone = document.querySelector('.social__comment');
      const socialComments = bigPicture.querySelector('.social__comments');
      const popupComment = popupCommentClone.cloneNode(true);
      const author = popupComment.querySelector('.social__picture');
      const commentText = popupComment.querySelector('.social__text');
      author.src = avatar;
      author.alt = name;
      commentText.textContent = message;
      socialComments.appendChild(popupComment);
    });
  };
  const onUploadButtonClick = () => {
    const commentsArray = data.comments;
    if (commentsArray.length <= COMMENTS_LIMIT) {
      toHideLoadButton();
      console.log(commentsArray);
    }
    renderComments(commentsArray.splice(0, COMMENTS_LIMIT));
    //getCommentsCount();
  };
  onUploadButtonClick();

};


const getTargetData = (evt) => {
  const targetId = evt.target.getAttribute('data-id');
  const targetData = targetId && userPicture.find((i) => i.id === parseInt(targetId, 10));
  const data = targetData && renderPopup(targetData);
  return data;
};

pictureContainer.addEventListener('click', (evt) => {
  getTargetData(evt);
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
