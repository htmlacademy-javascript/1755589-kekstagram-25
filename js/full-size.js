
import { isEscPressed } from './utils.js';

const COMMENTS_LIMIT = 5;

const pictureContainer = document.querySelector('.pictures');
const bigPicture = document.querySelector('.big-picture');

const bigPhoto = document.querySelector('.big-picture');
const commentsLoaderButton = bigPhoto.querySelector('.social__comments-loader');
const popupComments = bigPhoto.querySelector('.social__comments');
const popupCommentClone = popupComments.querySelector('.social__comment').cloneNode(true);
const commentsShownCount = document.querySelector('.comments-show');

const toHideLoadButton = () => {
  commentsLoaderButton.classList.add('hidden');
};

let commentsArray = [];

const isCommentsLengthLessLimit = () => {
  if (commentsArray.length <= COMMENTS_LIMIT) {
    toHideLoadButton();
  }
};

const renderComments = (item) => {
  item.forEach(({ avatar, message, name }) => {
    const popupComment = popupCommentClone.cloneNode(true);
    const author = popupComment.querySelector('.social__picture');
    const commentText = popupComment.querySelector('.social__text');
    author.src = avatar;
    author.alt = name;
    commentText.textContent = message;
    popupComments.appendChild(popupComment);
  });
};

const getCommentsCount = () => {
  const socialComments = document.querySelectorAll('.social__comment');

  commentsShownCount.textContent = socialComments.length;
};

const onUploadButtonClick = () => {
  if (commentsArray.length <= COMMENTS_LIMIT) {
    toHideLoadButton();
  }
  renderComments(commentsArray.splice(0, COMMENTS_LIMIT));
  getCommentsCount();
};

const renderPopup = (data) => {
  bigPicture.classList.remove('hidden');
  bigPicture.querySelector('.big-picture__img').children[0].src = data.url;
  bigPicture.querySelector('.likes-count').textContent = data.likes;
  bigPicture.querySelector('.comments-count').textContent = data.comments.length;
  bigPicture.querySelector('.social__header').querySelector('.social__caption').textContent = data.description;
  commentsArray = data.comments.slice();
  commentsLoaderButton.classList.remove('hidden');
  popupComments.innerHTML = '';
  renderComments(commentsArray.splice(0, COMMENTS_LIMIT));
  getCommentsCount();
  commentsLoaderButton.addEventListener('click', onUploadButtonClick);
};


let collection = [];

const setData = (data) => {
  collection = data;
};


const getTargetData = (evt) => {
  toHideLoadButton();
  const targetId = evt.target.getAttribute('data-id');
  const targetData = targetId && collection.find((i) => i.id === parseInt(targetId, 10));
  const data = targetData && renderPopup(targetData);
  return data;
};

pictureContainer.addEventListener('click', (evt) => {
  getTargetData(evt);
  isCommentsLengthLessLimit();
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

export {setData};
