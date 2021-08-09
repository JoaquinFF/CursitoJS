function altura (lado1, lado2, base){
    return (Math.sqrt((lado1 * lado2) - (base * base) / 4));
}
function calcularAlturaTriangulo(){
    const inputLado1 = document.getElementById("inputTriangulo1");
    const inputLado2 = document.getElementById("inputTriangulo2");
    const inputBase = document.getElementById("inputTriangulo3");
    const valueLado1 = parseInt(inputLado1.value);
    const valueLado2 = parseInt(inputLado2.value);
    const valueBase = parseInt(inputBase.value);
    const alturaTriangulo = altura(valueLado1, valueLado2, valueBase);
    if(valueLado1 === valueLado2){
        alert(alturaTriangulo);
    }
    else{
        alert("Por favor inserte valores compatibles con un triangulo isosceles");
    }
    
}