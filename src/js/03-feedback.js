import throttle from 'lodash.throttle';

const refs = {
  form: document.querySelector('.feedback-form'),
  input: document.querySelector('.feedback-form input'),
  textarea: document.querySelector('.feedback-form textarea'),
};

const FEEDBACK_KEY = 'feedback-form-state';
const formData = {};
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
}

function populateTextarea() {
  const savedMessage = localStorage.getItem(FEEDBACK_KEY);
  if (savedMessage) {
    const parseMessage = JSON.parse(savedMessage);
    refs.input.value = parseMessage.email;
    refs.textarea.value = parseMessage.message;
  }
}
