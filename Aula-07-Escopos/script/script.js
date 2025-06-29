// escopos

// escopos globais
// { } => let e const

let nome = "Ediley"// variavel escopo global

function exibirNome() {
    console.log(nome)
}
exibirNome()

// escopo local => { }
function exibirIdade() {
    const idade = 20
    console.log('Sua Idade é: ' + idade)
}
exibirIdade()

let idade = 30

console.log(idade)

//escopo de bloco

if (true) {
    const idade = 15
    console.log("idade if: " + idade)

}
console.log("Idade local: " + idade)

for ( let i = 0 ; i < 5; i++) {
    const idade = 16
    console.log("idade loop: " + idade)
}

