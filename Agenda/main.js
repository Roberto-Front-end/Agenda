
const botaoAdicionar = document.getElementById("buttonAdicionar");
const botaoConsultar = document.getElementById("buttonConsultar");
const botaoExcluir = document.getElementById("buttonExcluir");
const botaoAlterar = document.getElementById("buttonAlterar");

// Array de objetos para representar várias pessoas
let pessoas = [
    { nome: "Ana", numero: 11987654321 },
    { nome: "Carlos", numero: 71982546135 },
    { nome: "João", numero: 75992758251 },
    { nome: "Julia", numero: 51987654321 },
    { nome: "Lucas", numero: 41998765432 },
    { nome: "Maria", numero: 71982754692 },
    { nome: "Pedro", numero: 21998765432 },
    { nome: "Sofia", numero: 31987654321 }
];

// Obtendo elementos HTML para inputs
let nomeInput = document.getElementById('nomeInput');
let numeroInput = document.getElementById('numeroInput');
let infoElement = document.getElementById('info');

// Função para ordenar as pessoas em ordem alfabética na lista de contatos
function ordenarPessoas() {
    pessoas.sort(function(a, b) {
        if (a.nome.toLowerCase() < b.nome.toLowerCase()) {
            return -1;
        }
        if (a.nome.toLowerCase() > b.nome.toLowerCase()) {
            return 1;
        }
        return 0;
    });
}

// Função para adicionar uma nova pessoa ao array de contatos
function adicionarPessoa() {
    // Obtém os valores digitados nos campos de nome e número
    let nome = nomeInput.value; 
    let numero = numeroInput.value; 

    // Verifica se ambos os campos foram preenchidos
    if (nome === "" || numero === "") {
        alert("Preencha os dois campos!");
        return; // Encerra a função se algum campo estiver vazio
    }

    // Verifica se já existe um contato com o mesmo nome (ignorando maiúsculas/minúsculas)
    let pessoaExistente = pessoas.find(pessoa => pessoa.nome.toLowerCase() === nome.toLowerCase());

    // Se já existir, exibe um alerta e interrompe a função
    if (pessoaExistente) {
        alert("Já existe um contato com este nome!");
        return;
    }

    // Adiciona a nova pessoa ao array de contatos
    pessoas.push({ nome: nome, numero: numero });

    // Ordena a lista de contatos em ordem alfabética após a adição
    ordenarPessoas();

    // Atualiza a lista de contatos exibida na tela
    exibirPessoas();

    // Limpa os campos de input para uma nova inserção
    limparCampos();
}

// função para consultar pessoas
function consultarPessoa() {
    let nomeConsultado = nomeInput.value;
    let pessoaEncontrada = pessoas.find(pessoa => pessoa.nome === nomeConsultado);
    // uma copia de cada item de pessoas e armazenar em pessoa
    if (pessoaEncontrada) {
        numeroInput.value = pessoaEncontrada.numero;
    }
    else {
        alert("Contato não encontrado!");
        nomeInput.value = '';
        numeroInput.value = '';
    }
}

function excluirPessoa() {
    let nomeConsultado = nomeInput.value;
    if (nomeConsultado) {
        let pessoaIndice = pessoas.findIndex(pessoa => pessoa.nome === nomeConsultado);
        if (pessoaIndice >= 0) {
            pessoas.splice(pessoaIndice, 1);
            exibirPessoas();
        }
    }
    else {
        alert("Parâmetro de pesquisa não informado.")
    }

}

function alterarPessoa() {
    let nomeConsultado = nomeInput.value;
    let pessoaIndice = pessoas.findIndex(pessoa => pessoa.nome.toLowerCase() === nomeConsultado.toLowerCase());
    if (pessoaIndice >= 0) {
        pessoas[pessoaIndice].numero = numeroInput.value;
        console.log(pessoaIndice);
        exibirPessoas()
    }
}
// Função para exibir as pessoas na página
function exibirPessoas() {
    // Limpando o conteúdo anterior
    infoElement.innerHTML = '';

    // Usando um loop for para percorrer todas as pessoas no array
    for (let i = 0; i < pessoas.length; i++) {
        // Criando elementos para exibir as informações sobre cada pessoa
        let pessoaElement = document.createElement('div');

        pessoaElement.innerHTML = "<p>Nome: " + pessoas[i].nome + "</p>";
        pessoaElement.innerHTML += "<p>Numero: " + pessoas[i].numero + "</p>";
        pessoaElement.innerHTML += "<hr>";


        // Adicionando o elemento criado ao elemento pai
        infoElement.appendChild(pessoaElement);
    }
}

// Exibindo as pessoas na página ao carregar
exibirPessoas();

botaoAdicionar.addEventListener("click", adicionarPessoa);
botaoConsultar.addEventListener("click", consultarPessoa);
botaoExcluir.addEventListener("click", excluirPessoa);
botaoAlterar.addEventListener("click", alterarPessoa);

//Mostrando o formulário
document.getElementById("Adicionar").addEventListener("click", function() {
    document.getElementById("contato-container").classList.remove("oculto");
    document.getElementById("buttonAdicionar").classList.remove("oculto")
    document.getElementById("buttonAlterar").classList.add("oculto");
    document.getElementById("buttonExcluir").classList.add("oculto");
    document.getElementById("buttonConsultar").classList.add("oculto");
})
document.getElementById("Excluir").addEventListener("click", function() {
    document.getElementById("contato-container").classList.remove("oculto");
    document.getElementById("buttonExcluir").classList.remove("oculto");
    document.getElementById("buttonExcluir").classList.add("btn-excluir");
    document.getElementById("buttonAlterar").classList.add("oculto");
    document.getElementById("buttonAdicionar").classList.add("oculto");
    document.getElementById("buttonConsultar").classList.add("oculto");
})
document.getElementById("Consultar").addEventListener("click", function() {
    document.getElementById("contato-container").classList.remove("oculto");
    document.getElementById("buttonConsultar").classList.remove("oculto");
    document.getElementById("buttonConsultar").classList.add("btn-consultar");
    document.getElementById("buttonAlterar").classList.add("oculto");
    document.getElementById("buttonExcluir").classList.add("oculto");
    document.getElementById("buttonAdicionar").classList.add("oculto");
})
document.getElementById("Alterar").addEventListener("click", function() {
    document.getElementById("contato-container").classList.remove("oculto");
    document.getElementById("buttonAlterar").classList.remove("oculto");
    document.getElementById("buttonAlterar").classList.add("btn-alterar");
    document.getElementById("buttonAdicionar").classList.add("oculto");
    document.getElementById("buttonExcluir").classList.add("oculto");
    document.getElementById("buttonConsultar").classList.add("oculto");
})
