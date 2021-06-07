
var cadastroVacina = [cadastro1, cadastro2, cadastro3]

cadastro1 = {
    id: ''
    categoria: ''
    servico: ''
    local: ''
    dados_pessoais: [
        {
            nome: ''
            sexo: ''
            nascimento: ''
            cpf: ''
            telefone: ''    
            email: ''
        }       
    ]
    
function getCadastro() {
    var consultaCadastro = new XMLHttpRequest();
       consultaCadastro.onreadystatechange = function () {
        if(consultaCadastro.readyState == 4 ) {
            resposta = consultaCadastro.response;
            resposta = JSON.parse(resposta)
        else    

          }
       } 
    consultaCadastro.open('GET',"http://localhost:3000/cadastro")

    consultaCadastro.send(),
      

function postCadastro() {
    var xhr = new XMLHttpRequest();
    var cadastro = {
        categoria: ''
        servico: ''
        local: ''
        nome: ''
        sexo: ''
        nascimento: ''
        cpf: ''
        telefone: ''    
        email: ''
        }       
    xhr.onreadystatechange = function(){
        if(xhr.readyState == 4){
            console.log(xhr);
        }
    }
xhr.open("POST", "http://localhost:3000/cadastro")
xhr.send(cadastro);



function exibirCadastro(){
    var textoHTML = '';
    for (let x = 0; x < cadastroVacina.length; x++) {
        textoHTML += 'Categoria: ${cadastroVacina[0].categoria} \n Serviço: ${cadastroVacina[0].servico} \n Local de Vacinação: ${cadastroVacina[0].local} \nNome: ${cadastroVacina[0].nome} \n Sexo: ${cadastroVacina[0].sexo} \n Nascimento: ${cadastroVacina[0].nascimento} \n CPF: ${cadastroVacina[0].cpf} \n Telefone: ${cadastroVacina[0].telefone} \n E-mail: ${cadastroVacina[0].email} \n' ;
    }
}

    var tela = document.getElementById(cadastroFinal);
    cadastroFinal.innerHTML = textoHTML; 
