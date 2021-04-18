# Especificações do Projeto

<span style="color:red">Pré-requisitos: <a href="1-Documentação de Contexto.md"> Documentação de Contexto</a></span>

Definição do problema e ideia de solução a partir da perspectiva do usuário. É composta pela definição do  diagrama de personas, histórias de usuários, requisitos funcionais e não funcionais além das restrições do projeto.

Apresente uma visão geral do que será abordado nesta parte do documento, enumerando as técnicas e/ou ferramentas utilizadas para realizar a especificações do projeto

(*Verificar time)
Em se tratando da necessidade de realizar o gerencimanento da vacinação contra a COVID-19, analisamos o porquê em usar este sistema, dado o possível receio, por parte da população ao usar uma nova aplicação que fosse eficaz para gerenciar um problema enfrentado pelos órgãos de saúde do governo. Analisamos as personas, de diferentes públicos, baseados em como elas se beneficiariam com as funcionalidades trazidas pelo sistema criado. Ainda, foi considerada a necessidade apresentada pela população em se organizar para se vacinar, pensando nas vantagens de usar o sistema, seus proveitos e conveniências e que fosse de fácil acesso a todos. Para os requisitos foram avaliadas as posssibilidades de interação de usuários de diferentes públicos com a aplicação, dando margem para melhorias na acessibilidade do sistema. Entendemos que este se define por um sistema disruptivo na área de saúde, colaborando para a melhor gestão de um elemento necessário para toda sociedade. 

## Personas

Persona nº1:
Flaviana, 43 anos, trabalha como Secretária de Saúde na cidade de Moeda/MG. Com uma renda mensal de R$ 3709,00, ela mantém a vida com suas duas filhas, Elizabeth, de 21 anos, e Catarina, de 19 anos. Ela procura por um meio mais simples e eficaz para conseguir gerenciar as vacinas e a ordem de vacinação dos postos de saúde de Moeda.

Persona nº 2:
Antônio, 60 anos, aposentado por invalidez e tem renda mensal de R$2000,00. Mora na cidade de Paracatu com a esposa de 63 anos, o filho mais velho de 35, a nora de 30 e o neto de 5 anos. Tem histórico de tabagismo desde seus 20 anos e usa medicamentos para asma. Não conhece muito de tecnologia, mas possui um celular em que navega na internet com auxílio da nora e do filho.

Persona nº 3:
Luiza. Agricultora aposentada. Moradora de Baixo Guandu,ES. Idade 83 anos.Viúva há quatro anos. Mãe de quatro filhos adultos, que são dois meninos e duas meninas. Todos maiores de idade. Pouca experiência com tecnologia. Possui comorbidades como diabetes, hipertensão, cardiopatia e arteriosclerose, o que a torna grupo de risco.

Persona nº 4: 
Roberta, 52 anos, professora. É casada e mãe de três filhos, de 14, 16 e 22 anos. Mora em Barbacena/MG. Roberta é vizinha dos próprios pais, de quem ajuda a cuidar. O casal de idosos tem 84 e 89 anos. Roberta está preocupada com a vacinação dos pais. O pai tem a saúde precária e não pode se deslocar até o local de vacinação. Além dos pais, Roberta gostaria de pré-cadastrar a si mesma e aos filhos menores. 

<<<<<<< Updated upstream
Persona nº 5:
Jonathan, 58 anos, desenvolvedor de software em uma grande empresa de tecnologia em São Paulo-SP, aonde morou toda sua vida. Salário médio de R$8.000,00/mês. Possui esposa e 2 filhos com idades 15 e 13 anos, esposa é dona de uma loja de roupas femininas. Jonathan possui bacharelado em Sistemas de informação e sua esposa em administração. Como amante de tecnologia, Jonathan, prefere ter a vida facilitada e ágil que os sistemas tradicionais não supreem. Jonathan atenado sabe dos perigos do covid-19 e do contagio para sua família além de afetar os negócios da sua esposa, para eles tempo é dinheiro.
=======

