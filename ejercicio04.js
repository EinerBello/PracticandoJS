// Ejercicio 4. El DOM tambien se puede reorganizar

//botones

const btnReorganizar = document.createElement("button");
btnReorganizar.textContent = "Reorganizar pagina";
btnReorganizar.style.margin = "10px";

const btnRestaurar = document.createElement("button");
btnRestaurar.textContent = "Restaurar orden";

document.body.prepend(btnReorganizar, btnRestaurar);

const tituloPrincipal = document.querySelector("#titulo-principal");
const listaElementos = document.querySelector("ul");
const tarjetas = document.querySelector("#contenedor-tecnologias");
const parrafosTexto = document.querySelectorAll(".texto-resaltado");

btnReorganizar.addEventListener("click", () => {
	document.body.appendChild(tarjetas);
	document.body.appendChild(tituloPrincipal);
	document.body.appendChild(listaElementos);

	parrafosTexto.forEach(parrafp => {
		document.body.appendChild(parrafo);
	});
});

btnRestaurar.addEventListener("click", () => {
	const subtitulo = document.querySelector("h2");

	document.body.insertBefore(tituloPrincipal, subtitulo);

	parrafosTexto.forEach(parrafo => {
		document.body.appendChild(parrafo);
	});
	document.body.appendChild(listaElementos);
	document.body.appendChild(tarjetas);
});