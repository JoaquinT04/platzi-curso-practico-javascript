const lista1 = [4, 9, 8, 6, 5, 4, 2];

const calcularMediaGeometrica = (lista) => {
    let radicando = 1;

    lista.map((elemento)=>{
        radicando *= elemento;
    });
    
    const indiceRaiz = lista.length;
    
    let mediaGeometrica = Math.pow(radicando, (1/indiceRaiz));

    mediaGeometrica = mediaGeometrica.toFixed(2)
    return mediaGeometrica;
}

console.log('La media Geométrica es: ' + calcularMediaGeometrica(lista1))