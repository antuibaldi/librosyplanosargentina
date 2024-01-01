const divLibros = document.querySelector(".libros-argentina");
const inputLibros = document.querySelector("#input-nombre");

function crearLibros(lista) {
  divLibros.innerHTML = ""; // Limpiar resultados anteriores

  for ( i = 0; i < lista.length; i++) {
    const div = document.createElement("div");
    div.classList.add("libro");

    const nombre = document.createElement("p");
    nombre.textContent = lista[i].nombre;
    nombre.classList.add("nombreDelLibro");

    const enlaceImagen = document.createElement("a");
    enlaceImagen.href = lista[i].enlace;
    enlaceImagen.target = "_blank";

    const imagen = document.createElement("img");
    imagen.src = lista[i].imagen;
    imagen.classList.add("imagenDelLibro");

    enlaceImagen.appendChild(imagen);
    div.appendChild(enlaceImagen);
    div.appendChild(nombre);

    divLibros.appendChild(div);
  }
}

crearLibros(databaselibrosJSON);

function buscadorDeNombre() {
  const nombreLeido = inputLibros.value.toLowerCase();
  divLibros.innerHTML = "";

  if (nombreLeido.trim() !== "") {
    const filtrados = databaselibrosJSON.filter(libro => libro.nombre.toLowerCase().includes(nombreLeido));
    crearLibros(filtrados);
  } else {
    crearLibros(databaselibrosJSON);
  }
}


