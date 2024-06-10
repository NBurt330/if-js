const formEl = document.getElementById('form');
const fileEL = document.querySelector('.input__file');
const btnEL = document.querySelector('.input__btn');
const divEL = document.querySelector('.input__div');
const spanEL = document.querySelector('.input__text');

function resetFile() {
  fileEL.value = '';
}

formEl.addEventListener('submit', async (event) => {
  event.preventDefault();

  const fetchOptions = {
    method: 'POST',
    enctype: 'multipart/form-data',
    body: new FormData(formEl),
  };

  const res = await fetch(
    'https://if-student-api.onrender.com/api/file',
    fetchOptions,
  )
    .then((response) => {
      if (!response.ok) {
        throw new Error(response.statusText);
      }
      return response.json();
    })
    .then((result) => result)
    .catch((error) => console.log(error.message));

  console.log(res);

  fileEL.setAttribute('hidden', 'true');
  btnEL.setAttribute('hidden', 'true');
  resetFile();
});

function loadImage() {
  fileEL.click();
  divEL.removeChild(spanEL);
  const imgEL = document.createElement('img');

  imgEL.setAttribute('src', '');
  imgEL.setAttribute('alt', '');
  divEL.appendChild(imgEL);
  imgEL.setAttribute('class', 'input__img');

  fileEL.addEventListener('change', (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.addEventListener('load', (e) => {
      imgEL.setAttribute('src', e.target.result);
      imgEL.setAttribute('alt', file.name);
    });
    reader.readAsDataURL(file);
  });
}

divEL.addEventListener('click', loadImage);
