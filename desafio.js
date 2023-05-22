function establecerVisibilidadImagen(id,visibilidad) {
    var img=document.getElementById(id);
    img.style.visibility=(visibilidad ? 'visible':'hidden');
}

function reemplazo(cadena){
    var re = /e/gi;
    var ncadena=
    ncadena = cadena.replaceAll(re, 'enter');
    re=/i/gi;
    ncadena=ncadena.replaceAll(re,'imes');
    re=/a/gi;
    ncadena=ncadena.replaceAll(re,'ai');
    re=/o/gi;
    ncadena=ncadena.replaceAll(re,'ober');
    re=/u/gi;
    ncadena=ncadena.replaceAll(re,'ufat');
    return (ncadena);
}
function encriptar(){
establecerVisibilidadImagen("container-mensaje",true);
establecerVisibilidadImagen("mensaje-encriptado",false);
var texto = document.getElementById('texto').value;
var texto2= document.getElementById('mensaje');
texto2.value=reemplazo(texto);

}

function desencriptar(){
    establecerVisibilidadImagen("container-mensaje",true);
    establecerVisibilidadImagen("mensaje-encriptado",false)
    var texto = document.getElementById('texto').value;
    var texto2= document.getElementById('mensaje');
    

    var traductor = texto
                        .replace(/enter/gi, "e")
                        .replace(/imes/gi, "i")
                        .replace(/ai/gi, "a")
                        .replace(/ober/gi, "o")
                        .replace(/ufat/gi, "u");
    texto2.value = traductor;
}
function copiarAlPortapapeles(){
    var textoaCopiar = document.getElementById('mensaje');
    textoaCopiar.select();
    document.execCommand('copy');
}
