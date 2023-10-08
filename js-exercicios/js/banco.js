const calculaPercentualCredito = () => {
    const inputPercentual = document.getElementById('saldo-medio');
    const percentualSaldo = document.getElementById('percentual-saldo');
    const percentualAdicionado = document.getElementById('percentual-adicionado');
    const rendaTotal = document.getElementById('renda-total');
    const enviarBtn = document.getElementById('enviar-saldo');

    enviarBtn.addEventListener('click', function () {
        const inputPercentualValue = parseFloat(inputPercentual.value);

        if (isNaN(inputPercentualValue)) {
            alert('Digite um valor numérico válido.');
            return;
        }

        let percentualAdicionadoARenda = 0;

        if (inputPercentualValue < 2000) {
            percentualSaldo.innerText = 'Percentual de Crédito: 0.';
        } else if (inputPercentualValue >= 2000 && inputPercentualValue < 10000) {
            percentualSaldo.innerText = 'Percentual de Crédito: 20%.';
            percentualAdicionadoARenda = inputPercentualValue * 0.20;
        } else if (inputPercentualValue >= 10000 && inputPercentualValue < 20000) {
            percentualSaldo.innerText = 'Percentual de Crédito: 30%.';
            percentualAdicionadoARenda = inputPercentualValue * 0.30;
        } else {
            percentualSaldo.innerText = 'Percentual de Crédito: 40%.';
            percentualAdicionadoARenda = inputPercentualValue * 0.40;
        }

        percentualAdicionado.innerText = `Percentual adicionado a renda: ${percentualAdicionadoARenda.toFixed(2)}.`;
        rendaTotal.innerText = `Renda total: ${(inputPercentualValue + percentualAdicionadoARenda).toFixed(2)}`;
    });
}

calculaPercentualCredito();