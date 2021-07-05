# Plano de Testes de Software

<span style="color:red">Pré-requisitos: <a href="2-Especificação do Projeto.md"> Especificação do Projeto</a></span>, <a href="3-Projeto de Interface.md"> Projeto de Interface</a>

|FEATURE | TESTE ID | DESCRIÇÃO | PRÉ-CONDIÇÃO | PASSOS | RESULTADO ESPERADO | NOTAS |
|--------|----------|-----------|--------------|--------|--------------------|-------|
| Home   |  CT 1  | Validar botão 'Novo Agendamento' | Ter acesso à <a href="http://127.0.0.1:5500/src/Projeto%20Greice/1index.html"> GREICE </a> |  1. Abrir página home <br> 2. Clicar em 'Novo Agendamento' | Ao clicar no botão, o usuário deve ser direcionado para a página de Serviços |  |
| Home  | CT 2 | Validar botão 'Consulta' | Idem Caso 1 | 1. Abrir página home <br> 2. Clicar em 'Consultar' | Ao clicar no botão o usuário deve ser direcionado para a página de Consulta |   |
| Novo Agendamento | CT 1  | Validar combo box de Categoria | Idem Caso 1 | 1. Abrir página home <br> 2. Clicar em 'Novo Agendamento <br> 3. Selecionar o público em 'Categoria' | O botão combo box possua as opções disponíveis |  |
| Novo Agendamento | CT 2  | Validar combo box de Serviço | Idem Caso 1 | 1. Abrir página home <br> 2. Clicar em 'Novo Agendamento <br> 3. Selecionar o público em 'Serviço' | O botão combo box possua as opções disponíveis |  |
| Novo Agendamento | CT 3  | Validar botão 'Anterior' | Idem Caso 1 | 1. Abrir página home <br> 2. Clicar em 'Novo Agendamento <br> 3. Clicar no botão 'Anterior'| O usuário deve ser direcionado à página home |  |
| Novo Agendamento | CT 4  | Validar botão 'Próximo' | Idem Caso 1 | 1. Abrir página home <br> 2. Clicar em 'Novo Agendamento <br> 3. Clicar no botão 'Próximo'| O usuário deve ser direcionado à página 'Selecione Local, Data e Horário de Vacinação' |  |
| Selecione Local, Data e Horário de Vacinação | CT 1  | Validar combo box de Local | Idem Caso 1 | 1. Abrir página home <br> 2. Clicar em 'Novo Agendamento <br> 3. Clicar no botão 'Próximo'<br> 4. Selecionar Local em 'Local'| O botão combo box possua as opções disponíveis |  |
| Selecione Local, Data e Horário de Vacinação | CT 2  | Validar combo box de Data | Idem Caso 1 | 1. Abrir página home <br> 2. Clicar em 'Novo Agendamento <br> 3. Clicar no botão 'Próximo'<br> 4. Selecionar data em 'Datas'| O botão combo box possua as opções disponíveis |  |
| Selecione Local, Data e Horário de Vacinação | CT 3  | Validar combo box de Horário | Idem Caso 1 | 1. Abrir página home <br> 2. Clicar em 'Novo Agendamento <br> 3. Clicar no botão 'Próximo' <br> 4. Selecionar o horário em 'Horários'| O botão combo box possua as opções disponíveis |  |
| Selecione Local, Data e Horário de Vacinação | CT 4  | Validar botão 'Anterior' | Idem Caso 1 | 1. Abrir página home <br> 2. Clicar em 'Novo Agendamento <br> 3. Clicar no botão 'Anterior' <br> 4. Clicar em 'Anterior'| O usuário deve ser direcionado à página 'Novo Agendamento' |  |
| Selecione Local, Data e Horário de Vacinação | CT 5  | Validar botão 'Próximo' | Idem Caso 1 | 1. Abrir página home <br> 2. Clicar em 'Novo Agendamento <br> 3. Clicar no botão 'Próximo' <br> 4. Clicar em 'Próximo'| O usuário deve ser direcionado à página 'Dados Cadastrais' |  |
| Dados Cadastrais | CT 1  | Validar caracter no campo 'Nome' | Idem Caso 1 | 1. Abrir página home <br> 2. Clicar em 'Novo Agendamento <br> 3. Clicar no botão 'Próximo' <br> 4. Clicar em 'Próximo'<br> 5. Preencher campo 'Nome' com caractere especial <br> 6. Preencher campo 'Nome' com caracteres alfabético <br> 7. Preencher campo 'Nome' com caracteres numéricos <br> 8. Preencher campo 'Nome' com emojis | O campo deve permitir apenas caracteres alfabeticos do tipo texto |  |
| Dados Cadastrais | CT 2  | Validar caracter no campo 'CPF' | Idem Caso 1 | 1. Abrir página home <br> 2. Clicar em 'Novo Agendamento <br> 3. Clicar no botão 'Próximo' <br> 4. Clicar em 'Próximo'<br> 5. Preencher campo 'CPF' com caractere especial <br> 6. Preencher campo 'CPF' com caracteres alfabético <br> 7. Preencher campo 'CPF' com caracteres numéricos <br> 8. Preencher campo 'CPF' com emojis | O campo deve permitir apenas caracteres alfabeticos do tipo texto |  |
| Dados Cadastrais | CT 3  | Validar caracter no campo 'Telefone' | Idem Caso 1| 1. Abrir página home <br> 2. Clicar em 'Novo Agendamento <br> 3. Clicar no botão 'Próximo' <br> 4. Clicar em 'Próximo'<br> 5. Preencher campo 'Telefone' com caractere especial <br> 6. Preencher campo 'Telefone' com caracteres alfabético <br> 7. Preencher campo 'Telefone' com caracteres numéricos <br> 8. Preencher campo 'Telefone' com emojis | O campo deve permitir apenas caracteres alfabeticos do tipo texto |  |
| Dados Cadastrais | CT 4  | Validar caracter no campo 'E-mail' | Idem Caso 1| 1. Abrir página home <br> 2. Clicar em 'Novo Agendamento <br> 3. Clicar no botão 'Próximo' <br> 4. Clicar em 'Próximo'<br> 5. Preencher campo 'E-mail' com caractere especial <br> 6. Preencher campo 'E-mail' com caracteres alfabético <br> 7. Preencher campo 'E-mail' com caracteres numéricos <br> 8. Preencher campo 'E-mail' com emojis | O campo deve permitir apenas caracteres alfabeticos do tipo texto |  |
| Página Confirmação | CT 1  | Validar se dados surgem na página | Idem Caso 1| 1. Abrir página home <br> 2. Clicar em 'Novo Agendamento <br> 3. Clicar no botão 'Próximo' <br> 4. Clicar em 'Próximo'<br> 5. Preencher os campos de Serviço e Categoria <br> 6. Clicar no botão 'Próximo' <br> 7. Preencher os campos Local, Data e Horário <br> 8. Clicar no botão 'Próximo' <br> 9. Preencher os dados cadastrais <br> 10. Clicar no botão 'Próximo' <br> 11. Clicar em Confirmar.| Os dados devem surgir na tela de confirmação  |
| Página Consulta de Dados | CT 2 | Validar pesquisa por dados | Idem Caso 1 |  1. Abrir página home <br> 2. Clicar em 'Consulta' <br> 3. Digitar CPF cadastrado <br> 4. Clicar em consultar. | A busca deve pesquisar o CPF cadastrado e seus dados   |

 
## Ferramentas de Testes (Opcional)

Comente sobre as ferramentas de testes utilizadas.
 
> **Links Úteis**:
> - [IBM - Criação e Geração de Planos de Teste](https://www.ibm.com/developerworks/br/local/rational/criacao_geracao_planos_testes_software/index.html)
> - [Práticas e Técnicas de Testes Ágeis](http://assiste.serpro.gov.br/serproagil/Apresenta/slides.pdf)
> -  [Teste de Software: Conceitos e tipos de testes](https://blog.onedaytesting.com.br/teste-de-software/)
> - [Criação e Geração de Planos de Teste de Software](https://www.ibm.com/developerworks/br/local/rational/criacao_geracao_planos_testes_software/index.html)
> - [Ferramentas de Test para Java Script](https://geekflare.com/javascript-unit-testing/)
> - [UX Tools](https://uxdesign.cc/ux-user-research-and-user-testing-tools-2d339d379dc7)
