//Aula de funções
// serve para modularizar o código

// função syntaxe

// function NOME(ARG1, AGR2, AGR3...) {}

function digaOi() {
    console.log('Oi! Tudo bem?')
}

// executar, invocar, chamar
digaOi()
digaOi()

// ARGUMENTOS/PARÂMETROS

console.log('-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-')
// os parametros podem ser de qualquer tipo
function soma(a, b) {
    const soma = a + b 
    console.log(`Soma = ${soma}`)

}

soma(5, 10)
soma(12, 12)

console.log('-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-')


// return -> retorno de dados numa função
// return x

function multiplicacao(a, b) {
    const mult = a * b
    
    return mult
}

const resultado = multiplicacao(2, 2)
console.log(resultado)

const somaDois = resultado + 10
console.log(somaDois)

// função anônima

const saudacao = function(nome) {
    console.log('Olá, ' + nome)
}

saudacao('Ediley')


// callback: executar uma função com um argumento

function operacao(a, b, callback) {
    return callback(a, b)
}

let resultadoOperacao = operacao(10, 8, soma)
console.log(resultadoOperacao)


// arrow functions

// uma maneira de criar funções com uma sintaxe menor

const dividir =(a, b) => {
    return a / b
}

console.log(dividir(10, 5))

const multiplicacaoArrow = (a, b) => a * b 

console.log(multiplicacaoArrow(10, 10))

const mensagem = () => console.log('testando')
mensagem()

//função que detécta o tipo de um dado

function detectarTipo(valor) {

    if ( typeof valor === 'string') {
        return "String"
    } else if(typeof valor === 'number') {
        return "Number"
    } else if (typeof valor === 'boolean') {
        return "Boolean"
    } else {
        return 'Tipo desconhecido'
    }
}

console.log(detectarTipo(false))
console.log(detectarTipo('Olá, Mundo!'))
console.log(detectarTipo(10))


// condicional ternária

// cond; ? true : false

const idade = 18 
const eMaiorQueIdade = idade >= 18? "é maior" : "não é maior"

console.log(eMaiorQueIdade)