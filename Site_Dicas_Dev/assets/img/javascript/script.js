let nome = document.getElementById('nome');
let email = document.getElementById('email');
let senha = document.getElementById('senha');

function nomeValida(){
    let nInput = document.querySelector('#nome');

    if(nome.value.length <= 3){
     nInput.style.borderBottom = "2px solid red";

    }else{
        nInput.style.borderBottom = "2px solid green";

    }
}

function emailValida(){
    let nInput = document.querySelector('#email');

    if(email.value.indexOf('@')== -1 || email.value.indexOf('.')== -1 ){
        nInput.style.borderBottom = "2px solid red";

    }else{
        nInput.style.borderBottom = "2px solid green";

    }
}

function senhaValida(){
    let nInput = document.querySelector('#senha');

    if(senha.value.length <= 4){
        nInput.style.borderBottom = "2px solid red";
   
       }else if(senha.value.length <= 6){
           nInput.style.borderBottom = "2px solid blue";
   
       }else{
        nInput.style.borderBottom = "2px solid green";

       }
}