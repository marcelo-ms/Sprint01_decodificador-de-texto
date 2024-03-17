
const mostrarTexto = document.querySelector(".mostrar-texto");
const mostrarImagem = document.querySelector(".mostrar-imagem");
const oTexto = document.getElementById(".oTexto");

mostrarTexto.style.visibility = "collapse";

function ocultar() {

    let Texto = document.getElementById("oTexto").value;

    if (Texto == "") {
        mostrarTexto.style.visibility = "collapse";
        mostrarImagem.style.visibility = "visible";
    } else {
          mostrarImagem.style.visibility = "collapse";
          mostrarTexto.style.visibility = "visible";
          oTexto.scrollIntoView();
    }
}

/**/

function verificarTexto() {
    let iTexto = document.getElementById("iTexto").value;
    if(/[A-ZÃÕÁÉÍÓÚãáéíóõú]/.test(iTexto)) {
        alert("Somente letras minúsculas e sem acento.");
        return false; 
    }
}



function encriptarTexto() {

    let verificar = verificarTexto();
    if(verificar == false){
        return;
    }

    let iTexto = document.getElementById("iTexto").value;
    
    let iTextoEncriptado = iTexto.replace(/e/g, 'enter');
    iTextoEncriptado = iTextoEncriptado.replace(/i/g, 'ime');
    iTextoEncriptado = iTextoEncriptado.replace(/a/g, 'ai');
    iTextoEncriptado = iTextoEncriptado.replace(/o/g, 'ober');
    iTextoEncriptado = iTextoEncriptado.replace(/u/g, 'ufat');

    document.getElementById("oTexto").innerHTML = iTextoEncriptado;
    ocultar();
}



function desencriptarTexto() {

    let verificar = verificarTexto();
    if(verificar == false){
        return;
    }

    let iTexto = document.getElementById("iTexto").value;
    
    let iTextoDesencriptado = iTexto.replace(/enter/g, 'e');
    iTextoDesencriptado = iTextoDesencriptado.replace(/ime/g, 'i');
    iTextoDesencriptado = iTextoDesencriptado.replace(/ai/g, 'a');
    iTextoDesencriptado = iTextoDesencriptado.replace(/ober/g, 'o');
    iTextoDesencriptado = iTextoDesencriptado.replace(/ufat/g, 'u');

    document.getElementById("oTexto").innerHTML = iTextoDesencriptado;
    ocultar();
}



function copiarTexto() {

    let copiarTexto = document.getElementById("oTexto");
  
    copiarTexto.select();
    copiarTexto.setSelectionRange(0, 99999); 
  
    navigator.clipboard.writeText(copiarTexto.value);
  
    alert("texto copiado: " + copiarTexto.value);
  }