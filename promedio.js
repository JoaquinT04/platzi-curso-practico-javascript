const lista = [100, 200, 300, 500];


const calcularMediaAritmetica = (lista) => {
    /* let sumaLista = 0;
    for(let i = 0; i < lista.length ; i++){
    sumaLista += lista[i];
    }
    */

    const sumaLista = lista.reduce(
        (valorAcumulado = 0, nuevoElemento ) => (valorAcumulado + nuevoElemento)
    );

    const promedioLista = sumaLista / lista.length;
    
    return promedioLista;
}