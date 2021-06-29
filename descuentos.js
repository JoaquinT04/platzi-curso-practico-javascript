/* const precioOriginal = 100;
const descuento = 15;
 */
function calcularPrecioConDescuento (precio, descuento){
    const porcentajePrecioConDescuento = 100 - descuento;
    const precioConDescuento = (precio * porcentajePrecioConDescuento) / 100;
    
    return precioConDescuento;
}


const calculatePriceDiscount = () => {
    const price = parseInt(document.getElementById("inputPrice").value);

    const discount = parseInt(document.getElementById("inputDiscount").value);

    const precioConDescuento = calcularPrecioConDescuento(price, discount)

    const resultP = document.getElementById("resultPrice");

    resultP.innerText = `El precio con descuento son: $${precioConDescuento}`;
}


const calculatePriceDiscountCupon = () =>{
    
    let descuento;

    let cupones = [{nombre:"Cupón 1", descuento:10}, {nombre:"Cupón 2", descuento:15}, {nombre:"Cupón 3", descuento:20}]

    const price = parseInt(document.getElementById("inputPrice2").value);

    const cupon = document.getElementById
    ("inputCupon").value;

    let precioConDescuento 


    const resultP = document.getElementById("resultPriceCupon");
     
    switch(cupon){
        case '1': 
        case 'Cupón 1':
            descuento = cupones[0].descuento;        break;    
        case '2': 
        case 'Cupón 2':

        break;    
        case '3': 
        case 'Cupón 3':
            descuento = cupones[1].descuento;        break;
        default:
            alert('Error, ingresaste un cupón no valido');
            resultP.innerText = `El precio con descuento son: -1`;

    }    
    precioConDescuento = calcularPrecioConDescuento(price, descuento)
    
    resultP.innerText = `El precio con descuento son: $${precioConDescuento}`;

}



/* console.log({
    precioOriginal,
    descuento,
    porcentajePrecioConDescuento,
    precioConDescuento,
});
*/