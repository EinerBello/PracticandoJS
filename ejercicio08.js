// Ejercicio 8: Buscar y filtrar informacion

const seccionBusqueda = document.createElement("section");
seccionBusqueda.style.marginTop = "30px";
seccionBusqueda.style.padding = "20px";
seccionBusqueda.style.backgroundColor = "#fff3cd";
seccionBusqueda.style.border = "2px solid #ffc107";

const tituloEje8 = document.createElement("h2");
tituloEje8.textContent = "Ejercicio 8: Filtrar tecnologias";

const inputBuscador = document.createElement("input");
inputBuscador.type = "text";
inputBuscador.placeholder = "Buscar tecnologia";
inputBuscador.style.padding = "8px";
inputBuscador.style.width = "250px";

//Input 
inputBuscador.addEventListener("input", () => {
	//Convertir el texto a minusculas para que coincida mejor
	const termino = inputBuscador.value.toLowerCase();

	//Contenedor de tecnologias
	const contenedorTarjetas = document.getElementById("contenedor-tecnologias");

	if (contenedorTarjetas) {
		//obtener los divs dentro del contenedor
		const tarjetas = contenedorTarjetas.querySelectorAll("div");

		tarjetas.forEach(tarjeta => {
			//extraemos del texto h3
			const titulo = tarjeta.querySelector("h3").textContent.toLowerCase();

			// si el titulo incluye lo que el usuario escribio se muestra
			if (titulo.includes(termino)) {
				tarjeta.style.display = "block";
			} else {
				tarjeta.style.display = "none";
			}
		});
	}

});

seccionBusqueda.appendChild(tituloEje8);
seccionBusqueda.appendChild(inputBuscador);

document.body.appendChild(seccionBusqueda);