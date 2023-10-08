const calculaDiarias = () => {

    const valorServicoHTML = document.getElementById('valor-servico');
    const enviarDiarias = document.getElementById('enviar-diarias');

    enviarDiarias.addEventListener('click', function(){


        const inputDiarias = document.getElementById('qntd-diaria');
        const diariasConvertidas = inputDiarias.value.trim();
        let valorServico = 0;

        if(diariasConvertidas > 15){
            valorServico = diariasConvertidas * 35.50;
        } else if (diariasConvertidas === 15){
            valorServico = diariasConvertidas * 46.00;
        } else {
            valorServico = diariasConvertidas *  58.00;
        }

        valorServicoHTML.textContent = `Valor do serviço: R$${valorServico.toFixed(2)}`;
    });


}

calculaDiarias();