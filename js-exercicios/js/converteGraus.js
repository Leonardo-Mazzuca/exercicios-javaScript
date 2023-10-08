const converteEmFarenheits = () => {


    const inputGrausInferior = document.getElementById('graus-inferior');
    const inputGrausSuperior = document.getElementById('graus-superior');
    const enviarBtn = document.getElementById('enviar-graus');
    const grausFarenheint = document.getElementById('graus-farenheits');


    enviarBtn.addEventListener('click',function(){

        const inputGrausInferiorValue = inputGrausInferior.value.trim();
        const inputGrausSuperiorValue = inputGrausInferior.value.trim();

        if(isNaN(inputGrausInferiorValue) || isNaN(inputGrausSuperiorValue)){
            alert('Insira dados válidos')
            return;
        }


        for(let farenheint = inputGrausInferiorValue; farenheint < inputGrausSuperiorValue; farenheint++){
            let celsius = 5 * (farenheint - 32) / 9;
            grausFarenheint.textContent = `Graus C° em Farenheit: ${celsius}`;
        }




    });




}
converteEmFarenheits();