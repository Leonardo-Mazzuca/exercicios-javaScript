
const gerarQuadradoNumeros = () => {

    const inputNumero = document.getElementById('numero-quadrado');
    const numerosQuadrado = document.getElementById('quadrado-numeros');
    const enviarNumerosBtn = document.getElementById('enviar-num-quadrado');
    const numerosQuadradoTitulo = document.getElementById('quadrado-numeros-title');


    enviarNumerosBtn.addEventListener('click', ()=> {

        let inputNumeroValue = Number(inputNumero.value);
        const listaNumerosDigitados = [];

        if(isNaN(inputNumeroValue) || inputNumeroValue < 0) {
            alert('Número inválido, insira novamente!');
        }

        for(let i = 1; i< inputNumeroValue; i++){
            
            listaNumerosDigitados.push(Math.pow(i,2));

        }

        console.log(listaNumerosDigitados)

        numerosQuadradoTitulo.textContent = `  Quadrádo (x²) de todos os números de 1 até ${inputNumeroValue}:`;
        numerosQuadrado.textContent = listaNumerosDigitados.join('\n');



    });
}

gerarQuadradoNumeros();