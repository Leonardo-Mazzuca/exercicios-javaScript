
const numerosSortear = [];

for(let i = 0; i < 5; i++){
    numerosSortear.push(parseInt(Math.random()*500));
}

export const verificaIntervalo = () => {

    let numerosIntervalo = [];

    for(const numero of numerosSortear){
        if(numero >= 100 && numero <=300){
            numerosIntervalo.push(numero);

        }

    }

    console.log(`Números entre o intervalo de 100 e 300: ${numerosIntervalo}`)


}

verificaIntervalo();

