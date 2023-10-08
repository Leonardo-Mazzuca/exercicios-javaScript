const exibirBtn = document.getElementById('exibir-numeros-dobro');

const exibirDobros = () => {
    const exibirDobrosElemento = document.getElementById('conteudo-numeros');

    const listaNumerosNormal = [];
    const listaNumerosDobro = [];

    for (let i = 1; i <= 10; i++) {
        listaNumerosNormal.push(i);
        listaNumerosDobro.push(i * 2);
    }

    const listaNumerosFormatada = [];

    for (let i = 0; i < 10; i++) {
        listaNumerosFormatada.push(`${listaNumerosNormal[i]}/${listaNumerosDobro[i]}`);
    }

    const resultado = listaNumerosFormatada.join(' - ');

    exibirDobrosElemento.textContent = resultado;

    
}

exibirBtn.addEventListener('click', exibirDobros);
