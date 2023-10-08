const btnlancadorDado = document.getElementById('lancar-dado');
let contadorClique = 0;
let somadorNumeros = 0;

const lancarDado = () => {
    let numeroDado = 0;
    
    if (contadorClique < 10) {
        numeroDado = Math.floor(Math.random() * 6) + 1;
        geraNumerosDadosHTML(numeroDado);
       

        contadorClique++;

        if (contadorClique === 10) {
            btnlancadorDado.disabled = true;
           
            alert('Número de jogadas excedidas!');
        }
    }
    
    somaNumeroDados(numeroDado);
}

const geraNumerosDadosHTML = (numeroDado) => {
    const elementoDadosLancados = document.getElementById('mostrador-dados-lancados');
    const elementoP = document.createElement('p');
    const conteudo = `
        Jogada ${contadorClique + 1}° - Número Obtido: ${numeroDado};
    `;
    elementoP.innerText = conteudo;
    elementoDadosLancados.appendChild(elementoP);
}

const somaNumeroDados = (numeroDado) => {
    const elementoSoma = document.getElementById('soma-dados');



    somadorNumeros += Number(numeroDado);
    

    elementoSoma.textContent = `Soma dos números jogados: ${somadorNumeros}`;
}

btnlancadorDado.addEventListener('click', lancarDado);
