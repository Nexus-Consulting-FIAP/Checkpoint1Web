let login = "admin"
let password = "1234"

let input_login = prompt("Insira o seu login: ")
let input_password = prompt("Agora, insira a sua senha: ")

if (input_login == login && input_password == password){
    alert("Bem-vindo de volta Admin a sua vinheria!")
} else {
    alert("Erro de credenciais! Verifique login ou senha!")
}