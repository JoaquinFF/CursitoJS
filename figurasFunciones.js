//Código del cuadrado
console.group("Cuadrado")
//const ladoCuadrado = 5;
//console.log("Los lados del cuadrado miden: " + ladoCuadrado + "cm");

function perimetroCuadrado(lado){
    return lado * 4;
}
//console.log("El perímetro del cuadrado mide " + perimetroCuadrado + "cm");

function areaCuadrado(lado){
    return lado * lado;
}
// console.log("El área del cuadrado mide: " + areaCuadrado + "cm^2");
console.groupEnd();

//Código del triángulo
console.group("Triángulo")

// const ladoTriangulo1 = 6;
// const ladoTriangulo2 = 6;
// const baseTriangulo = 4;
// const alturaTriangulo = 5.5;

function perimetroTriangulo(lado1, lado2, base){
    return lado1 + lado2 + base;
}
function areaTriangulo(base, altura){
    return(base * altura) / 2;
}

// console.log(
//     "los lados del triangulo miden: " 
//     + ladoTriangulo1 
//     + "cm, " 
//     + ladoTriangulo2 
//     + "cm y " 
//     + baseTriangulo
//     + "cm"
// );
// console.log("La altura del triángulo es de " + alturaTriangulo +"cm");
// console.log("El perímetro del triángulo es " + perimetroTriangulo +"cm");
// console.log("El área del triángulo es " + areaTriangulo + "cm^2");
console.groupEnd();

//Código del círculo
console.group("Círculos");

//Radio
// const radioCirculos = 4;
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
// console.log("El radio de círculo es: " + radioCirculos + "cm");
// console.log("El diámetro del círculo mide: " + diametroCirculo + "cm");
// console.log("El valor de PI es: " + PI);
// console.log("El perímetro del círculo es: " + perimetroCirculo + "cm");
// console.log("El área del círculo es: " + areaCirculo + "cm^2");
console.groupEnd();