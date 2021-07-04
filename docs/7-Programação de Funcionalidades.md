# Programação de Funcionalidades

Para a implementação das funcionalidades listam-se a seguir a descrição de procedimentos arelados aos seus objetivos:

1. **PÁGINA INICIAL**: compreende na introdução ao usuário, do propósito da aplicação, contendo o campo para iniciar o 'novo agendamento' e 'consulta' para avaliar o status do seu agendemento realizado anteriormente.
2. **PÁGINA 2**: início do agendamento com a possibilidade do usuário inserir o tipo de serviço a ser escolhido, como também o público a que pertence para vacinação. O usuário seleciona ambas as informações que adequem à sua realidade e segue com o agendamento ao cliclar em 'próximo', ou volta à página inicial clicando em 'anteior'.
3. **PÁGINA 3**: seuqência do agendamento para que o usuário possa selecionar o local de vacinação disponível, bem como a data e horários adequados; há possibilidade de clicar em 'próximo' e 'anterior';
4. **PÁGINA 4**: inserção dos dados pessoais do usuário para cadastro do agendamento de vacinas;
5. **PÁGINA 5**: página de confirmação do agendamento.
 
 ### Requisitos Funcionais

|ID    | Descrição do Requisito  | Status |
|------|-------------------------|--------|
|RF-001| Oferecer uma opção para solicitação de vacinação residencial para os públicos com restrição de mobilidade   | **X** | 
|RF-002| Permitir ao administrador que defina os públicos convocados para vacinação | **X**  |
|RF-003| Gestão de dados cadastrais do usuário | **X**  |
|RF-004| Gestão de vacinas | **X**  |
|RF-005| Permitir que o administrador tenha acesso aos cadastros |**X**  |
|RF-006| Permitir ao administrador que cadastre os pontos de vacinação | **X**  |
|RF-007| Permitir que o cadastro de dados pessoais em uma conta de usuário | **✔** |
|RF-008| Informar se usuário pertence ao grupo de vacinação prioritário | **✔** |
|RF-009| Apresentar ao usuário as instituições de sua cidade que disponilizam vacinação para que possa escolher  | **✔** | 
|RF-010| Permitir que usuário selecione data e horário de agendamento disponível no sistema | **✔**|.
|RF-011| Criar barreamentos de cadastro com validação do usuário para agendamento | **X**  |
|RF-012| Permitir que usuário cadastre dependentes (pais, filhos) | **✔** | 
|RF-013| Enviar alerta em email cadastrado pelo usuário informando do agendamento | **X**  |
|RF-014| Permitir que usuário acompanhe status de seu cadastro para vacinação (1ª e 2ª doses) | **✔** |
|RF-015| Informar data estimada para a 2ª dose | **X**  |


### Requisitos não Funcionais

|ID     | Descrição do Requisito  |Status|
|-------|-------------------------|----|
|RNF-001| O sistema deve ser responsivo para rodar em navegadores | **✔** | 
|RNF-002| O sistema deve garantir a segurança dos dados dos usuários | **✔**|
|RNF-003| Sistema deve ter boa usabilidade  | **✔**|
|RNF-004| Módulo de informações cadastrais offline | **✔** |
|RNF-005| Deve processar requisições do usuário em no máximo 5s | **✔** | 
|RNF-006| Permitir que seja possível trocar a coloração do site para Azul | **X** |
|RNF-007| Permitir que seja possível trocar a coloração do site para Amarelo | **X** |
|RNF-008| Permitir que seja possível trocar a coloração do site para Rosa | **X** |
|RNF-009| Permitir que seja possível trocar a coloração do site para Vermelho | **X** |


> **Links Úteis**:
>
> - [Trabalhando com HTML5 Local Storage e JSON](https://www.devmedia.com.br/trabalhando-com-html5-local-storage-e-json/29045)
> - [JSON Tutorial](https://www.w3resource.com/JSON)
> - [JSON Data Set Sample](https://opensource.adobe.com/Spry/samples/data_region/JSONDataSetSample.html)
> - [JSON - Introduction (W3Schools)](https://www.w3schools.com/js/js_json_intro.asp)
> - [JSON Tutorial (TutorialsPoint)](https://www.tutorialspoint.com/json/index.htm)
