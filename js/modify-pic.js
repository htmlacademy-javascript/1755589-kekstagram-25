const setSmaller = document.querySelector('.scale__control--smaller');
const setBigger = document.querySelector('.scale__control--bigger');
const scaleValue = document.querySelector('.scale__control--value');
const uploadPreview = document.querySelector('.img-upload__preview');

scaleValue.value = '100%';
const valueSmallerArray = ['75%','50%','25%'];
const valueBiggerArray = ['25%','50%','75%','100%'];

const getSmallerScaleValue = (percent, value, style) => {
  setSmaller.addEventListener('click', () => {
    if (scaleValue.value === percent) {
      scaleValue.value = value;
      uploadPreview.style.transform = style;
    }
  });
  return scaleValue;
};
const getBiggerScaleValue = (percent, value, style) => {
  setBigger.addEventListener('click', () => {
    if (scaleValue.value === percent) {
      scaleValue.value = value;
      uploadPreview.style.transform = style;
    }
  });
  return scaleValue;
};

getSmallerScaleValue('50%', valueSmallerArray[2], 'scale(0.25)');
getSmallerScaleValue('75%', valueSmallerArray[1], 'scale(0.5)');
getSmallerScaleValue('100%', valueSmallerArray[0], 'scale(0.75)');
getBiggerScaleValue('75%', valueBiggerArray[3], 'scale(1)');
getBiggerScaleValue('50%', valueBiggerArray[2], 'scale(0.75)');
getBiggerScaleValue('25%', valueBiggerArray[1], 'scale(0.5)');


const effectButton = document.querySelectorAll('.effects__radio');
const sliderElement = document.querySelector('.effect-level__slider');
const valueElement = document.querySelector('.effect-level__value');

noUiSlider.create(sliderElement, {
  range: {
    min: 0,
    max: 100,
  },
  start: 80,
  step: 1,
  connect: 'lower',
});

sliderElement.noUiSlider.on('update', () => {
  valueElement.value = sliderElement.noUiSlider.get();
});
effectButton.forEach((element) => {
  element.addEventListener('click', () => {
    uploadPreview.classList.add(`effects__preview--${  element.value}`);
  });
});
