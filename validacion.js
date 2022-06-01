const btnEnviar = document.getElementById('btnEnviar');
function cambiarColorNegativo(elemento){
  elementoCambiar = document.getElementsByName(elemento);
  
  for(var i = 0; i < elementoCambiar.length; i++){
    elementoCambiar[i].style.border = "2px solid red";
    elementoCambiar[i].style.backgroundColor = "LightCoral ";
  
  }
}
function cambiarColorPositivo(elemento){
  elementoCambiar = document.getElementsByName(elemento);
  
  for(var i = 0; i < elementoCambiar.length; i++){
    elementoCambiar[i].style.border = "2px solid green";
    elementoCambiar[i].style.backgroundColor = "MediumSpringGreen";
  
  }
}
const validacion= (e) => {
  e.preventDefault();
   const nombreId= document.getElementById('_nombreId');
  const correoId = document.getElementById('_correoId');
  const telefonoId = document.getElementById('_telefonoId');
  const sexoMasculino = document.getElementById('_sexoMasculino');
  const sexoFemenino = document.getElementById('_sexoFemenino');
  const fechaId = document.getElementById('_fechaNac');
  
  if (nombreId.value===""){
    alert ("Rellena la casilla NOMBRE");
    nombreId.focus();
    cambiarColorNegativo("Nombre");
    return false;
  }else if (!nombreValido(nombreId.value)) {
    alert("Por favor, escribe tu nombre y apellidos");
  correoId.focus();
    cambiarColorNegativo("Nombre");
    return false;
  }else{
    cambiarColorPositivo("Nombre");
  }
   if (correoId.value === "") {
    alert("Por favor, escribe tu correo electrónico");
    correoId.focus();
    cambiarColor("Correo");
    return false;
  }else if (!correoValido(correoId.value)) {
    alert("Por favor, escribe un correo electrónico válido");
    correoId.focus();
    cambiarColorNegativo("Correo");
    return false;
  }else{
     cambiarColorPositivo("Correo");
  }
  
  if (telefonoId.value === "") {
    alert("Por favor, escribe tu telefono");
    correoId.focus();
    cambiarColorNegativo("Telefono");
    return false;
  }else if (!telefonoValido(telefonoId.value)){
    alert("por favor, escribe un numero telefonico");
    telefonoId.focus();
    cambiarColorNegativo("Telefono");
    return false;
  }else{
    cambiarColorPositivo("Telefono");
  }
  
  if (fechaId.value === "") {
    alert("Por favor, selecciona tu fecha de nacimiento");
    correoId.focus();
    cambiarColorNegativo("FechaNacimiento");
    return false;
  }else{
    cambiarColorPositivo("FechaNacimiento");
  }
  
  if(!sexoMasculino.checked && !sexoFemenino.checked){
    console.log(sexoMasculino.checked+" "+sexoFemenino.checked)
    alert("Por favor, define tu sexo");
    correoId.focus();
    
    return false;
  }

  
  
  document.getElementById("form").submit();
  return true;
}
  const correoValido= correoId => {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(correoId);
 }
const nombreValido= nombreId => {
  if(/^[A-Za-z]+ [A-Za-z+ [A-Za-z]+$/.test(nombreId)){return true; }
  if(/^[A-Za-z]+ [A-Za-z]+ [A-Za-z]+ [A-Za-z]+$/.test(nombreId)){return true; }
  else {return false;}
  }
 
const telefonoValido= telefonoId=>
  {
    return  /^[0-9]{3}-[0-9]{3}-[0-9]{4}$/.test(telefonoId);
  }
btnEnviar.addEventListener('click', validacion);