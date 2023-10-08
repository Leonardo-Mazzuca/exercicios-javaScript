
const btnNumImpar = document.getElementById('exibir-impares');
const listaNumImparHTML = document.getElementById('lista-num-impar');
const listaNumImparTitulo = document.getElementById('lista-num-impar-titulo');

const exibieNumImpar = () => {

    const listaNumImpar = [];
    let numeroInicial = Math.floor(Math.random() * 1000);
    listaNumImparTitulo.textContent = `  Números ímpares consecutivos após ${numeroInicial}`;
    
    
    for(let i = 0; i < 10; i++){

        let numeroVerificar = numeroInicial+ i;

        if(numeroVerificar %2 !==0){
            listaNumImpar.push(numeroVerificar);
        }

    }

    
    listaNumImparHTML.textContent = listaNumImpar.join(' - ')



    

    

}

btnNumImpar.addEventListener('click', exibieNumImpar);