import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');

form.addEventListener('input', throttle(saveFormInput, 500));
form.addEventListener('submit', submitForm);

const storageFormKey = 'feedback-form-state';

let info = JSON.parse(localStorage.getItem(storageFormKey)) || {};
// Деструктуризація форми, для того щоб витягнути елементи , message
const { email, message } = form.elements;

reloadPage();

function saveFormInput() {
  info = {
    email: email.value,
    message: message.value,
  };
  localStorage.setItem(storageFormKey, JSON.stringify(info));
}

function reloadPage() {
  if (info) {
    email.value = info.email || '';
    message.value = info.message || '';
  }
}

function submitForm(evt) {
  evt.preventDefault();
  if (email.value === '' || message.value === '') {
    return alert(`Заповніть всі поля`);
  }
  console.log({ email: email.value, message: message.value });
  localStorage.removeItem(storageFormKey);
  form.reset();
}
