
function carregar(){
    $.ajax({//faz a chamada do jquery
        url: "json/lista.json",
        data: "", 
        success: function(retorno){//se deu certo joga na função retorno
            tratarDados(retorno);
        }, 
        dataType: "json" //o dado que eu espero
    });
}

function tratarDados(retorno){
    //for(i = 0; i<retorno.length; i++)
    $(retorno).each(function(index, value){
        let conteudo = `<tr class = "abrirModal">
        <th>${value.id}</th>
        <td><img class = "picture" src = "${value.picture}"></td>
        <td>${value.name}</td>
        <td>
            <button type="button" class="btn btn-info abrirModal" onclick="abrirModal('${value.name}', '${value.description}', '${value.picture}')" >
             More
            </button>
        </td>
        
        </tr>`       
        
      let tabela = $('.minhaTabela');
      tabela.append(conteudo);        
    })
}

function abrirModal(nome, descricao, imagem){

    var titulo = $("#exampleModalLabel");
    titulo.html(nome);

    var bodyTeste = $(".modal-body");
    //body.html("descrição")
    
    let conteudo = `<div class="col-md-12">
            <div class="card" >
                <img src="${imagem}" class="card-img-top"  alt="tertertert">
                <div class="card-body">
                    <h5 class="card-title">${nome}</h5>
                    <p class="card-text">${descricao}</p>
                </div>
            </div>
        </div>`;

    $('#exampleModal').modal("show");
    bodyTeste.html(conteudo);    
}

carregar();
