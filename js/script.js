//Esto es un comentario de una linea

/*Esto es un comentario de 
varias
lineas*/

//VARIABLES
console.log("Hola mundo");
//alert("Hola mundo desde el navegador")
document.write("<h1 class='text-center py-4'>Hola desde la pagina web</h1>")
let nombre="Grecia Figueroa";
let estatura=1.65;
let edad=130;
document.write("<h1 class='text-info text-center py-4'>NOMBRE: "+nombre+"</h1>")

//El br es para que el texto aparezca en la linea de abajo
document.write(`<h1 class='text-center text-danger'>Nombre: ${nombre} <br> Estatura: ${estatura}  </h1>`)


document.write(`<h1 class='text-center text-danger'>Nombre: ${nombre} Estatura: ${estatura} Edad: ${edad} </h1>`)


// i=i+1 === i++
let tabla=9;
for(let i = 1; i<= 6 ;i++){
    document.write(`<h1 class='text-center'>${tabla} * ${i} = ${tabla*i}</h1>`)
}

//ARREGLOS
let numdias=[1,2,3,4,5,6,7]
let nomdias=['lunes','martes','miercoles','jueves','viernes','sabado','domingo'];
let meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
document.write(`<h1 class='text-center'>Mes de: ${meses[2]}</h1>`)


//Recorriendo el arreglo con for
document.write(`<hr><h1 class='text-center'>con un for:</h1><hr>`)
for(let i=0;i<=11;i++){
    document.write(`<h1 class='text-center'>Mes de: ${meses[i]}</h1>`)
}

//Con un map y function el arreglo quedaria de esta manera: (puedo cambiar "mes" por item)
document.write("<hr><h1 class='text-center'>con un map y function</h1><hr>")
meses.map(function(mes) {
    document.write(`<h1 class='text-center'>Mes de: ${mes}</h1>`)
});

//Con un map y flecha => esta es la mas usada (con flecha)
document.write("<hr><h1 class='text-center'>con un map y flecha</h1><hr>")
meses.map((mes)=> {
    document.write(`<h1 class='text-center'>Mes de: ${mes}</h1>`)
});



//Ejercicio pidiendole a you.com un arreglo de 5 juegos recorriendo el arreglo con MAP
//Arreglo
let juegos = [
    { id: 1, nombre: "The Last of Us Part II", precio: 59.99, stock: 10 },
    { id: 2, nombre: "Red Dead Redemption 2", precio: 49.99, stock: 5 },
    { id: 3, nombre: "Assassin's Creed Valhalla", precio: 59.99, stock: 8 },
    { id: 4, nombre: "FIFA 21", precio: 39.99, stock: 15 },
    { id: 5, nombre: "Cyberpunk 2077", precio: 49.99, stock: 20 }
  ];
  
//Usando el map con flecha (MAPEO)
document.write("<hr><h1 class='text-center'>VIDEOJUEGOS</h1><hr>")
juegos.map((item)=> {
    document.write(`<h1 class='text-center'>ID del juego: ${item.id} Nombre: ${item.nombre} Precio: ${item.precio} Stock: ${item.stock}</h1>`)
});

