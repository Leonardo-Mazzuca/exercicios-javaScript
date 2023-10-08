const enviarParesBtn = document.getElementById('enviar-num-par');

const exibeNumerosPares = () => {

    const qntdExibirNumPares = document.getElementById('numeros-pares').value;
    const numerosParesElemento = document.getElementById('numeros-pares-exibidos');
    const listaNumPares = [];

    for(let i = 0; i < qntdExibirNumPares; i++){
        if(i % 2 === 0){
            
            listaNumPares.push(i);

        }
    }

    numerosParesElemento.textContent = listaNumPares.join('\n')

}

enviarParesBtn.addEventListener('click', exibeNumerosPares)
