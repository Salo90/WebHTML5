
// Validacion del formulario de contacto//
const form = document.getElementById('contactForm');
  const nombre = document.getElementById('nombre');
  const email = document.getElementById('email');
  const mensaje = document.getElementById('mensaje');
  const submitBtn = document.getElementById('submitBtn');

  const nombreError = document.getElementById('nombreError');
  const emailError = document.getElementById('emailError');
  const mensajeError = document.getElementById('mensajeError');

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  function validateInputs() {
    let isValid = true;

    // Limpiar clases y mensajes
    resetValidation();

    // Validar nombre
    if (!nombre.value.trim()) {
      nombre.classList.add('is-invalid');
      nombreError.textContent = 'Por favor, ingresa tu nombre.';
      isValid = false;
    } else {
      nombre.classList.add('is-valid');
    }

    // Validar email
    if (!email.value.trim()) {
      email.classList.add('is-invalid');
      emailError.textContent = 'Por favor, ingresa tu correo electrónico.';
      isValid = false;
    } else if (!emailRegex.test(email.value.trim())) {
      email.classList.add('is-invalid');
      emailError.textContent = 'Por favor, ingresa un correo electrónico válido.';
      isValid = false;
    } else {
      email.classList.add('is-valid');
    }

    // Validar mensaje
    if (!mensaje.value.trim()) {
      mensaje.classList.add('is-invalid');
      mensajeError.textContent = 'Por favor, escribe tu mensaje.';
      isValid = false;
    } else {
      mensaje.classList.add('is-valid');
    }

    // Habilitar/deshabilitar botón
    submitBtn.disabled = !isValid;

    return isValid;
  }

  function resetValidation() {
    nombre.classList.remove('is-valid', 'is-invalid');
    email.classList.remove('is-valid', 'is-invalid');
    mensaje.classList.remove('is-valid', 'is-invalid');

    nombreError.textContent = '';
    emailError.textContent = '';
    mensajeError.textContent = '';
  }

  // Validación en tiempo real
  nombre.addEventListener('input', validateInputs);
  email.addEventListener('input', validateInputs);
  mensaje.addEventListener('input', validateInputs);

  // Manejo del envío
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    if (validateInputs()) {
      alert('✅ Formulario válido. ¡Datos listos para ser enviados!');
      // Aquí puedes enviar los datos usando fetch, EmailJS, etc.
    }
  });

  // Actualizar el año en footer dinámicamente
document.addEventListener("DOMContentLoaded", function () {
  const yearSpan = document.getElementById("year");
  const currentYear = new Date().getFullYear();
  yearSpan.textContent = currentYear;
});

//boton alerta//
document.getElementById('customAlertBtn').addEventListener('click', function () {
  const alertBox = document.getElementById('customAlert');
  alertBox.classList.remove('d-none'); // Mostrar la alerta

  // Opcional: ocultar la alerta después de 5 segundos
  setTimeout(() => {
    alertBox.classList.add('d-none');
  }, 5000);
});
