const setSmaller = document.querySelector('.scale__control--smaller');
const setBigger = document.querySelector('.scale__control--bigger');
const scaleValue = document.querySelector('.scale__control--value');
const uploadPreview = document.querySelector('.img-upload__preview');

scaleValue.value = '100%';
let currentStep = 100;
const SCALE_CONTROL_STEP = 25;
const SCALE_STEP_MIN = 25;
const SCALE_STEP_MAX = 100;

const onScaleControlsClick = (evt) => {
  const target = evt.target;
  if (target === setSmaller && currentStep > SCALE_STEP_MIN) {
    currentStep -= SCALE_CONTROL_STEP;
  }
  if (target === setBigger && currentStep < SCALE_STEP_MAX) {
    currentStep += SCALE_CONTROL_STEP;
  }
  scaleValue.value = `${currentStep}%`;
  uploadPreview.style.transform = `scale(${currentStep * 0.01})`;
};

setSmaller.addEventListener('click', onScaleControlsClick);
setBigger.addEventListener('click', onScaleControlsClick);
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
