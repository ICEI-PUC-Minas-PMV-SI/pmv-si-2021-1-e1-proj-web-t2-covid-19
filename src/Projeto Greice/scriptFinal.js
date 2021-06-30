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

    let resumoCadastro = `<p><b>Serviço:</b> ${finalServico} </P> <b>Categoria:</b> ${finalCategoria} </p>
    <p><b>Local:</b> ${finalLocal} \n <b>Data:</b> ${finalData} <b>Horário:</b> ${finalHorario} </p>
    <p><b>Nome: ${finalNome} \n <b>Sexo:</b> ${finalSexo}</p> 
    <p><b>Nascimento:</b> ${finalNascimento} \n <b>CPF:<b> ${finalCPF} </p>
    <p><b>Telefone:<b> ${finalTelefone} \n <b>Email:<b> ${finalEmail}</p>`;
    
    let finalDIV = document.getElementById("cadastroFinal") 
    finalDIV.innerHTML = resumoCadastro