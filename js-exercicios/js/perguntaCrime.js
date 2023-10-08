const verificaSuspeito = () => {
    const enviarQuestionario = document.getElementById('enviar-questionario');
    const classificacaoSuspeito = document.getElementById('classificacao-suspeito');
  
    enviarQuestionario.addEventListener('click', function () {
        const inputFields = document.querySelectorAll('.input-field');
        let hasError = false;
        let counterS = 0;

        inputFields.forEach(input => {
            const inputValueString = input.value.trim().toUpperCase();

            if (inputValueString !== 'S' && inputValueString !== 'N') {
                hasError = true;
            }


            if(!hasError){

                if(inputValueString === 'S'){
                    counterS++;
                }
    
                if(counterS === 2) {
                    classificacaoSuspeito.innerText = 'Classificação: Suspeito'
                } else if (counterS === 3 || counterS === 4){
                    classificacaoSuspeito.innerText = 'Classificação: Cúmplice'
                } else if (counterS === 5){
                    classificacaoSuspeito.innerText = 'Classificação: Assassíno'
                } else {
                    classificacaoSuspeito.innerText = 'Classificação: Inocente'
                }
            }

        });

        if (hasError) {
            inputFields.forEach(input => {
                input.value = ''; 
            });
            alert('Digite apenas S ou N');
        }
    });
}

verificaSuspeito();