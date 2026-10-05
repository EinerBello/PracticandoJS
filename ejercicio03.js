// Ejercicio 3: Crear una coleccion de elementos desde datos

const tecnologias = [
	{ nombre: "HTML", descripcion: " ", tipo: "Frontend"},
	{ nombre: "CSS", descripcion: " ", tipo: "Frontend"},
	{ nombre: "JavaScript", descripcion: " ", tipo: "Frontend"},
	{ nombre: "Node.js", descripcion: " ", tipo: "Backend"},
	{ nombre: "MongoDB", descripcion: " ", tipo: "Base de datos"},

];

const contenedorTarjetas = document.createElement("div");
contenedorTarjetas.id = "contenedor-tecnologias";

tecnologias.forEach(tec => {
	const tarjeta = document.createElement("div");

	tarjeta.style.border = "2px solid black";
	tarjeta.style.margin = "10px 0";
	tarjeta.style.padding = "10px";

	const titulo = document.createElement("h3");
	titulo.textContent = tec.nombre;

	const descripcion = document.createElement("p");
	descripcion.textContent = tec.descripcion;

	const tipo = document.createElement("p");
	tipo.textContent = `tipo: ${tec.tipo}`;

	tarjeta.appendChild(titulo);
	tarjeta.appendChild(descripcion);
	tarjeta.appendChild(tipo);

	contenedorTarjetas.appendChild(tarjeta);
});

document.body.appendChild(contenedorTarjetas);

