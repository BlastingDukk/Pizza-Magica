/*
<button onclick="comprar(1234,preguntarCantidad())">Comprar</button>
<button onclick="comprar(12345,preguntarCantidad())">Comprar</button>
<button onclick="comprar(12346,preguntarCantidad())">Comprar</button>
<button onclick="comprar(12347,preguntarCantidad())">Comprar</button>
function preguntarCantidad(){
  var cantidad = parseInt(prompt("¿Que cantidad deseas comprar?"));
  return cantidad;
}
function comprar(idProducto,cantidad ){

}
xx.................................
$$.................................
*/
var audioFondo = new Audio("audio/Tarantella.mp3");
audioFondo.volume=0.03;
audioFondo.loop=true;
audioFondo.play();
/*
var MusicaPuesta = false;

if(sessionStorage.musicaReproduciendose){
  MusicaPuesta=sessionStorage.getItem("musicaReproduciendose");
}

if(!MusicaPuesta){
  alert("XD");
  if(confirm("¿Desea escuchar audio de fondo?")){
    alert("XD2");
  
  MusicaPuesta = true;
  sessionStorage.setItem("musicaReproduciendose", true);
}
}*/
var carritoProductos = new Array();

var precioProductos = new Array();

precioProductos[0]= [101, 199];
precioProductos[1]= [102, 210];
precioProductos[2]= [103, 130];
precioProductos[3]= [104, 99];
precioProductos[4]= [105, 149];
precioProductos[5]= [106, 140];
precioProductos[6]= [107, 220];
precioProductos[7]= [108, 180];
precioProductos[8]= [109, 89];
precioProductos[9]= [110, 99];
precioProductos[10]= [111, 60];
precioProductos[11]= [112, 49];
precioProductos[12]= [113, 30];
precioProductos[13]= [114, 35];
precioProductos[14]= [115, 20];
precioProductos[15]= [116, 199];
precioProductos[16]= [117, 390];
precioProductos[17]= [118, 149];
precioProductos[18]= [119, 240];
precioProductos[19]= [120, 60];


var total = 0; 

function preguntarCantidad(){

  var cantidad = parseInt(prompt("¿Que cantidad deseas comprar?"));
  if(!cantidad > 0){
    
    cantidad = 0;
  }

  return cantidad;

}

function comprar(idProducto,cantidad ){
  if(cantidad != 0){
    
  
   var  i=0;
   var cicloContinua = true;
   /*var carritoPizzasComparacion = JSON.parse(sessionStorage.getItem("pizzasCarrito"));
   if(carritoPizzasComparacion !== 'undefined' ){
     carritoCantPizzas = carritoComparacion;
   }*/
  if(sessionStorage.pizzasCarrito){
    var arrayAuxPizzas = JSON.parse(sessionStorage.getItem("pizzasCarrito"));
    carritoProductos = arrayAuxPizzas;
  }
   
  for(i = 0; i < 20 && cicloContinua == true; i++){
      if(idProducto==precioProductos[i][0]){
        cicloContinua = false;
        carritoProductos.push([busquedaProducto(idProducto),idProducto,precioProductos[i][1],cantidad]);
     
        sessionStorage.setItem("pizzasCarrito", JSON.stringify(carritoProductos));
        alert("Producto agregado al carrito");
      }
    }
  }else{
    alert("La cantidad no es valida");
  }
}


var total = 0;

function imprimirCarrito(){
  total = 0;

  var carrito = JSON.parse(sessionStorage.getItem("pizzasCarrito"));
 
  
  var listaProductos = "<ol>";
  
  for(let k = 0; k < carrito.length; k++){
    listaProductos = listaProductos + "<li> "+carrito[k][3]+"   "+carrito[k][0]+"</li>";
    total+= carrito[k][2] * carrito[k][3];
  }
  listaProductos= listaProductos+"</ol>";
  document.getElementById("listaCarrito").innerHTML = listaProductos;
  document.getElementById("totalCarrito").innerHTML = "Total:$"+String(total);
  
  /*sessionStorage.setItem("pizzasCarrito", JSON.stringify(carritoCantPizzas))*/
  
}
function vaciarCarrito(){
  sessionStorage.clear();
  location.reload();
}

