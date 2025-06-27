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