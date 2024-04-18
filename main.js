let nomeUsuário = "";
let elemento = document.querySelector("#nome-usuário");

while(nomeUsuário == ""){
    nomeUsuário = prompt("Você é professor?");
}

if(nomeUsuário == Sim){
    elemento.textContent = 'Tovarisch';
}else{
    elemento.textContent = nomeUsuário;
}
