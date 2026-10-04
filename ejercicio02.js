const tituloExistente = document.querySelector("h1");

tituloExistente.textContent = " Titulo modificado ";
tituloExistente.id = "titulo-principal";

const parrafosExistentes = document.querySelectorAll("p");

parrafosExistentes.forEach(parrafo => {
	parrafo.classList.add("texto-resaltado");
	parrafo.style.color = "darkblue";
	parrafo.style.fontSize = "18px";
	parrafo.style.margin = "20px 10px";
});