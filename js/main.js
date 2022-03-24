var letras_alf = "ABCDEFGHIJLMNOPQRSTUVXYZ";
const espaco = ' ';

document.getElementById("btn_cifrar").addEventListener("click",
    (evento)=>{
        evento.preventDefault();
        verificarMsg();
        pegaChave();            
    }
);


function verificarMsg(){
    var msg = document.getElementById("msg").value.toUpperCase();
    if(msg.length%2 == 0){
        console.log(msg.length + " par "+ msg);
        letrasSequencias(msg);

    }else{
        console.log(msg.length + " impar "+ msg);
        msg = msg+"Z"
        console.log(msg);
        letrasSequencias(msg);
    }
    
}


function letrasSequencias(msg){
    var cont = "";
    var cont2 = "";
    for (var i=0; i <= msg.length; i++ ){  
        
    }

}

function pegaChave(){
    var msg = document.getElementById("chave").value.toUpperCase();
    if (msg.length > 5 ){
        alert("Chave precisa ter no maximo 5 caracteres");
    }
    if (msg.length < 5) {
        alert("Chave precisa ter no minimo 5 caracteres");
    }
}