

function atualizarValorTotal() {
    const cor = document.getElementById("cor").value;
    const quantidade = parseInt(document.querySelector(".inputcss").value) || 1; 
    const nomeProduto = document.querySelector(".nomepreduto").textContent; 
    const precoTexto = document.querySelector(".preco").textContent.replace("R$", "").replace(",", "."); 
    const preco = parseFloat(precoTexto); 

    if (quantidade <= 0) {
        alert("A quantidade deve ser maior que zero!");
        return;
    }

    const total = (preco * quantidade).toFixed(2);
  
   
    document.querySelector(".mortrarvalor").innerHTML = `R$ ${total}`;
}


function pedido() {
    const cor = document.getElementById("cor").value;
    const quantidade = parseInt(document.querySelector(".inputcss").value) || 1; 
    const nomeProduto = document.querySelector(".nomepreduto").textContent; 
    const precoTexto = document.querySelector(".preco").textContent.replace("R$", "").replace(",", "."); 
    const preco = parseFloat(precoTexto); 

    if (quantidade <= 0) {
        alert("A quantidade deve ser maior que zero!");
        return;
    }

    const total = (preco * quantidade).toFixed(2);
  
    const mensagem = `Olá! Gostaria de comprar ${quantidade} unidade(s) do produto ${nomeProduto} na cor ${cor}. O valor total é R$ ${total}.`;

 
    window.location.href = `https://wa.me/11942442175?text=${encodeURIComponent(mensagem)}`;
}


document.querySelector(".inputcss").addEventListener("input", atualizarValorTotal);

window.onload = atualizarValorTotal;


