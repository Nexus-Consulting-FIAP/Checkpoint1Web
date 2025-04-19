alert("Calculo de nota - Sommelier de vinho")

let soma = 0
for (let i=0;i<7;i++){
    let valor = prompt("Insira a nota do aluno, atividade " + (i+1))
    soma = soma + parseFloat(valor)
}

let media = soma/7

console.log("A média desse aluno foi de: " + media)