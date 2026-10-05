# Programación de Sistemas Basados en Web (PSBW) - Práctica de JavaScript

## ¿Qué hay en este proyecto?
Aquí está mi práctica cumpliendo con la estructura que se pidió. Hice los ejercicios del 1 al 9, todos separados en su propio archivo `.js`. Decidí saltarme el ejercicio 10 porque preferí asegurar que estos 9 funcionaran perfectamente sin errores y cumpliendo todas las reglas (como no usar `innerHTML` y crear todo pura manipulación de nodos).

## Resumen de lo que hice en cada ejercicio:

*   **Ejercicio 1:** Creé la estructura básica (títulos, párrafos, lista) usando puro JavaScript con `document.createElement` y `appendChild`. Nada de trampa escribiendo en el HTML.
*   **Ejercicio 2:** Agarré los elementos del primer ejercicio usando `querySelector` y les modifiqué el ID, las clases y varios estilos (color, tamaño, etc.) directamente desde JS.
*   **Ejercicio 3:** Armé un arreglo con 5 tecnologías (con su nombre, descripción y tipo). Usé un ciclo para recorrerlo y generar dinámicamente las tarjetas (divs) en la pantalla.
*   **Ejercicio 4:** Le metí botones para reorganizar la página. Usé eventos para cambiar de lugar las secciones que ya existían en el DOM sin tener que recargar la página ni crear nodos nuevos.
*   **Ejercicio 5:** Hice una lista dinámica donde puedes agregar elementos o eliminar el último. Le puse una validación con un `if` para que no marcara error si intentabas borrar algo cuando la lista ya estaba vacía.
*   **Ejercicio 6:** Armé un panel interactivo. Además del típico botón de clic, elegí usar el evento `mouseover`. Lo elegí porque me pareció muy práctico que la acción se ejecute con solo pasar el ratón por encima del elemento, sin tener que hacer clic.
*   **Ejercicio 7:** Hice un formulario para registrar nuevas tecnologías. Le puse validaciones con `.trim()` para que no te deje avanzar si dejas campos vacíos. Si todo está bien, crea la tarjeta y la agrega junto a las demás al instante.
*   **Ejercicio 8:** Armé un buscador que filtra las tarjetas en tiempo real. Usé el evento `input` y pasé todo a minúsculas con `toLowerCase()` para que fuera escondiendo las tarjetas que no coincidieran con lo que vas escribiendo.
*   **Ejercicio 9:** Para que mis nuevas tecnologías no se borraran al dar F5, modifiqué el código para guardar los datos en el `localStorage`. Así, cuando la página carga de nuevo, mi script busca esa información y vuelve a dibujar las tarjetas. También le puse su botón para limpiar la memoria y reiniciar todo.