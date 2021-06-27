/*  Página Serviço e Categoria */

document.getElementById("proximo1").addEventListener("click", function(){ 

  var varServico = document.getElementById('servico').value;
    localStorage.setItem("varServico", varServico);

  var varCategoria = document.getElementById('categoria').value;
    localStorage.setItem("varCategoria", varCategoria);

}); 

/*  Página Local, Data e Horário */

document.getElementById("proximo2").addEventListener("click", function(){ 

   var varLocal = document.getElementById("local").value;
   localStorage.setItem("varLocal", varLocal);
    
   var varData = document.getElementById("data").value;
   localStorage.setItem("varData", varData);    

   var varHorario = document.getElementById("horario").value;
   localStorage.setItem("varHorario", varHorario);    
 }); 

/*  Página Nome, Sexo, Nascimento, CPF, Telefone, E-mail */

document.getElementById("proximo3").addEventListener("click", function(){ 

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

}); 


/* Print Cadastro - Conclusão e consulta de cadastro*/

document.getElementById("cadastroFinal").addEventListener("onload", function (){

  document.getElementById("cadastroFinal").innerHTML = {
        
    localStorage.getItem("varServico");
    localStorage.getItem("varCategoria");
    localStorage.getItem("varLocal");
    localStorage.getItem("varData");
    localStorage.getItem("varHorario");
    localStorage.getItem("varNome");
    localStorage.getItem("varSexo");
    localStorage.getItem("varNascimento");
    localStorage.getItem("varCPF");
    localStorage.getItem("varTelefone");
    localStorage.getItem("varEmail");

    }
}); 