> **Links Úteis**:
> - [Rock Content](https://rockcontent.com/blog/personas/)
> - [Hotmart](https://blog.hotmart.com/pt-br/como-criar-persona-negocio/)
> - [O que é persona?](https://resultadosdigitais.com.br/blog/persona-o-que-e/)
> - [Persona x Público-alvo](https://flammo.com.br/blog/persona-e-publico-alvo-qual-a-diferenca/)
> - [Mapa de Empatia](https://resultadosdigitais.com.br/blog/mapa-da-empatia/)
> - [Mapa de Stalkeholders](https://www.racecomunicacao.com.br/blog/como-fazer-o-mapeamento-de-stakeholders/)
>
Lembre-se que você deve ser enumerar e descrever precisamente e personalizada todos os clientes ideais que sua solução almeja.
>>>>>>> Stashed changes

## Histórias de Usuários

Com base na análise das personas forma identificadas as seguintes histórias de usuários:

|EU COMO... `PERSONA`| QUERO/PRECISO ... `FUNCIONALIDADE` |PARA ... `MOTIVO/VALOR`                 |
|--------------------|------------------------------------|----------------------------------------|
|Usuário do sistema  | Registrar minhas tarefas           | Não esquecer de fazê-las               |
|Administrador       | Alterar permissões                 | Permitir que possam administrar contas |
|Antônio (usuário do sistema) | Agendar vacinação e saber qual instituição de saúde deve ir | Informar quando deve ir se vacinar |

Luiza (usuária do sistema)|.Ser informada do dia e a hora para o comparecimento à unidade de saúde para receber o imunizante|. Dessa forma, evitar aglomerações.| 

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
|RF-003| Permitir que o usuário cadastre dados pessoais | ALTA |
|RF-004| Informar se usuário pertence ao grupo de vacinação foco | ALTA |
|RF-005| Permitir que usuário escolha uma insituição de sua cidade para vacinar-se | ALTA |
|RF-006| Permitir que usuário selecione data e horário de agendamento | ALTA |
|RF-007| Enviar alerta em email cadastrado pelo usuário informando do agendamento | MÉDIA |
|RF-008| Permitir que usuário acompanhe status de seu cadastro para vacinação | MÉDIA |


### Requisitos não Funcionais

|ID     | Descrição do Requisito  |Prioridade |
|-------|-------------------------|----|
|RNF-001| O sistema deve ser responsivo para rodar em um dispositivos móvel | MÉDIA | 
|RNF-002| Deve processar requisições do usuário em no máximo 3s |  BAIXA | 

Com base nas Histórias de Usuário, enumere os requisitos da sua solução. Classifique esses requisitos em dois grupos:"<br>"
REQUISITOS FUNCIONAIS:"<br>"
 |RF-001| Incluir, Excluir, alterar dados cadastrais."<br>"
 |RF-002| Cadastramento com o cartão do sus"<br>"
 |RF-003|link para obtenção do cartão do sus digital"<br>"
 |RF-004|informações da hora, data e  local  de vacinação"<br>"
 |RF-005|Prazo de tempo de vacinação para o dia"<br>"
 |RF-006|número de pessoas atendidas"<br>"
 |RF-007|Idade contemplada para a vacinação"<br>"
 |RF-008|data estimada para a segunda dose"<br>"
 |RF-009|qual a vacina que será injetada
-
 [Requisitos Funcionais
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
|03| Não pode ser desenvolvido em app ou desktop           |
|04| O projeto não deve abranger o território nacional     |


Enumere as restrições à sua solução. Lembre-se de que as restrições geralmente limitam a solução candidata.

> **Links Úteis**:
> - [O que são Requisitos Funcionais e Requisitos Não Funcionais?](https://codificar.com.br/requisitos-funcionais-nao-funcionais/)
> - [O que são requisitos funcionais e requisitos não funcionais?](https://analisederequisitos.com.br/requisitos-funcionais-e-requisitos-nao-funcionais-o-que-sao/)
