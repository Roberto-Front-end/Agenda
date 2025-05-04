
const botaoAdicionar = document.getElementById("buttonAdicionar");
const botaoConsultar = document.getElementById("buttonConsultar");
const botaoExcluir = document.getElementById("buttonExcluir");
const botaoAlterar = document.getElementById("buttonAlterar");

// Array de objetos para representar várias pessoas
let pessoas = [
    { nome: "João", numero: 75992758251},
    { nome: "Maria", numero: 71982754692},
    { nome: "Carlos", numero: 71982546135},
    { nome: "Ana", numero: 11987654321},
    { nome: "Pedro", numero: 21998765432},
    { nome: "Sofia", numero: 31987654321},
    { nome: "Lucas", numero: 41998765432},
    { nome: "Julia", numero: 51987654321}
];

// Obtendo elementos HTML para inputs
let nomeInput = document.getElementById('nomeInput');
let numeroInput = document.getElementById('numeroInput');
let infoElement = document.getElementById('info');

// Função para adicionar uma nova pessoa ao array
function adicionarPessoa() {
    // Obtendo valores dos inputs
    let novoNome = nomeInput.value;
    let novoNumero = parseInt(numeroInput.value);

    // Validando se todos os campos foram preenchidos
    if (novoNome && novoNumero) {
        // Adicionando uma nova pessoa ao array
        pessoas.push({ nome: novoNome, numero: novoNumero});

        // Atualizando a exibição na página
        exibirPessoas();

        // Limpando os inputs
        nomeInput.value = '';
        numeroInput.value = '';

    } else {
        alert('Por favor, preencha todos os campos.');
    }
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
    let pessoaIndice = pessoas.findIndex(pessoa => pessoa.nome === nomeConsultado);
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