/* Print Cadastro - Conclusão e consulta de cadastro*/

    let finalServico = localStorage.getItem("varServico");
    let finalCategoria = localStorage.getItem("varCategoria");
    let finalLocal = localStorage.getItem("varLocal");
    let finalData = localStorage.getItem("varData");
    let finalHorario = localStorage.getItem("varHorario");
    let finalNome = localStorage.getItem("varNome");
    let finalSexo = localStorage.getItem("varSexo");
    let finalNascimento = localStorage.getItem("varNascimento");
    let finalCPF = localStorage.getItem("varCPF");
    let finalTelefone = localStorage.getItem("varTelefone");
    let finalEmail = localStorage.getItem("varEmail");

    let resumoCadastro = `<p><b>Serviço:</b> ${finalServico} <b>Categoria:</b> ${finalCategoria} </p>
    <p><b>Local:</b> ${finalLocal} <b>Data:</b> ${finalData} <b>Horário:</b> ${finalHorario} </p>
    <p><b>Nome:</b> ${finalNome} <b>Sexo:</b> ${finalSexo}</p> 
    <p><b>Nascimento:</b> ${finalNascimento}  <b>CPF:</b> ${finalCPF} </p>
    <p><b>Telefone:</b> ${finalTelefone} <b>Email:</b> ${finalEmail}</p>`;
    
    let finalDIV = document.getElementById("cadastroFinal") 
    finalDIV.innerHTML = resumoCadastro

    /*
    
    Quando clica em confirmar é preciso reunir todos os dados em uma variável json string. 
    Confirmar e 
    */

    document.getElementById("btn-confirmar").addEventListener("click",function(){
        
        // Baixa a json string e a transforma em object
        let atualDados = JSON.parse(localStorage.getItem("varDadosCadastrados"));

        //adiciona dados do usuario ao objeto       

        let novoCadastro = {
            "cpf": "",
            "servico": "",
            "categoria": "",
            "local": "",
            "data": "",
            "horario": "", 
            "nome": "",
            "sexo": "",
            "nascimento": "",
            "telefone": "",
            "email": "",
            }

            novoCadastro.cpf = localStorage.getItem("varCPF");
            novoCadastro.servico = localStorage.getItem("varCPF");
            novoCadastro.categoria = localStorage.getItem("varCategoria");
            novoCadastro.local = localStorage.getItem("varLocal");
            novoCadastro.data = localStorage.getItem("varData");
            novoCadastro.horario = localStorage.getItem("varHorario");
            novoCadastro.nome = localStorage.getItem("varNome");
            novoCadastro.sexo = localStorage.getItem("varSexo");
            novoCadastro.nascimento = localStorage.getItem("varNascimento");
            novoCadastro.telefone = localStorage.getItem("varTelefone");
            novoCadastro.email = localStorage.getItem("varEmail");

            atualDados += novoCadastro
           // atualDados[atualDados.length + 1]


        //salva em localStorage em formato json string        
        localStorage.setItem("varDadosCadastrados", JSON.stringify(atualDados));
    }   

        //o que fazer quando for o primeiro cadastro e não houver item setado no localStorage




    var dadosUsuarios = {"dadosCadastrados": [

        {
        "cpf": "",
        "servico": "",
        "categoria": "",
        "local": "",
        "data": "",
        "horario": "", 
        "nome": "",
        "sexo": "",
        "nascimento": "",
        "telefone": "",
        "email": "",
    
        }
        {
            "cpf": "",
            "servico": "",
            "categoria": "",
            "local": "",
            "data": "",
            "horario": "", 
            "nome": "",
            "sexo": "",
            "nascimento": "",
            "telefone": "",
            "email": "",
            }
 
    ]
    }