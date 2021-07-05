 Especificações do Projeto

<span style="color:red">Pré-requisitos: <a href="1-Documentação de Contexto.md"> Documentação de Contexto</a></span>

Em se tratando da necessidade de realizar o gerenciamento da vacinação contra a COVID-19, analisamos o porquê em usar este sistema, dado o possível receio, por parte da população ao usar uma nova aplicação que fosse eficaz para gerenciar um problema enfrentado pelos órgãos de saúde do governo. Analisamos as personas, de diferentes públicos, baseados em como elas se beneficiariam com as funcionalidades trazidas pelo sistema criado. Ainda, foi considerada a necessidade apresentada pela população em se organizar para se vacinar, pensando nas vantagens de usar o sistema, seus proveitos e conveniências e que fosse de fácil acesso a todos. Para os requisitos foram avaliadas as posssibilidades de interação de usuários de diferentes públicos com a aplicação, dando margem para melhorias na acessibilidade do sistema. Entendemos que este se define por um sistema disruptivo na área de saúde, colaborando para a melhor gestão de um elemento necessário para toda sociedade. 

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
Jonathan, 58 anos, desenvolverdor de software em uma grande empresa de tecnologia em São Paulo-SP, aonde morou toda sua vida. Salário médio de R$8.000,00/mês. Possui esposa e 2 filhos com idades 15 e 13 anos. Sua esposa é dona de uma loja de roupas femininas. Jonathan possui bacharelado em Sistemas de Informação e sua esposa em administração. Como amante da tecnologia, Jonathanm prefere ter a vida facilitada e ágil que os sistemas tradicionais não supreem. Jonathan atenado sabe dos peridos do covid-19 e do contagio para sua família além de afetar os negícios de sua esposa, para eles tempo é dinheiro.

## Histórias de Usuários

|EU COMO... `PERSONA`| QUERO/PRECISO ... `FUNCIONALIDADE` |PARA ... `MOTIVO/VALOR`                 |
|--------------------|------------------------------------|----------------------------------------|
| Antônio (usuário do sistema) | Agendar vacinação | Usuário precisar saber com antecedência quando irá se vacinar |
| Antônio (usuário do sistema) | Saber qual instituição de saúde deve ir | Na hora de agendar deve-se saber o local disponível para se vacinar  |
| Antônio (usuário do sistema) | Notificação quando deve ir se vacinar  | Receber um lembrete do agendamento |
| Roberta (usuário do sistema) | Cadastrar seus pais, seus filhos e a si mesma | Permitir cadastro de dependentes |
| Roberta (usuário do sistema) | Solicitar vacinação residencial para o pai | Permitir cadastro de restriçao de mobilidade |
| Luiza (usuária do sistema) | Ser informada do dia e a hora para o comparecimento à unidade de saúde para receber o imunizante | Para evitar aglomerações.| 
| Flaviana (Administradora) | Agendar vacinações dos postos de saúde | Ter organização e um controle sobre a situação |
| Flaviana (Administradora) | Ter acesso aos cadastros dos postos de saúde | Para distribuição melhor da vacina |
| Flaviana (Administradora) | Saber sobre os resultados das vacinas | Para ter um feedback dos postos de sáude |
| Flaviana (Administradora) | Cadastrar dados da Unidade | Para controle de quantidade, disponibilidade e vacinas |
| Flaviana (Administradora) | Validação de Usuário | Criar uma etapa de conferência e validação de cadastro |
| Jonathan (usuária do sistema) | Agendar a vacinação usando o SUS | Facilitar o cadastro de usuário |
| Jonathan (usuária do sistema) | Verificar os índices de imunização em seu estado | Estar atualizado sobre o percentual de vacinação na sua região |

## Requisitos

As tabelas que se seguem apresentam os requisitos funcionais e não funcionais.

### Requisitos Funcionais

|ID    | Descrição do Requisito  | Prioridade |
|------|-----------------------------------------|----|
|RF-001| Oferecer uma opção para solicitação de vacinação residencial para os públicos com restrição de mobilidade   | ALTA |
|RF-002| Permitir ao administrador que defina os públicos convocados para vacinação | ALTA |
|RF-003| Gestão de dados cadastrais do usuário | ALTA |
|RF-004| Gestão de vacinas | ALTA |
|RF-005| Permitir que o administrador tenha acesso aos cadastros | ALTA |
|RF-006| Permitir ao administrador que cadastre os pontos de vacinação | ALTA |
|RF-007| Permitir que o cadastro de dados pessoais em uma conta de usuário | ALTA |
|RF-008| Informar se usuário pertence ao grupo de vacinação prioritário | ALTA |
|RF-009| Apresentar ao usuário as instituições de sua cidade que disponilizam vacinação para que possa escolher  | ALTA | 
|RF-010| Permitir que usuário selecione data e horário de agendamento disponível no sistema | ALTA |.
|RF-011| Criar barreamentos de cadastro com validação do usuário para agendamento | ALTA |
|RF-012| Permitir que usuário cadastre dependentes (pais, filhos) | MÉDIA | 
|RF-013| Enviar alerta em email cadastrado pelo usuário informando do agendamento | MÉDIA |
|RF-014| Permitir que usuário acompanhe status de seu cadastro para vacinação (1ª e 2ª doses) | MÉDIA |
|RF-015| Informar data estimada para a 2ª dose | BAIXA |


### Requisitos não Funcionais

|ID     | Descrição do Requisito  |Prioridade |
|-------|-------------------------|----|
|RNF-001| O sistema deve ser responsivo para rodar em navegadores | ALTA | 
|RNF-002| O sistema deve garantir a segurança dos dados dos usuários | ALTA |
|RNF-003| Sistema deve ter boa usabilidade  | ALTA |
|RNF-004| Módulo de informações cadastrais offline | MÉDIA |
|RNF-005| Deve processar requisições do usuário em no máximo 5s |  BAIXA | 
|RNF-006| Permitir que seja possível trocar a coloração do site para Azul | BAIXA |
|RNF-007| Permitir que seja possível trocar a coloração do site para Amarelo | BAIXA |
|RNF-008| Permitir que seja possível trocar a coloração do site para Rosa | BAIXA |
|RNF-009| Permitir que seja possível trocar a coloração do site para Vermelho | BAIXA |

## Restrições

O projeto está restrito pelos itens apresentados na tabela a seguir.

|ID| Restrição                                             |
|--|-------------------------------------------------------|
|01| O projeto deverá ser entregue até o final do semestre |
|02| Não pode ser desenvolvido um módulo de backend        |
|03| Não pode ser desenvolvido em app ou desktop           |
|04| O projeto não deve abranger o território nacional     |
|05| O servidor deve ser hospedado em cloud                |
