// Ejercicio 9: Estado y LocalStorage

const seccionEje9 = document.createElement("section");
seccionEje9.style.marginTop = "30px";
seccionEje9.style.padding = "20px";
seccionEje9.style.backgroundColor = "#e2e3e5";
seccionEje9.style.border = "2px solid #6c757d";

const tituloEje9 = document.createElement("h2");
tituloEje9.textContent = "Ejericio 9: Guardado";

const btnBorrarDatos = document.createElement("button");
btnBorrarDatos.textContent = "Borrar datos guardados";
btnBorrarDatos.style.backgroundColor = "#dc3545";
btnBorrarDatos.style.color = "white";
btnBorrarDatos.style.padding = "8px 15px";
btnBorrarDatos.style.border = "none";
btnBorrarDatos.style.cursor = "pointer";

//Borrar datos y regresar a estado inicial
btnBorrarDatos.addEventListener("click", () => {
	localStorage.removeItem("tecnologiasLocal") 
	location.reload();
});

seccionEje9.appendChild(tituloEje9);
seccionEje9.appendChild(btnBorrarDatos);
document.body.appendChild(seccionEje9);

//Cargar la info 
document.addEventListener("DOMContentLoaded", () => {
	const datosRecuperados = JSON.parse(localStorage.getItem("tecnologiasLocal"));

	if (datosRecuperados && datosRecuperados.length > 0) {
		const contenedor = document.getElementById("contenedor-tecnologias");

		if (contenedor) {
			datosRecuperados.forEach(tec => {
				//se reconstruye la tarjeta
				const tarjeta = document.createElement("div");
				tarjeta.style.border = "2px solid black";
				tarjeta.style.margin = "10px 0";
				tarjeta.style.padding = "10px";

				const titulo = document.createElement("h3");
				titulo.textContent = tec.nombre;

				const descripcion = document.createElement("p");
				descripcion.textContent = tec.descripcion;

				const tipo = document.createElement("p");
				tipo.textContent = `Tipo : ${tec.tipo}`;

				tarjeta.appendChild(titulo);
				tarjeta.appendChild(descripcion);
				tarjeta.appendChild(tipo);

				contenedor.appendChild(tarjeta);
			});
		}
	}
});