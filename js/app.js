document.addEventListener('DOMContentLoaded', function () {

 
  // 1. COOKIES MODAL

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

  // 2. MENÚ DE NAVEGACIÓN HAMBURGUESA (ES5)
 
  var hamburger = document.querySelector(".hamburger"); 
  var navLinks = document.querySelector(".nav-links");

  if (hamburger && navLinks) {
    hamburger.addEventListener("click", function() {
      if (navLinks.classList) {
        navLinks.classList.toggle("active");
      } else {
        // Fallback ES5 puro para navegadores muy antiguos
        if (navLinks.className.indexOf('active') !== -1) {
          navLinks.className = navLinks.className.replace(' active', '');
        } else {
          navLinks.className += ' active';
        }
      }
    });
  }

  // 3. ACORDEÓN ENTIDADES COLABORADORAS Y PROGRAMA
  
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

      if (!estaActivo && contenidoActual) {
        itemActual.className += ' active';
        contenidoActual.style.maxHeight = contenidoActual.scrollHeight + 'px';
      }
    });
  }

  // 4. FORMULARIO DE COMPRA
  
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
    if (qtyCount && ticketLabel && ticketPrice && totalPriceVal) {
      var total = pricePerUnit * currentQuantity;
      qtyCount.innerHTML = currentQuantity;
      ticketLabel.innerHTML = 'x' + currentQuantity + ' Ticket General';
      ticketPrice.innerHTML = total + '€';
      totalPriceVal.innerHTML = total + '€';
    }
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
    if (!btnSubmit) return;

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
  for (var k = 0; k < formInputs.length; k++) {
    if (formInputs[k]) {
      formInputs[k].addEventListener('input', validateForm);
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