// Validaciónes del formulario

document.addEventListener('DOMContentLoaded', () => {

  let buttonSend = document.getElementById('button-send');
  
  buttonSend.addEventListener('click', (event) => {
    event.preventDefault();

    let name = document.getElementById('first-name');
    let lastname = document.getElementById('last-name');
    let email = document.getElementById('email');
    let date = document.getElementById('date');
    let country = document.getElementById('country');

    document.getElementById('error-name').innerHTML = '';
    document.getElementById('error-last').innerHTML = '';
    document.getElementById('error-email').innerHTML = '';
    document.getElementById('error-date').innerHTML = '';
    document.getElementById('error-country').innerHTML = '';

    let formError = false;

    let message = "Debes completar este campo";

    if (!name.value) {
      document.getElementById('error-name').innerHTML = message;
      formError = true;
    }
    
    if (!lastname.value) {
      document.getElementById('error-last').innerHTML = message;
      formError = true;
    }
    
    if (!email.value) {
      document.getElementById('error-email').innerHTML = message;
      formError = true;
    } else {
      const emailFormat = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailFormat.test(email.value)) {
        document.getElementById('error-email').innerHTML = 'El formato del correo no es valido';
        formError = true;
      }
    }
    
    const today = new Date();
    const birthDay = new Date(date.value);

    if (!date.value){
      document.getElementById('error-date').innerHTML = message;
      formError = true;
    }else{

      if (birthDay > today) {

      document.getElementById('error-date').innerHTML = 'La fecha de nacimiento no puede ser mayor a la fecha actual';
      formError = true;

      }

      const age = today.getFullYear() - birthDay.getFullYear();
      if (age < 18) {

        document.getElementById('error-date').innerHTML = "Tienes que ser mayor de edad";
        formError = true;

      }
      
    }

    if (!country.value) {
      document.getElementById('error-country').innerHTML = message;
      formError = true;
    }

    if (!formError) {
      alert("Formulario enviado correctamente");
    }

  });

});