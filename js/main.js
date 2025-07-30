const formulario = document.getElementById("formulario");

formulario.addEventListener("submit", function (e) {
  e.preventDefault();

  formulario.reset();

  Swal.fire({
    title: '¡Enviado!',
    text: 'Gracias por tu mensaje, me pondré en contacto contigo lo antes posible.',
    icon: 'success',
    confirmButtonText: 'Aceptar'
  });
});