//Ejercicio 5: Agregar y eliminar elementos

const contenedorEje5 = document.createElement("div");
contenedorEje5.style.marginTop = "30px";
contenedorEje5.style.padding = "20px";
contenedorEje5.style.borderTop = "2px solid #ccc";

const tituloEje5 = document.createElement("h2");
tituloEje5.textContent = "Ejercicio 5: agregar y eliminar elementos";

//botones
const btnAgregar = document.createElement("Button");
btnAgregar.textContent = "Agregar elemento";
btnAgregar.style.marginRight = "10px";
btnAgregar.style.padding = "5px 10px";

const btnEliminar = document.createElement("button");
btnEliminar.textContent = "Eliminar ultimo elemento";
btnEliminar.style.padding = "5px 10px";

//Mensaje de error
const mensajeError = document.createElement("p");
mensajeError.style.color = "red";
mensajeError.style.fontWeight = "bold";

//Lista con elementos
const listaDinamica = document.createElement("ul");
let contadorElementos = 0;

btnAgregar.addEventListener("click", () => {
	mensajeError.textContent = " ", //Limpia el error 
	contadorElementos++;

	const nuevoElemento = document.createElement("li");
	nuevoElemento.textContent = `Elemento ${contadorElementos}`;
	listaDinamica.appendChild(nuevoElemento);
});

//Eliminar
btnEliminar.addEventListener("click", () => {
	//se checa si la lista tiene elementos
	if (listaDinamica.children.length > 0) {
		//se elimina el ultimo hijo
		listaDinamica.removeChild(listaDinamica.lastElementChild);
		contadorElementos--; //restaura contador
		mensajeError.textContent = ""; 
	} else {
		//Mensaje si esta vacia
		mensajeError.textContent = " Error: La lista ya se encuentra vacia";
	}
});

contenedorEje5.appendChild(tituloEje5);
contenedorEje5.appendChild(btnAgregar);
contenedorEje5.appendChild(btnEliminar);
contenedorEje5.appendChild(mensajeError);
contenedorEje5.appendChild(listaDinamica);

document.body.appendChild(contenedorEje5);

