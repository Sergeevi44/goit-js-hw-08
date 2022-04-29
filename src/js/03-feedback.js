const refs = {
  form: document.querySelector('.feedback-form'),
};
const email = refs.form.elements.email.value;
const message = refs.form.message.value;

refs.form.addEventListener('submit', onFormSubmit);

function onFormSubmit(evt) {
  evt.preventDefault();
  const dataForStorage = localStorage.setItem(
    'feedback-form-state',
    JSON.stringify({ email, message }),
  );
}
