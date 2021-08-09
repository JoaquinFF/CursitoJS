// const precioOriginal = 100;
// const descuento = 15;

function calcularPrecioConCupon(){
    const inputCupon = document.getElementById("inputCupon");
    const valueCupon = parseInt(inputCupon.value);
    if(valueCupon === 123){
        return 10;
    }
    else if(valueCupon === 1234){
        return 25;
    }
    else if(valueCupon === 12345){
        return 40;
    }
    else{
        alert("Por favor ponga un código de cupón válido");
    }
}

function calcularPrecioConDescuento(precio, descuento, cupon){
    const porcentajePrecioConDescuento = 100 - descuento - cupon;
    const precioConDescuento = (precio * porcentajePrecioConDescuento) / 100;
    return precioConDescuento;
}

function onClickButtonPriceDiscount(){
    const inputPrecio = document.getElementById("inputPrice");
    const valuePrecio = parseInt(inputPrecio.value);

    const inputDescuento = document.getElementById("inputDiscount");  
    const valueDescuento = parseInt(inputDescuento.value);

    const precioConDescuento = calcularPrecioConDescuento(valuePrecio, valueDescuento, calcularPrecioConCupon());
    
    const resultP = document.getElementById("resultP");
    resultP.innerText = "El precio con descuento es: $" + precioConDescuento;
}
// console.log({
//     precioOriginal,
//     descuento,
//     porcentajePrecioConDescuento,
//     precioConDescuento
// });