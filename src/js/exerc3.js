let peso = prompt("Insira o seu peso: ");
let altura = prompt("Insira a sua altura (em metros): ");

//calculo do imc
let imc = peso/altura**2;
let classificacao;

if(imc < 18.5){
    //abaixo do peso = 1
    classificacao = 1;
}else if(imc >= 18.5 && imc <= 24.9){
    //peso ideal = 2
    classificacao = 2;
}else if(imc > 24.9){
    //acima do peso = 3
    classificacao = 3
}

console.log(imc)

switch(classificacao){
    case 1:
        console.log("Você está abaixo do peso!")
        break
    case 2:
        console.log("Você está com o peso ideal!")
        break
    case 3:
        console.log("Você está acima do peso!")
        break
}