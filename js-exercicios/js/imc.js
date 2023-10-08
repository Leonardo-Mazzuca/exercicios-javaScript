const arrayClassificacao = [
    'Abaixo do peso',
    'Peso Normal',
    'Sobrepeso',
    'Obeso Leve',
    'Obeso Moderado',
    'Obeso Mórbido'
]

const calculaImc = () => {
    const inputAltura = document.getElementById('altura');
    const inputPeso = document.getElementById('peso');
    const btnImc = document.getElementById('enviar-imc');
    const imcEnviado = document.getElementById('imc-enviado');
    const imcStatus = document.getElementById('imc-status');

    btnImc.addEventListener('click', function () {
        const alturaValue = parseFloat(inputAltura.value) / 100;
        const pesoValue = parseFloat(inputPeso.value);

        if (isNaN(alturaValue) || isNaN(pesoValue)) {
            return;
        }

        let calculoImc = pesoValue / (alturaValue ** 2);

        if (calculoImc < 18.6) {
            imcEnviado.innerText = `IMC: ${calculoImc.toFixed(2)}`;
            imcStatus.innerText = `Classificação: ${arrayClassificacao[0]}`;
        } else if (calculoImc >= 18.6 && calculoImc < 25) {
            imcEnviado.innerText = `IMC: ${calculoImc.toFixed(2)}`;
            imcStatus.innerText = `Classificação: ${arrayClassificacao[1]}`;
        } else if (calculoImc >= 25 && calculoImc < 30) {
            imcEnviado.innerText = `IMC: ${calculoImc.toFixed(2)}`;
            imcStatus.innerText = `Classificação: ${arrayClassificacao[2]}`;
        } else if (calculoImc >= 30 && calculoImc < 35) {
            imcEnviado.innerText = `IMC: ${calculoImc.toFixed(2)}`;
            imcStatus.innerText = `Classificação: ${arrayClassificacao[3]}`;
        } else if (calculoImc >= 35 && calculoImc < 40) {
            imcEnviado.innerText = `IMC: ${calculoImc.toFixed(2)}`;
            imcStatus.innerText = `Classificação: ${arrayClassificacao[4]}`;
        } else if (calculoImc >= 40) {
            imcEnviado.innerText = `IMC: ${calculoImc.toFixed(2)}`;
            imcStatus.innerText = `Classificação: ${arrayClassificacao[5]}`;
        }
    });
}

calculaImc();
