
var cadastroVacina = [cadastro1, cadastro2, cadastro3]

cadastro1 = {
    
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
    
function ExibirCadastro() {
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
      

function InserirCadastro() {
    var xhr = new XMLHttpRequest();
    var cadastro = {
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
    xhr.onreadystatechange = function(){
        if(xhr.readyState == 4){
            console.log(xhr);
        }
    }
xhr.open("POST", "http://localhost:3000/cadastro")
xhr.send(cadastro);










    'Categoria: ${cadastroVacina[0].categoria} \n';




