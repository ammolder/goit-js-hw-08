import throttle from 'lodash.throttle';

const refs = {
  form: document.querySelector('.feedback-form'),
  input: document.querySelector('.feedback-form input'),
  textarea: document.querySelector('.feedback-form textarea'),
  button: document.querySelector('.feedback-form button'),
};

const FEEDBACK_KEY = 'feedback-form-state';
const formData = {
  email: '',
  message: '',
};
refs.form.addEventListener('submit', onFormSubmit);
refs.form.addEventListener('input', throttle(onLocalStorageSet, 500));

populateTextarea();

function onLocalStorageSet(e) {
  formData[e.target.name] = e.target.value;
  localStorage.setItem(FEEDBACK_KEY, JSON.stringify(formData));
}

function onFormSubmit(e) {
  e.preventDefault();
  console.log(formData);
  e.currentTarget.reset();
  localStorage.removeItem(FEEDBACK_KEY);
  formData.email = '';
  formData.message = '';
}

function populateTextarea() {
  const parseMessage = JSON.parse(localStorage.getItem(FEEDBACK_KEY));
  if (localStorage.getItem(FEEDBACK_KEY)) {
    refs.input.value = parseMessage.email;
    refs.textarea.value = parseMessage.message;
    formData.email = parseMessage.email;
    formData.message = parseMessage.message;
  }
}
const parseMessage = JSON.parse(localStorage.getItem(FEEDBACK_KEY));
if (parseMessage.email === null) {
  refs.button.disabled = true;
}

// === { email: '', message: '' }
// ? (refs.button.disabled = true)
// : (refs.button.disabled = false);

console.log('parseMessage.email :', parseMessage.email);
console.log('parseMessage.message :', parseMessage.message);
