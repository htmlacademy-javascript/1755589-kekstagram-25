
const getData = (url, onSuccess, onFail) => {
  fetch(
    url
  )
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        onFail();
      }
    })
    .then((data) => {
      onSuccess(data);
    })
    .catch(() => {
      onFail();
    });
};

const sendData = (onSuccess, body) => {
  const postData = fetch(
    'https://25.javascript.pages.academy/kekstagram',
    {
      method: 'POST',
      body: body,
    },
  )
    .then(() => onSuccess());
  return postData;
};

const sendingDataError = (onFail) => {
  const data = sendData();
  data
    .then((response) => {
      if(response.ok === false) {
        onFail();
      }
    })
    .catch(() => {
      onFail();
    });
};

export {getData, sendData, sendingDataError};
