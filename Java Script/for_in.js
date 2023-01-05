const notas = [6.7, 7.2, 10, 5.65, 8.8, 4.3, 2.1, 9.9]

for (let i in notas) { // ele vai pegar o índice do elemento
    console.log(`No índice ${i} temos a nota ${notas[i]}`)
} 


const pessoa = {  // é mais usado para percorrer objeto como nesse caso.
    nome: 'Ana',
    sobrenome: 'Silva',
    idade: 29,
    peso: 64
}

console.log('\n************************************\n')

for (let atributo in pessoa){
    console.log(`${atributo} -> ${pessoa[atributo]}`)
}