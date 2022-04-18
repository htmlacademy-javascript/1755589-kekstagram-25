
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
const effectsList = document.querySelector('.effects__list');

effectValue.value = 100;

noUiSlider.create(sliderElement, {
  range: {
    min: 0,
    max: 100,
  },
  start: 100,
  step: 1,
  connect: 'lower',
});


// не забыть про метод .set()

//const onPictureEffectChange = () => {
  sliderElement.noUiSlider.on('update', () => {
  effectValue.value = sliderElement.noUiSlider.get();
  console.log('начальное', effectValue.value);

  effectButton.forEach((element) => {
    element.addEventListener('click', () => {
      //effectValue.value = element.value;
      //console.log('конечное', effectValue.value);
      if(element.value === 'chrome') {
        sliderElement.noUiSlider.updateOptions({
          range: {
            min: 0,
            max: 1,
          },
          start: 1,
          step: 0.1,
        });
        uploadPreview.style.filter = `grayscale(${ effectValue.value  })`;
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
        uploadPreview.style.filter = `sepia(${ effectValue.value  })`;
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
        uploadPreview.style.filter = `invert(${ effectValue.value}%)`;
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
        uploadPreview.style.filter = `blur(${ effectValue.value}px)`;
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
        uploadPreview.style.filter = `brightness(${ effectValue.value})`;
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
//};

//effectsList.addEventListener('change', onPictureEffectChange);


const onEffectsListClick = (evt) => {
  const currentPicture = document.querySelector('.img-upload__preview').getElementsByTagName('img')[0];
  currentPicture.className = `effects__preview--${evt.target.value}`;
};


effectsList.addEventListener('change', onEffectsListClick);
