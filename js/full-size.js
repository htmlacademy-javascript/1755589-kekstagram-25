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
    }
    renderComments(commentsArray.splice(0, COMMENTS_LIMIT));
    //getCommentsCount();
  };
  onUploadButtonClick();
  /*const userComments = data.comments.slice(0, 5);
  const comment = bigPicture.querySelector('.social__comments').children;
  const socialComments = bigPicture.querySelector('.social__comments');
  const removeElement = () => {
    for (let i = 0; i<comment.length; i++) {
      socialComments.removeChild(comment[i]);
    }
  };
  removeElement(comment);
  removeElement(comment);

  const commentFragment = document.createDocumentFragment();
  const setCommentElements = () => {
    const li = document.createElement('li');
    li.classList.add('social__comment');
    const img = document.createElement('img');
    li.appendChild(img);
    img.classList.add('social__picture');
    const p = document.createElement('p');
    li.appendChild(p);
    p.classList.add('social__text');
    img.setAttribute('src', 'src');
    img.setAttribute('alt', 'alt');
    commentFragment.appendChild(li);

    return commentFragment;
  };

  for (let j = 0; j<userComments.length; j++) {
    socialComments.appendChild(setCommentElements());
    comment[j].querySelector('.social__picture').src = userComments[j].avatar;
    comment[j].querySelector('.social__picture').alt = userComments[j].name;
    comment[j].querySelector('.social__text').textContent = userComments[j].message;
  }
  const socialCommentButton = bigPicture.querySelector('.social__comments-loader');
  socialCommentButton.addEventListener('click', () => {
    const userCommentsAddOn = data.comments.slice(0, 10);
    for (let j = 0; j<userCommentsAddOn.length; j++) {
      socialComments.appendChild(setCommentElements());
      comment[j].querySelector('.social__picture').src = userCommentsAddOn[j].avatar;
      comment[j].querySelector('.social__picture').alt = userCommentsAddOn[j].name;
      comment[j].querySelector('.social__text').textContent = userCommentsAddOn[j].message;
    }
  });
  */
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
