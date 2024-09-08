    // Array contendo informações sobre conceitos de HTML, essas informações estão organizadas dentro de Objetos de JavaScript.
    let tagsHtml = [
        {
          titulo: "HTML: o que é, a importância para a Web, como aprender e um Guia para iniciantes",
          descricao:"Ao entrar em sites de notícias, redes sociais, sistemas de bancos, entre outros, temos vários elementos que são disponibilizados na tela e que possibilitam a interação do usuário. Mas você já pensou em como isso tudo foi construído? - Mônica Mazzochi Hillman",
          tenteVoceMesmo: "https://www.fronteditor.dev",
          linkW3Schools: "https://www.alura.com.br/artigos/html",
          imagem: "/Desafio Final/Screenshots/exemplo de site.png",
          tags: "HTML Web Introdução Guia"
        },
        {
            titulo: "Estrutura Básica do HTML",
            descricao: "Todo documento HTML segue uma estrutura básica que inclui o tipo do documento (<!DOCTYPE html>), o elemento raiz <html>, o <head> (Cabeça) e o <body> (Corpo, ou Desenvolvimento).",
            codigo: `
                <!DOCTYPE html>
                <html lang="pt-BR">
                    <head>
                    <meta charset="UTF-8">
                    <meta name="viewport" content="width=device-width, initial-scale=1.0">
                    <title>Título do Site</title>
                    </head>
                    <body>
                    <h1>Olá, mundo!</h1>
                    <p>Este é o conteúdo principal do site.</p>
                    </body>
                </html>`,
            tenteVoceMesmo: "https://www.fronteditor.dev",
            linkW3Schools: "https://www.w3schools.com/html/html_basic.asp",
            imagem: "/Desafio Final/Screenshots/Estrutura Básica.png",
            tags: "html Estrutura DOCTYPE html head body"
        },
        {
          titulo: "Tag Head",
          descricao: "A tag <head> contém informações sobre o documento, como o título da página e meta-informações importantes.",
          codigo: `
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Título do Site</title>
            </head>`,
          categoria: "Metadados",
          linkW3Schools: "https://www.w3schools.com/tags/tag_head.asp",
          imagem: "/Desafio Final/Screenshots/head.png",
          tenteVoceMesmo: "https://www.fronteditor.dev",
          tags: "html head meta title metadados"
        },
        {
          titulo: "Tag Body",
          descricao: "O <body> contém todo o conteúdo visível da página, como textos, imagens, links e muito mais.",
          codigo: `
            <body>
                <h1>Título do Site</h1>
                <p>Este é o conteúdo principal da página.</p>
            </body>`,
          categoria: "Estrutura",
          linkW3Schools: "https://www.w3schools.com/tags/tag_body.asp",
          imagem: "/Desafio Final/Screenshots/tag body.png",
          tenteVoceMesmo: "https://www.fronteditor.dev",
          tags: "html body conteúdo estrutura"
        },
        {
          titulo: "Tag Header",
          descricao: "O <header> é usado para definir o cabeçalho de uma página ou seção. Geralmente contém o logotipo e a navegação principal.",
          codigo: `
            <header>
                <h1>Bem-vindo ao Site!</h1>
                <nav>
                <ul>
                    <li><a href="#">Página Inicial</a></li>
                    <li><a href="#">Sobre</a></li>
                    <li><a href="#">Contato</a></li>
                </ul>
                </nav>
            </header>`,
          categoria: "Estrutura",
          linkW3Schools: "https://www.w3schools.com/tags/tag_header.asp",
          imagem: "/Desafio Final/Screenshots/tag header.png",
          tenteVoceMesmo: "https://www.fronteditor.dev",
          tags: "html header cabeçalho navegação"
        },
        {
          titulo: "Tag Main",
          descricao: "A tag <main> envolve o conteúdo principal da página, aquele que está diretamente relacionado ao propósito da página.",
          codigo: `
            <main>
                <article>
                <h2>Artigo Principal</h2>
                <p>Este é o conteúdo principal do artigo.</p>
                </article>
            </main>`,
          categoria: "Estrutura",
          linkW3Schools: "https://www.w3schools.com/tags/tag_main.asp",
          imagem: "/Desafio Final/Screenshots/tag main.png",
          tenteVoceMesmo: "https://www.fronteditor.dev",
          tags: "html main conteúdo principal"
        },
        {
          titulo: "Tag Section",
          descricao: "A tag <section> é usada para dividir o conteúdo em seções temáticas.",
          codigo: `
            <section>
                <h2>Seção de Conteúdo</h2>
                <p>Este é o conteúdo desta seção.</p>
            </section>`,
          categoria: "Estrutura",
          linkW3Schools: "https://www.w3schools.com/tags/tag_section.asp",
          imagem: "/Desafio Final/Screenshots/tag section.png",
          tenteVoceMesmo: "https://www.fronteditor.dev",
          tags: "html section seção divisão"
        },
        {
          titulo: "Input e Button",
          descricao: "Usamos a tag <input> para criar campos de entrada e a tag <button> para criar botões clicáveis.",
          codigo: `
            <form>
                <label for="nome">Nome:</label>
                <input type="text" id="nome" name="nome">
                <button type="submit">Enviar</button>
            </form>`,
          categoria: "Formulários",
          linkW3Schools: "https://www.w3schools.com/tags/tag_input.asp",
          imagem: "/Desafio Final/Screenshots/tag input button.png",
          tenteVoceMesmo: "https://www.fronteditor.dev",
          tags: "html input button botao botão formulário formulario interação interaçao interacao"
        },
        {
          titulo: "Classes e IDs",
          descricao: "Classes e IDs são usadas para estilizar e referenciar elementos no HTML. IDs devem ser únicos, enquanto classes podem ser usadas em múltiplos elementos. E, recomendação da Rafa❤️: Classes são mais usadas para referenciar elementos no CSS, enquanto IDs são mais usadas para referenciar elementos no JavaScript.",
          codigo: `
            <div class="caixa">Esta é uma caixa com classe.</div>
            <div id="unico">Este é um elemento único com ID.</div>`,
          categoria: "Estilização",
          linkW3Schools: "https://www.w3schools.com/html/html_classes.asp",
          imagem: "/Desafio Final/Screenshots/atributo class id.png",
          tenteVoceMesmo: "https://www.fronteditor.dev",
          tags: "html class classe id identificaçao estilização referência referencia"
        },
        {
          titulo: "Link (a href)",
          descricao: "Usamos a tag <a> para criar links que podem direcionar para outras páginas ou seções do site.",
          codigo: `
            <a href="https://www.example.com">Visite o site</a>`,
          categoria: "Navegação",
          linkW3Schools: "https://www.w3schools.com/tags/tag_a.asp",
          imagem: "/Desafio Final/Screenshots/tag a href.png",
          tenteVoceMesmo: "https://www.fronteditor.dev",
          tags: "html a href link navegação"
        },
        {
          titulo: "Tag Img",
          descricao: "A tag <img> é usada para inserir imagens em uma página. Ela requer o atributo src para especificar o caminho da imagem.",
          codigo: `
            <img src="caminho/da/imagem.jpg" alt="Descrição da imagem">`,
          categoria: "Mídia",
          linkW3Schools: "https://www.w3schools.com/tags/tag_img.asp",
          imagem: "/Desafio Final/Screenshots/tag img.png",
          tenteVoceMesmo: "https://www.fronteditor.dev",
          tags: "html img imagem mídia midia"
        },
        {
          titulo: "Tag Div",
          descricao: "A tag <div> é usada para agrupar e organizar elementos HTML, facilitando a estilização e a estruturação do layout.",
          codigo: `
            <div class="container">
                <h2>Título dentro da Div</h2>
                <p>Conteúdo dentro da div.</p>
            </div>`,
          categoria: "Estrutura",
          linkW3Schools: "https://www.w3schools.com/tags/tag_div.asp",
          imagem: "/Desafio Final/Screenshots/tag div.png",
          tenteVoceMesmo: "https://www.fronteditor.dev",
          tags: "html div container agrupamento"
        },
        {
          titulo: "Tag Footer",
          descricao: "O <footer> representa o rodapé de uma página ou de uma seção específica, normalmente contendo créditos ou links importantes.",
          codigo: `
            "<footer class = "exemplo">
                <p>© 2024 Feito por [Seu Nome]. Todos os direitos reservados.</p>
            </footer>"`,
          categoria: "Estrutura",
          linkW3Schools: "https://www.w3schools.com/tags/tag_footer.asp",
          imagem: "/Desafio Final/Screenshots/tag footer.png",
          tenteVoceMesmo: "https://www.fronteditor.dev",
          tags: "html footer rodapé rodape créditos creditos"
        }
      ];