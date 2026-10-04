//Ejercicio 1. Construyendo HTML desde JavaScript

//1. crear elementos
const titulo = document.createElement("h1");
titulo.textContent = "El Titulo"

const subtitulo = document.createElement("h2");
subtitulo.textContent = "El Subtitulo";

const parrafo1 = document.createElement("p");
parrafo1.textContent = "Este es el primer parrafo, 19'3124892477482741317892391717923 ";

const parrafo2 = document.createElement("p");
parrafo2.textContent = "Este es el segundo parrafo, 483888192387636168321763681872479247 ";

const lista = document.createElement("ul");

for (let i = 1; i <= 5; i++) {
	const item = document.createElement("li");
	item.textContent = `Elemento de lista ${i}`;
	lista.appendChild(item);
}

document.body.appendChild(titulo);
document.body.appendChild(subtitulo);
document.body.appendChild(parrafo1);
document.body.appendChild(parrafo2);
document.body.appendChild(lista);
