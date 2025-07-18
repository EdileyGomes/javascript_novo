// estruturas de repetição

// loops

// for -> mais comum

// estrutura de repetição = executa N vezes um códigoooo

// for (INCREMENTO, EXPRESSÃO/CONDIÇÃO, INCR.) {}

// INCREMENTO = I, J, K, N ( VÁRIAVEIS RESUMIDAMENTE )
// CONDIÇÃO = i < 10
// incrementador = i ++

// loop que itere de 0 até 4

for ( let i = 1; i < 5; i ++) {
    console.log('Loop for o i é : ' + i )
}


// arrays

// arrays são listas...
//contém geralmente itens do mesmo tipo de dados
// lista de strings
// lista de números... blá, blá, blá

const frutas = ["Maça", "Banana", "Laranja", "Uva"]

console.log(frutas)

// zero based

console.log(frutas[0])
console.log(frutas[1])

for(let i = 0; i < 3; i++) {
    console.log('fruta: ' + frutas[i] )
}

console.log('-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-')

for(let i = 0; i < frutas.length; i++) {
    console.log('fruta: ' + frutas[i] )
}

// lista.length => qtd de elementos

// while

// não sabe a condição final

let p = 0
while(p < 5) {
    console.log('Loop while: ' + p)


    p++
}

let ALEATORIO = 0


while(ALEATORIO != 5) {
    ALEATORIO = Math.floor(Math.random() * 5) + 1
    console.log(ALEATORIO)
}

// while quando não sei, e o for para quando eu tenho uma noção da onde vai sair

// do while
// while que garante uma execução

do {
    console.log('teste')
} while (1 > 2)

var j = 0

do {
    console.log('J: ' + j)

    j++
} while (j > 10)

    // foca em aprender bem o for

// condicionais e loops

// soma de números pares de 0 a 20
var soma = 0
var somaImpar = 0

for(let i = 0; i <= 20; i++){
    if(i % 2 === 0) {
        soma += i
    } else {
        somaImpar += i
    }
}

console.log(soma)
console.log(somaImpar)

// contar quantas consoantes tem uma palavra

const palavra = 'JavaScript'

console.log(palavra.length)
let consoantes = 0


for (let i = 0; i < palavra.length ; i++) {
    
    let letra = palavra[i].toLowerCase()

    if(letra != "a" && letra != "e" && letra != "i" && letra != "o" && letra != "u") {
        consoantes ++
    }
}

console.log(`A Contagem de consoantes é: ${consoantes}`)

// interpolação de strings

console.log(`Contagem de consoantes ${consoantes} da palavra ${palavra}`)