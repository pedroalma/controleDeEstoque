// Informaçoes do formulário
const nome = document.getElementById("nome");
const categoria = document.getElementById("categoria");
const preco = document.getElementById("preco");
const quantidade = document.getElementById("quantidade");
const imagem = document.getElementById("imagem");
const produtoForm = document.getElementById("produto-form")

const categorias =[];
const produtos =[];

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
        camposPreenchidos = false;
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

    if(camposPreenchidos == false){
        return
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

    // categorias.push(novaCategoria);
    // produtos.push(novoProduto);

    // localStorage.setItem("nomeProduto",nome.value);
    // localStorage.setItem("nomeCategoria",categoria.value);
});

// erro-categoria
// erro-preco
// erro-quantidade 