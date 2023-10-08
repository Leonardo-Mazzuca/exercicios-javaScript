const salarios = [];
const sexos = [];
const idades = [];

const realizaPesquisa = () => {


    const gerarBtn = document.getElementById('gerar-dados-pesquisa');
    gerarBtn.addEventListener('click', () => {
        
        salarios.length = 0;
        sexos.length = 0;
        idades.length = 0;

        calculaMediaSalario();
        encontraMenorEMaiorSalario();
        calculaQuantidadeDeHomensEMulheres();
        calculaMediaIdade();
    })


    
}



function calculaMediaSalario () {
    gerarSalario();
    let somaSalario = 0;

   salarios.forEach(salario => {
    somaSalario+=salario
   })

    const mediaSalario = (somaSalario / 300);
    const elementoMediaSalario = document.getElementById('media-salario');
    elementoMediaSalario.textContent = `Média do salário dos habitantes: $${mediaSalario.toFixed(2)}`;
}

function encontraMenorEMaiorSalario () {

    let menorSalario = 0;
    let maiorSalario = 0;
    const maiorSalarioElemento = document.getElementById('maior-salario');
    const menorSalarioElemento = document.getElementById('menor-salario');

    for(let i = 0; i< salarios.length; i++){

        if(i === 0) {
            menorSalario = salarios[i];
            maiorSalario = salarios[i];
        }

        salarios[i] < menorSalario ? menorSalario = salarios[i] : maiorSalario = salarios[i];


    }
    maiorSalarioElemento.textContent = `salário: $${maiorSalario.toFixed(2)}`;
    menorSalarioElemento.textContent = `salário: $${menorSalario.toFixed(2)}`;

}

function calculaQuantidadeDeHomensEMulheres () {

    let qntdHomens = 0;
    let qntdMulheres = 0;
    const qntdHomensElemento = document.getElementById('qntd-homens')
    const qntdMulheresElemento = document.getElementById('qntd-mulheres')

    
    while(sexos.length < 300){
        let gerarSexo = Math.floor(Math.random()*2);
        sexos.push(gerarSexo);
        
    }

    sexos.forEach(sexo => {
        if(sexo===0){
            qntdHomens++;
        } else if (sexo===1){
            qntdMulheres++;
        }
    })

    qntdHomensElemento.textContent = `Quantidade de homens: ${qntdHomens}`
    qntdMulheresElemento.textContent = `Quantidade de mulheres: ${qntdMulheres}`

}

function calculaMediaIdade () {

    let idadeHabitante = 0;
    let somaIdade = 0;
    let mediaIdade = 0;
    const mediaIdadeElemento = document.getElementById('media-idade');

    while(idades.length < 300){
        idadeHabitante = parseInt(Math.floor(Math.random()*101));
        idades.push(idadeHabitante);
    }

    idades.forEach(idade => {

        somaIdade += idade;

    });

    mediaIdade = parseInt((somaIdade / idades.length));
    mediaIdadeElemento.textContent = `  Média de idade: ${mediaIdade}`;
   

    
    

}

function gerarSalario () {

    let salarioHabitante = 0;

    while(salarios.length<300){
        salarioHabitante = parseFloat((Math.random()*20001).toFixed(2));

        if(!salarios.includes(salarioHabitante)){
            salarios.push(salarioHabitante);
        }
    }

}


realizaPesquisa();