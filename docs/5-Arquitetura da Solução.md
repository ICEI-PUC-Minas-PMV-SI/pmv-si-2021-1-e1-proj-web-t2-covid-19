# Arquitetura da Solução

<span style="color:red">Pré-requisitos: <a href="3-Projeto de Interface.md"> Projeto de Interface</a></span>

Definição de como o software é estruturado em termos dos componentes que fazem parte da solução e do ambiente de hospedagem da aplicação.

## Diagrama de componentes

Os componentes que fazem parte da solução são apresentados na Figura XX.

![Diagrama de Componentes](img/componentes.png)
<center>Figura XX - Arquitetura da Solução</center>

A solução implementada conta com os seguintes módulos:
- **Navegador** - Interface básica do sistema  
  - **Páginas Web** - Conjunto de arquivos HTML, CSS, JavaScript e imagens que implementam as funcionalidades do sistema.
   - **Local Storage** - armazenamento mantido no Navegador, onde são implementados bancos de dados baseados em JSON. São eles: 
     - **Canais** - seções de notícias apresentadas 
     - **Comentários** - registro de opiniões dos usuários sobre as notícias
     - **Preferidas** - lista de notícias mantidas para leitura e acesso posterior
 - **News API** - plataforma que permite o acesso às notícias exibidas no site.
 - **Hospedagem** - local na Internet onde as páginas são mantidas e acessadas pelo navegador. 

> **Links Úteis**:
>
> - [Whimsical](https://whimsical.com/)

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
