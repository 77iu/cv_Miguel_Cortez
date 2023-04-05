const menu = document.getElementById("menu");
const botonesA = document.getElementById("botonesA");
const enlace = document.getElementById("enlace");
const enlace2 = document.getElementById("enlace2");
const enlace3 = document.getElementById("enlace3");
const enlace4 = document.getElementById("enlace4");
const enlace5 = document.getElementById("enlace5");
const opens   = document.getElementById("opens");
const closes  = document.getElementById("closes")

function cambiar() {
botonesA.classList.toggle("botonesAA");
botonesA.classList.toggle("deBloque");
enlace.classList.toggle("botonesAnimacion");
enlace2.classList.toggle("botonesAnimacion");
enlace3.classList.toggle("botonesAnimacion");
enlace4.classList.toggle("botonesAnimacion");
enlace5.classList.toggle("botonesAnimacion");
opens.classList.toggle("animationOpen");
closes.classList.toggle("animationClose");
}

menu.onclick = function(){cambiar();}
enlace.onclick = function(){cambiar();}
enlace2.onclick = function(){cambiar();}
enlace3.onclick = function(){cambiar();}
enlace4.onclick = function(){cambiar();}
enlace5.onclick = function(){cambiar();}



//De los iconos 
let aZanja = document.getElementById("aZanja");       
let aPlaya = document.getElementById("aPlaya");
let aCamara = document.getElementById("aCamara");
let aSala = document.getElementById("aSala");
let xZanja = document.getElementById("xZanja");       
let xPlaya = document.getElementById("xPlaya");
let xCamara = document.getElementById("xCamara");
let xSala = document.getElementById("xSala");
let bZanja = document.getElementById("bZanja");       
let bPlaya = document.getElementById("bPlaya");
let bCamara = document.getElementById("bCamara");
let bSala = document.getElementById("bSala");

// function zambiar() {
//    document.getElementById("aZanja").classList.toggle("none");
  
//     }
    
//    document.getElementById("bZanja").onclick = function(){zambiar();}
   function sala(){
    aSala.classList.toggle("none");
    xSala.classList.toggle("contenedorX");
    aZanja.classList.add("none");
    xZanja.classList.remove("contenedorX");
    aCamara.classList.add("none");
    xCamara.classList.remove("contenedorX");
    aPlaya.classList.add("none");
    xPlaya.classList.remove("contenedorX")
   }
   function zanja(){
      aSala.classList.add("none");
      xSala.classList.remove("contenedorX");
      aZanja.classList.toggle("none");
      xZanja.classList.toggle("contenedorX");
      aCamara.classList.add("none");
      xCamara.classList.remove("contenedorX");
      aPlaya.classList.add("none");
      xPlaya.classList.remove("contenedorX")
     }
     function camara(){
      aSala.classList.add("none");
      xSala.classList.remove("contenedorX");
      aZanja.classList.add("none");
      xZanja.classList.remove("contenedorX");
      aCamara.classList.toggle("none");
      xCamara.classList.toggle("contenedorX");
      aPlaya.classList.add("none");
      xPlaya.classList.remove("contenedorX")
     }
     function playa(){
      aSala.classList.add("none");
      xSala.classList.remove("contenedorX");
      aZanja.classList.add("none");
      xZanja.classList.remove("contenedorX");
      aCamara.classList.add("none");
      xCamara.classList.remove("contenedorX");
      aPlaya.classList.toggle("none");
      xPlaya.classList.toggle("contenedorX")
     }
   bSala.onclick = function(){
    sala()
   }
   bZanja.onclick = function(){
      zanja()
     }
   bCamara.onclick = function(){
    camara()
   }
   bPlaya.onclick = function(){
    playa()
   }