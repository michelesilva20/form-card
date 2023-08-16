document.getElementById('input-name').addEventListener('keyup', function() {
  var valorDigitado = this.value;
  document.getElementById('name').innerText = valorDigitado;
});

document.getElementById('input-number').addEventListener('keyup', function(){
  var valorDigitado = this.value;
  document.getElementById('number-card').innerHTML = valorDigitado;
})

document.getElementById('input-month').addEventListener('keyup', function(){
  var valorDigitado = this.value;
  document.getElementById('month').innerHTML = valorDigitado;
})

document.getElementById('input-year').addEventListener('keyup', function(){
  var valorDigitado = this.value;
  document.getElementById('year').innerHTML = valorDigitado;
})

document.getElementById('input-cvc').addEventListener('keyup', function(){
  var valorDigitado = this.value;
  document.getElementById('code').innerHTML = valorDigitado;
})


function validateForm() {
  event.preventDefault(); // Impedir o envio do formulário por padrão

  const requiredInputs = document.querySelectorAll('input[required]');
  const onlynumber = document.getElementById('input-number');
  // Resetar estilos de erro e mensagens adicionadas anteriormente
  requiredInputs.forEach(input => {
    input.classList.remove('error');
  });

  // Verificar se todos os campos obrigatórios estão preenchidos
  let isValid = true;
  requiredInputs.forEach(input => {
    if (!input.value.trim()) {
      input.classList.add('error');
      if(isNaN(onlynumber.value)){
        const errorMessageElement = document.getElementById(`error-number`);
        errorMessageElement.textContent = "Wrong format, numbers only";
      }else{
        const errornumber = document.getElementById(`error-number`);
        errornumber.textContent = "Can't be blank";
      }
      const errorname = document.getElementById(`error-name`);
      errorname.textContent = "Can't be blank";
      const errordate = document.getElementById(`error-exp-date`);
      errordate.textContent = "Can't be blank";
      const errorcvc = document.getElementById(`error-cvc`);
      errorcvc.textContent = "Can't be blank";
      isValid = false;
    }
  });

  // Exibir mensagem de erro se algum campo obrigatório estiver vazio
  if (!isValid) {
    // Formulário inválido, ocultar o elemento "success" e exibir o formulário
    const successElement = document.getElementById('success');
    const formElement = document.getElementById('form');
    successElement.style.display = 'none';
    formElement.style.display = 'flex';
    return false; // Impedir o envio do formulário
  }

  // Formulário é válido, exibir o elemento "success" e ocultar o formulário
  const successElement = document.getElementById('success');
  const formElement = document.getElementById('form');
  successElement.style.display = 'flex';
  formElement.style.display = 'none';
  return true;
}

const submitButton = document.getElementById('submit-button');
submitButton.addEventListener('click', validateForm);

const continueButton = document.getElementById('comeback');
continueButton.addEventListener("click", function() {
   // Formulário inválido, ocultar o elemento "success" e exibir o formulário
   const successElement = document.getElementById('success');
   const formElement = document.getElementById('form');
   successElement.style.display = 'none';
   formElement.style.display = 'flex';
})

$(document).ready(function(){
  $('#input-month').mask('00');
  $('#input-year').mask('00');
  $('#input-cvc').mask('000');
});