const pronpt = require('prompt-sync')();

altura = []

for (let i = 0; i <= 9; i++){
    console.log('Digite a altura: ')
    altura[i]
}

for (let i = 0; i <= 9; i++){
    
    for (let j = 0; j <= 9; j++){
        console.log(`Aluno ${i}: maior que ${j} aluno(s)`)
        altura[j]
    }
}