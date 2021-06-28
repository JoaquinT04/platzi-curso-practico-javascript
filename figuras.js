// Código del cuadrado
console.group('Cuadrados');

/* const ladoCuadrado = 5;
console.log('Los lados del cuadrado miden: ' + ladoCuadrado + 'cm'); */

const perimetroCuadrado = (lado) => lado * 4;/* 
console.log('El perimetro del cuadrado es: ' + perimetroCuadrado + 'cm'); */

const areaCuadrado = (lado) => lado * lado;
/* console.log('El área del cuadrado es: ' + areaCuadrado + 'cm^2');  */

console.groupEnd();

// Código del Triangulo
console.group('Triangulos');

/* const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const baseTriangulo = 4;
console.log('Los lados del triangulo miden: ' + ladoTriangulo1 + 'cm, ' + ladoTriangulo2 + 'cm, ' + baseTriangulo + 'cm');
 
const alturaTriangulo = 5.5;
console.log('La altura del triangulo es: ' + alturaTriangulo)*/

const perimetroTriangulo = (lado1, lado2, base)=>(lado1 + lado2) + base;
/* console.log('El périmetro del triángulo es: ' + perimetroTriangulo + 'cm'); */

const areaTriangulo = (base, altura) =>(base * altura) / 2;
/* console.log('El área del triángulo es: ' + areaTriangulo + 'cm^2'); */

const alturaTriánguloIsosceles = (lado1, lado2, base)=> Math.sqrt((lado1 * lado2)-((base*base) / 4));

console.groupEnd();

// Código del Círculo
console.group('Círculo');

//Radio
//const radioCirculo = 4;
//console.log('El radio del círculo es: ' + radioCirculo + 'cm');

//Diámetro
const diametroCirculo = (radio) => radio * 2;

//PI
const PI = Math.PI;
console.log('PI es: ' + PI);

//Circunferencia
const perimetroCirculo = (radio) => diametroCirculo(radio) * PI;

//Área
const areaCirculo = (radio) =>( radio * radio ) * PI;

console.groupEnd();

// Aquí interactuamos con el HTML
// PERIMETRO Y AREA DEL CUADRADO
const calcularPerimetroCuadrado = () =>{
    const input = document.getElementById("inputCuadrado");
    const value = input.value;
    const perimetro = perimetroCuadrado(value);
    alert('El perimetro del cuadrado es: ' + perimetro)
} 

const calcularAreaCuadrado = () =>{
    const input = document.getElementById("inputCuadrado");
    const value = input.value;
    const area = areaCuadrado(value);
    alert('El área del cuadrado es: ' + area);
}
// PERIMETRO Y AREA DEL TRIÁNGULO
const calcularPerimetroTriangulo = () =>{
    const input1 = document.getElementById("inputLado1");
    const lado1 =parseInt(input1.value);

    const input2 = document.getElementById("inputLado2");
    const lado2 =parseInt(input2.value);

    const input3 = document.getElementById("inputBase");
    const base =parseInt(input3.value);
    

    const perimetro = perimetroTriangulo(lado1, lado2, base);
    alert('El périmetro del triángulo es: ' + perimetro);
}

const calcularAreaTriangulo = () =>{
    const input1 = document.getElementById("inputAltura");
    const altura =parseInt(input1.value);

    const input2 = document.getElementById("inputBase");
    const base =parseInt(input2.value);
    

    const area = areaTriangulo(base, altura);
    alert('El área del triángulo es: ' + area);
}
// ALTURA DEL TRIÁNGULO ISÓSCELES
const calcularAlturaTrianguloIsosceles = () =>{
    const input1 = document.getElementById("inputLado1-2");
    const lado1 =parseInt(input1.value);

    const input2 = document.getElementById("inputLado2-2");
    const lado2 =parseInt(input2.value);

    const input3 = document.getElementById("inputBase2");
    const base =parseInt(input3.value);

    if(lado1 == lado2 && lado1!= base){
        const altura = alturaTriánguloIsosceles(lado1, lado2, base);
        alert('La altura del triángulo isóseles es: ' + altura);
    }else{
        alert('Error!!-- no es un triángulo isósceles');
    }
    
}

// PERIMETRO Y AREA DEL CIRCULO
const calcularPerimetroCirculo = () => {
    const input1 = document.getElementById("inputCirculo");
    
    const radio = parseInt(input1.value);

    const perimetro = perimetroCirculo(radio);
    alert('El périmetro del circulo es: ' + perimetro);
}

const calcularAreaCirculo = () => {
    const input1 = document.getElementById("inputCirculo");
    
    const radio = parseInt(input1.value);

    const area = areaCirculo(radio);
    alert('El área del circulo es: ' + area);
}