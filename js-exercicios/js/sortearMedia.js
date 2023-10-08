const numerosSortear = [];

for(let i =0; i < 10; i++){

    numerosSortear.push(parseInt(Math.random()*100));
}

console.log(`Números sorteados: ${numerosSortear}`);

const resolveMedia = () => {
    let somaNumeros = 0;
    let media = 0;
    numerosSortear.forEach((numero)=>{
        somaNumeros+=numero
    })

    return media = somaNumeros / numerosSortear.length;
}

let media = resolveMedia();

console.log(`Média dos números sorteados: ${media}`)

const imprimeMaiorQueMedia = () => {
    let numerosMaior = [];
    for(const numero of numerosSortear){
        if(numero > media)numerosMaior.push(numero);
    }
    return numerosMaior;
}

let arrayNumerosMaior = imprimeMaiorQueMedia();

console.log(`Números maiores que a média: ${arrayNumerosMaior}`)