// Array contendo informações sobre conceitos de JavaScript, essas informações estão organizadas dentro de Objetos de JavaScript.
let jsConceitos = [
    {
        titulo: "Guia de JavaScript: o que é e como aprender a linguagem mais popular do mundo?",
        descricao: "Neste artigo, você vai conhecer o que é JavaScript, para que serve e como utilizá-lo. Quando você está pesquisando sobre o mercado de programação é muito comum se deparar com o nome JavaScript. E não é à toa, pois essa linguagem está presente em toda a Web e você provavelmente lida com ela diariamente enquanto usa seu navegador (e até mesmo fora dele!). Vamos descobrir nesse artigo o que é JS e o que faz o JavaScript ser uma linguagem tão relevante e tão utilizada atualmente! - João Vitor Pereira, Rafaela Petelin Silvério",
        linkW3Schools: "https://www.alura.com.br/artigos/javascript",
        imagem: "/Screenshots/js/introducao JS.png",
        tags: "js JavaScript introdução introducao introduçao guia linguagem de programação web"
    },
    {
      // Conceito: Variáveis
      titulo: "Variáveis",
      descricao: "Variáveis são usadas para armazenar dados. Em JavaScript, usamos `let`, `const` ou `var` para declarar variáveis.",
      codigo: `
        let nome = "João";
        const pi = 3.14;
        var idade = 30;
      `,
      categoria: "Fundamentos",
      linkW3Schools: "https://www.w3schools.com/js/js_variables.asp",
      imagem: "/Screenshots/js/js variaveis.png",
      tags: "js variáveis let const var declaração"
    },
    {
      // Conceito: Tipos de Dados
      titulo: "Tipos de Dados",
      descricao: "JavaScript possui diversos tipos de dados, como strings, números, booleanos, objetos e arrays.",
      codigo: `
        let nome = "Alice"; // string
        let idade = 25; // number
        let estaChovendo = true; // boolean
        let frutas = ["maçã", "banana", "laranja"]; // array
      `,
      categoria: "Fundamentos",
      linkW3Schools: "https://www.w3schools.com/js/js_datatypes.asp",
      imagem: "/Screenshots/js/js tipos de dados.png",
      tags: "js tipos de dados string number boolean array object"
    },
    {
      // Conceito: Operadores
      titulo: "Operadores",
      descricao: "Operadores são usados para realizar cálculos e comparações.",
      codigo: `
        let x = 10;
        let y = 5;
        let resultado = x + y;
      `,
      categoria: "Fundamentos",
      linkW3Schools: "https://www.w3schools.com//js/js_operators.asp",
      imagem: "/Screenshots/js/js operadores.png",
      tags: "js operadores cálculos comparações aritmética"
    },
    {
      // Conceito: Funções
      titulo: "Funções",
      descricao: "Funções são blocos de código reutilizáveis que executam uma tarefa específica.",
      codigo: `
        function saudacao(nome) {
          console.log("Olá, " + nome + "!");
        }
        saudacao("Maria");
      `,
      categoria: "Fundamentos",
      linkW3Schools: "https://www.w3schools.com/js/js_functions.asp",
      imagem: "/Screenshots/js/js funcoes.png",
      tags: "js funções reutilização de código parâmetros retorno"
    },
    {
      // Conceito: Objetos
      titulo: "Objetos",
      descricao: "Objetos são usados para representar entidades do mundo real, com propriedades e métodos.",
      codigo: `
        const pessoa = {
          nome: "João",
          idade: 30,
          saudar: function() {
            console.log("Olá, meu nome é " + this.nome);
          }
        };
      `,
      categoria: "Fundamentos",
      linkW3Schools: "https://www.w3schools.com/js/js_objects.asp",
      imagem: "/Screenshots/js/js objetos.png",
      tags: "js objetos propriedades métodos entidades"
    },
    {
      // Conceito: Laço de Repetição For
      titulo: "Laço de Repetição For",
      descricao: "O laço `for` é usado para executar um bloco de código um número específico de vezes.",
      codigo: `
        for (let i = 0; i < 5; i++) {
          console.log("Contagem: " + i);
        }
      `,
      categoria: "Controle de Fluxo",
      linkW3Schools: "https://www.w3schools.com/js/js_loop_for.asp",
      imagem: "/Screenshots/js/js laco de repeticao.png",
      tags: "js laço de repetição for iteração loop"
    }
  ];