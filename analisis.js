// Funciones Helpers
const esPar = (numerito) => (numerito % 2 === 0);

const calcularMediaAritmetica = (lista) => {

    const sumaLista = lista.reduce(
        (valorAcumulado = 0, nuevoElemento ) => (valorAcumulado + nuevoElemento)
    );

    const promedioLista = sumaLista / lista.length;
    
    return promedioLista;
}
// Calculadora de mediana


const medianaSalarios = (lista) =>{
    const mitad = parseInt(lista.length / 2);

    if(esPar(lista.length)){
        const personitaMitad1 = lista[mitad - 1];
        
        const personitaMitad2 = lista[mitad];
        
        const mediana = calcularMediaAritmetica([personitaMitad1, personitaMitad2]);
        
        return mediana
    } else {
        
        const personitaMitad = lista[mitad];
        
        return personitaMitad;
    }
}


// Mediana General
const salariosCol = colombia.map((persona) => {
    return persona.salary;
});

const salariosColSorted = salariosCol.sort((salaryA, salaryB) => salaryA - salaryB);


const medianaGeneralCol = medianaSalarios(salariosColSorted);

// Mediana Top 10% 


const spliceStart = (salariosColSorted.length * (100 - 10)) / 100;
const spliceCount = salariosColSorted.length - spliceStart;
/*
    const arrayEj = [0, 1, 2, 3, 4, 5||||,6, 7 |||, 8, 9];
     [0, 1, 2, 3, 4, 5, 8, 9];
    const EJEMPLO = arrayEj.splice(5, 2); //[6, 7]
*/
const salariosColTop10 = salariosColSorted.splice(spliceStart, spliceCount);

const medianaTop10Col = medianaSalarios(salariosColTop10);

console.log({
    medianaGeneralCol,
    
    medianaTop10Col,

});