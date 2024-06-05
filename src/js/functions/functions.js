export const fetchArray = (url) =>
  fetch(url)
    .then((response) => {
      return response.json();
    })
    .catch((e) => {
      console.error('Error!!!', e.message);
    });

export const sortByBubbleSort = (arr) => {
  const newArrHotels = [...arr];
  const arrLength = arr.length;

  for (let i = 0; i < arrLength; i++) {
    for (let j = 0; j < arrLength - i - 1; j++) {
      if (newArrHotels[j].name > newArrHotels[j + 1].name) {
        const temp = newArrHotels[j];
        newArrHotels[j] = newArrHotels[j + 1];
        newArrHotels[j + 1] = temp;
      }
    }
  }

  return newArrHotels;
};

export const disableBtn = (btn) => {
  btn.classList.add('btn-disabled');
  btn.setAttribute('disabled', true);
};

export const enableBtn = (btn) => {
  btn.removeAttribute('disabled');
  btn.classList.remove('btn-disabled');
};
