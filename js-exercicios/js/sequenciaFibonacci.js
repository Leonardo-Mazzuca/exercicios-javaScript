const exibirBtn = document.getElementById('exibir-sequencia');



const exibeSequenciaFibonacci = () => {

    const elementoExibirFibonacci = document.getElementById('sequencia-exibida');
    const listaNumeros = [0,1];

    for(let i = 2; i < 15;i++){
        const next = listaNumeros[i - 1] + listaNumeros[i - 2];
        listaNumeros.push(next)
    }

    const resultado = listaNumeros.join('-');


    elementoExibirFibonacci.textContent = resultado

}

exibirBtn.addEventListener('click', exibeSequenciaFibonacci);