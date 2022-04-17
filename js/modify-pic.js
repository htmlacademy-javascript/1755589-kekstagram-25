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
const effectValue = document.querySelector('.effect-level__value');

noUiSlider.create(sliderElement, {
  range: {
    min: 0,
    max: 100,
  },
  start: 100,
  step: 1,
  connect: 'lower',
});


effectValue.value = 100;
sliderElement.noUiSlider.on('update', () => {
  effectValue.value = sliderElement.noUiSlider.get();
  effectButton.forEach((element) => {
    element.addEventListener('click', (evt) => {
      if(element.value === 'chrome') {
        sliderElement.noUiSlider.updateOptions({
          range: {
            min: 0,
            max: 1,
          },
          start: 1,
          step: 0.1,
        });
        uploadPreview.style.filter = `grayscale(${ evt.target.value  })`;
      }
      else if (element.value === 'sepia') {
        sliderElement.noUiSlider.updateOptions({
          range: {
            min: 0,
            max: 1,
          },
          start: 1,
          step: 0.1,
        });
        uploadPreview.style.filter = `sepia(${ evt.target.value  })`;
      }
      else if (element.value === 'marvin') {
        sliderElement.noUiSlider.updateOptions({
          range: {
            min: 0,
            max: 100,
          },
          start: 100,
          step: 1,
        });
        uploadPreview.style.filter = `invert(${ evt.target.value}%)`;
      }
      else if (element.value === 'phobos') {
        sliderElement.noUiSlider.updateOptions({
          range: {
            min: 0,
            max: 3,
          },
          start: 3,
          step: 0.1,
        });
        uploadPreview.style.filter = `blur(${ evt.target.value}px)`;
      }
      else if (element.value === 'heat') {
        sliderElement.noUiSlider.updateOptions({
          range: {
            min: 1,
            max: 3,
          },
          start: 3,
          step: 0.1,
        });
        uploadPreview.style.filter = `brightness(${ evt.target.value})`;
      }
      else {
        noUiSlider.create(sliderElement, {
          range: {
            min: 0,
            max: 100,
          },
          start: 100,
          step: 1,
          connect: 'lower',
        });
      }
    });
  });
});

effectButton.forEach((element) => {
  element.addEventListener('click', (evt) => {
    if(  element.value === evt.target.value) {
      uploadPreview.classList.add(`effects__preview--${  evt.target.value}`);
    }
  });
});
