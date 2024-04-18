let nomeUsuário = "";
let elemento = document.querySelector("#nome-usuário");

while(nomeUsuário == ""){
    nomeUsuário = prompt("Você é professor?");
}

if(nomeUsuário == null){
    elemento.textContent = 'Sinto Muito';
}else{
    elemento.textContent = nomeUsuário;
}