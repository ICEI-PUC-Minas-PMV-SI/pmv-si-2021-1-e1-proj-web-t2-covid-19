/*  Página Serviço e Categoria */

document.getElementById("btn-prox-2").addEventListener("click", function(){ 

    var varCategoria = document.getElementById("categoria").value;

    localStorage.setItem("varCategoria", varCategoria);


    var varServico = document.getElementById("servico").value;

    localStorage.setItem("varServico", varServico);

  
    window.location.href = "3local.html";

}); 

/*  Página Local, Data e Horário */

document.getElementById("btn-prox-3").addEventListener("click", function(){ 

    var varLocal = String(document.getElementById("local").value);

    localStorage.setItem("varLocal", varLocal);


    var varData = String(document.getElementById("data").value);

    localStorage.setItem("varData", varData);


    var varHorario = String(document.getElementById("horario").value);

    localStorage.setItem("varHorario", varHorario);


    window.location.href = "4dados.html";

}); 


/*  Página Nome, Sexo, Nascimento, CPF, Telefone, E-mail */

document.getElementById("btn-prox-4").addEventListener("click", function(){ 

    var varNome = document.getElementById("nome").value;

    localStorage.setItem("varNome", varNome);


    var varSexo = document.getElementById("sexo").value;

    localStorage.setItem("varSexo", varSexo);


    var varNascimento = document.getElementById("nascimento").value;

    localStorage.setItem("varNascimento", varNascimento);


    var varCPF = document.getElementById("cpf").value;

    localStorage.setItem("varCPF", varCPF);


    var varTelefone = document.getElementById("telefone").value;

    localStorage.setItem("varTelefone", varTelefone);


    var varEmail = document.getElementById("email").value;

    localStorage.setItem("varEmail", varEmail);


    window.location.href = "final.html";

}); 


/* Print Cadastro - Conclusão e consulta de cadastro*/

document.getElementById("cadastroFinal").addEventListener("onload", function (){

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

    let resumoCadastro = 'Serviço: ${finalServico} \n Categoria: ${finalCategoria} \n Local: ${finalLocal} \n Data: ${finalData} \n  Horário: ${finalHorario} \n  Nome: ${finalNome} \n Sexo: ${finalSexo} \n Nascimento: ${finalNascimento} \n CPF: ${finalCPF} \n Telefone: ${finalTelefone} \n Email: ${finalEmail}';
    
    let finalDIV = document.getElementById("cadastroFinal").innerHTML;
    finalDIV.innerHTML = resumoCadastro;
}); 