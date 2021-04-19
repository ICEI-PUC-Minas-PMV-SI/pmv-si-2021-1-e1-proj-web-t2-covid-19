# Especificações do Projeto

<span style="color:red">Pré-requisitos: <a href="1-Documentação de Contexto.md"> Documentação de Contexto</a></span>

Considerando a necessidade de realizar o gerenciamento da vacinação contra a Covid-19, avaliamos as motivações para os usuários adotarem um sistema para gerenciar o processo de imunização. Nesse sentido, analisamos as personas, levando em conta os mais diferentes públicos, tendo em vista a identificação das formas como eles se beneficiariam com as funcionalidades oferecidas pelo sistema. Foi considerada, ainda, a necessidade apresentada pela população de se organizar e se informar sobre a vacinação, dadas as vantagens de se usar o sistema, seus recursos e conveniências, de fácil acesso a todos. 

Para a definição dos requisitos, foram criadas personas bem diversas, de modo a revelar possibilidades de interação de usuários de diferentes públicos com a aplicação, dando margem para melhorias na efetividade do sistema. Entendemos que este se define por um sistema transformador na área de saúde, colaborando para a melhor gestão de um processo essencial para toda sociedade. 

## Personas

Persona nº1:
Flaviana, 43 anos, trabalha como Secretária de Saúde na cidade de Moeda/MG. Com uma renda mensal de R$ 3709,00, ela mantém a vida com suas duas filhas, Elizabeth, de 21 anos, e Catarina, de 19 anos. Ela procura por um meio mais simples e eficaz para conseguir gerenciar as vacinas e a ordem de vacinação dos postos de saúde de Moeda.

Persona nº 2:
Antônio, 60 anos, é aposentado por invalidez e tem renda mensal de R$2000,00. Mora na cidade de Paracatu com a esposa de 63 anos, o filho mais velho de 35, a nora de 30 e o neto de 5 anos. Tem histórico de tabagismo desde seus 20 anos e usa medicamentos para asma. Não conhece muito de tecnologia, mas possui um celular no qual navega na internet com auxílio da nora e do filho.

Persona nº 3:
Luiza, 83 anos, é agricultora aposentada. Moradora de Baixo Guandu (ES). Viúva há quatro anos, é mãe de quatro filhos adultos, que são dois homens e duas mulheres. Tem pouca experiência com tecnologia. Possui comorbidades como diabetes, hipertensão, cardiopatia e arteriosclerose, o que a torna grupo de risco.

Persona nº 4: 
Roberta, 52 anos, professora. É casada e mãe de três filhos, de 14, 16 e 22 anos. Mora em Barbacena (MG). Roberta é vizinha dos próprios pais, de quem ajuda a cuidar. O casal de idosos tem 84 e 89 anos. Roberta está preocupada com a vacinação dos pais. O pai tem a saúde precária e não pode se deslocar até o local de vacinação. Além dos pais, Roberta gostaria de pré-cadastrar a si mesma e aos filhos menores. 

Persona nº 5:
Jonathan, 58 anos, é desenvolvedor de software em uma grande empresa de tecnologia em São Paulo (SP), onde morou toda sua vida. Salário médio de R$8.000,00/mês. Possui esposa e 2 filhos com idades 15 e 13 anos. Sua esposa é dona de uma loja de roupas femininas. Jonathan possui bacharelado em Sistemas de Informação e sua esposa em Administração. Como amante de tecnologia, Jonathan prefere ter a vida facilitada e espera uma solução ágil, o que nem sempre os sistemas tradicionais oferecem. Jonathan é bem informado e sabe do perigo que o contágio da Covid-19 oferece para sua família.Além disso, a pandemia afeta muito os negócios da sua esposa. Para eles, tempo é dinheiro.

## Histórias de Usuários

Com base na análise das personas forma identificadas as seguintes histórias de usuários:

