var alf = [ ["A","B","C","D","E"],
            ["F","G","H","I","J"],
            ["L","M","N","O","P"],
            ["Q","R","S","T","U"],
            ["V","W","X","Y","Z"] ];

 var alfabeto = "ABCDEFGHIJLMNOPQRSTUVWXYZ";
const espaco = ' ';
var matriz = [  [ , , , , ],
                [ , , , , ],
                [ , , , , ],
                [ , , , , ],
                [ , , , , ]];


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
     //   console.log(msg.length + " par "+ msg);
        letrasSequencias(msg);

    }else{
      //  console.log(msg.length + " impar "+ msg);
        msg = msg+"Z"
      //  console.log(msg);
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
    var chave = document.getElementById("chave").value.toUpperCase();
    if (chave.length > 5 ){
        alert("Chave precisa ter no maximo 5 caracteres");
    }
    if (chave.length < 5) {
        alert("Chave precisa ter no minimo 5 caracteres");
    }
    if(chave.length == 5){ //prenche primeira linha da matriz
        col = 0;
        for (var i = 0; i < chave.length; i++){ 
            matriz[0][col] = chave[i];
            col = col+1;
            
        }
        completarMatriz();
    }
    console.log(matriz);
}


function completarMatriz(){
    var chave = document.getElementById("chave").value.toUpperCase();
    var alfabeto_new = "";
    for (var i = 0; i < chave.length; i++ ){
       // var letra_igual =  alfabeto.lastIndexOf(chave[i]);
        if( alfabeto.lastIndexOf(chave[i])){
            alf.splice(0,)
        }            
    }
    console.log(alfabeto_new) 
}


function mostrar(){
   
}    
