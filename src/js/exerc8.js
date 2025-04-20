let frase = "Tecnologia é um produto da ciência e da engenharia que envolve um conjunto de instrumentos, métodos e técnicas que visam a resolução de problemas."

//lembrando que começamos a conta a partir do 0 em computadores

let pos1 = frase.indexOf("em")
let pos2 = frase.lastIndexOf("ia")
let pos3 = frase.search("ciência")
let pos4 = frase.search("métodos")

console.log("O tamanho da frase é de " + frase.length + " caracteres")
console.log(`A posição inicial em que "em" aparece no texto pela primeira vez é: ${pos1}`)
console.log(`A posição inicial em que "ia" aparece no texto pela última vez é: ${pos2}`)
console.log(`A posição inicial em que a palavra "ciência" aparece no texto em: ${pos3}`)
console.log(`A posição inicial em que a palavra "métodos" aparece no texto em: ${pos4}`)
