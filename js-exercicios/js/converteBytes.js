
const converteEmBytes = () => {

    const inputBytes = document.getElementById('mega-bytes');
    const bytesConvertidos = document.getElementById('bytes-convertidos');
    const enviarMegaBytes = document.getElementById('enviar-megabytes');

    enviarMegaBytes.addEventListener('click',function(){

        const megaBytesValue = parseInt(inputBytes.value);

        if(isNaN(megaBytesValue))return;

        const bytes = megaBytesValue * 1000000;
        bytesConvertidos.innerText = `Valor convertido em Bytes: ${bytes}`;
    });

}

converteEmBytes();