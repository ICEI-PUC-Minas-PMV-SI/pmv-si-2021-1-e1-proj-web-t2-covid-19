# Especificações do Projeto

<span style="color:red">Pré-requisitos: <a href="1-Documentação de Contexto.md"> Documentação de Contexto</a></span>

Definição do problema e ideia de solução a partir da perspectiva do usuário. É composta pela definição do  diagrama de personas, histórias de usuários, requisitos funcionais e não funcionais além das restrições do projeto.

Apresente uma visão geral do que será abordado nesta parte do documento, enumerando as técnicas e/ou ferramentas utilizadas para realizar a especificações do projeto

(*Verificar time)
Analisamos as personas baseados em como elas se beneficiariam com as inovações trazidas pelo sistema criado. Através de uma análise em porque usar o produto, suas preocupações e medos que levariam a usar o sistema, como seus comportamentos levariam a eventualmente procurar uma solução para um problema comum em suas vida. A necessidade apresentada com as vantagens de usar o sistemas, seus proveitos e conveniências. Um sistema disruptivo na área de saúde.

## Personas

Persona nº1:
Flaviana, 43 anos, trabalha como Secretária de Saúde na cidade de Moeda/MG. Com uma renda mensal de R$ 3709,00, ela mantém a vida com suas duas filhas, Elizabeth, de 21 anos, e Catarina, de 19 anos. Ela procura por um meio mais simples e eficaz para conseguir gerenciar as vacinas e a ordem de vacinação dos postos de saúde de Moeda.

Persona nº 2:
Antônio, 60 anos, aposentado por invalidez e tem renda mensal de R$2000,00. Mora na cidade de Paracatu com a esposa de 63 anos, o filho mais velho de 35, a nora de 30 e o neto de 5 anos. Tem histórico de tabagismo desde seus 20 anos e usa medicamentos para asma. Não conhece muito de tecnologia, mas possui um celular em que navega na internet com auxílio da nora e do filho.

Persona nº 3:
Luiza. Agricultora aposentada. Moradora de Baixo Guandu,ES. Idade 83 anos.Viúva há quatro anos. Mãe de quatro filhos adultos, que são dois meninos e duas meninas. Todos maiores de idade. Pouca experiência com tecnologia. Possui comorbidades como diabetes, hipertensão, cardiopatia e arteriosclerose, o que a torna grupo de risco.

Persona nº 4: 
Roberta, 52 anos, professora. É casada e mãe de três filhos, de 14, 16 e 22 anos. Mora em Barbacena/MG. Roberta é vizinha dos próprios pais, de quem ajuda a cuidar. O casal de idosos tem 84 e 89 anos. Roberta está preocupada com a vacinação dos pais. O pai tem a saúde precária e não pode se deslocar até o local de vacinação. Além dos pais, Roberta gostaria de pré-cadastrar a si mesma e aos filhos menores. 

Persona nº 5:
Jonathan, 58 anos, desenvolvedor de software em uma grande empresa de tecnologia em São Paulo-SP, aonde morou toda sua vida. Salário médio de R$8.000,00/mês. Possui esposa e 2 filhos com idades 15 e 13 anos, esposa é dona de uma loja de roupas femininas. Jonathan possui bacharelado em Sistemas de informação e sua esposa em administração. Como amante de tecnologia, Jonathan, prefere ter a vida facilitada e ágil que os sistemas tradicionais não supreem. Jonathan atenado sabe dos perigos do covid-19 e do contagio para sua família além de afetar os negócios da sua esposa, para eles tempo é dinheiro.

## Histórias de Usuários

Com base na análise das personas forma identificadas as seguintes histórias de usuários:

|EU COMO... `PERSONA`| QUERO/PRECISO ... `FUNCIONALIDADE` |PARA ... `MOTIVO/VALOR`                 |
|--------------------|------------------------------------|----------------------------------------|
|Usuário do sistema  | Registrar minhas tarefas           | Não esquecer de fazê-las               |
|Administrador       | Alterar permissões                 | Permitir que possam administrar contas |
|Antônio             | Agendar vacinação e saber qual instituição e saúde ir | Me informar de forma precisa |

Apresente aqui as histórias de usuário que são relevantes para o projeto de sua solução. As Histórias de Usuário consistem em uma ferramenta poderosa para a compreensão e elicitação dos requisitos funcionais e não funcionais da sua aplicação. Se possível, agrupe as histórias de usuário por contexto, para facilitar consultas recorrentes à essa parte do documento.

> **Links Úteis**:
> - [Histórias de usuários com exemplos e template](https://www.atlassian.com/br/agile/project-management/user-stories)
> - [Como escrever boas histórias de usuário (User Stories)](https://medium.com/vertice/como-escrever-boas-users-stories-hist%C3%B3rias-de-usu%C3%A1rios-b29c75043fac)
> - [User Stories: requisitos que humanos entendem](https://www.luiztools.com.br/post/user-stories-descricao-de-requisitos-que-humanos-entendem/)
> - [Histórias de Usuários: mais exemplos](https://www.reqview.com/doc/user-stories-example.html)
> - [9 Common User Story Mistakes](https://airfocus.com/blog/user-story-mistakes/)

## Requisitos

As tabelas que se seguem apresentam os requisitos funcionais e não funcionais que detalham o escopo do projeto.

### Requisitos Funcionais

|ID    | Descrição do Requisito  | Prioridade |
|------|-----------------------------------------|----|
|RF-001| Permitir que o usuário cadastre tarefas | ALTA | 
|RF-002| Emitir um relatório de tarefas no mês   | MÉDIA |


### Requisitos não Funcionais

|ID     | Descrição do Requisito  |Prioridade |
|-------|-------------------------|----|
|RNF-001| O sistema deve ser responsivo para rodar em um dispositivos móvel | MÉDIA | 
|RNF-002| Deve processar requisições do usuário em no máximo 3s |  BAIXA | 

Com base nas Histórias de Usuário, enumere os requisitos da sua solução. Classifique esses requisitos em dois grupos:

- [Requisitos Funcionais
 (RF)](https://pt.wikipedia.org/wiki/Requisito_funcional):
 correspondem a uma funcionalidade que deve estar presente na
  plataforma (ex: cadastro de usuário).
- [Requisitos Não Funcionais
  (RNF)](https://pt.wikipedia.org/wiki/Requisito_n%C3%A3o_funcional):
  correspondem a uma característica técnica, seja de usabilidade,
  desempenho, confiabilidade, segurança ou outro (ex: suporte a
  dispositivos iOS e Android).
Lembre-se que cada requisito deve corresponder à uma e somente uma
característica alvo da sua solução. Além disso, certifique-se de que
todos os aspectos capturados nas Histórias de Usuário foram cobertos.

## Restrições

O projeto está restrito pelos itens apresentados na tabela a seguir.

|ID| Restrição                                             |
|--|-------------------------------------------------------|
|01| O projeto deverá ser entregue até o final do semestre |
|02| Não pode ser desenvolvido um módulo de backend        |


Enumere as restrições à sua solução. Lembre-se de que as restrições geralmente limitam a solução candidata.

> **Links Úteis**:
> - [O que são Requisitos Funcionais e Requisitos Não Funcionais?](https://codificar.com.br/requisitos-funcionais-nao-funcionais/)
> - [O que são requisitos funcionais e requisitos não funcionais?](https://analisederequisitos.com.br/requisitos-funcionais-e-requisitos-nao-funcionais-o-que-sao/)
