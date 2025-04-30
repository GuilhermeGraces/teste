function alterar(produto,acao){
    const quantidade= document.getElementById('qtd-ptd'+produto);
    const valor = document.getElementById("valor-"+produto);
    const subtotal = document.getElementById("subtotal-pdt"+produto);
}

const qtd = parseFloat(quantidade.innerHTML.replace('.','').replace(',','.'));
const valorFloat = parseFloat(valor.innerHTML.replace('.','').replace(',','.'));