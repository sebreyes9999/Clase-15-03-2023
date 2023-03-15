//Se genera como propiedad del elemento html
function saliendo(){

    console.log("Evento generado por el mouse");
}

//Metodo mediante propiedades
const sec1Propiedad = document.getElementById('sec1');

sec1Propiedad.onclick = function () {
    alert("Click en el section");
}

//Mediante el metodo .addEventListener
const btn = document.querySelector('#btnEnviar');
btn.addEventListener('click', ()=>{
    alert("click con addEvent........");
} );