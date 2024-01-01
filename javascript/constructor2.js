const divResenias = document.querySelector("#contenedor-resenias");
const inputResenias = document.querySelector("#input-resenias");

function crearResenias(lista) {
  divResenias.innerHTML = ""; // Clear previous results

  for (let i = 0; i < lista.length; i++) {
    const div = document.createElement("div");
    div.classList.add("div-resenias");

    const imagen = document.createElement("img");
    imagen.src = lista[i].imagenResenia; // Correcting the property name
    imagen.classList.add("imagen-resenia");

    const nombre = document.createElement("h5");
    nombre.textContent = lista[i].resenia;
    nombre.classList.add("nombre-resenia");

    const parrafo = document.createElement("p");
    parrafo.textContent = lista[i].texto;
    parrafo.classList.add("texto-resenia"); // Using a distinct class name

    div.appendChild(imagen);
    div.appendChild(nombre);
    div.appendChild(parrafo);

    divResenias.appendChild(div);
  }
}

crearResenias(databasereseniaslibrosJSON);

function buscadorResenias() {
  const nombreLeido = inputResenias.value.toLowerCase();
  divResenias.innerHTML = ""; // Correcting the variable name

  if (nombreLeido.trim() !== "") {
    const filtrados = databasereseniaslibrosJSON.filter(libro =>
      libro.resenia.toLowerCase().includes(nombreLeido)
    );
    crearResenias(filtrados);
  } else {
    crearResenias(databasereseniaslibrosJSON);
  }
}
