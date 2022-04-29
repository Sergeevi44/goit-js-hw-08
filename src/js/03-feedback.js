import throttle from 'lodash.throttle';

const refs = {
  form: document.querySelector('.feedback-form'),
};

refs.form.addEventListener('input', throttle(onFormInput, 500));
refs.form.addEventListener('submit', onFormSubmit);

if (localStorage.getItem('feedback-form-state')) {
  const emailData = JSON.parse(localStorage.getItem('feedback-form-state')).email;
  const messageData = JSON.parse(localStorage.getItem('feedback-form-state')).message;
  refs.form.elements.email.value = emailData;
  refs.form.elements.message.value = messageData;
}

function onFormInput(evt) {
  const email = refs.form.elements.email.value;
  const message = refs.form.message.value;
  localStorage.setItem('feedback-form-state', JSON.stringify({ email, message }));
}

function onFormSubmit(evt) {
  evt.preventDefault();
  const email = refs.form.elements.email.value;
  const message = refs.form.message.value;
  console.log({ email, message });
  localStorage.removeItem('feedback-form-state');
  refs.form.reset();
}
