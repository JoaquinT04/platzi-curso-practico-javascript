const lista = [1, 2, 3, 1, 2, 3, 4, 2, 2, 2, 1,];

const calcularModa = (lista) =>{   
    const listaCount = {};

    lista.map((elemento) => {
        if(listaCount[elemento]){
            listaCount[elemento] += 1;
        }else{
            listaCount[elemento] = 1; 
        }
    });

    const listaArray = Object.entries(listaCount).sort((a, b) => a-b)

    const moda = listaArray[listaArray.length - 1];
    
    return moda;
}
