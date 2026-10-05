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
  var pricePerUnit = 45;
  var currentQuantity = 1;

  var btnMinus = document.getElementById('btn-minus');
  var btnPlus = document.getElementById('btn-plus');
  var qtyCount = document.getElementById('qty-count');
  var ticketLabel = document.getElementById('ticket-item-label');
  var ticketPrice = document.getElementById('ticket-item-price');
  var totalPriceVal = document.getElementById('total-price-val');
  var btnSubmit = document.getElementById('btn-submit');
  var btnApplyDiscount = document.getElementById('btn-apply-discount');

  // Actualiza los valores en el desglose de precio
  function updatePrices() {
    var total = pricePerUnit * currentQuantity;
    qtyCount.innerHTML = currentQuantity;
    ticketLabel.innerHTML = 'x' + currentQuantity + ' Ticket General';
    ticketPrice.innerHTML = total + '€';
    totalPriceVal.innerHTML = total + '€';
  }

  // Evento botón (-)
  btnMinus.addEventListener('click', function () {
    if (currentQuantity > 1) {
      currentQuantity--;
      updatePrices();
    }
  });

  // Evento botón (+)
  btnPlus.addEventListener('click', function () {
    currentQuantity++;
    updatePrices();
  });

  // Evento Aplicar Descuento
  btnApplyDiscount.addEventListener('click', function () {
    var discountInput = document.getElementById('discount-code');
    var code = discountInput.value.trim();
    if (code !== '') {
      alert('Código "' + code + '" aplicado correctamente.');
    } else {
      alert('Por favor, introduce un código de descuento.');
    }
  });

  // Validaciones del formulario al pulsar Continuar
  btnSubmit.addEventListener('click', function () {
    var nombre = document.getElementById('nombre').value.trim();
    var apellidos = document.getElementById('apellidos').value.trim();
    var email = document.getElementById('email').value.trim();
    var confirmEmail = document.getElementById('confirm-email').value.trim();
    var checkTerms = document.getElementById('check-terms').checked;

    if (!nombre || !apellidos || !email || !confirmEmail) {
      alert('Por favor, completa todos los campos de tus datos personales.');
      return;
    }

    if (email !== confirmEmail) {
      alert('Los correos electrónicos introducidos no coinciden.');
      return;
    }

    if (!checkTerms) {
      alert('Debes aceptar los términos y condiciones para continuar.');
      return;
    }

    alert('¡Formulario enviado con éxito! Total a pagar: ' + (pricePerUnit * currentQuantity) + '€');
  });
});