|EU COMO... `PERSONA`| QUERO/PRECISO ... `FUNCIONALIDADE` |PARA ... `MOTIVO/VALOR`                 |
|--------------------|------------------------------------|----------------------------------------|
|Antônio (usuário do sistema) | Agendar vacinação e saber qual instituição de saúde deve ir | Informar quando deve ir se vacinar |
|Roberta (usuária do sistema) | Cadastrar seus pais, seus filhos e a si mesma | Permitir cadastro de dependentes |
|Roberta (usuário do sistema) | Solicitar vacinação residencial para o pai | Permitir cadastro de restriçao de mobilidade |
|Luiza (usuária do sistema)| Ser informada do dia e a hora para o comparecimento à unidade de saúde para receber o imunizante|. Dessa forma, evitar aglomerações.| 

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
|RF-001| Permitir que usuário cadastre dependentes (pais, filhos, etc.) | MÉDIA | 
|RF-002| Oferecer uma opção para solicitação de vacinação residencial para os públicos com restrição de mobilidade  | ALTA |
|RF-003| Permitir o cadastro de dados pessoais em uma conta de usuário | ALTA |
|RF-004| Informar se usuário pertence ao grupo de vacinação prioritário | ALTA |
|RF-005| Apresentar ao usuário as instituições de sua cidade que disponilizam vacinação para que possa escolher  | ALTA | 
|RF-006| Permitir que usuário selecione data e horário de agendamento | ALTA |
|RF-007| Enviar alerta em email cadastrado pelo usuário informando do agendamento | MÉDIA |
|RF-008| Permitir que usuário acompanhe status de seu cadastro para vacinação (1ª e 2ª doses) | MÉDIA |
|RF-008| Permitir que o usuário informe condições de saúde que o qualifiquem como público prioritário | MÉDIA |
|RF-009| Permitir ao administrador que defina os públicos convocados para vacinação | ALTA |
|RF-010| Permitir ao administrador que cadastre os pontos de vacinação | ALTA |
|RF-011| Permitir que o administrador envie mensagens para usuários cadastrados | MÉDIA |  

### Requisitos não Funcionais

|ID     | Descrição do Requisito  |Prioridade |
|-------|-------------------------|----|
|RNF-001| O sistema deve ser responsivo para rodar perfeitamente em um dispositivos móvel | ALTA | 
|RNF-002| Deve processar requisições do usuário em no máximo 3s |  BAIXA | 
|RNF-003| O sistema deve garantir a segurança dos dados dos usuários | ALTA |


Com base nas Histórias de Usuário, enumere os requisitos da sua solução. Classifique esses requisitos em dois grupos:"<br>"
REQUISITOS FUNCIONAIS:"<br>"
 |RF-001| Incluir, excluir e alterar dados cadastrais."<br>"
 |RF-002| Cadastramento com o cartão do SUS."<br>"
 |RF-003| Link para obtenção do cartão do SUS digital."<br>"
 |RF-004| Informações sobre hora, data e local de vacinação."<br>"
 |RF-005| Estimativa de tempo de vacinação para o dia."<br>"
 |RF-006| Informar número total de pessoas atendidas"<br>"
 |RF-007| Idade contemplada para a vacinação"<br>"
 |RF-008| Data estimada para a segunda dose"<br>"
 |RF-009| Informar qual a vacina que será aplicada
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
|03| Não pode ser desenvolvido para mobile ou desktop      |
|04| O projeto não deve abranger o território nacional     |


Enumere as restrições à sua solução. Lembre-se de que as restrições geralmente limitam a solução candidata.

> **Links Úteis**:
> - [O que são Requisitos Funcionais e Requisitos Não Funcionais?](https://codificar.com.br/requisitos-funcionais-nao-funcionais/)
> - [O que são requisitos funcionais e requisitos não funcionais?](https://analisederequisitos.com.br/requisitos-funcionais-e-requisitos-nao-funcionais-o-que-sao/)
