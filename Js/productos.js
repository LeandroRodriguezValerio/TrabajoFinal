"use strict";

//Ingresar los datos en arrays
let arrProductos =  ["Carne",   "Pollo",    "Salamin",  "Fideos",   "Harina",   "Leche",    "Polenta",  "Vino",     "Yerba",    "Azucar"];
let arrPrecios =    [8000,      5500,        4000,      1500,       1000,       800,        900,        3000,       3500,       2000];
let arrStock =      [300,       200,         100,       400,        100,        400,        400,        400,        400,        400];
let totalSuma = 0;


//Aplicar descuentos
arrPrecios[0]=arrPrecios[0]*0.8
arrPrecios[1]=arrPrecios[1]*0.8

arrProductos[0]="Oferta Carne"
arrProductos[1]="Oferta Pollo"


//Agregar productos por JS
arrProductos.forEach((producto,index) => {
    let contenedor=document.getElementById("productos");
    let crearcontenedor=document.createElement("div");
    crearcontenedor.className="producto";
    let parrafo = document.createElement("p");
    let botonCompra = document.createElement("button");
    botonCompra.id=index;
    let texto = document.createTextNode(producto+" $"+arrPrecios[index]);
    let btncomprar = document.createTextNode("Agregar al carro");
    let input = document.createElement("input");
    input.type="number";
    input.value="0";
    input.min="0";
    let parrafoStock = document.createElement("p");
    parrafoStock.id="stockSobrante"+index
    let stockSob=document.createTextNode("Stock restante "+ arrStock[index])
    let imgProd=document.createElement("img")
    imgProd.className="imgProd img"+index
    

    crearcontenedor.appendChild(imgProd);
    parrafo.appendChild(texto);
    crearcontenedor.appendChild(parrafo);
    crearcontenedor.appendChild(input);
    crearcontenedor.appendChild(parrafoStock);
    parrafoStock.appendChild(stockSob)
    crearcontenedor.appendChild(botonCompra);
    botonCompra.appendChild(btncomprar);
    contenedor.appendChild(crearcontenedor);

    botonCompra.addEventListener("click", () => validar(input.value, index));
});

//Validar cantidad de productos ingresada por el usuario sea menor o igual ala cantidad de productos disponibles y mayor o igualque 0
function validar(cantidad,btnId){
    console.log(cantidad, btnId, arrStock[btnId]);
        if ((cantidad>0)&&(0<=(arrStock[btnId]-cantidad))){
            comprar(cantidad, btnId);            
        } else {
            alert("El valor ingresado supera el stock disponible de " + arrProductos[btnId] + " o es un valor invalido, porfavor intente nuevamente."); 
        }
        }

//Sumar los valores y Hacer la compra
function comprar(cantidad, btnId){
            totalSuma=Number(document.getElementById("total").innerText);
            totalSuma+=(cantidad*arrPrecios[btnId]);
            
            document.getElementById("total").innerText=totalSuma;
            arrStock[btnId]-=cantidad
            document.getElementById("stockSobrante"+btnId).innerText= "Stock sobrante "+ arrStock[btnId]
}

//Finalizar compra 
document.getElementById("finCompra").addEventListener("click", () => {
    
    if(totalSuma==0){
        alert("CARRO VACIO, agregue productos e intente nuevamente, Gracias!")
    } else {
    alert("Gracias por comprar en Supermercados El Trigal. El total a pagar es: $" + totalSuma)
    }  }) 





