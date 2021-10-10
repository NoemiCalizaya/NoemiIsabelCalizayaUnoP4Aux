"use strict";

// La solucion de la pregunta 2 va aqui

// PARTE 1
// 1. Escribe una función asíncrona 'loadNPause' que recree la pregunta 1, esta vez
//usando async / await (solo la parte donde se consume la promesa, reutilice la
//función 'createImage' que escribió antes)
    
/* async function loadNPause (imgPath) {
    try {
        const img = await document.createElement('img');
        img.src = imgPath;
        setTimeout(() => {
            if (imgPath.length !== 17) throw new Error("Algo salio mal en la peticion 💣💣");
            document.querySelector('.images').appendChild(img);
        }, 2000);
        // 5.
        if (imgPath === './imgs/img-1.jpeg')
            img.style.display = "none";
        // 7. Una vez transcurridos los 2 segundos, oculte la imagen actual.
        else
            img.style.display = "none";
    }
    catch (err) {
        alert(err);
    }
}
loadNPause('./imgs/img-1.jpeg');
loadNPause('./imgs/img-2.jpeg'); */
// -------------------------------------------------------------------------------------------
