
/*  Página Serviço e Categoria */

document.getElementById("proximo1").addEventListener("click", function(){ 

    var servico = document.getElementById("servico");
    localStorage.setItem("servico", servico.value);

    var categoria = document.getElementById("categoria");
    localStorage.setItem("categoria", categoria.value));

}); 

/*  Página Local, Data e Horário */

document.getElementById("proximo2").addEventListener("click", function(){ 

    var local = localStorage.setItem("local", document.getElementById("local"));
    var data = localStorage.setItem("data", document.getElementById("data"));
    var horario = localStorage.setItem("horario", document.getElementById("horario"));
}); 

/*  Página Nome, Sexo, Nascimento, CPF, Telefone, E-mail */

document.getElementById("proximo3").addEventListener("click", function(){ 

    var nome = localStorage.setItem("local", document.getElementById("local"));
    var sexo = localStorage.setItem("sexo", document.getElementById("sexo"));
    var nascimento = localStorage.setItem("nascimento", document.getElementById("nascimento"));
    var cpf = localStorage.setItem("cpf", document.getElementById("cpf"));
    var telefone = localStorage.setItem("telefone", document.getElementById("telefone"));
    var email = localStorage.setItem("email", document.getElementById("email"));
}); 


/* Página Final */

document.getElementById("cadastroFinal").addEventListener("onload", function ()
{
    document.getElementById("cadastroFinal").innerHTML = {

        servico 
        categoria
        local
        data
        horario
        nome
        sexo
        nascimento
        cpf
        telefone
        email


    }
   }  ); 


 /* Página Consulta */


  



