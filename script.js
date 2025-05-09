// Informaçoes do formulário
const nome = document.getElementById("nome");
const categoria = document.getElementById("categoria");
const preco = document.getElementById("preco");
const quantidade = document.getElementById("quantidade");
const imagem = document.getElementById("imagem");
const produtoForm = document.getElementById("produto-form")
const notificacao = document.getElementById("notificacao-conteudo");

const categorias =[];
const produtos =[];

// escondendo a notificasao ate que a funcao seja chamada
notificacao.style.display = 'none';

function exibirNotificacao(mensagem,status){
    
    const messageEl = document.getElementById("notificacao-mensagem");

    messageEl.textContent = mensagem;

    if(status === 'sucesso'){
        notificacao.style.backgroundColor = '#dbead5';
        messageEl.style.color= '#103900';
    } else if(status === 'alerta'){
        notificacao.style.backgroundColor = '#ffffa0';
        messageEl.style.color='#646600';
    }else if(status == 'erro'){
        notificacao.style.backgroundColor = '#fb6866';
        messageEl.style.color='#470300'
    }

    notificacao.style.display = 'block';

    setTimeout (() => {
        notificacao.style.display = "none";
    },3000);
}

produtoForm.addEventListener("submit", (event) => {
    //impedir de recarregar a pagina quando o evento de submit()  
    event.preventDefault();
    let camposPreenchidos = true;

    if(nome.value == ""){
        document.getElementById("erro-nome").style.display = "block";
        camposPreenchidos = false;
    }else{
        document.getElementById("erro-nome").style.display = "none";
    }
    if(categoria.value == ""){
        document.getElementById("erro-categoria").style.display = "block";
        camposPreenchidos = false;
    }else{
        document.getElementById("erro-categoria").style.display = "none";
    }
    if(preco.value == ""){
        document.getElementById("erro-preco").style.display = "block";
        camposPreenchidos = false;
    }else{
        document.getElementById("erro-preco").style.display = "none";
    }
    if(quantidade.value == ""){
        document.getElementById("erro-quantidade").style.display = "block";
        camposPreenchidos = false;
    }else{
        document.getElementById("erro-quantidade").style.display = "none";
    }

    const produtosInseridos = {
        nome: nome.value,
        categoria: categoria.value,
        preco:preco.value,
        quantidade:quantidade.value,
        imagem:imagem.value
    }

    produtos.push(produtosInseridos);
    localStorage.setItem("nomeProduto",JSON.stringify(produtos));

    produtoForm.reset();

    if(camposPreenchidos == false){
        exibirNotificacao('Mensagem de alerta  erro ' , 'erro');
       return
   }else{
       exibirNotificacao('Mensagem de alerta sucesso' , 'sucesso');
       return
   };
   
});