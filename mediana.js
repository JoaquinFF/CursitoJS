function calcularMediaAritmetica(lista){
    const sumaLista = lista.reduce(
        function (valorAcumulado = 0, nuevoElemento){
            return valorAcumulado + nuevoElemento;
        }
    );
    const promedioLista = sumaLista / lista.length;
    
    return promedioLista;
}

function esPar(numerito){
    if(numerito % 2 === 0){
        return true;
    }
    else{
        return false;
    }
}

function obtenerLista(lista){
    lista.sort();
    console.log(lista);
    const mitadLista1 = parseInt(lista.length / 2);
    let mediana;
    const item1 = lista[mitadLista1 - 1];
    const item2 = lista[mitadLista1];

    if(esPar(lista.length)){
    const promedioElemento1y2 = calcularMediaAritmetica([
        item1,
        item2
    ]);
    mediana = promedioElemento1y2;
    }
    else{
    mediana = lista[mitadLista1];
    }
    return mediana;
}