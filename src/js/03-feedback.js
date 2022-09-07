const throttle = require('lodash.throttle');
import storageService from './locale-storage';

const formEl = document.querySelector('.feedback-form');
let userData = {};

const fillContactFormFields = () => {
  const contactFormDataFromLS = storageService.load('feedback-form-state');

  for (const prop in contactFormDataFromLS) {
    if (contactFormDataFromLS.hasOwnProperty(prop)) {
      formEl.elements[prop].value = contactFormDataFromLS[prop];
      userData[prop] = contactFormDataFromLS[prop];
    }
  }
};

fillContactFormFields();

const onFiilFormInput = event => {
    const { target } = event;

    const fieldValue = target.value;
    const fieldName = target.name;

    userData[fieldName] = fieldValue;

    storageService.save("feedback-form-state", userData)
};

const onContactFormSubmit = event => {
    event.preventDefault();

    console.log(storageService.load('feedback-form-state'));

    storageService.remove('feedback-form-state');
    formEl.reset();

}


formEl.addEventListener('input', throttle(onFiilFormInput, 500));
formEl.addEventListener('submit', onContactFormSubmit)