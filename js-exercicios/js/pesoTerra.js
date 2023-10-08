const valoresGravidades = [
    {
        numero: 1,
        gravidade: 0.37,
        planeta: 'Mercúrio'
    },
    {
        numero: 2,
        gravidade: 0.88,
        planeta: 'Vênus'
    },
    {
        numero: 3,
        gravidade: 0.38,
        planeta: 'Marte'
    },
    {
        numero: 4,
        gravidade: 2.64,
        planeta: 'Júpiter'
    },
    {
        numero: 5,
        gravidade: 1.15,
        planeta: 'Saturno'
    },
    {
        numero: 6,
        gravidade: 1.17,
        planeta: 'Urano'
    },
];

const calculaGravidadeTerra = () => {
    const enviarBtn = document.getElementById('btn-enviar');
    const pesoConvetidoContainer = document.getElementById('peso-convertido');

    enviarBtn.addEventListener('click', function () {
        const inputNumero = parseInt(document.getElementById('input-numero').value);
        const inputPeso = parseInt(document.getElementById('input-peso').value);

        if (isNaN(inputNumero) || inputNumero < 1 || inputNumero > 6) {
            alert('Digite um número entre 1 e 6');
            return;
        }

        for (const valoresGravidade of valoresGravidades) {
            if (valoresGravidade.numero === inputNumero) {
                const pesoConvertido = (inputPeso / 100) * valoresGravidade.gravidade;
                pesoConvetidoContainer.innerText = `Peso convertido para ${valoresGravidade.planeta}: ${pesoConvertido.toFixed(2)}`;
                break;
            }
        }
    });
}

calculaGravidadeTerra();