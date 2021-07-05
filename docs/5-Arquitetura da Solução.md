# Arquitetura da Solução

<span style="color:red">Pré-requisitos: <a href="3-Projeto de Interface.md"> Projeto de Interface</a></span>

Definição de como o software é estruturado em termos dos componentes que fazem parte da solução e do ambiente de hospedagem da aplicação.

## Diagrama de componentes

Os componentes que fazem parte da solução são apresentados abaixo.

![image](https://user-images.githubusercontent.com/81273377/124501047-3c83c180-dd97-11eb-92e6-dcbf541199db.png)

A solução implementada conta com os seguintes módulos:
- **Navegador** - Interface básica do sistema  
  - **Páginas Web** - Conjunto de arquivos HTML, CSS, JavaScript e imagens que implementam as funcionalidades do sistema.
   - **Local Storage** - armazenamento mantido no Navegador, onde são implementados bancos de dados baseados em JSON. São eles: 
     - **Dados de Escolha da Categoria e Serviço** - seções de escolha, pelo usuário, de dados de sua preferência para vacinação 
     - **Preferências de Local, Horário e Data** - seções de escolha, pelo usuário, de data, local e horário para agendamento
     - **Dados Cadastrais** - dados como o nome, CPF, idade de nascimento, sexo, telefone e e-mail.
 - **Hospedagem** - local na Internet onde as páginas são mantidas e acessadas pelo navegador. 

**FLUXO DO USUÁRIO**

A imagem a seguir ilustra a o fluxo do usuário em nossa solução. Assim
que o usuário entra na plataforma, ele é apresentado à tela inicial
(Tela 1) onde ele é confrontado com as opões de 'novo agendamento' e 'consulta'.

Caso ele opte por seguir pelo primeiro caminho (Novo Agendamento), ele é
redirecionado para a tela seguinte, para escolha de serviços (Tela 2), onde deve selecionar tanto a categoria a que pertence quanto o tipo de serviço/vacina que será aplicada. Nessa tela, o usuário pode clicar em 'anterior' para voltar à tela inicial ou em 'próximo' dando sequência no agendamento. Ao selecionar 'próximo', ele é redirecionado para a Tela 3, onde terá agora, de selecionar o local, data e horário de vacinação disponíveis. Novamente, o usuário pode clicar em 'anterior' para voltar à tela de serviços ou em 'próximo' dando sequência no agendamento. Clicando em 'pórximo' será direcionado a Tela 4, que conterão os daos cadastrais, que devem ser preeenchidos. Ao selecionar a opção 'proximo', o usuário é direcionado à tela final (Tela 5) de confirmação de cadastro onde terão todas as suas informações cadastrais para que, após verificação, confirme.

![image](https://user-images.githubusercontent.com/81273377/124307185-d4866e80-db3d-11eb-94bd-f761bd87f285.png)


## Tecnologias Utilizadas

As tecnologias utilizadas para construção da aplicação e para proposta de resolução do problema apresentado, serão realizada através do Visual Studio Code, permitindo a configuração de linhas de código usando as linguagens CSS, HTML e JavaScript. 

Para consolidação do código, recorreu-se também a framworks hospeadados pelo site Bootstrap e bibliotecas como node js aplicando o json-server.


## Hospedagem

Explique como a hospedagem e o lançamento da plataforma foi feita.

> **Links Úteis**:
>
> - [Website com GitHub Pages](https://pages.github.com/)
> - [Programação colaborativa com Repl.it](https://repl.it/)
> - [Getting Started with Heroku](https://devcenter.heroku.com/start)
> - [Publicando Seu Site No Heroku](http://pythonclub.com.br/publicando-seu-hello-world-no-heroku.html)
