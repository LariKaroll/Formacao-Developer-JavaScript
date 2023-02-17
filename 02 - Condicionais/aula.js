/*10 >= 10
10 > 5
10 < 5
== //ignora o tipo da variavel
=== //melhor forma para fazer comparação
! //negação ao contrario se for v vai ser f
*/


// const numero = 0;
// const isNumeroPar = (numero % 2) === 0;

// if(isNumeroPar){
//     console.log('par');
// }else{
//     console.log('impar')
// }

const numero = 5;
const numeroDivisivelPor5 = (numero % 5) === 0;

if(numero=== 0){
    console.log('o Numero é invalido');
}else if(numeroDivisivelPor5){
    console.log('Sim');
}else{
    console.log('Não')
}
