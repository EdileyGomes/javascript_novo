// if
// condicionais
// decisões ao logo do código


// if -> recurso
// () -> expressão que vai ser avaliada
// {} -> bloco de código aonde é executado

// comparações / expressoes -> booleanos
var hora = 19


if(hora < 12) {
    console.log('Bom dia!')
}


// se o "if" for falso o código não executa!

// toda coisa verdadeira = true
// falsa = false

// else = senão
// é um bloco que vai ser executado se o outro valor for falso.

if (hora < 12) {
    console.log('Bom dia !')
} else  {
    console.log('Boa Tarde')
}

const temperatura = 16

if (temperatura <= 18) {
    console.log('Está frio')
} else {
    console.log('Está calor!')
}


// eu não posso ter somente o else... preciso do if

// mais de uma possibilidade = else if

// else if permite uma ou mais alternativas

const velocidade = 80

if(velocidade < 20 ) {
    console.log('Está muito abaixo da velocidade')
} else if(velocidade < 50) {
    console.log('recomendamos você acelerar')
} else if(velocidade < 80) {
    console.log('Velocidade ideal')
}else {
    console.log('excesso de velocidade')
}


// if : um apenas
// else : duas condições
// else if : infinitooooooooooooooooooooooooooooooooo

// switch

// ele é bom para analizar casos com valores fixos

// ex  dias da semana

// if : geralmente com intervalo de valores, e switch geralmente usado com valores especificos

let diaDaSemana = 22

switch (diaDaSemana) {
    case 1 :
        console.log('Domingo')
        break
    case 2 :
        console.log('Segunda-Feira')
        break
    case 3 :
        console.log('Terça-Feira')
        break
    case 4 :
        console.log('Quarta-Feira')
        break
    case 5 :
        console.log('Quinta-Feira')
        break
    case 6 :
        console.log('Sexta-Feira')
        break
    case 7 :
        console.log('Sábado')
        break
    default :
        console.log('Dia da semana inválido!!!')
}

// mesmo com os swtchs, as condicionais ainda dominam o mercado!

// Operadores Lógicos

// são 3 ... AND = &&
// OR = ||
// NOT = NEGAÇÃO

// TABELA VERDADE

//vão permitir lógicas mais complexas

// exp1 && exp2 >> se as duas forem TRUE

// EXP1 || EXP2 >> VAR DAR FALSE SE AS DUAS FOREM FALSE... MAS SE UMA FOR VERDADEIRA, ELE SEGUIRA

// !EXP = VAI INVERTER O RESULTADO DO BOOLEAN... TRUE > FALSE --- FALSE > TRUE

console.log('-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-')
let idadeDoUsuario = 18
let temCarteira = true

// sempre viram booleano  > true = true > true ou false = true > false
if (idadeDoUsuario >= 18 && temCarteira == true) {
    console.log('Pode fazer a carteira de motorista!')
} else {
    console.log('não pode dirigir')
}


// cadastro no sistema


const temRg = true
const temPassaporte = false

if (temPassaporte || temRg) {
    console.log('Pode fazer')
} else {
    console.log('Não pode fazer')
}

console.log('-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-')


const estaChovendo = false

if (!estaChovendo) {
    console.log('Não está chovendo!!')
} else {
    console.log('Está chovendo')
}

console.log(estaChovendo)