const calcularMediaAritmetica = (lista) => {

    const sumaLista = lista.reduce(
        (valorAcumulado = 0, nuevoElemento ) => (valorAcumulado + nuevoElemento)
    );

    const promedioLista = sumaLista / lista.length;
    
    return promedioLista;
}

const esPar = (numerito) =>{
    if(numerito % 2 === 0){
        return true;
    }
    else{
        return false;
    }
}

const lista1 = [100, 200, 500, 10000200,];

const calcularMediana = (lista) =>{
    lista1.sort((a,b) => a-b)
    console.log(lista);
    const mitadLista1 = parseInt(lista1.length/2);

    let mediana;

    if(esPar(lista1.length)){
        const elemento1 = lista1[mitadLista1 - 1];
        const elemento2 = lista1[mitadLista1] 

        mediana = calcularMediaAritmetica([elemento1, elemento2]);

    } else{
        mediana = mitadLista1;
    }
    return mediana
}

console.log(calcularMediana(lista1));


