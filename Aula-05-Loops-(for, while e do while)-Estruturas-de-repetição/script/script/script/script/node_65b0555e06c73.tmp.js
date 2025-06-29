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

console.log(Math.floor(Math.random()) * 10 + 1)

while(ALEATORIO != 5) {
    ALEATORIO = Math.floor(Math.random()) * 10 + 1
    console.log(ALEATORIO)
}