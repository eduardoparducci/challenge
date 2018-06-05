## BACK-CHALLENGE

Bem vindo ao desafio do back end!

## Estrutura

Esse projeto tem uma pequena framework feita às pressas D: 
na pasta `./project`, nela você encontrará as seguintes pastas:

 * controllers - contém os códigos de manipulação do banco
 * models - contém os esquemáticos da modelagem de dados
 * sample - contém os dados para testes

Também terá um arquivo `main.js` que é o que será executado
para fazer os testes.

```
$ node main
```

> O mongo conecta em: `mongodb://127.0.0.1/`

## Objetivo

Nest desafio você deve optimizar o arquivo `list_users_by_reaction`
na controller que foi mal feito.

Esse arquivo recebe como parâmetros um texto e uma reaction, 
sendo que ele procurará por todos os posts que contém o texto
selecionado, (tanto no campo title, quanto no text), e pegará
todos os usuários que deram a reaction selecionada nos posts.

> O teste já marca o tempo de execução, basicamente diminua esse tempo

## O que será avalidado

 * habilidade de entender um código já feito
 * habilidades de aprendizagem de novas frameworks
 * habilidades com banco de dados (mongo)
 * código asíncrono
 * optimização de código
 * documentação
 * pesquisa

## Tecnologias

 * Nodejs
   * Mongoose
 * Mongodb

## Tutoriais


Nodejs:
 * [básico](https://www.w3schools.com/nodejs/)
 * [npm](https://www.w3schools.com/nodejs/nodejs_npm.asp)
 * [async/await](https://blog.risingstack.com/mastering-async-await-in-nodejs/)
 * [mongoose](http://mongoosejs.com/docs/)

MongoDB:
 * [conceito](https://docs.mongodb.com/manual/introduction/)
 * [iniciando](https://docs.mongodb.com/manual/installation/)
 * [operações](https://docs.mongodb.com/manual/tutorial/getting-started/)

Não se esqueça de documentar todos os tutoriais usados em
*aux/project.txt*