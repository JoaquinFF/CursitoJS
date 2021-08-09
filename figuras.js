//Código del cuadrado

function perimetroCuadrado(lado){
    return lado * 4;
}


function areaCuadrado(lado){
    return lado * lado;
}


//Código del triángulo

function perimetroTriangulo(lado1, lado2, base){
    return lado1 + lado2 + base;
}
function areaTriangulo(base, altura){
    return(base * altura) / 2;
}


//Código del círculo

//Diámetro
function diametroCirculo(radio){
    return radio * 2;
} 
//Pi
const PI = Math.PI;
//Circunferencia
function perimetroCirculo(radio){
    const diametro = diametroCirculo(radio);
    return diametro * PI;
}
//area
function areaCirculo(radio){
   return (radio * radio) * PI;
}

//Acá interactuamos con el HTML (Cuadrado)
function calcularPerimetroCuadrado(){
    const input = document.getElementById("inputCuadrado");
    const value = input.value;
    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
}
function calcularAreaCuadrado(){
    const input = document.getElementById("inputCuadrado");
    const value = input.value;
    const area = areaCuadrado(value);
    alert(area);
}
//Acá interactuamos con el HTML (Triangulo)
function calcularPerimetroTriangulo(){
    const inputLado1 = document.getElementById("inputTriangulo1");
    const inputLado2 = document.getElementById("inputTriangulo2");
    const inputBase = document.getElementById("inputTriangulo3");
    const valueLado1 = parseInt(inputLado1.value);
    const valueLado2 = parseInt(inputLado2.value);
    const valueBase = parseInt(inputBase.value);
    const perimetro = perimetroTriangulo(valueLado1, valueLado2, valueBase);
    alert(perimetro);
}
function calcularAreaTriangulo(){
    const inputBase = document.getElementById("inputTriangulo3");
    const inputAltura = document.getElementById("inputTriangulo4");
    const valueBase = inputBase.value;
    const valueAltura = inputAltura.value;
    const area = areaTriangulo(valueBase, valueAltura);
    alert(area);
}
//Acá interactuamos con el HTML (Círculo)
function calcularPerimetroCirculo(){
    const inputRadio = document.getElementById("inputCirculo1");
    const valueRadio = parseInt(inputRadio.value);
    const perimetro = perimetroCirculo(valueRadio);
    alert(perimetro);
}
function calcularAreaCirculo(){
    const inputRadio = document.getElementById("inputCirculo1");
    const valueRadio = parseInt(inputRadio.value);
    const area = areaCirculo(valueRadio);
    alert(area);
}
