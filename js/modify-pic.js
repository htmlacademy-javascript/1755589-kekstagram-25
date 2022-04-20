
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
const effectSlider = document.querySelector('.effect-level__slider');
const effectValue = document.querySelector('.effect-level__value');
const effectsList = document.querySelector('.effects__list');

//effectValue.value = 100;

noUiSlider.create(effectSlider, {
  range: {
    min: 0,
    max: 100,
  },
  start: 100,
  step: 1,
  connect: 'lower',
});

const effectNone = document.querySelector('#effect-none').value;
const effectChrome = document.querySelector('#effect-chrome').value;
const effectSepia = document.querySelector('#effect-sepia').value;
const effectMarvin = document.querySelector('#effect-marvin').value;
const effectPhobos = document.querySelector('#effect-phobos').value;
const effectHeat = document.querySelector('#effect-heat').value;

const updateSliderValue = (item) => {
  effectSlider.noUiSlider.on('update', () => {
    let itemValue;
    effectValue.value = effectSlider.noUiSlider.get();
    switch (item) {
      case effectChrome:
        itemValue = `grayscale(${effectValue.value})`;
        break;
      case effectSepia:
        itemValue = `sepia(${effectValue.value})`;
        break;
      case effectMarvin:
        itemValue =  `invert(${effectValue.value}%)`;
        break;
      case effectPhobos:
        itemValue =  `blur(${effectValue.value}px)`;
        break;
      case effectHeat:
        itemValue =  `brightness(${effectValue.value})`;
        break;
    }
    uploadPreview.style.filter = itemValue;
  });
};

// // Функция обработчика события при клике на списке эффектов (делегирование)
const onPictureEffectChange = (evt) => {
  const target = evt.target.value;

  if (target !== effectNone) {
    effectSlider.classList.remove('hidden');
    effectSlider.removeAttribute('disabled', true);
    uploadPreview.className = `effects__preview--${target}`;
    //effectSlider.noUiSlider.set(100);
  } else {
    effectSlider.classList.add('hidden');
    effectSlider.setAttribute('disabled', true);
    uploadPreview.className = 'effects__preview--none';
    effectValue.value = '';
    uploadPreview.style.filter = 'none';
  }
/*
  switch (target)
  {
    case effectChrome:
    case effectSepia:
      effectSlider.noUiSlider.updateOptions ({
        range: {
          min: 0,
          max: 1,
        },
        start: 1,
        step: 0.1,
      });
      if (target === effectChrome) {
        return updateSliderValue(effectChrome);
      }
      return updateSliderValue(effectSepia);
      //(target === effectChrome) ? updateSliderValue(effectChrome) : updateSliderValue(effectSepia);
      //break;
    case effectMarvin:
      effectSlider.noUiSlider.updateOptions ({
        range: {
          min: 0,
          max: 100,
        },
        start: 100,
        step: 1,
      });
      updateSliderValue(effectMarvin);
      break;
    case effectPhobos:
      effectSlider.noUiSlider.updateOptions ({
        range: {
          min: 0,
          max: 3,
        },
        start: 3,
        step: 0.1,
      });
      updateSliderValue(effectPhobos);
      break;
    case effectHeat:
      effectSlider.noUiSlider.updateOptions ({
        range: {
          min: 1,
          max: 3,
        },
        start: 3,
        step: 0.1,
      });
      updateSliderValue(effectHeat);
      break;
  }*/
};



const onEffectsListClick = (evt) => {
  const target = evt.target.value;
  if (target !== effectNone) {
    const currentPicture = document.querySelector('.img-upload__preview').getElementsByTagName('img')[0];
    currentPicture.className = `effects__preview--${evt.target.value}`;
  } else {
    uploadPreview.className = 'effects__preview--none';
    effectValue.value = '';
    uploadPreview.style.filter = 'none';
  }
};

effectsList.addEventListener('change', onEffectsListClick);
//effectsList.addEventListener('change', onPictureEffectChange);


// не забыть про метод .set()
