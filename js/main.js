var letras_alf = "ABCDEFGHIJLMNOPQRSTUVXYZ";
const espaco = ' ';

document.getElementById("btn_cifrar").addEventListener("click",
    (evento)=>{
        evento.preventDefault();
        verificarMsg();            
    }
);


function verificarMsg(){
    var msg = document.getElementById("msg").value.toUpperCase();
    if(msg.length%2 == 0){
        console.log(msg.length + " par "+ msg);

    }else{
        console.log(msg.length + " impar "+ msg);
        msg = msg+"Z"
        console.log(msg);
    }
    
}


