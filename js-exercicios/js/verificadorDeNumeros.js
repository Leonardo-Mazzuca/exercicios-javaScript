
const arrayNumeros = [];
const btnGerarDados = document.getElementById('gerar-numeros-verificador');

function carregaArrayNumeros () {

    while(arrayNumeros.length<200){

        let numerosSorteados = Math.floor(Math.random()*1001);
        arrayNumeros.push(numerosSorteados);

    }
}

function verificaNumerosImparesPares () {

    let totalPares = 0;
    let totalImpares = 0;
    const totalParesElemento = document.getElementById('qntd-pares');
    const totalImparesElemento = document.getElementById('qntd-impares');

    arrayNumeros.forEach(numero => {

       numero%2===0 ? totalPares++ : totalImpares++;


    });

    totalParesElemento.textContent = Number(totalPares);
    totalImparesElemento.textContent = Number(totalImpares);

}

function verificaNumerosMaioresMenores () {

    let totalMenores = 0;
    let totalMaiores = 0;
    const totalMenoresElemento = document.getElementById('qntd-menor-500');
    const totalMaioresElemento = document.getElementById('qntd-maior-500');

    arrayNumeros.forEach(numero => {

        numero < 500 ? totalMenores++ : totalMaiores++;

    });

    totalMenoresElemento.textContent = totalMenores;
    totalMaioresElemento.textContent = totalMaiores;

}

function verificaQuantidadeEntreNumeros () {

    let quantidadeEntreNumeros = 0;
    const quantidadeSorteadaElemento = document.getElementById('quantidade-sorteada')

    arrayNumeros.forEach(numero => {

        if(numero >= 300 && numero <= 700){
            quantidadeEntreNumeros++;
        }

    });

    quantidadeSorteadaElemento.textContent = Number(quantidadeEntreNumeros);

}


btnGerarDados.addEventListener('click', () => {

    arrayNumeros.length = 0;
    carregaArrayNumeros();
    verificaNumerosImparesPares();
    verificaNumerosMaioresMenores();
    verificaQuantidadeEntreNumeros();


});