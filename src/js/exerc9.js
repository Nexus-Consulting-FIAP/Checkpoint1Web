let texto = prompt("Escreva algo aqui! Irei converter para float")

//Primeiro deixamos ela em string
console.log(texto)
console.log(typeof(texto))

//Converte para Float
texto = parseFloat(texto)

/*
Agora é float

OBS: 
1 - A conversão só funciona quando o primeiro char já é um número
2 - Qualquer char é perdido durante a conversão
*/
console.log(texto)
console.log(typeof(texto))