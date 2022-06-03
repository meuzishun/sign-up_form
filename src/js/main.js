const validateForm = function (e) {
  e.preventDefault();
  const form = e.target;
  console.log(form);

  if (form.checkValidity()) {
    console.log('form is good');
  } else {
    console.log('form is bad');
    Array.from(form.elements).forEach((elem) => {
      if (elem.checkValidity()) {
        elem.parentElement.classList.remove('invalid');
        return;
      } else {
        console.log(elem);
        elem.parentElement.classList.add('invalid');
      }
    });
  }
};

const signUpForm = document.getElementById('sign-up-form');
signUpForm.noValidate = true;
signUpForm.addEventListener('submit', validateForm);
