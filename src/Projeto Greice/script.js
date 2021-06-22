/*  Página Serviço e Categoria */

document.getElementById("proximo1").addEventListener("click", function(){ 

    var varServico = document.getElementById('servico').value;
    localStorage.setItem("dadoServico", varServico);

    var varCategoria = document.getElementById('categoria').value;
    localStorage.setItem("dadoCategoria", varCategoria);

}); 

/*  Página Local, Data e Horário */

document.getElementById("proximo2").addEventListener("click", function(){ 

    var varLocal = document.getElementById("local").value;
    localStorage.setItem("dadoLocal", varLocal);
    
    var varData = document.getElementById("data").value;
    localStorage.setItem("dadoData", varData);    

    var varHorario = document.getElementById("horario").value;
    localStorage.setItem("dadoHorario", varHorario);    
}); 

/*  Página Nome, Sexo, Nascimento, CPF, Telefone, E-mail */

document.getElementById("proximo3").addEventListener("click", function(){ 

  
    var varNome = document.getElementById("nome").value;
    localStorage.setItem("dadoNome", varNome);

    var varSexo = document.getElementById("sexo").value;
    localStorage.setItem("dadoSexo", varSexo);

    var varNascimento = document.getElementById("nascimento").value;
    localStorage.setItem("dadoNascimento", varNascimento);

    var varCPF = document.getElementById("cpf").value;
    localStorage.setItem("dadoCPF", varCPF);

    var varTelefone = document.getElementById("telefone").value;
    localStorage.setItem("dadoTelefone", varTelefone);

    var varEmail = document.getElementById("email").value;
    localStorage.setItem("dadoEmail", varEmail);
}); 


/* Print Cadastro - Conclusão e consulta de cadastro*/

document.getElementById("cadastroFinal").addEventListener("onload", function ()
{
    document.getElementById("cadastroFinal").innerHTML = {
        
        localStorage.getItem("dadoServico");
        localStorage.getItem("dadoCategoria");
        localStorage.getItem("dadoLocal");
        localStorage.getItem("dadoData");
        localStorage.getItem("dadoHorario");
        localStorage.getItem("dadoNome");
        localStorage.getItem("dadoSexo");
        localStorage.getItem("dadoNascimento");
        localStorage.getItem("dadoCPF");
        localStorage.getItem("dadoTelefone");
        localStorage.getItem("dadoEmail");

    }
   }  ); 




