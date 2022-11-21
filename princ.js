var imagenes=['imagenes/carrousel_prueba1.jpg',"imagenes/carrousel_prueba2.jpg","imagenes/carrousel_prueba3.jpg"];
cont=0;
function carrousel(container){
   container.addEventListener('click', e => {
      let atras = container.querySelector('.atras'),
          adelante = container.querySelector('.adelante'),
          img= container.querySelector('img'),
          tgt = e.target;

      if(tgt == atras){
         if(cont > 0){
            img.src = imagenes[cont - 1];
            cont--;
         } else {
            img.src = imagenes[imagenes.length - 1];
            cont=imagenes.length - 1;
         }
      } else if(tgt == adelante){
         if(cont < imagenes.length - 1){
            img.src = imagenes[cont + 1];
            cont++;
         } else {
            img.src = imagenes[0];
            cont=0;
         }
      }
   })

}
document.addEventListener("DOMContentLoaded",()=>{
   let container = document.querySelector('.container');
   carrousel(container);
});

function validar(){
   let nombre = document.getElementById("nombre");
   let apellido = document.getElementById("apellido");
   let mail = document.getElementById("mail");
   var telefono=document.getElementById("telefono");

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
      lista.appendChild(item);
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
   return false;
}

