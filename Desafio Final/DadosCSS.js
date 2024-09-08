// Array contendo informações sobre conceitos de CSS, essas informações estão organizadas dentro de Objetos de JavaScript.
let cssConceitos = [
    {
        titulo: "CSS: o que é, como usar no HTML e um Guia para iniciar",
        descricao: "Olá, pessoa incrível! Hoje vamos abordar um tema que considero fundamental para qualquer pessoa que esteja na área de desenvolvimento web, ou até mesmo para aquelas que estão pensando em entrar nesse maravilhoso mundo. Vamos falar de CSS — Cascading Style Sheets. Prepare-se para mergulhar nessa aventura! - Vinicios Neves",
        linkW3Schools: "https://www.alura.com.br/artigos/css",
        imagem: "/Desafio Final/Screenshots/css/introducao css.png",
        tenteVoceMesmo: "https://www.fronteditor.dev",
        tags: "CSS HTML Introdução introducao Guia Desenvolvimento Web"
    },
    {
      titulo: "Seletores",
      descricao: "Seletores são usados para escolher os elementos HTML que você deseja estilizar. Existem diversos tipos de seletores, como por tag (o nome da tag), por classe (começa com .) e por ID (começa com #).",
      codigo: `
        p {
          color: blue;
        }
        .destaque {
          font-weight: bold;
        }
        #tituloPrincipal {
          text-align: center;
        }
      `,
      linkW3Schools: "https://www.w3schools.com/css/css_selectors.asp",
      imagem: "/Desafio Final/Screenshots/css/css seletores.png",
      tenteVoceMesmo: "https://www.fronteditor.dev",
      tags: "Seletores CSS Tag Classe ID"
    },
    {
      titulo: "Propriedades CSS",
      descricao: "As propriedades CSS definem o estilo dos elementos. Exemplos comuns incluem cor (color), fonte (font), tamanho, espaçamento e posicionamento.",
      codigo: `
        /* Estilizando o corpo da página */
        body {
          background-color: #f0f0f0;
          font-family: Arial, sans-serif;
          line-height: 1.6;
          margin: 0;
          padding: 20px;
        }

        /* Estilizando cabeçalhos */
        h1 {
          color: #333;
          text-align: center;
          font-size: 2.5em;
          margin-bottom: 20px;
        }

        /* Estilizando parágrafos */
        p {
          color: #666;
          font-size: 1.1em;
          margin-bottom: 15px;
        }

        /* Estilizando links */
        a {
          color: #007bff;
          text-decoration: none;
          transition: color 0.3s ease;
        }

        a:hover {
          color: #0056b3;
          text-decoration: underline;
        }

        /* Estilizando uma classe específica */
        .destaque {
          background-color: #ffffd0;
          padding: 10px;
          border-left: 4px solid #ffd700;
        }
      `,
      linkW3Schools: "https://www.w3schools.com/css/css_properties.asp",
      imagem: "/Desafio Final/Screenshots/css/css propriedades.png",
      tags: "Propriedades CSS Estilo imagem de fundo Cor Fonte Tamanho Espaçamento Posicionamento"
    },
    {
      titulo: "Box Model",
      descricao: "O box model define a área ocupada por cada elemento HTML. É composto por content, padding, border e margin.",
      codigo: `
        div {
          width: 200px;
          height: 100px;
          border: 1px solid black;
          padding: 10px;
          margin: 20px;
        }
      `,
      linkW3Schools: "https://www.w3schools.com/css/css_boxmodel.asp",
      imagem: "/Desafio Final/Screenshots/css/css box model.png",
      tags: "Box Model caixa flex CSS Content conteúdo conteudo Padding espaçamento Border borda Margin margem"
    },
    {
      titulo: "Flexbox",
      descricao: "Flexbox é um layout module que simplifica o alinhamento e a distribuição de itens dentro de um container.",
      codigo: `
        .container {
          display: flex;
          justify-content: center;
          align-items: center;
        }
      `,
      linkW3Schools: "https://www.w3schools.com/css/css3_flexbox.asp",
      imagem: "/Desafio Final/Screenshots/css/css flex.png",
      tags: "Flexbox CSS Layout Alinhamento Distribuição"
    },
    {
      titulo: "Grid",
      descricao: "Grid é um layout module que permite criar layouts mais complexos, organizando itens em linhas e colunas.",
      codigo: `
        .container {
          display: grid;
          grid-template-columns: 1fr 1fr;
        }
      `,
      linkW3Schools: "https://www.w3schools.com/css/css_grid.asp",
      imagem: "/Desafio Final/Screenshots/css/css grid.png",
      tags: "Grid grade CSS Layout Linhas Colunas"
    },
    {
      titulo: "Posicionamento",
      descricao: "As propriedades de posicionamento (position, top, bottom, left, right) permitem posicionar elementos de forma precisa na página.",
      codigo: `
        .elemento {
          position: absolute;
          top: 50px;
          left: 50px;
        }
      `,
      linkW3Schools: "https://www.w3schools.com/css/css_positioning.asp",
      imagem: "/Desafio Final/Screenshots/css/css posicionamento.png",
      tags: "Posicionamento CSS Position posição posiçao posicao Top Bottom Left Right"
    },
    {
      titulo: "Responsividade",
      descricao: "Media queries permitem criar layouts que se adaptam a diferentes tamanhos de tela.",
      codigo: `
        @media (max-width: 768px) {
          body {
            font-size: 16px;
          }
        }
      `,
      linkW3Schools: "https://www.w3schools.com/css/css_rwd.asp",
      imagem: "/Desafio Final/Screenshots/css/css responsividade.png",
      tags: "Responsividade responsivo adaptativo CSS Media Queries Layout Adaptativo Tamanho de Tela"
    }
  ];