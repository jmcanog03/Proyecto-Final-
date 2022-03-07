function Validar() {

    //Coger los datos del formulario 
    var usuario = document.getElementById("usuario").value;
    var clave = document.getElementById("clave").value;

    if (usuario == "admin" && clave == "1234") {

        //Si somos administrador nos vamos a una web administrador
        window.location.pathname = '/administrador.html';



    } else {
        //Si algun dato está erroneo mostramos un mensaje
        document.getElementById("error").innerHTML="Datos del usuario erroneo";
    }

    if (usuario == "josé" && clave == "joseyale") {

        //Si somos usuario nos vamos a una web administrador
        window.location.pathname = '/perfillector.html';

    } else {
        //Si algun dato está erroneo mostramos un mensaje
        document.getElementById("error").innerHTML="Datos del usuario erroneo";

    }
}

function validación(){
    var falta = document.getElementById("alta")

    // Comprobar campo nombre

    if (falta.nombre.value.length==0 || falta.nombre.value == null || falta.nombre.value.length > 4) {
        alert("Escribir un nombre");
        falta.nombre.focus();
        return 0;
    }

    // Edad

    var edad = falta.edad.value;
    if (edad == ""){
        alert("Escribe una edad");
        falta.edad.focus();
    }else if(isNaN(edad)){
        alert("Escribe una edad")
        falta.edad.focus();
    }else if (edad <18){
        alert("No eres mayor de edad")
        falta.edad.focus();
    }

    // Campo Ciudad
    
    if (falta.ciudad.selectedIndex == 0){
        alert("Debes coger una ciudad");
        falta.ciudad.focus();
    }

    alert("Muchas gracias por registrate")
    falta.submit();

}

