// MENU DE NAVEGACIÓN 
const hamburger = document.querySelector(".hamburger"); 
const navLinks = document.querySelector (".nav-links")


hamburger.addEventListener("click", function() {
    
    navLinks.classList.toggle ("active");
    
})

// ACORDEÓN ENTIDADES COLABORADORAS 

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




