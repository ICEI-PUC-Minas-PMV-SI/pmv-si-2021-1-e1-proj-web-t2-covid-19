
document.getElementById("btn-consulta").addEventListener("click", function(){ 

    let userInput = document.getElementById("consultaCPF").value;

    let atualDados = JSON.parse(localStorage.getItem("varDadosCadastrados"));

    let resultConsulta = atualDados[userInput];

    if (resultConsulta !== undefined) {
      
        // Print Consulta de Cadastro

        let finalNome = resultConsulta[0];
        let finalServico = resultConsulta[1];
        let finalCategoria = resultConsulta[2];
        let finalLocal = resultConsulta[3];
        let finalData = resultConsulta[4];
        let finalHorario = resultConsulta[5];
        let finalSexo = resultConsulta[6];
        let finalNascimento = resultConsulta[7];
        let finalTelefone = resultConsulta[8];
        let finalEmail = resultConsulta[9];

        let resumoCadastro = `<p><b>Serviço:</b> ${finalServico} <b>Categoria:</b> ${finalCategoria} </p>
        <p><b>Local:</b> ${finalLocal} <b>Data:</b> ${finalData} <b>Horário:</b> ${finalHorario} </p>
        <p><b>Nome:</b> ${finalNome} <b>Sexo:</b> ${finalSexo}</p> 
        <p><b>Nascimento:</b> ${finalNascimento}  <b>CPF:</b> ${userInput} </p>
        <p><b>Telefone:</b> ${finalTelefone} <b>Email:</b> ${finalEmail}</p>`;

        let finalDIV = document.getElementById("divConsulta");
        finalDIV.innerHTML = resumoCadastro
     }

     else {
        let msgErroCPF = `<p><b>CPF não encontrado.</b></p>`
        let finalDIV = document.getElementById("divConsulta");
        finalDIV.innerHTML = msgErroCPF

     }



})

/* 
Receber os dados de input 
fazer a busca dos dados 

retornar print dos dados 
ou
retornar erro 

BUSCA

for (let i in myObj.cars) {
  x += myObj.cars[i];
} 

  for (let i = 0; i < myObj.cars.length; i++) {
  x += myObj.cars[i];
} 


includes()

This method checks if an array contains a certain item. It is similar to .some(), but instead of looking for a specific condition to pass, it checks if the array contains a specific item.

let users = ['paddy', 'zaddy', 'faddy', 'baddy'];
users.includes('baddy'); // returns true

If the item is not found, it returns false
  */