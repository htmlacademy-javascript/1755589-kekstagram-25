const pictures = document.querySelector('.pictures');
const hashtag = pictures.querySelector('.text__hashtags');
const formButton = pictures.querySelector('.img-upload__submit');

const disableFormButton = () => (formButton.disabled = true);
const getHashtagsArray = (string) => string.split(' ').map((item) => item.toLowerCase());
const checkHashtagValue = (str, prstn) => {
  let stringArray = [];
  for (let i = 1; i < str.length; i++) {
    if (str.includes('#', i) && str.length <=20) {
      prstn.validate();
      stringArray = str;
    }
    else {
      disableFormButton();
    }
  }
  return getHashtagsArray(stringArray);
};

const pristine = new Pristine(hashtag);

hashtag.addEventListener('input', ()=> {
  const str = hashtag.value;
  const hashtagValue = checkHashtagValue(str, pristine);
  const re = /^#[A-Za-zА-Яа-яЁё0-9]{1-19}$/;
  const checkHashtagValidation = (array) => array.every((item) => re.test(item));
  if (checkHashtagValidation(hashtagValue)) {
    pristine.validate();
  }
  else {
    disableFormButton() ;
  }
});
