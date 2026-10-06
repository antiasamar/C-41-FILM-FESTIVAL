// COOKIES
  var cookieModal = document.getElementById('cookie-modal');
  var btnAcceptCookies = document.getElementById('btn-accept-cookies');
  var btnRejectCookies = document.getElementById('btn-reject-cookies');

  function closeCookieModal() {
    if (cookieModal) {
      cookieModal.style.display = 'none';
      // Restablece el scroll en el body al cerrar la modal
      document.body.className = document.body.className.replace(/\bmodal-open\b/g, '').trim();
    }
  }

  if (btnAcceptCookies) {
    btnAcceptCookies.addEventListener('click', closeCookieModal);
  }

  if (btnRejectCookies) {
    btnRejectCookies.addEventListener('click', closeCookieModal);
  }


// MENU DE NAVEGACIÓN 
const hamburger = document.querySelector(".hamburger"); 
const navLinks = document.querySelector (".nav-links")


hamburger.addEventListener("click", function() {
    
    navLinks.classList.toggle ("active");
    
})

// ACORDEÓN ENTIDADES COLABORADORAS Y PROGRAMA

document.addEventListener('DOMContentLoaded', function() {
  
  var headers = document.getElementsByClassName('acordeon-header');
  var i;

  for (i = 0; i < headers.length; i++) {
    headers[i].addEventListener('click', function() {
      var itemActual = this.parentNode;
      var contenidoActual = itemActual.querySelector('.acordeon-contenido');
      var estaActivo = itemActual.className.indexOf('active') !== -1;

     
      var todosLosItems = document.getElementsByClassName('acordeon-item');
      for (var j = 0; j < todosLosItems.length; j++) {
        todosLosItems[j].className = todosLosItems[j].className.replace(' active', '');
        var contenido = todosLosItems[j].querySelector('.acordeon-contenido');
        if (contenido) {
          contenido.style.maxHeight = null;
        }
      }

      
      if (!estaActivo) {
        itemActual.className += ' active';
        contenidoActual.style.maxHeight = contenidoActual.scrollHeight + 'px';
      }
    });
  }

});

// ---------FORM-----------

document.addEventListener('DOMContentLoaded', function () {

  var cookieModal = document.getElementById('cookie-modal');
  var btnAcceptCookies = document.getElementById('btn-accept-cookies');
  var btnRejectCookies = document.getElementById('btn-reject-cookies');

  function closeCookieModal() {
    if (cookieModal) {
      cookieModal.style.display = 'none';
      document.body.className = document.body.className.replace(/\bmodal-open\b/g, '').trim();
    }
  }

  if (btnAcceptCookies) {
    btnAcceptCookies.addEventListener('click', closeCookieModal);
  }

  if (btnRejectCookies) {
    btnRejectCookies.addEventListener('click', closeCookieModal);
  }


  var pricePerUnit = 45;
  var currentQuantity = 1;
  var maxQuantity = 6; 

  var btnMinus = document.getElementById('btn-minus');
  var btnPlus = document.getElementById('btn-plus');
  var qtyCount = document.getElementById('qty-count');
  var ticketLabel = document.getElementById('ticket-item-label');
  var ticketPrice = document.getElementById('ticket-item-price');
  var totalPriceVal = document.getElementById('total-price-val');
  var btnSubmit = document.getElementById('btn-submit');
  var btnApplyDiscount = document.getElementById('btn-apply-discount');

  
  var inputNombre = document.getElementById('nombre');
  var inputApellidos = document.getElementById('apellidos');
  var inputEmail = document.getElementById('email');
  var inputConfirmEmail = document.getElementById('confirm-email');
  var checkTerms = document.getElementById('check-terms');

  
  function updatePrices() {
    var total = pricePerUnit * currentQuantity;
    qtyCount.innerHTML = currentQuantity;
    ticketLabel.innerHTML = 'x' + currentQuantity + ' Ticket General';
    ticketPrice.innerHTML = total + '€';
    totalPriceVal.innerHTML = total + '€';
  }

  
  if (btnMinus) {
    btnMinus.addEventListener('click', function () {
      if (currentQuantity > 1) {
        currentQuantity--;
        updatePrices();
      }
    });
  }


  if (btnPlus) {
    btnPlus.addEventListener('click', function () {
      if (currentQuantity < maxQuantity) {
        currentQuantity++;
        updatePrices();
      } else {
        alert('El número máximo de entradas por compra es ' + maxQuantity + '.');
      }
    });
  }


  function validateForm() {
    var nombreVal = inputNombre ? inputNombre.value.trim() : '';
    var apellidosVal = inputApellidos ? inputApellidos.value.trim() : '';
    var emailVal = inputEmail ? inputEmail.value.trim() : '';
    var confirmEmailVal = inputConfirmEmail ? inputConfirmEmail.value.trim() : '';
    var termsVal = checkTerms ? checkTerms.checked : false;

    
    var isNombreValid = nombreVal !== '';
    var isApellidosValid = apellidosVal !== '';
    var isEmailValid = emailVal !== '';
    var isEmailMatch = emailVal !== '' && emailVal === confirmEmailVal;

    if (isNombreValid && isApellidosValid && isEmailValid && isEmailMatch && termsVal) {
      btnSubmit.disabled = false;
    } else {
      btnSubmit.disabled = true;
    }
  }

  var formInputs = [inputNombre, inputApellidos, inputEmail, inputConfirmEmail];
  for (var i = 0; i < formInputs.length; i++) {
    if (formInputs[i]) {
      formInputs[i].addEventListener('input', validateForm);
    }
  }

  if (checkTerms) {
    checkTerms.addEventListener('change', validateForm);
  }

  if (btnApplyDiscount) {
    btnApplyDiscount.addEventListener('click', function () {
      var discountInput = document.getElementById('discount-code');
      var code = discountInput ? discountInput.value.trim() : '';
      if (code !== '') {
        alert('Código "' + code + '" aplicado correctamente.');
      } else {
        alert('Por favor, introduce un código de descuento.');
      }
    });
  }

  if (btnSubmit) {
    btnSubmit.addEventListener('click', function () {
      if (!btnSubmit.disabled) {
        alert('¡Formulario enviado con éxito!\nTotal a pagar: ' + (pricePerUnit * currentQuantity) + '€');
      }
    });
  }

});