function borrarProducto(){
    var arrayAuxPizzas = JSON.parse(sessionStorage.getItem("pizzasCarrito"));
    carritoProductos = arrayAuxPizzas;
  
    var indiceProducto = parseInt(prompt("¿Que numero de elemento desea eliminar?"));
    indiceArreglo = indiceProducto-1;
    if(carritoProductos[indiceArreglo]){
      
      var eliminados = carritoProductos.splice(indiceArreglo,1);
    alert("Producto eliminado: "+eliminados[0][0]);
    sessionStorage.setItem("pizzasCarrito", JSON.stringify(carritoProductos));
    
    location.reload();
    }else{
      alert("Ese numero de elemento no coincide");
    }
    
  
    /*carritoProductos[indiceArreglo][0]="Indefinido";
    carritoProductos[indiceArreglo][1]=0;
    carritoProductos[indiceArreglo][2]=0
    carritoProductos[indiceArreglo][3]=0*/
}















function busquedaProducto(id){
  var nombreProducto= "";
  switch(id){
    case 101:{
        nombreProducto="Pizza Extra Queso";
        break;
      }
    case 102:{
        nombreProducto="Pizza 4Ingredientes";
        break;
      }
    case 103:{
        nombreProducto="Pizza Hawaiana";
        break;
      }
    case 104:{
        nombreProducto="Pizza de Peperoni";
        break;
      }
    case 105:{
        nombreProducto="Pizza de Chorizo";
        break;
      }
    case 106:{
        nombreProducto="Pizza a la Mexicana";
        break;
      }
    case 107:{
        nombreProducto="Pizza de Carnes Frias";
        break;
      }
    case 108:{
        nombreProducto="Pizza Estilo Italiana";
        break;
      }
    case 109:{
        nombreProducto="Alitas";
        break;
      }
    case 110:{
        nombreProducto="Boneless";
        break;
      }
      case 111:{
        nombreProducto="Pan de ajo";
        break;
      }
      case 112:{
        nombreProducto="Papas fritas";
        break;
      }
      case 113:{
        nombreProducto="Salsas especiales";
        break;
      }
      case 114:{
        nombreProducto="Coca 2L";
        break;
      }
      case 115:{
        nombreProducto="Pepsi 600 ml";
        break;
      }
      case 116:{
        nombreProducto="Promocion1";
        break;
      }
      case 117:{
        nombreProducto="Promocion2";
        break;
      }
      case 118:{
        nombreProducto="Promocion3";
        break;
      }
      case 119:{
        nombreProducto="Promocion4";
        break;
      }
      case 120:{
        nombreProducto="Promocion5";
        break;
      }
      
      
  
  }
  return nombreProducto;
}
//var formDatosCorreo = document.getElementById("datosEnviarCorreo");


function compraCorreo(){
  if(document.getElementById("inputReferencias").value!=="" && document.getElementById("inputDireccion").value!==""){
      if(sessionStorage.pizzasCarrito){

      var arrayAuxPizzas = JSON.parse(sessionStorage.getItem("pizzasCarrito"));
      carritoProductos = arrayAuxPizzas;
      var listaProductosCompra= "\n";
      var total = 0;
      for(let k = 0; k < carritoProductos.length; k++){
        listaProductosCompra = listaProductosCompra + "\n"+carritoProductos[k][3]+"   "+carritoProductos[k][0]+"\n";
        total+= carritoProductos[k][2] * carritoProductos[k][3];
      }
     
      listaProductosCompra= listaProductosCompra+"\n Con un total de :$"+total;
      alert("Sus productos son: "+listaProductosCompra+"\n\nSu pedido se esta procesando\n\nNo dude en llamarnos:\n951 404 0783");
      document.getElementById("inputCarrito").value = listaProductosCompra;
      
        vaciarCarrito();
        document.getElementById("datosEnviarCorreo").submit();
 
      
       }else
      {
        alert("No hay productos en el carrito");
      }
  }else{
    alert("Rellene los campos faltantes");
    
  }
}