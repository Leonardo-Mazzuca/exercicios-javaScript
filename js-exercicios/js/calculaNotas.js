const calculaMedia = () => {
    const statusAluno = document.getElementById('notas-status');
    const conceito = document.getElementById('conceito');
    const mediaFinal = document.getElementById('media-final');
    
    const enviarNotas = document.getElementById('enviar-notas');
    
    enviarNotas.addEventListener('click', function () {
        const inputFields = document.querySelectorAll('.input-field-notas');
        let hasError = false;
        let mediaGeral = 0;
        let notasValidas = 0;
    
        inputFields.forEach(input => {
            const notaInput = input.value.trim();
            const notaConvertidaInput = parseFloat(notaInput);
    
            if (isNaN(notaConvertidaInput) || notaConvertidaInput > 10 || notaConvertidaInput < 0) {
                hasError = true;
            } else {
                notasValidas++;
                mediaGeral += notaConvertidaInput;
            }
        });
    
        if (hasError) {
            inputFields.forEach(input => {
                input.value = '';
            });
            alert('Digite um valor válido para notas');
        } else {
            mediaGeral /= notasValidas;
            if(mediaGeral >= 9 && mediaGeral <= 10){
                conceito.textContent = 'Conceito: A';
                statusAluno.textContent= 'Status: Aprovado(a)';
            } else {
                if(mediaGeral >= 7.5 && mediaGeral <=9){
                    conceito.textContent = 'Conceito: B';
                    statusAluno.textContent= 'Status: Aprovado(a)';
                } else {
                    if(mediaGeral >= 6 && mediaGeral <= 7.5){
                        conceito.textContent = 'Conceito: C';
                        statusAluno.textContent= 'Status: Aprovado(a)';
                    } else {
                        if(mediaGeral >= 4 && mediaGeral <= 6){
                            conceito.textContent = 'Conceito: D';
                            statusAluno.textContent= 'Status: Reprovado(a)';
                        } else if (mediaGeral < 4) {
                            conceito.textContent = 'Conceito: E';
                            statusAluno.textContent= 'Status: Reprovado(a)';
                        }
                    }
                }
            }

            mediaFinal.textContent = `Média final: ${mediaGeral.toFixed(2)}`;
        }
    });
}

calculaMedia();
