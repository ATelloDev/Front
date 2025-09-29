let lista = [];

const formulario = document.getElementById("formulario");
const entrada = document.getElementById("entrada");
const contenedor = document.getElementById("contenedor");
const mensaje = document.getElementById("mensaje");

const btnShift = document.getElementById("btnShift");
const btnPop = document.getElementById("btnPop");
const btnSort = document.getElementById("btnSort");

function mostrarLista() {
  contenedor.innerHTML = "";
  if (lista.length === 0) {
    contenedor.innerHTML = "<p>La lista está vacía.</p>";
    return;
  }
  let ul = document.createElement("ul");
  lista.forEach(item => {
    let li = document.createElement("li");
    li.textContent = item;
    ul.appendChild(li);
  });
  contenedor.appendChild(ul);
}

formulario.addEventListener("submit", function (e) {
  e.preventDefault();
  let valor = entrada.value.trim();
  if (valor === "") {
    mensaje.textContent = "⚠️ No se puede añadir un texto vacío.";
    return;
  }
  lista.push(valor);
  entrada.value = "";
  mensaje.textContent = "";
  mostrarLista();
}); 

btnShift.addEventListener("click", function () {
  if (lista.length > 0) {
    lista.shift();
    mostrarLista();
  }
});

btnPop.addEventListener("click", function () {
  if (lista.length > 0) {
    lista.pop();
    mostrarLista();
  }
});

btnSort.addEventListener("click", function () {
  if (lista.length > 0) {
    lista.sort();
    mostrarLista();
  }
});

mostrarLista();
