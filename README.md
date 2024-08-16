# Adopet

## Funcionalidade

Realizar um cadastro no site com sucesso.

## Cenário

O usuário deve ser capaz de se cadastrar no site Adopet seguindo os passos descritos abaixo.

## Passos

1. O usuário acessa a página de cadastro.
2. O usuário preenche o campo "Nome".
3. O usuário preenche o campo "E-mail" com um endereço de e-mail válido.
4. O usuário preenche o campo "Senha" com uma senha válida.
5. O usuário preenche o campo "Confirmação de Senha" com a mesma senha inserida no passo anterior.
6. O usuário clica no botão "Cadastrar".

## Resultados Esperados

O sistema processa as informações fornecidas.

## Regras de Negócio

- E-mail e senha são campos obrigatórios para o cadastro.

## Configuração

- Configurei a base URL no arquivo `cypress.config.js`.
- As páginas de cadastro, login e home estão em `object pages`.

## Testes

### Registro de Usuário

- **Sucesso**: Teste de registro de usuário com sucesso, onde todos os campos são preenchidos corretamente.
- **Falha**: Teste de registro de usuário com falha, onde os campos obrigatórios não são preenchidos ou são preenchidos incorretamente.

### Login

- **Sucesso**: Teste de login com sucesso, onde o usuário fornece credenciais válidas.
- **Falha**: Teste de login com falha, onde o usuário fornece credenciais inválidas.
