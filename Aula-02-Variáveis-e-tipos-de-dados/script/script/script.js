// variaveis

// comentário de linha
/*
    Comentários de múltiplas linhas
*/

// 3 formar de criar váriaveis

// var, let e const

/* Syntaxe: TIPO (VAR, LET E COSNT)
    nomeDaVariavel = VALOR;
*/

//STRINGS = textos, '' ou ""

var nome = "Matheus"
console.log('Ediley')
console.log(nome)

if (nome == 'Ediley') {
    console.log(`Olá, ${nome}`)
} else {
    console.log('não')
}

// let -> subistituir valor

let idade = 25

// a diferenã é o escopo: {tudo isso é um escopo!}

nome = 'pedro'
idade = 30

console.log(nome+', ' + idade + ' anos')

// tanto var quanto let podem ter os valores alterados com o passar do tempo
// mas o let é mais moderno 

const pi = 3.14

// programação recebe o valor americano de números: 3,14(BRASILEIRO) -> 3.14(AMERICANO)
console.log(pi)

// var, let e const -> só usamos let e const

//tipos de dados

let numero = 41
let numero2 = 41.5
console.log(numero, numero2)

// não há diferença entre inteiros com casas decimais

let umTexto = "12"
let umTexto2 = "Ediley"
console.log(umTexto)
console.log(umTexto2)

//como descobrir se é um texto ou um númeor??
// Devemos ter uma ferramenta para avliar o tipo


//typeOf -> avaliador de tipo
console.log( typeof numero)
console.log( typeof numero2)
console.log(typeof umTexto)

// boolean = true ou false
let estaChovendo = false

console.log(estaChovendo)
console.log( typeof estaChovendo)

console.log(false)


let semValor = null

console.log(semValor)


// tudo é objeto no JS

//VÁRIOS TIPOS DE DADOS SÃO ORIGINADOS COM OBJETOS NO JS

console.log(typeof semValor)

let indefinido

console.log(indefinido)

// null = quando eu inicio algo nulo
// undefined = eu esqueço ce colocar o valor

// ARRAYS E OBJETOS

// TIPAGEM DINAMICA

let variavel = 100
console.log( typeof variavel)

variavel = 'texto'
console.log( typeof variavel)
//operações báscas

//concatenar textos = unir

let primeiroNome = "Matheus"
let sobrenome = "Mauricio"

let nomeCompleto = primeiroNome + " " + sobrenome

console.log(nomeCompleto)


console.log("Olá, " + nomeCompleto + ". Tudo bem com Você?")


//operações aritiméticas

console.log( 10 - 5)
console.log( 10 + 5)
console.log( 10 * 5)
console.log( 10 / 5)

//comparações

console.log(10 < 5)
console.log(10 > 5)

// toda comparação retorna um booleano

// >= -- <= 
// ==
// === ( idêntico)

console.log(10 > 10)
console.log(10 >= 10)

console.log( 10 == 10)
console.log( 10 === '10')
console.log( 10 === 10)

// = é atribuição
// e "==" ou "===", é uma comparação de valores, senso igual ou identico.
