const lista1 = [1, 4, 3, 4, 5, 1, 3, 7];

const calcularMediaAritmeticaPonderada = (lista) => {
    const listaCount = {};

    lista.map((elemento) => {
        if(listaCount[elemento]){
            listaCount[elemento] += 1;
        }else{
            listaCount[elemento] = 1; 
        }
    });

    const listaArray = Object.entries(listaCount).sort((a, b) => a-b)

    let sumarXN = 0;
    listaArray.map((elemento) => {
        sumarXN += (elemento[0]*elemento[1]);
    });

    const frecuenciaAbsoluta = 0;
    listaArray.map((elemento) => {
        frecuenciaAbsoluta += elemento[1];
    });

    const mediaAritmeticaPonderada = multiplicarXN / frecuenciaAbsoluta;

    return mediaAritmeticaPonderada.toFixed(2);

}
console.log(calcularMediaAritmeticaPonderada(lista1));