"use strict";

// La solucion de la pregunta 1 va aqui
// PARTE 1
// 1. Cree una función 'createImage' que reciba 'imgPath' como entrada. Esta
//función devuelve una promesa que crea una nueva imagen (use
//document.createElement('img')) y establece el atributo ‘.src’ en el ruta de la
//imagen proporcionada.

// 2. Cuando la imagen haya terminado de cargarse, agréguela al elemento DOM
//con la clase 'images' y resuelva la promesa. El valor resuelto debe ser el
//elemento de la imagen en cuestión. En caso de que haya un error al cargar la
//imagen (escuche el evento 'error'), rechace la promesa.

const createImage = (imgPath) => {
    return new Promise ( function (resolve, rejected) {
        const img = document.createElement('img');
        img.src = imgPath;
        // 4. Una vez que se haya cargado la imagen, pause la ejecución durante 2
        //segundos usando temporizadores.
        //6. Una vez que se haya cargado la segunda imagen, vuelva a pausar la ejecución
        //durante 2 segundos.
        setTimeout(() => {
            if (imgPath.length === 17) resolve (document.querySelector('.images').appendChild(img));
            else rejected ("Algo salio mal en la peticion 💣💣")
        }, 2000);
        // 5.
        if (imgPath === './imgs/img-1.jpeg')
            img.style.display = "none";
        // 7. Una vez transcurridos los 2 segundos, oculte la imagen actual.
        else
            img.style.display = "none";
        });
};
//createImage('./imgs/img-1.jpeg');

/* async function createImage (imgPath) {
    try {
        const img = await document.createElement('img');
        img.src = imgPath;
        if (imgPath.length === 17) throw new Error("Algo salio mal en la peticion 💣💣");
        document.querySelector('.images').appendChild(img);
    }
    catch (err) {
        alert(err);
    }
};
createImage('./imgs/img-1.jpeg'); */

// ---------------------------------------------------------------------------------------------------
// PARTE 2
// 3. Consuma la promesa usando ‘.then’ y también controle los errores.

createImage('./imgs/img-1.jpeg')
.then( (res) => {
    return res;
})
.catch( (err) => {
    console.error(err);
});
// ----------------------------------------------------------------------------------------------------
// 5. Una vez transcurridos los 2 segundos, oculte la imagen actual (configure la
//propiedad ‘display’ de CSS a 'none'), y cargue una segunda imagen.
createImage('./imgs/img-2.jpeg')
.then( (res) => {
    return res;
})
.catch( (err) => {
    console.error(err);
});