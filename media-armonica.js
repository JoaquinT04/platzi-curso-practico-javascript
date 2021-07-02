const lista1 = [4, 9, 6, 5, 2, 8];

const calcularMediaArmonica = (lista) => {
    let listaOrdenada = lista.sort((a, b) => a-b);

    let  sumatoria = 0;

    listaOrdenada.map((elemento) => {
        sumatoria += (1/elemento);
    })

    const mediaArmonica = lista.length / sumatoria;
    
    return mediaArmonica.toFixed(2);
}

console.log(calcularMediaArmonica(lista1));