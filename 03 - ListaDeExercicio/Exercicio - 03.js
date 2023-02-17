/*
    3) Elabore um algoritmo que calcule o que deve ser pago por um produto, considerando o preço normal de etiqueta e a escolha da condição de pagamento. 
    Utilize os códigos da tabela a seguir para ler qual a condição de pagamento escolhida e efetuar o cálculo adequado.

    Código Condição de pagamento:
    1 - À vista Débito, recebe 10% de desconto;
    2 - À vista no Dinheiro ou PIX, recebe 15% de desconto;
    3 - Em duas vezes, preço normal de etiqueta sem juros;
    4 - Acima de duas vezes, preço normal de etiqueta mais juros de 10%;
*/ 

const produto = 20;
const formaDePagamento = 4;

if(formaDePagamento === 1){
    let valorTotal = produto-(produto*(10/100));
    console.log(`Valor total da compra = R$${valorTotal.toFixed(2)} \nForma de pagamento = ${formaDePagamento} Débito`);
}else if(formaDePagamento === 3){
    console.log(`Valor total da compra = R$${produto.toFixed(2)} \nForma de pagamento = ${formaDePagamento} Duas vezes`);
}else if(formaDePagamento === 2){
    let valorTotal = produto-(produto*(15/100));
    console.log(`Valor total da compra = R$${valorTotal.toFixed(2)} \nForma de pagamento = ${formaDePagamento} Dinheiro ou Pix`);
}else if(formaDePagamento === 4|| formaDePagamento > 3){
    let valorTotal = produto+(produto*(15/100));
    console.log(`Valor total da compra = R$${valorTotal.toFixed(2)} \nForma de pagamento = ${formaDePagamento} Acima de duas vezes`);
}