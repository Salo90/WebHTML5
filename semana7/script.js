document.addEventListener("DOMContentLoaded", function () {
  const inputUrl = document.getElementById("urlImagen");
  const btnAgregar = document.getElementById("btnAgregar");
  const btnEliminar = document.getElementById("btnEliminar");
  const contenedor = document.getElementById("contenedorGaleria");

  let imagenSeleccionada = null;

  // Función para crear y agregar imagen
  function agregarImagen(url) {
    if (!url.trim()) return alert("Por favor ingresa una URL válida.");

    const img = document.createElement("img");
    img.src = url;

    // Evento click para seleccionar
    img.addEventListener("click", () => {
      if (imagenSeleccionada) {
        imagenSeleccionada.classList.remove("seleccionada");
      }
      img.classList.add("seleccionada");
      imagenSeleccionada = img;
    });

    contenedor.appendChild(img);
    inputUrl.value = ""; // Limpiar campo
  }

  // Evento click botón Agregar
  btnAgregar.addEventListener("click", () => {
    const url = inputUrl.value;
    agregarImagen(url);
  });

  // Evento Enter para agregar con teclado
  inputUrl.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      const url = inputUrl.value;
      agregarImagen(url);
    }
  });

  // Evento click botón Eliminar
  btnEliminar.addEventListener("click", () => {
    if (imagenSeleccionada) {
      imagenSeleccionada.remove();
      imagenSeleccionada = null;
    } else {
      alert("Por favor selecciona una imagen para eliminar.");
    }
  });
});

//script hará las validaciones en tiempo real

document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("registroForm");
  const nombreInput = document.getElementById("nombreRegistro");
  const emailInput = document.getElementById("emailRegistro");
  const passwordInput = document.getElementById("passwordRegistro");
  const confirmPasswordInput = document.getElementById("confirmPasswordRegistro");
  const edadInput = document.getElementById("edadRegistro");
  const enviarBtn = document.getElementById("enviarBtn");

  const nombreError = nombreInput.closest(".form-group").querySelector(".error-message");
  const emailError = emailInput.closest(".form-group").querySelector(".error-message");
  const passwordError = passwordInput.closest(".form-group").querySelector(".error-message");
  const confirmPasswordError = confirmPasswordInput.closest(".form-group").querySelector(".error-message");
  const edadError = edadInput.closest(".form-group").querySelector(".error-message");

  // Expresión regular para contraseña: mínimo 8 caracteres, al menos 1 número y 1 carácter especial
  const passwordRegex = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,}$/;

  // Validador general
  function validarCampos() {
    let isValid = true;

    // Validar nombre
    if (nombreInput.value.trim().length < 3) {
      nombreError.textContent = "El nombre debe tener al menos 3 caracteres.";
      nombreInput.classList.add("is-invalid");
      isValid = false;
    } else {
      nombreError.textContent = "";
      nombreInput.classList.remove("is-invalid");
    }

    // Validar correo electrónico
    if (!/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(emailInput.value)) {
      emailError.textContent = "Correo electrónico inválido.";
      emailInput.classList.add("is-invalid");
      isValid = false;
    } else {
      emailError.textContent = "";
      emailInput.classList.remove("is-invalid");
    }

    // Validar contraseña
    if (!passwordRegex.test(passwordInput.value)) {
      passwordError.textContent = "Debe tener al menos 8 caracteres, un número y un carácter especial.";
      passwordInput.classList.add("is-invalid");
      isValid = false;
    } else {
      passwordError.textContent = "";
      passwordInput.classList.remove("is-invalid");
    }

    // Validar confirmación de contraseña
    if (confirmPasswordInput.value !== passwordInput.value && confirmPasswordInput.value !== "") {
      confirmPasswordError.textContent = "Las contraseñas no coinciden.";
      confirmPasswordInput.classList.add("is-invalid");
      isValid = false;
    } else {
      confirmPasswordError.textContent = "";
      confirmPasswordInput.classList.remove("is-invalid");
    }

    // Validar edad
    if (edadInput.value < 18 || isNaN(edadInput.value) || edadInput.value === "") {
      edadError.textContent = "Debes ser mayor o igual a 18 años.";
      edadInput.classList.add("is-invalid");
      isValid = false;
    } else {
      edadError.textContent = "";
      edadInput.classList.remove("is-invalid");
    }

    // Habilitar botón solo si todos los campos son válidos
    enviarBtn.disabled = !isValid;
    return isValid;
  }

  // Eventos en tiempo real
  [nombreInput, emailInput, passwordInput, confirmPasswordInput, edadInput].forEach(input => {
    input.addEventListener("input", validarCampos);
  });

  // Enviar formulario
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    if (validarCampos()) {
      alert("¡Registro exitoso!");
      form.reset();
      enviarBtn.disabled = true;
    }
  });

  // Reiniciar formulario
  form.addEventListener("reset", function () {
    setTimeout(() => {
      enviarBtn.disabled = true;
      document.querySelectorAll(".form-control").forEach(input => {
        input.classList.remove("is-invalid");
      });
      document.querySelectorAll(".error-message").forEach(msg => msg.textContent = "");
    }, 0);
  });
});


// Arreglo con los productos iniciales
const productos = [
  { nombre: "Camiseta Profesional", precio: 8.00, descripcion: "Camisetas transpirables y resistentes." },
  { nombre: "Pantalón de Juego", precio: 6.99, descripcion: "Diseños unicos y agradables." },
  { nombre: "Medias Altas", precio: 2.00, descripcion: "Alicradas y resistentes." }
];

// Función para renderizar los productos en la lista
function renderizarProductos() {
  const lista = document.getElementById("listaProductos");
  lista.innerHTML = ""; // Limpiar contenido previo

  productos.forEach((producto, index) => {
    const item = document.createElement("li");
    item.className = "list-group-item mb-4";
    item.innerHTML = `
      <strong>${producto.nombre}</strong><br/>
      <strong> Precio: </strong> $${producto.precio}<br/>
      <strong> Descripción: </strong> ${producto.descripcion}
    `;
    lista.appendChild(item);
  });
}

// Evento para agregar un nuevo producto
document.getElementById("agregarBtn").addEventListener("click", () => {
  const nuevoProducto = {
    nombre: `Producto Extra ${productos.length + 1}`,
    precio: (Math.random() * 50).toFixed(2),
    descripcion: "Este es un producto agregado."
  };
  productos.push(nuevoProducto);
  renderizarProductos();
});

// Renderizado inicial
renderizarProductos();