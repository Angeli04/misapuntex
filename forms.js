

function validarCo(elmail){
   var expReg= /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
   var esValido = expReg.test(elmail);
   if (esValido == true) {
      window.alert("mail correcto");
   }
}

function validar(){
    let nombre = document.getElementById("nombre");
    let apellido = document.getElementById("apellido");
    let mail = document.getElementById("mail");
    var telefono=document.getElementById("telefono");
    var valormail = mail.value;

    let lista = document.getElementById("listaErrores")
    let listaM = document.getElementById("listaMensajes")
    let flag =true;
 
 
    lista.innerHTML = "";
    nombre.classList.remove("error");
    mail.classList.remove("error");
    apellido.classList.remove("error");
    telefono.classList.remove("error");
    if (nombre.value=="") {
        console.log("Nombre invalido");
        let item = document.createElement("li");
        lista.appendChild(item);
        item.innerHTML="Nombre invalido";
        nombre.classList.add("error");
        flag=false;
    }
    if (apellido.value=="") {
       console.log("Apellido invalido");
       let item = document.createElement("li");
       listaM.appendChild(item);
       item.innerHTML="Apellido invalido";
       apellido.classList.add("error");
       flag=false;
    }
    if(mail.value==""){
      console.log("Mail invalido");
      let item = document.createElement("li");
      lista.appendChild(item);
      item.innerHTML="Mail invalido";
      mail.classList.add("error");
      flag=false;
   }
    if (telefono.value==""||isNaN(telefono.value)) {
       console.log("Telefono invalido");
       let item = document.createElement("li");
       lista.appendChild(item);
       item.innerHTML= "Telefono invalido";
       telefono.classList.add("error");
       flag = false;
    }
    if (!nombre.value=="" && !apellido.value=="" && !mail.value=="" && !telefono.value=="" && !isNaN(telefono.value)) {
      
    let item = document.createElement("li");
    lista.appendChild(item);
    item.innerHTML= "Formulario enviado correctamente";
    console.log("Todo ok!");

    console.log("Nombre: "+nombre.value);
    item = document.createElement("ul");
    listaM.appendChild(item);
    item.innerHTML="Nombre: "+nombre.value;

    console.log("Apellido: "+apellido.value);
     item = document.createElement("ul");
      listaM.appendChild(item);
      item.innerHTML= "Apellido: "+apellido.value;

      console.log("Mail: "+mail.value);
     item = document.createElement("ul");
      listaM.appendChild(item);
      item.innerHTML= "Mail: "+mail.value;

      console.log("Telefono: "+telefono.value)
      item = document.createElement("ul");
      listaM.appendChild(item);
      item.innerHTML= "Telefono: "+telefono.value;

    }
    return false;
 }




 
