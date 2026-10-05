// Ejercicio 3: Crear una coleccion de elementos desde datos

const tecnologias = [
	{ nombre: "HTML", descripcion: " lenguaje de marcado estándar utilizado para estructurar y desplegar páginas web ", tipo: "Frontend"},
	{ nombre: "CSS", descripcion: " lenguaje de diseño utilizado para controlar la apariencia, el formato y la presentación visual de las páginas web escritas en HTML", tipo: "Frontend"},
	{ nombre: "JavaScript", descripcion: "lenguaje de programación ligero, interpretado y orientado a objetos que se utiliza principalmente para crear contenido dinámico e interactivo en páginas web. ", tipo: "Frontend"},
	{ nombre: "Node.js", descripcion: " es un entorno de ejecución de código abierto para JavaScript, construido con el motor V8 de Google Chrome, que permite ejecutar este lenguaje fuera del navegador web ", tipo: "Backend"},
	{ nombre: "MongoDB", descripcion: " es una base de datos NoSQL de código abierto orientada a documentos, diseñada para almacenar grandes volúmenes de datos de forma flexible y escalable", tipo: "Base de datos"},

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

