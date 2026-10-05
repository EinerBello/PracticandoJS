// Ejercicio 7: Formulario dinamico

const seccionFormulario = document.createElement("section");
seccionFormulario.style.marginTop = "30px";
seccionFormulario.style.padding = "20px";
seccionFormulario.style.border = "2px solid #28a745";
seccionFormulario.style.backgroundColor = "#e9f7ef";

const tituloEje7 = document.createElement("h2");
tituloEje7.textContent = "Ejercicio 7: Registrar tecnologia";

//Campos formulario
const inputNombre = document.createElement("input");
inputNombre.type = "text";
inputNombre.placeholder = "Nombre (ej. Java)";
inputNombre.style.marginRight = "10px";

const inputDesc = document.createElement("input");
inputDesc.type = "text";
inputDesc.placeholder = "Descripcion";
inputDesc.style.marginRight = "10px";

const inputCat = document.createElement("input");
inputCat.type = "text";
inputCat.placeholder = "Categoria o tipo";
inputCat.style.marginRight = "10px";

const btnAgregarTec = document.createElement("button");
btnAgregarTec.textContent = "Agregar tecnologia";
const msjErrorForm = document.createElement("p");
msjErrorForm.style.color = "red";
msjErrorForm.style.fontWeight = "bold";

// Tarjeta sin recargar pagina

btnAgregarTec.addEventListener("click", () => {
	const valNombre = inputNombre.value.trim();
	const valDesc = inputDesc.value.trim();
	const valCat = inputCat.value.trim();

	//campos vacios
	if (valNombre === "" || valDesc === "" || valCat === "") {
		msjErrorForm.textContent = " Error: llena todos los campos";
		return;
	}

	//mensaje de error 
	msjErrorForm.textContent = "";

	//nueva tarjeta 
	const tarjeta = document.createElement("div");
	tarjeta.style.border = "2px solid black";
	tarjeta.style.margin = "10px 0";
	tarjeta.style.padding = "10px";

	const titulo = document.createElement("h3");
	titulo.textContent = valNombre;

	const descripcion = document.createElement("p");
	descripcion.textContent = valDesc;

	const tipo = document.createElement("p");
	tipo.textContent = ` Tipo: ${valCat}`;

	tarjeta.appendChild(titulo);
	tarjeta.appendChild(descripcion);
	tarjeta.appendChild(tipo);

	//Contenedor del eje3
	const contenedorTarjetas = document.getElementById("contenedor-tecnologias");
	if (contenedorTarjetas) {
		contenedorTarjetas.appendChild(tarjeta);
		const tecsGuardadas = JSON.parse(localStorage.getItem("tecnologiasLocal")) || [];
		tecsGuardadas.push({ nombre: valNombre, descripcion: valDesc, tipo: valCat});
		localStorage.setItem("tecnologiasLocal", JSON.stringify(tecsGuardadas));
	}

	// se limpian los inputs
	inputNombre.value = "";
	inputDesc.value = "";
	inputCat.value = "";
});

seccionFormulario.appendChild(tituloEje7);
seccionFormulario.appendChild(inputNombre);
seccionFormulario.appendChild(inputDesc);
seccionFormulario.appendChild(inputCat);
seccionFormulario.appendChild(btnAgregarTec);
seccionFormulario.appendChild(msjErrorForm);

document.body.appendChild(seccionFormulario);
