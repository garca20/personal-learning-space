let number1       = document.getElementById("numero1");
let number2       = document.getElementById("numero2");
let btn_calcular  = document.getElementById("calcular");

function afterLoad() {
    
    number1.focus();
    number2.disabled = true;

}

function hola() {
    if (number1.value.length > 0) {
        console.log("Bien");
        number1.disabled = true;
        number2.disabled = false;
        number2.focus();
    }
    else {        
        console.log("No deje campos vacios.");
        number1.focus();
    }
}

btn_calcular.addEventListener("mouseover", event_name => {

    const number1_value = number1.value;
    const number2_value = number2.value;
    const respuesta = (parseInt(number1_value)+parseInt(number2_value));

    document.getElementById("red_box_with_answer").innerText= "La suma de dichos numeros es: "+" "+respuesta;
    alert("La suma de los dos numeros es: ".concat(respuesta));
    
})