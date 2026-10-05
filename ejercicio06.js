// Ejercicio 6: Eventos e interaccion

//Panel interactivo
const panelInteractivo = document.createElement("section");
panelInteractivo.style.marginTop = "30px";
panelInteractivo.style.padding = "20px";
panelInteractivo.style.backgroundColor = "#f9f9f9";
panelInteractivo.style.border = "2px solid #333";

const tituloEje6 = document.createElement("h2");
tituloEje6.textContent = "Panel interactivo";

// Objetivo botones a modificar
const cajaObjetivo = document.createElement("div");
cajaObjetivo.textContent = " Caja de prueba, presiona los botones";
cajaObjetivo.style.padding = "20px";
cajaObjetivo.style.marginTop = "15px";
cajaObjetivo.style.backgroundColor = "lightgray";
cajaObjetivo.style.transition = "all 0.3s ease";

//boton 1: Mostrar / Ocultar
const btn1 = document.createElement("button");
btn1.textContent = " Mostrar / Ocultar";
btn1.style.marginRight = "10px";
btn1.addEventListener("click", () => {
	if (cajaObjetivo.style.display == "none") {
		cajaObjetivo.style.display = "block";
    } else {
    	cajaObjetivo.style.display = "none";
    } 
});

//boton 2: cambiar texto
const btn2 = document.createElement("button");
btn2.textContent = "Cambiar texto";
btn2.style.marginRight = "10px";
btn2.addEventListener("click", () => {
	cajaObjetivo.textContent = "El texto fue modificado";
});

//boton 3: cambiar aspecto
const btn3 = document.createElement("button");
btn3.textContent = "Cambiar aspecto";
btn3.addEventListener("click", () => {
	cajaObjetivo.style.backgroundColor = "#ffdd57"; //color
	cajaObjetivo.style.borderRadius = "15px"; //redondea
	cajaObjetivo.style.border = "3px dashed purple"; //borde
});

const areaSensible = document.createElement("div");
areaSensible.textContent = "Pasa el raton por encima (Evento: mouseover)";
areaSensible.style.padding = "15px";
areaSensible.style.marginTop = "20px";
areaSensible.style.backgroundColor = "lightblue";
areaSensible.style.textAlign = "center";
areaSensible.style.fontWeight = "bold";
areaSensible.style.cursor = "crosshair";

// Mouseover y mouseout
areaSensible.addEventListener("mouseover", () => {
	areaSensible.style.backgroundColor = "lightgreen";
	areaSensible.textContent = "Mouse detectado (Evento activo)";
});
areaSensible.addEventListener("mouseout", () => {
	areaSensible.style.backgroundColor = "lightblue";
	areaSensible.textContent = "Pasa el raton por encima (Evento: mouseover)";
});

panelInteractivo.appendChild(tituloEje6);
panelInteractivo.appendChild(btn1);
panelInteractivo.appendChild(btn2);
panelInteractivo.appendChild(btn3);
panelInteractivo.appendChild(cajaObjetivo);
panelInteractivo.appendChild(areaSensible);

document.body.appendChild(panelInteractivo);
