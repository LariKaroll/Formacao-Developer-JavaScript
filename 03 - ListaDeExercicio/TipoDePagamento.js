/*
    3) Elabore um algoritmo que calcule o que deve ser pago por um produto, considerando o preço normal de etiqueta e a escolha da condição de pagamento. 
    Utilize os códigos da tabela a seguir para ler qual a condição de pagamento escolhida e efetuar o cálculo adequado.

    Código Condição de pagamento:
    1 - À vista Débito, recebe 10% de desconto;
    2 - À vista no Dinheiro ou PIX, recebe 15% de desconto;
    3 - Em duas vezes, preço normal de etiqueta sem juros;
    4 - Acima de duas vezes, preço normal de etiqueta mais juros de 10%;
*/ 

function calculoFormaDePagamento(formaDePagamento,precoEtiqueta){
    if(formaDePagamento===1){
        return precoEtiqueta-(precoEtiqueta*(10/100));
    }else if(formaDePagamento===2){
        return precoEtiqueta-(precoEtiqueta*(15/100));
    }else if(formaDePagamento===3){
        return precoEtiqueta;
    }else if(formaDePagamento===4){
        return precoEtiqueta+(precoEtiqueta*(10/100));
    }
}

function formasDePagamento(formaDePagamento) {
    if(formaDePagamento === 1){
        return 'á vista no débito';
    }else if(formaDePagamento === 2){
        return 'Dinheiro ou Pix';
    }else if(formaDePagamento === 3){
        return '2x';
    }else if(formaDePagamento === 4){
        return '3x a 12x';
    }
}

(function(){
    const formaDePagamento = 4;
    const precoEtiqueta = 20;

    const conclusaoTotal = calculoFormaDePagamento(formaDePagamento,precoEtiqueta);
    const forma = formasDePagamento(formaDePagamento);
    
    console.log(`Total : R$${conclusaoTotal}, Forma de pagamento: ${forma}`);

})();