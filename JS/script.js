function alterar(i,acao){
    const quantidade = document.getElementById('qtd-pdt'+i);
    const valor = document.getElementById('valor-'+i);
    const subtotal = document.getElementById('subtotal-'+i);
    const count = document.getElementById('add_carrinho');
    

const qtd = parseFloat(quantidade.innerHTML.replace('.','').replace(',','.'));
const valorFloat = parseFloat(valor.innerHTML.replace('.','').replace(',','.'));

if(acao=='aumentar'){
    quantidade.innerHTML++
    alterarCarrinho(1,count)
}
else if(acao=='reduzir' && qtd>0){
    quantidade.innerHTML--
    alterarCarrinho(-1,count)
}

subtotal.innerHTML= (quantidade.innerHTML * valorFloat).toLocaleString('pt-BR',{ minimumFractionDigits: 2, maximumFractionDigits: 2})
}



function alterarCarrinho(numero,valor_count){
    const count_atual = parseInt(valor_count.getAttribute('data-count')|| 0 )
    let novo_count=count_atual+numero

    if(novo_count<0)novo_count=0
    valor_count.setAttribute('data-count',novo_count)
}

