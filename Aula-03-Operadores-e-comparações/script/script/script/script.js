// Operadores e comparações

// +, -, /, *
console.log('Operadores lógicos')
console.log(12 / 2)
console.log(12 * 2)
console.log(12 + 2)
console.log(12 - 2)
console.log('-----------------------------------')
// NUMERO1 <COMPARADOR> NUMERO2
console.log('Soma de Strings de números')
console.log('12' / 2)
console.log('12' * 2)
console.log('12' + 2)
console.log('12' - 2)

// Módulo - % -> resto da divisão
console.log('-----------------------------------')
console.log( 1 % 2)

// EXPONENCIAÇÃO

console.log('-----------------------------------')
console.log( 12 ** 2)// 12 * 2 = 24 * 2 = 144

// Ordem Matemática 
console.log('-----------------------------------')

const operacao = (12 ** 3) + (5 * 2 - 15) + 4
console.log(operacao)

// OPERADORES

console.log('-----------------------------------')
// > , < , <=, >=
console.log('esses operadores sempre devolverão um boolean')

console.log( 12 < 5)
console.log( 12 > 5)
console.log( 12 <= 5)
console.log( 12 >= 5)

// ==, ===, !=, !==

// = a mais > há avalização do tipo

console.log( 12 == '12')
console.log( 12 === '12')

console.log( 12 !== '12')
console.log( 12 != '12')

// a comparaçãos de strings é por == ou ===

console.log('teste' == 'teste')
console.log('teste' === 'teste')

// toda comparação gera um booleano automáticamente

//operador de incremento e pré incremento

let num = 1
console.log(num++)
console.log(num++)
console.log(num)

console.log(--num)

//ultilizados em loops, for e while

num = num + 5

console.log(num)

num += 5
console.log(num)
num -= 5
console.log(num)
num /= 5
console.log(num)
num *= 5
console.log(num)

//variavel operação atribuição valor

console.log(num + 5 * (num *= 2))

const idade = 17

const podeDirigir = idade >= 18
console.log(podeDirigir)

//condicionais IF, ELSE E ELIF  

if(idade >=18) {
    console.log(`Esta pessoa pode dirigir`)
}else {
    console.log("Não pode dirigir")
}