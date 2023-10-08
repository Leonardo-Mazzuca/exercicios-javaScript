
const exibeNumeros = () => {

    const numerosExibidos = document.getElementById('numeros-100');
    const somatoriaNumeros = document.getElementById('somatoria');

    const enviarNumerosBtn = document.getElementById('visualizar-numeros');

    enviarNumerosBtn.addEventListener('click', () => {

        const listaNumeros = [];
        let somaNumeros = 0;
        for(let i = 1 ; i < 101; i++){
            listaNumeros.push(i);
        }

        listaNumeros.forEach(numero => {
            somaNumeros+=numero;
        });


        numerosExibidos.textContent = listaNumeros.join('\n');
        somatoriaNumeros.textContent = somaNumeros;

    })


}
exibeNumeros();