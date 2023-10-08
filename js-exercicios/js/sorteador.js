const numerosSortear = [];
const numerosMaior = [];

for(let i = 0; i < 5; i++){
    numerosSortear.push(parseInt(Math.random()*100));

    
    
}

export function printNumerosSortear(){
    console.log(numerosSortear);
    numerosSortear.forEach((numero)=>{
        if(numero> 10){
            numerosMaior.push(numero)
        }
    })
    
    console.log(`Números maiores que 10: ${numerosMaior}`);

}


