const pictures = document.querySelector('.pictures');
const hashtag = pictures.querySelector('.text__hashtags');

const pristine = new Pristine(hashtag);
hashtag.addEventListener('input', () => {
  if (hashtag.value === /^#[A-Za-zА-Яа-яЁё0-9]{1-19}$/) {
    pristine.validate();
  }
  if (hashtag.value[0] !== '#') {
    hashtag.setCustomValidity('Хэштег должен начинаться с #');
  }
  else {
    hashtag.setCustomValidity('');
  }
  hashtag.reportValidity();

  for (let i = 1; i < hashtag.value.length; i++) {
    if (hashtag.value[i] === /[A-Za-zА-Яа-яЁё0-9]/) {
      hashtag.setCustomValidity('');
    }
    else {
      hashtag.setCustomValidity('Хэштег может содержать только буквы и цифры');
    }
    hashtag.reportValidity();
  }
  if (hashtag.value.length < 20) {
    hashtag.setCustomValidity('');
  }
  else {
    hashtag.setCustomValidity('Хэштег не может содержать более 20 символов');
  }
  hashtag.reportValidity();
});

const comment = pictures.querySelector('.text__description');
comment.addEventListener('input', () => {
  if (comment.value.length > 140) {
    comment.setCustomValidity('Комментарий не может быть более 140 символов');
  }
  else {
    comment.setCustomValidity('');
  }
  comment.reportValidity();
});
